```
=====================================================
       _                ___      _              
      /_\   ___ __ _   /   \___ | |__  _ __ ___ 
     //_\\ / __/ _` | / /\ / _ \| '_ \| '__/ _ \
    /  _  \ (_| (_| |/ /_// (_) | |_) | | |  __/
    \_/ \_/\___\__,_/___,' \___/|_.__/|_|  \___|
=====================================================
```

**AcaDobre** is a free, browser-based quiz platform for practicing the theory exam of the **"AcadNet" Applied Informatics Olympiad - Networking section**, the same material you need for the Cisco **CCNA** certification.

It runs online through GitHub Pages or just as well offline from a downloaded copy.

---

## English

Being a volunteer instructor for the [ProjectIVI](https://projectivi.ro) "IT Infrastructure" course, I mentored 4 students in participating at the AcadNet Networking Nationals. While I was helping them prepare and studying myself, I got really frustrated with how we practiced: PDF question sets that had to be edited and checked by hand, which ate up an enormous amount of time. So I decided to automate the whole thing and build an actual quiz platform for it. I used AI tools to get the first version of the code off the ground, but the output had plenty of problems, both visual and functional. So I learned enough HTML, CSS, and JavaScript to shape the platform into exactly what I had in mind, and I've been refining it ever since.

### What it does

AcaDobre runs in "quiz sessions". You pick which topics the session should cover, choose how many questions you want, and the app builds a timed session, grades it as a percentage, and tells you how many you got right.

- **Pick the topics.** The setup screen lists every available topic; choose any combination. Each topic is a set of questions on one subject. They can be combined in any way. (for example, a topic might be about DHCPv4, another about the OSI model, etc.)
- **Choose the length.** Set how many questions the session should have, up to all of them. The app picks them at random from the topics you selected.
- **Answer in any order.** During the session you're free to answer, skip, or change any question. A question map on the right lets you jump straight to any of them.
- **Flag for review.** Mark a question and it stands out on the map so you can come back to it later. (Marking is purely visual; it doesn't affect grading.)
- **Submit whenever.** You can hand in the session before it's complete; any unanswered question simply counts as wrong.

The default operating mode is that question order is randomized, but that can be toggled off in favour of the order the questions are hard-coded. In case a topic that contains a `header-fill` question type, since these take the most time out of all, there is an option to show header type questions at the start of the session.

### Question types

The platform currently supports seven question types:

- **open-ended** - you type the answer.
- **multiple-choice** - one correct option out of several.
- **multiple-choice-multi** - several options, more than one of them correct.
- **image-order** - arrange a set of images into the correct order.
- **label-order** - arrange a list of items into the correct order.
- **matching** - match a list of prompts to a list of answers.
- **header-fill** - blank protocol-header diagrams (like a blank map) where you fill in each field in the correct order.

Every question supports an optional hint (shown during the quiz) and an optional explanation (shown after submitting). The `open-ended`, `multiple-choice`, `multiple-choice-multi`, and `matching` types can also show an image alongside the question.

### Running it

**Online** - just open the GitHub Pages page of this repository.

**On your phone (Android / iOS)** - open the GitHub Pages page and use "Add to Home Screen". It installs like an app and works offline afterwards.

**Locally (Windows / Linux / Mac)** - download the repository as a ZIP, unzip it, and open `index.html`. It runs straight from `file://`, no server required. Because I add questions by hand with each commit, an offline copy only updates when you replace it with a fresh download.

### Keyboard shortcuts (during a quiz)

- Navigate with the mouse or the **Tab** key.
- **←** previous question, **→** or **Enter** next question.
- On multiple-choice questions, the **number keys** select the option with that number.
- On ordering questions, select an item and press a **number key** to move it to that position.

### TL;DR

The whole thing is hand-written vanilla HTML, CSS, and JavaScript, served as-is. There's no database, no framework, and no build step. Questions live in plain JavaScript files under `questions/`, one file per topic, and each file registers itself with the app, so adding a new topic is just a matter of writing one more file.

---

## Română

Fiind instructor voluntar pentru cursul "Infrastructura IT" de la [ProjectIVI](https://projectivi.ro) Horezu, am mentorat 4 elevi pentru etapa nationala a olimpiadei de retelistica "AcadNet". In timp ce ii pregateam si invatam si eu insumi, devenisem foarte frustrat de modul de pregatire folosind subiecte PDF, care necesitau editare si verificare manuala si ocupau foarte mult timp. Ca sa rezolv aceasta problema, am decis sa dezvolt un program care sa automatizeze intregul proces, o platforma de grile propriu-zisa. Am folosit unelte AI pentru dezvoltarea initiala a codului, insa rezultatul avea destul de multe probleme, atat vizuale cat si de functionalitate. Asa ca am invatat un nivel de baza de HTML, CSS si JavaScript ca sa pot modela platforma exact dupa cum mi-am dorit.

### Ce face

AcaDobre este o platforma de intrebari de tip grila pentru pregatirea Olimpiadei de Informatica Aplicata "AcadNet", sectiunea Retele, proba teoretica. Intrebarile acopera cunostintele necesare pentru promovarea examenului si obtinerea certificarii CCNA (Cisco Certified Network Associate).

Aplicatia functioneaza prin "sesiuni de quiz": se cronometreaza timpul de completare, punctajul este calculat procentual si se afiseaza numarul de raspunsuri corecte.

- **Selectarea subiectelor.** Pe prima pagina exista o lista de topicuri din care iti poti alcatui sesiunea. Fiecare topic contine intrebarile care apartin subiectului respectiv. Subiectele pot fi imbinate in orice mod. (de exemplu, un subiect poate fi despre SSH, altul despre DNS, etc.)
- **Selectarea numarului de intrebari.** Poti alege cate intrebari sa aiba sesiunea, maximul fiind toate intrebarile din topicurile selectate. Programul alege aleatoriu din topicurile selectate numarul indicat de intrebari.
- **Raspunzi in orice ordine.** In timpul sesiunii intrebarile pot fi raspunse, sarite sau modificate. In partea dreapta exista o "harta" prin care navighezi cu usurinta la oricare intrebare.
- **Marcheaza pentru revizuire.** Poti "marca" o intrebare, iar aceasta este evidentiata in harta pentru o posibila revizuire ulterioara. Marcarea este pur estetica.
- **Submit oricand.** Poti trimite raspunsul fara a fi completat toate intrebarile, insa cele fara raspuns vor fi marcate drept incorect.

Optiunea selectata default este ca intrebarile sa fie alese in ordine aleatorie, insa poate fi dezactivata in favoarea ordinii in care sunt scrise intrebarile in cod. In cazul selectarii unui topic care contine intrebari de tip `header-fill`, deoarece acestea sunt mai consistente, exista optiunea de a afisa intrebarile de tip header la inceputul sesiunii.

### Tipurile de intrebari

La versiunea curenta, platforma are sapte tipuri de intrebari:

- **open-ended** - intrebari cu raspunsul scris de la tastatura;
- **multiple-choice** - intrebari cu optiuni de raspuns (pot fi oricat de multe variante);
- **multiple-choice-multi** - optiuni de raspuns cu mai multe variante corecte;
- **image-order** - trebuie pusa o serie de imagini intr-o anumita ordine;
- **label-order** - trebuie pusa o lista de elemente intr-o anumita ordine;
- **matching** - trebuie facute asocieri intre o lista de intrebari si o lista de variante de raspuns;
- **header-fill** - sunt afisate imagini "blank" pentru antetele protocoalelor de comunicare, asemanator unei harti mute, unde trebuie completate campurile in ordinea corecta.

Toate intrebarile au suport pentru un hint optional in timpul grilei si o explicatie optionala dupa trimitere. Intrebarile `open-ended`, `multiple-choice`, `multiple-choice-multi` si `matching` pot afisa, in plus, o imagine in timpul grilei.

### Ghid de utilizare

**Online** - directp pe pagina de GitHub Pages a acestui repository.

**Pe telefon (Android / iOS)** - pe pagina de GitHub Pages si foloseste optiunea "Adauga la ecranul principal" din meniul browserului. Se instaleaza ca o aplicatie si functioneaza offline dupa aceea.

**Local (Windows / Linux / Mac)** - descarca repository-ul in format ZIP, dezarhiveaza-l si deschide `index.html`. Functioneaza direct din `file://`, fara server. Pentru ca adaug intrebarile manual la fiecare commit, o copie offline se actualizeaza doar inlocuind-o cu o descarcare noua.

### Shortcuts (in timpul grilei)

- Navigarea se face cu mouse-ul sau cu tasta **Tab**.
- **←** intrebarea anterioara, **→** sau **Enter** intrebarea urmatoare.
- La intrebarile cu variante, **tastele numerice** selecteaza varianta cu acel numar de ordine.
- La intrebarile de ordonare, selecteaza un element si apasa o **tasta numerica** ca sa il muti la acea pozitie.

### TL;DR

Totul este scris de mana in HTML, CSS si JavaScript vanilla, servit asa cum e. Nu exista baza de date, framework sau pas de build. Intrebarile stau in fisiere JavaScript simple, in `questions/`, cate un fisier pentru fiecare topic, iar fiecare fisier se inregistreaza singur in aplicatie, asa ca adaugarea unui topic nou inseamna doar sa scriu inca un fisier.
