ACADOBRE_QUESTIONS.push({
  id: 'etherchannel',
    topic: 'Etherchannel',
    questions: [
    {
      type: 'open-ended',
      text: 'Cat de des sunt trimise mesajele de agregare PAgP? (secunde)',
      acceptedAnswers: ['30'],
    },
    {
      type: 'open-ended',
      text: 'Cat de des sunt trimise mesajele de agregare LACP? (secunde)',
      acceptedAnswers: ['30'],
    },
    {
      type: 'open-ended',
      text: 'Care este numarul maxim de legaturi active intr-un Etherchannel?',
      acceptedAnswers: ['8'],
    },
    {
      type: 'open-ended',
      text: 'Care este codul pentru standardul vechi IEEE LACP?',
      acceptedAnswers: ['802.3AD', '802.3ad'],
    },
    {
      type: 'open-ended',
      text: 'Care este codul pentru standardul nou IEEE LACP?',
      acceptedAnswers: ['802.1AX', '802.1ax'],
    },
    {
      type: 'matching',
      text: 'Asociati descrierea modului de functionare ale interfetelor Etherchannel cu numele modului de configurare',
      subQuestions: [
        { text: 'Trimite mesaje de agregare PAgP', answer: 'Desirable' },
        { text: 'Asculta, dar nu trimite mesaje de agregare PAgP', answer: 'Auto' },
        { text: 'Trimite mesaje de agregare LACP', answer: 'Active' },
        { text: 'Asculta, dar nu trimite mesaje de agregare LACP', answer: 'Passive' },
        { text: 'Etherchannel static', answer: 'On' },
      ],
      options: ['Active', 'Passive', 'Desirable', 'Auto', 'On'],
    },
    {
      type: 'multiple-choice',
      text: 'Ce trebuie facut prima data inaintea configurarii Etherchannel?',
      options: ['Oprirea porturilor implicate', 'Setarea porturilor in modul trunk', 'Setarea porturilor in modul access', 'Setarea VLAN-ului nativ', 'Schimbarea hostname-ului pe swithcuri'],
      correctIndex: 0,
    },
    {
      type: 'multiple-choice',
      text: 'Este adevarat ca pentru a forma un Etherchannel interfetele participante trebuie sa aibe acelasi duplex?',
      options: ['Adevarat', 'Fals'],
      correctIndex: 0,
    },
    {
      type: 'multiple-choice',
      text: 'Este adevarat ca un Etherchannel se poate forma doar cu interfetele participante setate pe modul trunk?',
      options: ['Adevarat', 'Fals'],
      correctIndex: 1,
    },
    {
      type: 'multiple-choice',
      text: 'Este adevarat ca pentru a forma un Etherchannel trebuie sa avem aceeasi informatie de VLAN pe interfetele participante?',
      options: ['Adevarat', 'Fals'],
      correctIndex: 0,
    },
    {
      type: 'multiple-choice',
      text: 'Este adevarat ca pentru a forma un Etherchannel trebuie ca numarul interfetelor participante sa fie acelasi pe ambele switchuri?',
      options: ['Adevarat', 'Fals'],
      correctIndex: 1,
    },
    {
      type: 'multiple-choice',
      text: 'Este adevarat ca pentru a forma un Etherchannel nu trebuie ca numarul de channel-group sa fie acelasi pe ambele switchuri?',
      options: ['Adevarat', 'Fals'],
      correctIndex: 0,
    },
    {
      type: 'multiple-choice',
      text: 'Daca la un capat de Etherchannel avem configurat modul auto, ce mod poate fi cofigurat pe celalalt capat pentru un Etherchannel functional?',
      options: ['Desirable', 'Pasive', 'Auto', 'Active', 'On', 'Off'],
      correctIndex: 0,
    },
    {
      type: 'multiple-choice',
      text: 'Daca la un capat de Etherchannel avem configurat modul pasiv, ce mod poate fi cofigurat pe celalalt capat pentru un Etherchannel functional?',
      options: ['Desirable', 'Pasive', 'Auto', 'Active', 'On', 'Off'],
      correctIndex: 3,
    },
    {
      type: 'multiple-choice',
      text: 'Daca la un capat de Etherchannel avem configurat modul On, ce mod poate fi cofigurat pe celalalt capat pentru un Etherchannel functional?',
      options: ['Desirable', 'Pasive', 'Auto', 'Active', 'On', 'Off'],
      correctIndex: 4,
    },
    {
    type: 'multiple-choice',
    text: 'Ce se intampla daca un port dintr-un Etherchannel devine indisponibil?',
    options: ['Traficul este redistribuit pe celelalte linkuri active', 'Intreg Etherchannel-ul cade', 'Se dezactiveaza STP pe toate porturile', 'Se formeaza o bucla de nivel 2'],
    correctIndex: 0,
    },
    {
    type: 'multiple-choice',
    text: 'Ce protocol este proprietar Cisco pentru negocierea Etherchannel?',
    options: ['PAgP', 'LACP', 'STP', 'VTP'],
    correctIndex: 0,
    },
    {
    type: 'multiple-choice',
    text: 'Etherchannel este vazut de STP ca:',
    options: ['Un singur link logic', 'Linkuri separate', 'Un port blocat permanent', 'Un trunk separat pentru fiecare interfata'],
    correctIndex: 0,
    },
    {
      type: 'multiple-choice-multi',
      text: 'Daca la un capat de Etherchannel avem configurat modul desirable, ce mod poate fi cofigurat pe celalalt capat pentru un Etherchannel functional?\nAlegeti 2 variante.',
      options: ['Desirable', 'Pasive', 'Auto', 'Active', 'On', 'Off'],
      correctIndices: [0, 2]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Daca la un capat de Etherchannel avem configurat modul activ, ce mod poate fi cofigurat pe celalalt capat pentru un Etherchannel functional?\nAlegeti 2 variante.',
      options: ['Desirable', 'Pasive', 'Auto', 'Active', 'On', 'Off'],
      correctIndices: [1, 3]
    },
    ]
});
