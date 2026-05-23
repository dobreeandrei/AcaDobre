'use strict';

/* ============================================================
   QUESTION MANAGER
   Processes, validates, shuffles, and filters questions.
   ============================================================ */
const QuestionManager = (() => {

  function _isValid(q) {
    if (!q || typeof q.text !== 'string') return false;
    switch (q.type) {
      case 'multiple-choice':
        return Array.isArray(q.options) && q.options.length >= 2
            && typeof q.correctIndex === 'number';
      case 'multiple-choice-multi':
        return Array.isArray(q.options) && q.options.length >= 2
            && Array.isArray(q.correctIndices) && q.correctIndices.length >= 1;
      case 'open-ended':
        return Array.isArray(q.acceptedAnswers) && q.acceptedAnswers.length >= 1;
      case 'matching':
        return Array.isArray(q.subQuestions) && q.subQuestions.length >= 1
            && Array.isArray(q.options) && q.options.length >= 2
            && q.subQuestions.every(s => typeof s.text === 'string' && typeof s.answer === 'string');
      case 'image-order':
        return Array.isArray(q.images) && q.images.length >= 2
            && Array.isArray(q.correctOrder) && q.correctOrder.length === q.images.length;
      case 'label-order':
        return Array.isArray(q.labels) && q.labels.length >= 2
            && Array.isArray(q.correctOrder) && q.correctOrder.length === q.labels.length;
      case 'header-fill':
        // images.length must equal fields.length + 1 (blank + one per field revealed)
        return Array.isArray(q.images) && Array.isArray(q.fields) && q.fields.length >= 1
            && q.images.length === q.fields.length + 1
            && q.fields.every(f => (typeof f.name === 'string' || Array.isArray(f.names))
                                && typeof f.bits === 'number');
      default:
        return false;
    }
  }

  function getTopics() {
    const source = window.ACADOBRE_QUESTIONS || [];
    return source
      .filter(t => t && t.id && t.topic && Array.isArray(t.questions))
      .map(t => ({
        id: t.id,
        topic: t.topic,
        questions: t.questions.filter(_isValid)
          .map(q => ({ ...q, _topicId: t.id, _topicName: t.topic }))
      }))
      .filter(t => t.questions.length > 0);
  }

  function buildSession(topicIds, maxCount, shuffle, headerFillOnly) {
    const topics = getTopics();
    let pool = [];
    topics.forEach(t => {
      if (!topicIds.includes(t.id)) return;
      if (headerFillOnly) {
        // Keep only the first header-fill question from this topic (if any)
        const hf = t.questions.filter(q => q.type === 'header-fill');
        if (hf.length > 0) pool.push(hf[0]);
        // Topics with no header-fill are skipped entirely when toggle is on
      } else {
        pool = pool.concat(t.questions);
      }
    });

    // Always place header-fill questions first, then shuffle/slice the rest
    const hfQuestions    = pool.filter(q => q.type === 'header-fill');
    const otherQuestions = pool.filter(q => q.type !== 'header-fill');
    const shuffledOthers = shuffle ? _shuffle(otherQuestions) : otherQuestions;

    // Apply maxCount: header-fill questions are never cut by the limit
    let others = shuffledOthers;
    if (maxCount > 0 && maxCount > hfQuestions.length) {
      others = shuffledOthers.slice(0, maxCount - hfQuestions.length);
    } else if (maxCount > 0 && maxCount <= hfQuestions.length) {
      others = []; // limit is already met by header-fill questions alone
    }

    return [...hfQuestions, ...others];
  }

  /** Fisher-Yates shuffle — returns a new array */
  function _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /**
   * Shuffle options for MC/MC-multi questions; remap correct answer indices.
   * For other types, returns the question unchanged.
   */
  function shuffleMCOptions(q) {
    if (q.type === 'multiple-choice') {
      const idxs    = q.options.map((_, i) => i);
      const shuffled = _shuffle(idxs);
      return {
        ...q,
        options:      shuffled.map(i => q.options[i]),
        correctIndex: shuffled.indexOf(q.correctIndex)
      };
    }
    if (q.type === 'multiple-choice-multi') {
      const idxs    = q.options.map((_, i) => i);
      const shuffled = _shuffle(idxs);
      return {
        ...q,
        options:        shuffled.map(i => q.options[i]),
        correctIndices: q.correctIndices.map(ci => shuffled.indexOf(ci))
      };
    }
    if (q.type === 'matching') {
      // Shuffle both the sub-question order and the dropdown options independently.
      // Each subQuestion carries its own .answer string, so shuffling them is safe.
      return {
        ...q,
        subQuestions: _shuffle([...q.subQuestions]),
        options:      _shuffle([...q.options])
      };
    }
    return q;
  }

  /** Case-insensitive, whitespace-trimmed open-ended check. */
  function checkOpenEnded(userAnswer, acceptedAnswers) {
    const clean = String(userAnswer).trim().toLowerCase();
    return acceptedAnswers.some(a => String(a).trim().toLowerCase() === clean);
  }

  return { getTopics, buildSession, shuffleMCOptions, checkOpenEnded, _shuffle };
})();


/* ============================================================
   QUIZ SESSION
   Free-navigation model: answers stored by index, graded on submit.
   ============================================================ */
const QuizSession = (() => {
  let _questions     = [];
  let _current       = 0;
  let _answers       = [];      // _answers[i] = { value, displayLabel } | null
  let _marked        = new Set();
  let _startTime     = 0;
  let _elapsed       = 0;
  let _timerInterval = null;
  let _onTick        = null;

  function start(questions, onTickFn) {
    _questions = questions;
    _current   = 0;
    _answers   = new Array(questions.length).fill(null);
    _marked    = new Set();
    _elapsed   = 0;
    _onTick    = onTickFn || null;
    _startTime = Date.now();
    clearInterval(_timerInterval);
    _timerInterval = setInterval(() => {
      _elapsed = Math.floor((Date.now() - _startTime) / 1000);
      if (_onTick) _onTick(_elapsed);
    }, 500);
  }

  function stop() {
    clearInterval(_timerInterval);
    _elapsed = Math.floor((Date.now() - _startTime) / 1000);
  }

  function getCurrentQuestion() { return _questions[_current] || null; }
  function getCurrentIndex()     { return _current; }
  function getTotalCount()       { return _questions.length; }

  function navigateTo(index) {
    if (index < 0 || index >= _questions.length) return false;
    _current = index;
    return true;
  }

  function saveCurrentAnswer(value, displayLabel) {
    _answers[_current] = { value, displayLabel };
  }

  function clearCurrentAnswer() {
    _answers[_current] = null;
  }

  function getAnswer(index) { return _answers[index] || null; }

  function getAnsweredCount() { return _answers.filter(Boolean).length; }

  /**
   * Grade a single question.
   * Returns { correct (bool), score (0..1), correctLabel, userDisplay }.
   */
  function _gradeOne(q, stored) {
    if (!stored) {
      // Unanswered — determine correct label for review display
      let correctLabel = '';
      if (q.type === 'multiple-choice')       correctLabel = q.options[q.correctIndex];
      else if (q.type === 'multiple-choice-multi') correctLabel = q.correctIndices.map(i => q.options[i]).join(', ');
      else if (q.type === 'open-ended')        correctLabel = q.acceptedAnswers[0];
      else if (q.type === 'matching')          correctLabel = q.subQuestions.map((s,i) => `${i+1}:${s.answer}`).join(', ');
      else if (q.type === 'image-order')       correctLabel = q.correctOrder.map(i => q.images[i].label || `#${i+1}`).join(' → ');
      else if (q.type === 'label-order')        correctLabel = q.correctOrder.map(i => q.labels[i]).join(' → ');
      else if (q.type === 'header-fill')        correctLabel = q.fields.map(f => {
        const n = Array.isArray(f.names) ? f.names[0] : f.name;
        return `${n} (${f.bits})`;
      }).join(', ');
      return { correct: false, score: 0, correctLabel, userDisplay: '—' };
    }

    switch (q.type) {
      case 'multiple-choice': {
        const ok = stored.value === q.correctIndex;
        return {
          correct:      ok,
          score:        ok ? 1 : 0,
          correctLabel: q.options[q.correctIndex],
          userDisplay:  stored.displayLabel
        };
      }
      case 'multiple-choice-multi': {
        // Both arrays sorted for comparison
        const userSet    = [...stored.value].sort((a,b) => a-b).join(',');
        const correctSet = [...q.correctIndices].sort((a,b) => a-b).join(',');
        const ok         = userSet === correctSet;
        return {
          correct:      ok,
          score:        ok ? 1 : 0,
          correctLabel: q.correctIndices.map(i => q.options[i]).join(', '),
          userDisplay:  stored.displayLabel
        };
      }
      case 'open-ended': {
        const ok = QuestionManager.checkOpenEnded(stored.value, q.acceptedAnswers);
        return {
          correct:      ok,
          score:        ok ? 1 : 0,
          correctLabel: q.acceptedAnswers[0],
          userDisplay:  stored.displayLabel
        };
      }
      case 'matching': {
        // stored.value = array of selected answers, one per sub-question
        const userAnswers = stored.value; // string[]
        let numCorrect = 0;
        const n = q.subQuestions.length;
        q.subQuestions.forEach((sub, i) => {
          const ua = (userAnswers[i] || '').trim().toLowerCase();
          if (ua === sub.answer.trim().toLowerCase()) numCorrect++;
        });
        const score  = n > 0 ? numCorrect / n : 0;
        const correctLabel = q.subQuestions.map(s => s.answer).join(', ');
        return {
          correct:  score === 1,
          score,
          correctLabel,
          userDisplay: stored.displayLabel,
          // Extra detail for review panel
          subResults: q.subQuestions.map((sub, i) => ({
            text:    sub.text,
            user:    userAnswers[i] || '—',
            correct: sub.answer,
            ok:      (userAnswers[i] || '').trim().toLowerCase() === sub.answer.trim().toLowerCase()
          }))
        };
      }
      case 'image-order': {
        // stored.value = array of image indices in user's current order
        const userOrder = stored.value;
        let numCorrect = 0;
        q.correctOrder.forEach((correctIdx, pos) => {
          if (userOrder[pos] === correctIdx) numCorrect++;
        });
        const n     = q.correctOrder.length;
        const score = n > 0 ? numCorrect / n : 0;
        return {
          correct:  score === 1,
          score,
          correctLabel: q.correctOrder.map(i => q.images[i].label || `#${i+1}`).join(' → '),
          userDisplay:  stored.displayLabel,
          subResults: userOrder.map((imgIdx, pos) => ({
            pos,
            imgIdx,
            label:  q.images[imgIdx].label || `#${imgIdx+1}`,
            ok:     imgIdx === q.correctOrder[pos],
            correctIdx: q.correctOrder[pos],
            correctLabel: q.images[q.correctOrder[pos]].label || `#${q.correctOrder[pos]+1}`
          }))
        };
      }
      case 'label-order': {
        const userOrder = stored.value;
        let numCorrect = 0;
        q.correctOrder.forEach((correctIdx, pos) => {
          if (userOrder[pos] === correctIdx) numCorrect++;
        });
        const n     = q.correctOrder.length;
        const score = n > 0 ? numCorrect / n : 0;
        return {
          correct:  score === 1,
          score,
          correctLabel: q.correctOrder.map(i => q.labels[i]).join(' → '),
          userDisplay:  stored.displayLabel,
          subResults: userOrder.map((lblIdx, pos) => ({
            pos,
            label:        q.labels[lblIdx],
            ok:           lblIdx === q.correctOrder[pos],
            correctLabel: q.labels[q.correctOrder[pos]]
          }))
        };
      }
      case 'header-fill': {
        // stored.value = number of fields correctly identified in order
        const completed = typeof stored.value === 'number' ? stored.value : 0;
        const n = q.fields.length;
        const score = n > 0 ? completed / n : 0;
        const correctLabel = q.fields.map(f => {
          const nm = Array.isArray(f.names) ? f.names[0] : f.name;
          return `${nm} (${f.bits})`;
        }).join(', ');
        return {
          correct:     score === 1,
          score,
          correctLabel,
          userDisplay: `${completed}/${n} campuri identificate`,
          subResults:  q.fields.map((f, i) => ({
            pos:    i,
            name:   Array.isArray(f.names) ? f.names[0] : f.name,
            bits:   f.bits,
            ok:     i < completed
          }))
        };
      }
      default:
        return { correct: false, score: 0, correctLabel: '', userDisplay: stored.displayLabel };
    }
  }

  /** Grade all answers and return full results. */
  function submitAll() {
    stop();
    const graded = _questions.map((q, i) => {
      const stored = _answers[i];
      const g = _gradeOne(q, stored);
      return {
        ...g,
        question:  q,
        userAnswer: stored ? stored.value : null,
        skipped:   !stored,
        topicId:   q._topicId,
        topicName: q._topicName,
        marked:    _marked.has(i)
      };
    });

    const total      = graded.length;
    const scoreSum   = graded.reduce((s, g) => s + g.score, 0);
    const pct        = total ? Math.round((scoreSum / total) * 100) : 0;

    // Per-topic breakdown (using scores)
    const topicMap = {};
    graded.forEach(g => {
      if (!topicMap[g.topicId]) topicMap[g.topicId] = { name: g.topicName, score: 0, total: 0 };
      topicMap[g.topicId].total++;
      topicMap[g.topicId].score += g.score;
    });

    return {
      total,
      correct:   scoreSum,   // may be fractional
      pct,
      elapsed:   _elapsed,
      topics:    Object.values(topicMap),
      graded
    };
  }

  function toggleMark(index) {
    if (_marked.has(index)) { _marked.delete(index); return false; }
    else                    { _marked.add(index);    return true;  }
  }

  function isMarked(index) { return _marked.has(index); }

  return {
    start, stop,
    getCurrentQuestion, getCurrentIndex, getTotalCount,
    navigateTo, saveCurrentAnswer, clearCurrentAnswer, getAnswer, getAnsweredCount,
    toggleMark, isMarked,
    submitAll
  };
})();


/* ============================================================
   UI CONTROLLER
   All DOM access lives here. No business logic.
   ============================================================ */
const UIController = (() => {

  const screens = {
    setup:   document.getElementById('screen-setup'),
    quiz:    document.getElementById('screen-quiz'),
    results: document.getElementById('screen-results'),
  };

  // ── Setup
  const topicList    = document.getElementById('topic-list');
  const topicError   = document.getElementById('topic-error');
  const qCountInput  = document.getElementById('q-count-input');
  const qMaxHint     = document.getElementById('q-max-hint');
  const shuffleToggle= document.getElementById('shuffle-toggle');

  // ── Quiz
  const qCurrentLabel  = document.getElementById('q-current-label');
  const qTopicLabel    = document.getElementById('q-topic-label');
  const timerDisplay   = document.getElementById('timer-display');
  const progressBar    = document.getElementById('progress-bar');
  // These refs point at the default per-question card slots, but get swapped to per-card clones during stacked render
  let questionText   = document.getElementById('question-text');
  let questionHint   = document.getElementById('question-hint');
  let mcOptions      = document.getElementById('mc-options');
  let mcMultiOptions = document.getElementById('mc-multi-options');
  let matchingWrap   = document.getElementById('matching-wrap');
  let imageOrderWrap = document.getElementById('image-order-wrap');
  let labelOrderWrap = document.getElementById('label-order-wrap');
  let headerFillWrap = document.getElementById('header-fill-wrap');
  let oeInputWrap    = document.getElementById('oe-input-wrap');
  let oeInput        = document.getElementById('oe-input');
  let questionImageWrap = document.getElementById('question-image-wrap');
  let questionImageEl   = document.getElementById('question-image');
  const qNavGrid       = document.getElementById('q-nav-grid');
  const prevBtn        = document.getElementById('prev-btn');
  const nextBtn        = document.getElementById('next-btn');
  const questionArea   = document.querySelector('#screen-quiz .question-area');
  // Cached default refs so stacked render can restore the originals when needed
  const _defaultAnswerRefs = {
    questionText: questionText,
    questionHint: questionHint,
    mcOptions: mcOptions,
    mcMultiOptions: mcMultiOptions,
    matchingWrap: matchingWrap,
    imageOrderWrap: imageOrderWrap,
    labelOrderWrap: labelOrderWrap,
    headerFillWrap: headerFillWrap,
    oeInputWrap: oeInputWrap,
    oeInput: oeInput,
    questionImageWrap: questionImageWrap,
    questionImageEl: questionImageEl
  };

  // ── Results
  const ringProgress   = document.getElementById('ring-progress');
  const scorePctBig    = document.getElementById('score-pct-big');
  const resultsTitle   = document.getElementById('results-title');
  const resultsSummary = document.getElementById('results-summary');
  const statCorrect    = document.getElementById('stat-correct');
  const statTotal      = document.getElementById('stat-total');
  const statTime       = document.getElementById('stat-time');
  const topicBreakdown = document.getElementById('topic-breakdown');
  const breakdownList  = document.getElementById('breakdown-list');
  const reviewPanel    = document.getElementById('review-panel');
  const reviewList     = document.getElementById('review-list');

  const confirmModal   = document.getElementById('confirm-modal');
  const modalBody      = document.getElementById('modal-body');

  let _availableMax    = 100000;
  let _navClickHandler = null;

  // Read refs dynamically since they get swapped during stacked render
  function _hideAllAnswerWraps() {
    [mcOptions, mcMultiOptions, matchingWrap, imageOrderWrap, labelOrderWrap, headerFillWrap, oeInputWrap]
      .forEach(el => el && el.classList.add('hidden'));
  }

  // ── Screens
  function showScreen(name) {
    Object.entries(screens).forEach(([k, el]) => el.classList.toggle('active', k === name));
    const c = screens[name].querySelector('.container');
    if (c) { c.style.animation = 'none'; c.offsetHeight; c.style.animation = ''; }
  }

  // ── Setup
  // Tracks selected topic IDs across re-renders (sort changes)
  let _selectedIds = new Set();
  // Cache of all topics, used for sort re-renders
  let _topicsCache = [];

  function renderTopics(topics) {
    _topicsCache = topics; // keep reference for re-renders
    topicList.innerHTML = '';
    topics.forEach(t => {
      const chip = document.createElement('div');
      chip.className = 'topic-chip';
      chip.dataset.id = t.id;
      chip.setAttribute('role', 'checkbox');
      chip.setAttribute('aria-checked', String(_selectedIds.has(t.id)));
      chip.setAttribute('tabindex', '0');
      if (_selectedIds.has(t.id)) chip.classList.add('selected');
      chip.innerHTML = `
        <span class="topic-chip-name">${_esc(t.topic)}</span>
        <span class="topic-chip-count">${t.questions.length} question${t.questions.length !== 1 ? 's' : ''}</span>
        <span class="topic-chip-check" aria-hidden="true">✓</span>
      `;
      const toggle = () => {
        const sel = chip.classList.toggle('selected');
        chip.setAttribute('aria-checked', String(sel));
        if (sel) _selectedIds.add(t.id); else _selectedIds.delete(t.id);
        _updateMax(topics);
        topicError.classList.add('hidden');
        _updateHFOnlyVisibility();
        _updateSelectAllLabel();
      };
      chip.addEventListener('click', toggle);
      chip.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
      topicList.appendChild(chip);
    });
    _updateSelectAllLabel();
  }

  // Reflects what the next click does: shows "Deselecteaza toate" iff every cached topic is selected
  function _updateSelectAllLabel() {
    const btn = document.getElementById('topic-select-all-btn');
    if (!btn) return;
    const allSelected = _topicsCache.length > 0 && _selectedIds.size === _topicsCache.length;
    btn.textContent = allSelected ? 'Deselecteaza toate' : 'Selecteaza toate';
  }

  function initSelectAllBtn() {
    const btn = document.getElementById('topic-select-all-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      if (_topicsCache.length === 0) return;
      const allSelected = _selectedIds.size === _topicsCache.length;
      if (allSelected) {
        _selectedIds.clear();
        topicList.querySelectorAll('.topic-chip.selected').forEach(c => {
          c.classList.remove('selected');
          c.setAttribute('aria-checked', 'false');
        });
      } else {
        _topicsCache.forEach(t => _selectedIds.add(t.id));
        topicList.querySelectorAll('.topic-chip').forEach(c => {
          c.classList.add('selected');
          c.setAttribute('aria-checked', 'true');
        });
      }
      _updateMax(_topicsCache);
      topicError.classList.add('hidden');
      _updateHFOnlyVisibility();
      _updateSelectAllLabel();
    });
    _updateSelectAllLabel();
  }

  // Show/hide header-fill-only toggle based on whether selected topics contain header-fill
  function _updateHFOnlyVisibility() {
    const hfOnlyRow = document.getElementById('hf-only-row');
    if (!hfOnlyRow) return;
    const hasHF = _topicsCache.some(t =>
      _selectedIds.has(t.id) && t.questions.some(q => q.type === 'header-fill')
    );
    hfOnlyRow.classList.toggle('hidden', !hasHF);
    if (!hasHF) {
      const toggle = document.getElementById('hf-only-toggle');
      if (toggle) toggle.checked = false;
    }
  }

  // Sort topics array by given key/direction
  function _sortTopics(topics, key, dir) {
    const sorted = [...topics];
    if (key === 'alpha') {
      sorted.sort((a, b) => a.topic.localeCompare(b.topic));
    } else if (key === 'count') {
      sorted.sort((a, b) => a.questions.length - b.questions.length);
    }
    // 'recent' = original order (no sort)
    if (dir === 'desc') sorted.reverse();
    return sorted;
  }

  // Initialise sort controls
  function initSortControls(allTopics) {
    let sortKey = 'alpha';
    let sortDir = 'asc';

    const sortBar  = document.getElementById('topic-sort-bar');
    const dirBtn   = document.getElementById('sort-dir-btn');
    if (!sortBar) return;

    sortBar.querySelectorAll('.sort-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sortKey = btn.dataset.sort;
        sortBar.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('sort-btn-active'));
        btn.classList.add('sort-btn-active');
        renderTopics(_sortTopics(allTopics, sortKey, sortDir));
      });
    });

    dirBtn.addEventListener('click', () => {
      sortDir = sortDir === 'asc' ? 'desc' : 'asc';
      dirBtn.textContent = sortDir === 'asc' ? '↑' : '↓';
      renderTopics(_sortTopics(allTopics, sortKey, sortDir));
    });

    renderTopics(_sortTopics(allTopics, sortKey, sortDir));
  }

  function _getSelectedTopicIds() {
    return [..._selectedIds];
  }

  function _updateMax(topics) {
    const ids = _getSelectedTopicIds();
    let max = 0;
    topics.forEach(t => { if (ids.includes(t.id)) max += t.questions.length; });
    _availableMax = max || 100000;
    qMaxHint.textContent = max ? `(max ${max})` : '';
    if (max > 0) {
      const cur = parseInt(qCountInput.value, 10) || 10;
      if (cur > max) qCountInput.value = max;
    }
  }

  function initStepper() {
    const decBtn = document.getElementById('q-dec');
    const incBtn = document.getElementById('q-inc');

    // Click = single step; hold = repeat, accelerating over time.
    // Delay starts at 300ms after first hold, reduces to ~40ms after 3s of holding.
    function _addHoldRepeat(btn, stepFn) {
      let holdStart    = null;
      let holdTimer    = null;
      let repeatHandle = null;
      let isHolding    = false;

      const _getDelay = () => {
        if (!holdStart) return 300;
        const ms = Date.now() - holdStart;
        // Exponential ramp: 300ms → 40ms over 3000ms
        return Math.max(40, Math.round(300 * Math.pow(40 / 300, Math.min(ms / 3000, 1))));
      };

      const _scheduleNext = () => {
        repeatHandle = setTimeout(() => {
          if (!isHolding) return;
          stepFn();
          _scheduleNext(); // re-schedule with updated (faster) delay
        }, _getDelay());
      };

      const start = (e) => {
        e.preventDefault();
        isHolding = true;
        stepFn();                     // immediate single step on press
        holdStart = Date.now();
        holdTimer = setTimeout(() => {
          if (isHolding) _scheduleNext(); // start accelerating repeat after 350ms
        }, 350);
      };

      const stop = () => {
        isHolding = false;
        clearTimeout(holdTimer);
        clearTimeout(repeatHandle);
        holdStart = null;
      };

      btn.addEventListener('pointerdown',  start);
      btn.addEventListener('pointerup',    stop);
      btn.addEventListener('pointerleave', stop);
      btn.addEventListener('pointercancel',stop);
    }

    _addHoldRepeat(decBtn, () => {
      qCountInput.value = Math.max(1, (parseInt(qCountInput.value, 10) || 1) - 1);
    });
    _addHoldRepeat(incBtn, () => {
      const max = _availableMax || 100000;
      qCountInput.value = Math.min(max, (parseInt(qCountInput.value, 10) || 1) + 1);
    });

    // "MAX" button — fills the input with the maximum available count
    const maxBtn = document.getElementById('q-max-btn');
    if (maxBtn) {
      maxBtn.addEventListener('click', () => {
        const max = _availableMax;
        if (max > 0 && max < 100000) qCountInput.value = max;
      });
    }

    qCountInput.addEventListener('blur', () => {
      let v = parseInt(qCountInput.value, 10);
      if (isNaN(v) || v < 1) v = 1;
      if (_availableMax > 0 && v > _availableMax) v = _availableMax;
      qCountInput.value = v;
    });
    qCountInput.addEventListener('keydown', e => {
      const allowed = ['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab','Enter'];
      if (!allowed.includes(e.key) && !/^\d$/.test(e.key)) e.preventDefault();
    });
  }

  function getSetupOptions() {
    let count = parseInt(qCountInput.value, 10);
    if (isNaN(count) || count < 1) count = 1;
    const hfToggle = document.getElementById('hf-only-toggle');
    const headerFillOnly = hfToggle ? hfToggle.checked : false;
    const spToggle = document.getElementById('single-page-mode-toggle');
    const singlePage = spToggle ? spToggle.checked : false;
    return { topicIds: _getSelectedTopicIds(), qCount: count, shuffle: shuffleToggle.checked, headerFillOnly, singlePage };
  }

  function showTopicError() { topicError.classList.remove('hidden'); }

  // ── Quiz top bar
  function updateTopBar(current, total, topicName) {
    qCurrentLabel.textContent = `Q${current + 1} / ${total}`;
    qTopicLabel.textContent   = topicName || '';
    progressBar.style.width   = (total ? Math.round(((current + 1) / total) * 100) : 0) + '%';
  }

  function updateTimer(elapsed) {
    const m = Math.floor(elapsed / 60);
    const s = elapsed % 60;
    timerDisplay.textContent = `${m}:${String(s).padStart(2, '0')}`;
  }

  // ── Question render (dispatches to type-specific builders)
  function renderQuestion(question, saved, onAnswer, onClear, onEnterNavigate) {
    questionText.innerHTML = _esc(question.text);
    prevBtn.disabled = false;
    nextBtn.disabled = false;

    if (question.hint) {
      questionHint.innerHTML = _esc(question.hint);
      questionHint.classList.remove('hidden');
    } else {
      questionHint.innerHTML = '';
      questionHint.classList.add('hidden');
    }

    // Optional question image (supported on MC, MC-multi, OE, matching)
    if (question.image) {
      questionImageEl.src = question.image;
      questionImageWrap.classList.remove('hidden');
    } else {
      questionImageEl.src = '';
      questionImageWrap.classList.add('hidden');
    }

    _hideAllAnswerWraps();

    switch (question.type) {
      case 'multiple-choice':
        mcOptions.classList.remove('hidden');
        _buildMCOptions(question, saved ? saved.value : null, onAnswer);
        break;
      case 'multiple-choice-multi':
        mcMultiOptions.classList.remove('hidden');
        _buildMCMultiOptions(question, saved ? saved.value : null, onAnswer);
        break;
      case 'matching':
        matchingWrap.classList.remove('hidden');
        _buildMatchingQuestion(question, saved ? saved.value : null, onAnswer, onClear);
        break;
      case 'image-order':
        imageOrderWrap.classList.remove('hidden');
        _buildImageOrderQuestion(question, saved ? saved.value : null, onAnswer);
        break;
      case 'label-order':
        labelOrderWrap.classList.remove('hidden');
        _buildLabelOrderQuestion(question, saved ? saved.value : null, onAnswer);
        break;
      case 'header-fill':
        headerFillWrap.classList.remove('hidden');
        _buildHeaderFillQuestion(question, saved ? saved.value : null, onAnswer);
        break;
      default: // open-ended
        oeInputWrap.classList.remove('hidden');
        oeInput.value     = saved ? saved.displayLabel : '';
        oeInput.disabled  = false;
        oeInput.className = 'oe-input';
        oeInput.oninput = () => {
          const v = oeInput.value;
          if (v.trim()) { onAnswer(v.trim(), v.trim()); }
          else          { onClear(); }
        };
        // Enter in OE field → navigate to next question / submit if last
        oeInput.onkeydown = (e) => {
          if (e.key === 'Enter' && onEnterNavigate) {
            e.preventDefault();
            onEnterNavigate();
          }
        };
        setTimeout(() => oeInput.focus(), 30);
        break;
    }
  }

  // ── MC single-answer
  function _buildMCOptions(question, savedValue, onAnswer) {
    mcOptions.innerHTML = '';
    const LETTERS = 'ABCDEFGHIJ';
    question.options.forEach((opt, i) => {
      const row = document.createElement('div');
      row.className = 'mc-option' + (savedValue === i ? ' selected' : '');
      row.dataset.index = i;
      row.setAttribute('role', 'radio');
      row.setAttribute('tabindex', '0');
      row.innerHTML = `
        <span class="mc-opt-letter">${LETTERS[i] || i + 1}</span>
        <span class="mc-opt-text">${_esc(opt)}</span>
      `;
      const select = () => {
        mcOptions.querySelectorAll('.mc-option').forEach(r => r.classList.remove('selected'));
        row.classList.add('selected');
        onAnswer(i, opt);
      };
      row.addEventListener('click', select);
      row.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(); }
      });
      mcOptions.appendChild(row);
    });
  }

  // ── MC multi-answer (checkboxes)
  function _buildMCMultiOptions(question, savedValue, onAnswer) {
    // Clear everything except the badge (first child)
    const badge = mcMultiOptions.querySelector('.mc-multi-badge');
    mcMultiOptions.innerHTML = '';
    if (badge) mcMultiOptions.appendChild(badge);

    // savedValue is an array of selected indices (or null)
    const selected = new Set(Array.isArray(savedValue) ? savedValue : []);
    const LETTERS  = 'ABCDEFGHIJ';

    question.options.forEach((opt, i) => {
      const row = document.createElement('div');
      row.className = 'mc-option mc-option-multi' + (selected.has(i) ? ' selected' : '');
      row.dataset.index = i;
      row.setAttribute('role', 'checkbox');
      row.setAttribute('aria-checked', String(selected.has(i)));
      row.setAttribute('tabindex', '0');
      row.innerHTML = `
        <span class="mc-opt-letter mc-opt-check">${selected.has(i) ? '✓' : LETTERS[i] || i + 1}</span>
        <span class="mc-opt-text">${_esc(opt)}</span>
      `;
      const toggle = () => {
        if (selected.has(i)) {
          selected.delete(i);
          row.classList.remove('selected');
          row.setAttribute('aria-checked', 'false');
          row.querySelector('.mc-opt-letter').textContent = LETTERS[i] || i + 1;
        } else {
          selected.add(i);
          row.classList.add('selected');
          row.setAttribute('aria-checked', 'true');
          row.querySelector('.mc-opt-letter').textContent = '✓';
        }
        if (selected.size > 0) {
          const selectedIndices = [...selected].sort((a,b) => a-b);
          const label = selectedIndices.map(idx => question.options[idx]).join(', ');
          onAnswer(selectedIndices, label);
        } else {
          onAnswer([], '');
          // treated as clear by App — but empty array still "saves", so we don't call onClear
          // to keep it simple: empty selection = unanswered
          QuizSession.clearCurrentAnswer();
        }
      };
      row.addEventListener('click', toggle);
      row.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      });
      mcMultiOptions.appendChild(row);
    });
  }

  // ── Matching sub-questions
  function _buildMatchingQuestion(question, savedValue, onAnswer, onClear) {
    matchingWrap.innerHTML = '';

    // savedValue is an array of selected answers, one per sub-question
    const saved = Array.isArray(savedValue) ? savedValue : new Array(question.subQuestions.length).fill('');
    let current = [...saved];

    question.subQuestions.forEach((sub, i) => {
      const row = document.createElement('div');
      row.className = 'matching-row';

      const label = document.createElement('span');
      label.className = 'matching-label';
      label.innerHTML = _esc(sub.text);

      const select = document.createElement('select');
      select.className = 'matching-select';
      select.setAttribute('aria-label', sub.text);

      const blank = document.createElement('option');
      blank.value = '';
      blank.textContent = 'Alege...';
      select.appendChild(blank);

      question.options.forEach(opt => {
        const option = document.createElement('option');
        option.value   = opt;
        option.textContent = opt;
        if (current[i] === opt) option.selected = true;
        select.appendChild(option);
      });

      select.addEventListener('change', () => {
        current[i] = select.value;
        const hasAny = current.some(v => v !== '');
        if (hasAny) {
          const label = current.map((v,j) => `${j+1}:${v||'?'}`).join(' | ');
          onAnswer([...current], label);
        } else {
          onClear();
        }
      });

      row.appendChild(label);
      row.appendChild(select);
      matchingWrap.appendChild(row);
    });
  }


  /**
   * _addTouchDrag — makes a drag strip work on touch screens.
   *
   * How it works:
   *   touchstart  → record which item was touched (dragSrcPos)
   *   touchmove   → move a semi-transparent clone under the finger;
   *                 highlight the item currently under the finger
   *   touchend    → find item under finger, swap if different, clean up
   *
   * @param {HTMLElement} strip      The container holding draggable items
   * @param {string}      itemClass  CSS class of each draggable item ('image-order-item' etc.)
   * @param {Function}    getPos     item => its current pos index (from item.dataset.pos)
   * @param {Function}    onSwap     (srcPos, dstPos) => perform the swap and re-render
   */
  function _addTouchDrag(strip, itemClass, onSwap) {
    let dragSrcPos = null;
    let ghost      = null;
    let lastOver   = null;

    const _cleanup = () => {
      if (ghost) { ghost.remove(); ghost = null; }
      strip.querySelectorAll('.' + itemClass).forEach(el => {
        el.classList.remove('drag-over', 'dragging');
      });
      dragSrcPos = null;
      lastOver   = null;
    };

    strip.addEventListener('touchstart', e => {
      const item = e.target.closest('.' + itemClass);
      if (!item) return;
      dragSrcPos = parseInt(item.dataset.pos, 10);

      // Create ghost clone that follows the finger
      ghost = item.cloneNode(true);
      ghost.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.75;
        transform: scale(1.05);
        transition: none;
        border-radius: 10px;
        box-shadow: 0 8px 24px rgba(0,0,0,.5);
      `;
      const rect = item.getBoundingClientRect();
      ghost.style.width  = rect.width  + 'px';
      ghost.style.height = rect.height + 'px';
      ghost.style.left   = rect.left   + 'px';
      ghost.style.top    = rect.top    + 'px';
      document.body.appendChild(ghost);
      item.classList.add('dragging');

      e.preventDefault(); // prevent scroll while dragging
    }, { passive: false });

    strip.addEventListener('touchmove', e => {
      if (dragSrcPos === null || !ghost) return;
      e.preventDefault();

      const touch = e.touches[0];
      ghost.style.left = (touch.clientX - ghost.offsetWidth  / 2) + 'px';
      ghost.style.top  = (touch.clientY - ghost.offsetHeight / 2) + 'px';

      // Find which item is under the finger (hide ghost temporarily)
      ghost.style.display = 'none';
      const el = document.elementFromPoint(touch.clientX, touch.clientY);
      ghost.style.display = '';

      const overItem = el ? el.closest('.' + itemClass) : null;

      // Update drag-over highlight
      if (lastOver && lastOver !== overItem) lastOver.classList.remove('drag-over');
      if (overItem) {
        const overPos = parseInt(overItem.dataset.pos, 10);
        if (overPos !== dragSrcPos) {
          overItem.classList.add('drag-over');
          lastOver = overItem;
        }
      }
    }, { passive: false });

    const _onEnd = (e) => {
      if (dragSrcPos === null) return;

      const touch = (e.changedTouches || [])[0];
      let dstPos = null;

      if (touch) {
        ghost.style.display = 'none';
        const el = document.elementFromPoint(touch.clientX, touch.clientY);
        ghost.style.display = '';
        const overItem = el ? el.closest('.' + itemClass) : null;
        if (overItem) dstPos = parseInt(overItem.dataset.pos, 10);
      }

      const src = dragSrcPos;
      _cleanup();

      if (dstPos !== null && dstPos !== src) {
        onSwap(src, dstPos);
      }
    };

    strip.addEventListener('touchend',    _onEnd);
    strip.addEventListener('touchcancel', _cleanup);
  }

  // ── Image drag-to-order
  function _buildImageOrderQuestion(question, savedValue, onAnswer) {
    imageOrderWrap.innerHTML = '';
    // Reset keyboard state on this element
    imageOrderWrap._selectedPos = null;
    imageOrderWrap._triggerMove = null;

    // Current order: either restored from save, or shuffled initially
    let order = Array.isArray(savedValue)
      ? [...savedValue]
      : QuestionManager._shuffle(question.images.map((_, i) => i));

    function _render() {
      imageOrderWrap.innerHTML = '';

      const hint = document.createElement('p');
      hint.className = 'image-order-hint';
      hint.textContent = 'Glisati imaginile pentru a le ordona de la stanga la dreapta. Daca sunt deja in ordinea corecta, doar interactioneaza pentru a fi marcat complet.';
      imageOrderWrap.appendChild(hint);

      const strip = document.createElement('div');
      strip.className = 'image-order-strip';

      let dragSrcIdx = null;

      order.forEach((imgIdx, pos) => {
        const img = question.images[imgIdx];
        const item = document.createElement('div');
        item.className = 'image-order-item';
        item.draggable = true;
        item.dataset.pos = pos;

        // Re-apply kbd-selected class if this pos is the selected one
        if (imageOrderWrap._selectedPos === pos) item.classList.add('kbd-selected');

        const posLabel = document.createElement('span');
        posLabel.className = 'image-order-pos';
        posLabel.textContent = pos + 1;

        const imgEl = document.createElement('img');
        imgEl.src = img.src;
        imgEl.alt = img.label || `Image ${pos + 1}`;
        imgEl.className = 'image-order-img';
        imgEl.draggable = false;

        const capEl = document.createElement('span');
        capEl.className = 'image-order-cap';
        capEl.textContent = img.label || '';

        item.appendChild(posLabel);
        item.appendChild(imgEl);
        if (img.label) item.appendChild(capEl);

        // Click-to-select for keyboard number navigation
        item.addEventListener('click', () => {
          imageOrderWrap._selectedPos = (imageOrderWrap._selectedPos === pos) ? null : pos;
          _render();
        });

        // ── HTML5 Drag events
        item.addEventListener('dragstart', e => {
          dragSrcIdx = pos;
          item.classList.add('dragging');
          e.dataTransfer.effectAllowed = 'move';
        });
        item.addEventListener('dragend', () => {
          item.classList.remove('dragging');
          strip.querySelectorAll('.image-order-item').forEach(el => el.classList.remove('drag-over'));
        });
        item.addEventListener('dragover', e => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
          if (pos !== dragSrcIdx) item.classList.add('drag-over');
        });
        item.addEventListener('dragleave', () => item.classList.remove('drag-over'));
        item.addEventListener('drop', e => {
          e.preventDefault();
          if (dragSrcIdx === null || dragSrcIdx === pos) return;
          [order[dragSrcIdx], order[pos]] = [order[pos], order[dragSrcIdx]];
          dragSrcIdx = null;
          const label = order.map(i => question.images[i].label || `#${i+1}`).join(' → ');
          onAnswer([...order], label);
          _render();
        });

        strip.appendChild(item);
      });

      imageOrderWrap.appendChild(strip);

      // Touch drag support for mobile
      _addTouchDrag(strip, 'image-order-item', (srcPos, dstPos) => {
        [order[srcPos], order[dstPos]] = [order[dstPos], order[srcPos]];
        const label = order.map(i => question.images[i].label || `#${i+1}`).join(' → ');
        onAnswer([...order], label);
        _render();
      });

      // Expose keyboard move function on the wrap element
      imageOrderWrap._triggerMove = (targetPos) => {
        const selPos = imageOrderWrap._selectedPos;
        if (selPos === null || selPos === undefined) return;
        if (targetPos < 0 || targetPos >= order.length) return;
        if (selPos === targetPos) return;
        // Move item at selPos to targetPos by shifting in between
        const moving = order.splice(selPos, 1)[0];
        order.splice(targetPos, 0, moving);
        imageOrderWrap._selectedPos = targetPos;
        const label = order.map(i => question.images[i].label || `#${i+1}`).join(' → ');
        onAnswer([...order], label);
        _render();
      };
    }

    _render();
  }

  // ── Label drag-to-order (text chips, no images)
  function _buildLabelOrderQuestion(question, savedValue, onAnswer) {
    labelOrderWrap.innerHTML = '';
    labelOrderWrap._selectedPos = null;
    labelOrderWrap._triggerMove = null;

    let order = Array.isArray(savedValue)
      ? [...savedValue]
      : QuestionManager._shuffle(question.labels.map((_, i) => i));

    function _render() {
      labelOrderWrap.innerHTML = '';

      const hint = document.createElement('p');
      hint.className = 'image-order-hint';
      hint.textContent = 'Glisati elementele pentru a le ordona de la stanga la dreapta.';
      labelOrderWrap.appendChild(hint);

      const strip = document.createElement('div');
      strip.className = 'label-order-strip';

      let dragSrcIdx = null;

      order.forEach((lblIdx, pos) => {
        const item = document.createElement('div');
        item.className = 'label-order-item';
        item.draggable = true;
        item.dataset.pos = pos;

        if (labelOrderWrap._selectedPos === pos) item.classList.add('kbd-selected');

        const posEl = document.createElement('span');
        posEl.className = 'image-order-pos';
        posEl.textContent = pos + 1;

        const textEl = document.createElement('span');
        textEl.className = 'label-order-text';
        textEl.textContent = question.labels[lblIdx];

        item.appendChild(posEl);
        item.appendChild(textEl);

        // Click-to-select for keyboard number navigation
        item.addEventListener('click', () => {
          labelOrderWrap._selectedPos = (labelOrderWrap._selectedPos === pos) ? null : pos;
          _render();
        });

        item.addEventListener('dragstart', e => {
          dragSrcIdx = pos;
          item.classList.add('dragging');
          e.dataTransfer.effectAllowed = 'move';
        });
        item.addEventListener('dragend', () => {
          item.classList.remove('dragging');
          strip.querySelectorAll('.label-order-item').forEach(el => el.classList.remove('drag-over'));
        });
        item.addEventListener('dragover', e => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
          if (pos !== dragSrcIdx) item.classList.add('drag-over');
        });
        item.addEventListener('dragleave', () => item.classList.remove('drag-over'));
        item.addEventListener('drop', e => {
          e.preventDefault();
          if (dragSrcIdx === null || dragSrcIdx === pos) return;
          [order[dragSrcIdx], order[pos]] = [order[pos], order[dragSrcIdx]];
          dragSrcIdx = null;
          const label = order.map(i => question.labels[i]).join(' → ');
          onAnswer([...order], label);
          _render();
        });

        strip.appendChild(item);
      });

      labelOrderWrap.appendChild(strip);

      // Touch drag support for mobile
      _addTouchDrag(strip, 'label-order-item', (srcPos, dstPos) => {
        [order[srcPos], order[dstPos]] = [order[dstPos], order[srcPos]];
        const label = order.map(i => question.labels[i]).join(' → ');
        onAnswer([...order], label);
        _render();
      });

      labelOrderWrap._triggerMove = (targetPos) => {
        const selPos = labelOrderWrap._selectedPos;
        if (selPos === null || selPos === undefined) return;
        if (targetPos < 0 || targetPos >= order.length) return;
        if (selPos === targetPos) return;
        const moving = order.splice(selPos, 1)[0];
        order.splice(targetPos, 0, moving);
        labelOrderWrap._selectedPos = targetPos;
        const label = order.map(i => question.labels[i]).join(' → ');
        onAnswer([...order], label);
        _render();
      };
    }

    _render();
  }

  // ── Header fill (Sporcle-style protocol header reveal)
  // Checks if raw input satisfies a field: bit number present as whole word,
  // and any accepted name present as case-insensitive substring.
  function _checkHeaderField(input, field) {
    const names  = Array.isArray(field.names) ? field.names : [field.name];
    const lower  = input.trim().toLowerCase();
    // The bit count must appear as a standalone number (word boundary)
    const bitsRx = new RegExp(`(?:^|\\s)${field.bits}(?:\\s|$)`);
    if (!bitsRx.test(input.trim())) return false;
    // At least one accepted name must appear as a substring
    return names.some(n => lower.includes(n.toLowerCase()));
  }

  function _buildHeaderFillQuestion(question, savedValue, onAnswer) {
    headerFillWrap.innerHTML = '';

    // savedValue = number of fields already correctly completed (0..n)
    let completed = (typeof savedValue === 'number' && savedValue >= 0)
      ? Math.min(savedValue, question.fields.length)
      : 0;
    const total   = question.fields.length;

    // ── Header image
    const imgEl = document.createElement('img');
    imgEl.className = 'hf-header-img';
    imgEl.alt       = 'Protocol header';
    const _setImage = (idx) => {
      imgEl.src = question.images[Math.min(idx, question.images.length - 1)];
    };
    _setImage(completed);
    headerFillWrap.appendChild(imgEl);

    // ── Progress bar
    const progressWrap = document.createElement('div');
    progressWrap.className = 'hf-progress-wrap';
    const progressBar = document.createElement('div');
    progressBar.className = 'hf-progress-bar';
    progressWrap.appendChild(progressBar);
    headerFillWrap.appendChild(progressWrap);

    const _setProgress = (n) => {
      progressBar.style.width = (total > 0 ? (n / total) * 100 : 0) + '%';
    };
    _setProgress(completed);

    // ── Status label
    const statusEl = document.createElement('p');
    statusEl.className = 'hf-status';
    const _setStatus = (n, flash) => {
      if (n >= total) {
        statusEl.textContent = '✓ Toate campurile identificate!';
        statusEl.className   = 'hf-status hf-status-done';
      } else {
        statusEl.textContent = `Camp ${n + 1} din ${total}`;
        statusEl.className   = 'hf-status' + (flash ? ` hf-status-${flash}` : '');
      }
    };
    _setStatus(completed);
    headerFillWrap.appendChild(statusEl);

    // ── If already complete, show done state and exit
    if (completed >= total) return;

    // ── Input area
    const inputWrap = document.createElement('div');
    inputWrap.className = 'hf-input-wrap';

    const input = document.createElement('input');
    input.type        = 'text';
    input.className   = 'hf-input';
    input.placeholder = 'Denumire camp si biti';
    input.autocomplete = 'off';
    input.spellcheck   = false;
    inputWrap.appendChild(input);
    headerFillWrap.appendChild(inputWrap);

    const _attempt = () => {
      const val = input.value.trim();
      if (!val) return;

      const currentField = question.fields[completed];
      if (_checkHeaderField(val, currentField)) {
        completed++;
        _setImage(completed);
        _setProgress(completed);
        _setStatus(completed, 'correct');
        input.value = '';
        input.classList.remove('hf-input-wrong');
        input.classList.add('hf-input-correct');
        // Save partial progress immediately
        onAnswer(completed, `${completed}/${total} campuri`);
        setTimeout(() => {
          input.classList.remove('hf-input-correct');
          if (completed >= total) {
            // Done — remove input area
            inputWrap.remove();
          } else {
            _setStatus(completed);
            input.focus();
          }
        }, 600);
      } else {
        input.classList.add('hf-input-wrong');
        input.select();
        _setStatus(completed, 'wrong');
        setTimeout(() => {
          input.classList.remove('hf-input-wrong');
          _setStatus(completed);
        }, 500);
      }
    };

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); _attempt(); }
    });

    setTimeout(() => input.focus(), 30);
  }

  // ── Nav grid
  function buildNavGrid(total, onClick) {
    _navClickHandler = onClick;
    qNavGrid.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'q-nav-btn';
      btn.dataset.qi = i;
      btn.textContent = i + 1;
      btn.addEventListener('click', () => _navClickHandler && _navClickHandler(i));
      qNavGrid.appendChild(btn);
    }
  }

  function refreshNavGrid(currentIndex, answers, isMarkedFn) {
    qNavGrid.querySelectorAll('.q-nav-btn').forEach(btn => {
      const i = parseInt(btn.dataset.qi, 10);
      btn.classList.remove('q-nav-current', 'q-nav-answered', 'q-nav-marked');
      if (i === currentIndex) {
        btn.classList.add('q-nav-current');
      } else {
        if (answers[i] !== null && answers[i] !== undefined) btn.classList.add('q-nav-answered');
        if (isMarkedFn && isMarkedFn(i)) btn.classList.add('q-nav-marked');
      }
    });
  }

  // ── Modal
  function showModal(message, onConfirm, onCancel, title, confirmLabel) {
    const titleEl = document.getElementById('modal-title');
    if (titleEl) titleEl.textContent = title || 'Confirmare';
    modalBody.textContent = message;
    const confirmBtn = document.getElementById('modal-confirm');
    confirmBtn.textContent = confirmLabel || 'Trimite raspuns';
    confirmModal.classList.remove('hidden');
    confirmBtn.onclick = () => { hideModal(); onConfirm(); };
    document.getElementById('modal-cancel').onclick  = () => { hideModal(); if (onCancel) onCancel(); };
  }
  function hideModal() { confirmModal.classList.add('hidden'); }

  // ── Results
  function renderResults(results) {
    const offset = 326.7 - (results.pct / 100) * 326.7;
    scorePctBig.textContent = results.pct + '%';
    setTimeout(() => { ringProgress.style.strokeDashoffset = offset; }, 80);

    const grade = results.pct == 100 ? 'Impecabil!'
                : results.pct >= 90  ? 'Bravo pustiule!'
                : results.pct >= 70  ? 'Ai trecut grila!'
                : results.pct >= 40  ? 'Mai e de lucru'
                :                      'Mihai Buse?';
    resultsTitle.textContent  = grade;

    // Display score with 1 decimal only if fractional
    const displayScore = Number.isInteger(results.correct)
      ? results.correct
      : Math.round(results.correct * 10) / 10;
    resultsSummary.textContent = `Ai raspuns corect la ${displayScore} din ${results.total} intrebari.`;

    statCorrect.textContent = displayScore;
    statTotal.textContent   = results.total;
    const m = Math.floor(results.elapsed / 60);
    const s = results.elapsed % 60;
    statTime.textContent = m > 0 ? `${m}m ${s}s` : `${s}s`;

    if (results.topics.length > 1) {
      topicBreakdown.classList.remove('hidden');
      breakdownList.innerHTML = results.topics.map(t => {
        const pct = t.total ? Math.round((t.score / t.total) * 100) : 0;
        return `<div class="breakdown-chip" title="${_esc(t.name)}">
          <span class="breakdown-chip-name">${_esc(t.name)}</span>
          <span class="breakdown-chip-pct">${pct}%</span>
        </div>`;
      }).join('');
    } else {
      topicBreakdown.classList.add('hidden');
    }

    reviewList.innerHTML = '';
    // Review pane is now rendered immediately (no toggle gate)
    _reviewCurrent = 0;
    renderReview(graded);
    _buildReviewNavGrid(graded);
    reviewPanel.classList.remove('hidden');
  }

  function renderReview(graded) {
    reviewList.innerHTML = '';
    graded.forEach((g, i) => {
      const div = document.createElement('div');
      const stateClass = g.skipped ? 'review-skipped' : g.correct ? 'review-correct' : (g.score > 0 ? 'review-partial' : 'review-incorrect');
      div.className = `review-item ${stateClass}`;
      div.dataset.idx = String(i);
      const numClass  = g.skipped ? 'r-skipped' : g.correct ? 'r-correct' : (g.score > 0 ? 'r-partial' : 'r-incorrect');
      const pctLabel  = g.score > 0 && !g.correct ? ` (${Math.round(g.score * 100)}%)` : '';
      const numLabel  = g.skipped ? '— Ai sarit' : g.correct ? '✓ Buna treaba' : `✗ O ratasi${pctLabel}`;

      let detailHTML = '';

      // Sub-result detail for matching and image-order
      if (g.subResults && g.subResults.length > 0) {
        if (g.question.type === 'matching') {
          detailHTML = '<div class="review-sub-list">' +
            g.subResults.map(sr => `
              <div class="review-sub-row ${sr.ok ? 'sub-ok' : 'sub-bad'}">
                <span class="sub-q-text">${_esc(sr.text)}</span>
                <span class="sub-ans">${_esc(sr.user)}</span>
                ${!sr.ok ? `<span class="sub-correct">→ ${_esc(sr.correct)}</span>` : ''}
              </div>`).join('') +
            '</div>';
        } else if (g.question.type === 'image-order') {
          detailHTML = '<div class="review-sub-list">' +
            g.subResults.map(sr => `
              <div class="review-sub-row ${sr.ok ? 'sub-ok' : 'sub-bad'}">
                <span class="sub-q-text">Pozitia ${sr.pos + 1}:</span>
                <span class="sub-ans">${_esc(sr.label)}</span>
                ${!sr.ok ? `<span class="sub-correct">→ ${_esc(sr.correctLabel)}</span>` : ''}
              </div>`).join('') +
            '</div>';
        } else if (g.question.type === 'label-order') {
          detailHTML = '<div class="review-sub-list">' +
            g.subResults.map(sr => `
              <div class="review-sub-row ${sr.ok ? 'sub-ok' : 'sub-bad'}">
                <span class="sub-q-text">Pozitia ${sr.pos + 1}:</span>
                <span class="sub-ans">${_esc(sr.label)}</span>
                ${!sr.ok ? `<span class="sub-correct">→ ${_esc(sr.correctLabel)}</span>` : ''}
              </div>`).join('') +
            '</div>';
        } else if (g.question.type === 'header-fill') {
          detailHTML = '<div class="review-sub-list">' +
            g.subResults.map(sr => `
              <div class="review-sub-row ${sr.ok ? 'sub-ok' : 'sub-bad'}">
                <span class="sub-q-text">Camp ${sr.pos + 1}:</span>
                <span class="sub-ans">${_esc(sr.name)} (${sr.bits})</span>
                ${!sr.ok ? `<span class="sub-correct">neidentificat</span>` : ''}
              </div>`).join('') +
            '</div>';
        }
      }

      div.innerHTML = `
        <div class="review-q-num ${numClass}">Q${i + 1} · ${_esc(g.topicName)} · ${numLabel}</div>
        <div class="review-q-text">${_esc(g.question.text)}</div>
        ${detailHTML || `
        <div class="review-answer-row">
          <span class="review-your">Ai raspuns: <strong>${_esc(String(g.userDisplay))}</strong></span>
          ${!g.correct ? `<span class="review-correct-ans">✓ ${_esc(String(g.correctLabel))}</span>` : ''}
        </div>`}
        ${g.question.explanation ? `<div class="review-explanation">${_esc(g.question.explanation)}</div>` : ''}
      `;
      reviewList.appendChild(div);
    });
    _applyReviewMode();
  }

  // Default OFF = paged (one item visible at a time, nav-grid clicks change it)
  // ON = stacked (all items visible at once)
  let _reviewPaged = true;
  let _reviewCurrent = 0;

  function _applyReviewMode() {
    const items = reviewList.querySelectorAll('.review-item');
    if (_reviewPaged) {
      reviewList.classList.add('review-list-paged');
      items.forEach((el, i) => {
        el.classList.toggle('hidden', i !== _reviewCurrent);
      });
      _ensureReviewStepperPaged(items.length);
    } else {
      reviewList.classList.remove('review-list-paged');
      items.forEach(el => el.classList.remove('hidden'));
      _removeReviewStepperPaged();
    }
    _refreshReviewNavCurrent();
  }

  function _ensureReviewStepperPaged(total) {
    let stepper = document.getElementById('review-paged-stepper');
    if (!stepper) {
      stepper = document.createElement('div');
      stepper.id = 'review-paged-stepper';
      stepper.className = 'review-paged-stepper';
      stepper.innerHTML = `
        <button type="button" class="btn btn-secondary" id="review-paged-prev">← Inapoi</button>
        <span class="review-paged-pos" id="review-paged-pos">1 / 1</span>
        <button type="button" class="btn btn-secondary" id="review-paged-next">Inainte →</button>
      `;
      reviewList.parentNode.insertBefore(stepper, reviewList);
      stepper.querySelector('#review-paged-prev').addEventListener('click', () => _gotoReviewItem(_reviewCurrent - 1));
      stepper.querySelector('#review-paged-next').addEventListener('click', () => _gotoReviewItem(_reviewCurrent + 1));
    }
    _updateReviewStepperLabel(total);
  }

  function _updateReviewStepperLabel(total) {
    const pos = document.getElementById('review-paged-pos');
    if (pos) pos.textContent = `${_reviewCurrent + 1} / ${total}`;
    const prev = document.getElementById('review-paged-prev');
    const next = document.getElementById('review-paged-next');
    if (prev) prev.disabled = _reviewCurrent <= 0;
    if (next) next.disabled = _reviewCurrent >= total - 1;
  }

  function _removeReviewStepperPaged() {
    const stepper = document.getElementById('review-paged-stepper');
    if (stepper) stepper.remove();
  }

  function _gotoReviewItem(idx) {
    const items = reviewList.querySelectorAll('.review-item');
    if (idx < 0 || idx >= items.length) return;
    _reviewCurrent = idx;
    if (_reviewPaged) {
      items.forEach((el, i) => el.classList.toggle('hidden', i !== _reviewCurrent));
      _updateReviewStepperLabel(items.length);
      reviewList.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      items[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    _refreshReviewNavCurrent();
  }

  function _refreshReviewNavCurrent() {
    const cells = document.querySelectorAll('#review-nav-grid .review-nav-btn');
    cells.forEach((cell, i) => cell.classList.toggle('rn-current', _reviewPaged && i === _reviewCurrent));
  }

  function initReviewModeToggle() {
    const t = document.getElementById('review-single-page-toggle');
    if (!t) return;
    // OFF = paged (default); ON = stacked
    _reviewPaged = !t.checked;
    t.addEventListener('change', () => {
      _reviewPaged = !t.checked;
      _reviewCurrent = 0;
      _applyReviewMode();
    });
  }

  function _buildReviewNavGrid(graded) {
    const grid = document.getElementById('review-nav-grid');
    if (!grid) return;
    grid.innerHTML = '';
    graded.forEach((g, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'review-nav-btn';
      btn.textContent = i + 1;
      // Colour by result
      if (g.skipped)       btn.classList.add('rn-skipped');
      else if (g.correct)  btn.classList.add('rn-correct');
      else if (g.score > 0) btn.classList.add('rn-partial');
      else                 btn.classList.add('rn-incorrect');
      // Marked indicator (amber outline layered on top of result colour)
      if (g.marked) btn.classList.add('rn-marked');
      btn.addEventListener('click', () => _gotoReviewItem(i));
      grid.appendChild(btn);
    });
  }

  // ── Single-page stacked render ────────────────────────────
  // Restores answer DOM refs to the static markup ones so subsequent single-question renders work
  function _restoreDefaultAnswerRefs() {
    questionText      = _defaultAnswerRefs.questionText;
    questionHint      = _defaultAnswerRefs.questionHint;
    mcOptions         = _defaultAnswerRefs.mcOptions;
    mcMultiOptions    = _defaultAnswerRefs.mcMultiOptions;
    matchingWrap      = _defaultAnswerRefs.matchingWrap;
    imageOrderWrap    = _defaultAnswerRefs.imageOrderWrap;
    labelOrderWrap    = _defaultAnswerRefs.labelOrderWrap;
    headerFillWrap    = _defaultAnswerRefs.headerFillWrap;
    oeInputWrap       = _defaultAnswerRefs.oeInputWrap;
    oeInput           = _defaultAnswerRefs.oeInput;
    questionImageWrap = _defaultAnswerRefs.questionImageWrap;
    questionImageEl   = _defaultAnswerRefs.questionImageEl;
  }

  // Builds a per-question card and swaps refs to its children, so calling renderQuestion writes into THIS card
  function _swapRefsToCard(cardRoot) {
    questionText      = cardRoot.querySelector('.sp-question-text');
    questionHint      = cardRoot.querySelector('.sp-question-hint');
    questionImageWrap = cardRoot.querySelector('.sp-question-image-wrap');
    questionImageEl   = cardRoot.querySelector('.sp-question-image');
    mcOptions         = cardRoot.querySelector('.sp-mc-options');
    mcMultiOptions    = cardRoot.querySelector('.sp-mc-multi-options');
    matchingWrap      = cardRoot.querySelector('.sp-matching-wrap');
    imageOrderWrap    = cardRoot.querySelector('.sp-image-order-wrap');
    labelOrderWrap    = cardRoot.querySelector('.sp-label-order-wrap');
    headerFillWrap    = cardRoot.querySelector('.sp-header-fill-wrap');
    oeInputWrap       = cardRoot.querySelector('.sp-oe-input-wrap');
    oeInput           = cardRoot.querySelector('.sp-oe-input');
  }

  // Renders ALL questions stacked in question-area. Each card is independent and writes back to its own session index.
  // callbacks: { onAnswer(idx, value, label), onClear(idx), onMarkToggle(idx), getAnswer(idx), isMarked(idx) }
  function renderAllStacked(questions, callbacks) {
    if (!questionArea) return;
    // Hide the default question-card and nav-btns; we render our own stack
    const defaultCard = questionArea.querySelector('.question-card');
    if (defaultCard) defaultCard.classList.add('hidden');
    const defaultNavBtns = questionArea.querySelector('.question-nav-btns');
    if (defaultNavBtns) defaultNavBtns.classList.add('hidden');

    // Clear any previous stacked wrapper
    let stackWrap = questionArea.querySelector('.sp-stack');
    if (stackWrap) stackWrap.remove();
    stackWrap = document.createElement('div');
    stackWrap.className = 'sp-stack';
    questionArea.appendChild(stackWrap);

    questions.forEach((q, idx) => {
      const card = document.createElement('div');
      card.className = 'card question-card sp-question-card';
      card.dataset.spIndex = String(idx);
      card.id = `sp-card-${idx}`;
      card.innerHTML = `
        <div class="sp-question-header">
          <span class="sp-question-num">Q${idx + 1} / ${questions.length}</span>
          <span class="sp-question-topic">${_esc(q._topicName || '')}</span>
          <button class="sp-mark-btn" type="button" aria-pressed="${callbacks.isMarked(idx) ? 'true' : 'false'}">
            <svg class="mark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16v10l-8 3-8-3V4z"/>
            </svg>
            <span class="sp-mark-label">${callbacks.isMarked(idx) ? 'Marked' : 'Marcheaza'}</span>
          </button>
        </div>
        <h2 class="question-text sp-question-text"></h2>
        <p class="question-hint sp-question-hint hidden"></p>
        <div class="question-image-wrap sp-question-image-wrap hidden">
          <img class="question-image sp-question-image" alt="" />
        </div>
        <div class="mc-options sp-mc-options hidden"></div>
        <div class="mc-options sp-mc-multi-options hidden">
          <p class="mc-multi-badge">Selecteaza toate variantele corecte</p>
        </div>
        <div class="matching-wrap sp-matching-wrap hidden"></div>
        <div class="image-order-wrap sp-image-order-wrap hidden"></div>
        <div class="label-order-wrap sp-label-order-wrap hidden"></div>
        <div class="header-fill-wrap sp-header-fill-wrap hidden"></div>
        <div class="oe-input-wrap sp-oe-input-wrap hidden">
          <input type="text" class="oe-input sp-oe-input" autocomplete="off" />
        </div>
      `;
      stackWrap.appendChild(card);

      // Mark button per-card
      const markBtnEl = card.querySelector('.sp-mark-btn');
      const markLabelEl = card.querySelector('.sp-mark-label');
      if (callbacks.isMarked(idx)) markBtnEl.classList.add('is-marked');
      markBtnEl.addEventListener('click', () => {
        callbacks.onMarkToggle(idx);
        const nowMarked = callbacks.isMarked(idx);
        markBtnEl.classList.toggle('is-marked', nowMarked);
        markBtnEl.setAttribute('aria-pressed', nowMarked ? 'true' : 'false');
        markLabelEl.textContent = nowMarked ? 'Marked' : 'Marcheaza';
      });

      // Swap refs to this card's children, then call renderQuestion as if it were the only question
      _swapRefsToCard(card);
      const saved = callbacks.getAnswer(idx);
      renderQuestion(
        q,
        saved,
        (value, label) => callbacks.onAnswer(idx, value, label),
        ()             => callbacks.onClear(idx),
        /* onEnterNavigate */ null
      );
    });

    // Restore defaults so any later single-question render works
    _restoreDefaultAnswerRefs();
  }

  // Removes the stacked DOM and restores the default question-card visibility (used when leaving the quiz screen)
  function teardownStacked() {
    if (!questionArea) return;
    const stackWrap = questionArea.querySelector('.sp-stack');
    if (stackWrap) stackWrap.remove();
    const defaultCard = questionArea.querySelector('.question-card');
    if (defaultCard) defaultCard.classList.remove('hidden');
    const defaultNavBtns = questionArea.querySelector('.question-nav-btns');
    if (defaultNavBtns) defaultNavBtns.classList.remove('hidden');
    _restoreDefaultAnswerRefs();
  }

  // Highlights the currently-focused stacked card (used when a nav-grid cell is clicked)
  function highlightStackedCard(idx) {
    document.querySelectorAll('.sp-question-card.sp-focused').forEach(c => c.classList.remove('sp-focused'));
    const target = document.getElementById('sp-card-' + idx);
    if (target) {
      target.classList.add('sp-focused');
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function _esc(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
      .replace(/\n/g, '<br>');
  }

  return {
    showScreen,
    renderTopics, initStepper, initSortControls, initSelectAllBtn, getSetupOptions, showTopicError,
    updateTopBar, updateTimer,
    renderQuestion, renderAllStacked, teardownStacked, highlightStackedCard, buildNavGrid, refreshNavGrid,
    showModal,
    renderResults, initReviewModeToggle,
    prevBtn, nextBtn,
    imageOrderWrap, labelOrderWrap,
    markBtn:       document.getElementById('mark-btn'),
    markLabel:     document.getElementById('mark-label'),
    submitQuizBtn: document.getElementById('submit-quiz-btn'),
    startBtn:      document.getElementById('start-btn'),
    exportBtn:     document.getElementById('export-btn'),
    restartBtn:    document.getElementById('restart-btn')
  };
})();


/* ============================================================
   APP
   Bootstraps and orchestrates all modules.
   ============================================================ */
const App = (() => {

  const LAST_SESSION_KEY = 'acadobre.lastSession';

  let _results = null;
  let _singlePage = false;

  function init() {
    const topics = QuestionManager.getTopics();
    UIController.renderTopics(topics);
    UIController.initStepper();
    UIController.initSortControls(topics);
    UIController.initSelectAllBtn();
    UIController.initReviewModeToggle();
    _refreshLastSessionCard();
    _bindEvents();
  }

  // sessionStorage scope = browser tab; clears naturally when tab closes
  function _saveLastSession(results) {
    try {
      sessionStorage.setItem(LAST_SESSION_KEY, JSON.stringify({
        savedAt: new Date().toISOString(),
        results: results
      }));
    } catch (e) {
      // Quota or disabled storage — silent fail, feature is non-critical
    }
  }

  function _loadLastSession() {
    try {
      const raw = sessionStorage.getItem(LAST_SESSION_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed && parsed.results ? parsed.results : null;
    } catch (e) {
      return null;
    }
  }

  function _refreshLastSessionCard() {
    const card = document.getElementById('last-session-card');
    if (!card) return;
    const has = _loadLastSession() !== null;
    card.classList.toggle('hidden', !has);
  }

  function _replayLastSession() {
    const snap = _loadLastSession();
    if (!snap) return;
    _results = snap;
    UIController.renderResults(_results);
    UIController.showScreen('results');
  }

  function _bindEvents() {
    UIController.startBtn.addEventListener('click', _startQuiz);

    UIController.prevBtn.addEventListener('click', () => _go(-1));
    UIController.nextBtn.addEventListener('click', () => {
      const isLast = QuizSession.getCurrentIndex() === QuizSession.getTotalCount() - 1;
      if (isLast) _trySubmit(); else _go(+1);
    });

    UIController.markBtn.addEventListener('click', () => {
      const idx    = QuizSession.getCurrentIndex();
      const marked = QuizSession.toggleMark(idx);
      _updateMarkButton(marked);
      _refreshNav();
    });

    // Abandon quiz — confirm before leaving
    document.getElementById('abandon-btn').addEventListener('click', () => {
      UIController.showModal(
        'Progresul curent se va pierde. Esti sigur ca vrei sa te intorci la meniu?',
        () => {
          QuizSession.stop();
          if (_singlePage) {
            UIController.teardownStacked();
            _singlePage = false;
            if (UIController.prevBtn && UIController.prevBtn.parentElement) {
              UIController.prevBtn.parentElement.classList.remove('hidden');
            }
          }
          _refreshLastSessionCard();
          UIController.showScreen('setup');
        },
        null,
        'Inapoi la meniu?',
        'Da, inapoi'
      );
    });

    // Keyboard navigation in quiz screen
    document.addEventListener('keydown', e => {
      const screen = document.querySelector('.screen.active');
      if (!screen || screen.id !== 'screen-quiz') return;
      // Don't intercept while a modal is open
      if (!document.getElementById('confirm-modal').classList.contains('hidden')) return;
      // In single-page mode, all questions are visible at once — prev/next/enter-submit don't apply
      if (_singlePage) return;

      const activeEl  = document.activeElement;
      const isOEFocused = activeEl && activeEl.id === 'oe-input';
      // Also block navigation when any header-fill input is focused
      const isHFFocused = activeEl && activeEl.classList.contains('hf-input');
      const isInputFocused = isOEFocused || isHFFocused;

      const isLast = QuizSession.getCurrentIndex() === QuizSession.getTotalCount() - 1;
      const q      = QuizSession.getCurrentQuestion();

      // ── Number keys 1-9: select MC option OR move order item
      if (/^[1-9]$/.test(e.key) && !isInputFocused) {
        const digit = parseInt(e.key) - 1; // 0-based index
        if (q) {
          if (q.type === 'multiple-choice') {
            const opts = document.getElementById('mc-options').querySelectorAll('.mc-option');
            if (opts[digit]) { e.preventDefault(); opts[digit].click(); }
          } else if (q.type === 'multiple-choice-multi') {
            const opts = document.getElementById('mc-multi-options').querySelectorAll('.mc-option');
            if (opts[digit]) { e.preventDefault(); opts[digit].click(); }
          } else if (q.type === 'image-order') {
            const fn = UIController.imageOrderWrap._triggerMove;
            if (fn) { e.preventDefault(); fn(digit); }
          } else if (q.type === 'label-order') {
            const fn = UIController.labelOrderWrap._triggerMove;
            if (fn) { e.preventDefault(); fn(digit); }
          }
        }
        return;
      }

      // ── Arrow Left: go to previous question (blocked when OE/HF focused)
      if (e.key === 'ArrowLeft') {
        if (isInputFocused) return; // let text cursor move freely
        e.preventDefault();
        _go(-1);
        return;
      }

      // ── Arrow Right / Enter: advance or submit
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (e.key === 'ArrowRight' && isInputFocused) return; // let text cursor move
        // Enter is handled by individual inputs (OE onkeydown, HF keydown) — don't steal it
        if (e.key === 'Enter' && (isInputFocused || (activeEl && (activeEl.tagName === 'SELECT' || activeEl.tagName === 'TEXTAREA')))) return;
        e.preventDefault();
        if (isLast) { _trySubmit(); }
        else        { _go(+1); }
      }
    });

    UIController.submitQuizBtn.addEventListener('click', _trySubmit);

    UIController.exportBtn.addEventListener('click',  _exportResults);
    UIController.restartBtn.addEventListener('click', () => {
      _refreshLastSessionCard();
      UIController.showScreen('setup');
    });

    const lastSessionBtn = document.getElementById('last-session-btn');
    if (lastSessionBtn) {
      lastSessionBtn.addEventListener('click', _replayLastSession);
    }
  }

  function _startQuiz() {
    const opts = UIController.getSetupOptions();
    if (opts.topicIds.length === 0) { UIController.showTopicError(); return; }

    let questions = QuestionManager.buildSession(opts.topicIds, opts.qCount, opts.shuffle, opts.headerFillOnly);
    if (!questions.length) { UIController.showTopicError(); return; }

    if (opts.shuffle) questions = questions.map(q => QuestionManager.shuffleMCOptions(q));

    _singlePage = !!opts.singlePage;

    QuizSession.start(questions, elapsed => UIController.updateTimer(elapsed));

    // Nav grid click handler differs by mode: scroll-to in stacked, navigate-to in paged
    UIController.buildNavGrid(questions.length, index => {
      if (_singlePage) {
        UIController.highlightStackedCard(index);
      } else {
        _saveCurrentIfNeeded();
        QuizSession.navigateTo(index);
        _renderCurrent();
      }
    });

    UIController.showScreen('quiz');

    // Toggle visibility of the per-question nav buttons (hidden in single-page mode)
    if (UIController.prevBtn && UIController.prevBtn.parentElement) {
      UIController.prevBtn.parentElement.classList.toggle('hidden', _singlePage);
    }

    if (_singlePage) {
      _renderAllStacked(questions);
      // Top bar still updates: show total count, no specific current question
      UIController.updateTopBar(questions.length - 1, questions.length, '');
      _refreshNav();
    } else {
      _renderCurrent();
    }
  }

  function _renderAllStacked(questions) {
    UIController.renderAllStacked(questions, {
      onAnswer: (idx, value, label) => {
        QuizSession.navigateTo(idx);
        QuizSession.saveCurrentAnswer(value, label);
        _refreshNav();
      },
      onClear: (idx) => {
        QuizSession.navigateTo(idx);
        QuizSession.clearCurrentAnswer();
        _refreshNav();
      },
      onMarkToggle: (idx) => {
        QuizSession.navigateTo(idx);
        QuizSession.toggleMark(idx);
        _refreshNav();
      },
      getAnswer: (idx) => QuizSession.getAnswer(idx),
      isMarked:  (idx) => QuizSession.isMarked(idx)
    });
  }

  function _renderCurrent() {
    const idx   = QuizSession.getCurrentIndex();
    const total = QuizSession.getTotalCount();
    const q     = QuizSession.getCurrentQuestion();
    const saved = QuizSession.getAnswer(idx);

    UIController.updateTopBar(idx, total, q._topicName);
    UIController.prevBtn.disabled = (idx === 0);
    UIController.nextBtn.disabled = false;
    _updateMarkButton(QuizSession.isMarked(idx));

    UIController.renderQuestion(
      q,
      saved,
      (value, label) => {
        QuizSession.saveCurrentAnswer(value, label);
        _refreshNav();
        // Auto-submit when the only question is header-fill and all fields are done
        if (q.type === 'header-fill' && value === q.fields.length && QuizSession.getTotalCount() === 1) {
          setTimeout(_doSubmit, 900);
        }
      },
      ()             => { QuizSession.clearCurrentAnswer();             _refreshNav(); },
      /* onEnterNavigate — Enter in open-ended field */ () => {
        _saveCurrentIfNeeded();
        const isLastQ = QuizSession.getCurrentIndex() === QuizSession.getTotalCount() - 1;
        if (isLastQ) _trySubmit(); else _go(+1);
      }
    );

    _refreshNav();
  }

  function _refreshNav() {
    const answers = [];
    for (let i = 0; i < QuizSession.getTotalCount(); i++) {
      answers[i] = QuizSession.getAnswer(i);
    }
    UIController.refreshNavGrid(QuizSession.getCurrentIndex(), answers, i => QuizSession.isMarked(i));
  }

  function _updateMarkButton(isMarked) {
    UIController.markBtn.classList.toggle('is-marked', isMarked);
    UIController.markLabel.textContent = isMarked ? 'Marked' : 'Marcheaza';
  }

  function _go(delta) {
    _saveCurrentIfNeeded();
    const next = QuizSession.getCurrentIndex() + delta;
    if (QuizSession.navigateTo(next)) _renderCurrent();
  }

  /**
   * Snapshot the current answer before navigating away.
   * For open-ended: reads the input field (in case oninput didn't fire).
   * Other types save on every interaction, so this is a safety net.
   */
  function _saveCurrentIfNeeded() {
    const q = QuizSession.getCurrentQuestion();
    if (!q || q.type !== 'open-ended') return;
    const oe = document.getElementById('oe-input');
    const v  = oe ? oe.value.trim() : '';
    if (v) QuizSession.saveCurrentAnswer(v, v);
    else   QuizSession.clearCurrentAnswer();
  }

  function _trySubmit() {
    _saveCurrentIfNeeded();
    const answered   = QuizSession.getAnsweredCount();
    const total      = QuizSession.getTotalCount();
    const unanswered = total - answered;

    const msg = unanswered > 0
      ? `Ai ${unanswered} intrebar${unanswered !== 1 ? 'i' : 'e'} la care nu ai raspuns. Intrebarile neselectate vor fi marcate incorect. Trimiti oricum?`
      : 'Ai raspuns la toate intrebarile. Trimiti rezultatele?';

    UIController.showModal(msg, _doSubmit, null, 'Trimiti raspunsul?');
  }

  function _doSubmit() {
    _results = QuizSession.submitAll();
    if (_singlePage) {
      UIController.teardownStacked();
      _singlePage = false;
      if (UIController.prevBtn && UIController.prevBtn.parentElement) {
        UIController.prevBtn.parentElement.classList.remove('hidden');
      }
    }
    _saveLastSession(_results);
    UIController.renderResults(_results);
    UIController.showScreen('results');
  }

  function _exportResults() {
    if (!_results) return;
    const payload = {
      exportedAt:     new Date().toISOString(),
      score:          `${_results.correct}/${_results.total} (${_results.pct}%)`,
      elapsedSeconds: _results.elapsed,
      topics:         _results.topics,
      answers:        _results.graded.map((g, i) => ({
        number:        i + 1,
        question:      g.question.text,
        topic:         g.topicName,
        type:          g.question.type,
        yourAnswer:    g.userDisplay,
        score:         g.score,
        correct:       g.correct,
        skipped:       g.skipped,
        correctAnswer: g.correctLabel
      }))
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = `acadobre-${Date.now()}.json`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
  }

  return { init };
})();

// ── Boot
document.addEventListener('DOMContentLoaded', () => App.init());