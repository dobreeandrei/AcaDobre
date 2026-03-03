=====================================================
       _                ___      _              
      /_\   ___ __ _   /   \___ | |__  _ __ ___ 
     //_\\ / __/ _` | / /\ / _ \| '_ \| '__/ _ \
    /  _  \ (_| (_| |/ /_// (_) | |_) | | |  __/
    \_/ \_/\___\__,_/___,' \___/|_.__/|_|  \___|

=====================================================

bine ati venit la acadobre. daca ati ajuns pana aici probabil stiti cam cu ce se mananca github si cum se utilizeaza platforma, dar le las aici ca sa pot transofrma intr-un proiect pt faculta.

AcaDobre este o platforma pentru intrebari de tip grila in scop de pregatire pentru Olimpiada de Informatica Aplicata "AcadNet" - sectiunea Retele, proba teoretica. Aceste intrebari acopera cunostintele necesare pentru promovarea examenului si obtinerea certificarii CCNA (Cisco Certified Network Associate). 

Aplicatia funcioneaza prin "sesiuni de quiz" unde este cronometrat timpul de completare al raspunsurilor utilizatorului, punctajul calculat procentual si stabilit numarul de raspunsuri corecte.
Pe prima pagina exista o lista cu "topics" unde utilizatorul isi poate alege din care subiecte sa fie alcatuita sesiunea de quiz. Fiecare topic contine o lista de intrebari care apartin subiectului numit la topic.

#=====================================================

Aplicatia poate functiona atat online prin pagina de github.io, cat si local, offline.
Intrebarile sunt introduse manual de catre mine la fiecare commit, asa ca in cazul utilizarii offline, pentru fiecare update la cod sau adaugare de intrebari va trebui inlocuit fisierul unde era salvata aplicatia pentru a fi la zi.

Ghid de utilizare locala:

Windows/Linux/Mac:
- Descarcati fisierul platformei in format zip, dezarhivati, si deschideti fisierul html. Ar trebui sa functioneze perfect in browser.

Android/IOS:
- Deschideti pagina github.io a platformei si activati optiunea de a descarca si 'adaugati la pagina principala'.

#=====================================================

Shortcuturi in timpul sesiunii de quiz:
- Navigarea se poate face atat prin mouse, dar si folosind tasta "Tab".
- "←" (Left Arrow) : Intoarece la intrebarea anterioara.
- "→" (Right Arrow) : Trece la intrebarea urmatoare.
- "↵" (Enter) : Trece la intrebarea urmatoare.
- La intrebarile cu variante multiple, apasand tastele numerice de la tastatura va selecta varianta cu acel numar de ordine.
- La intrebarile unde trebuie puse elemente in ordinea corecta, selectand un element si apasand tastele numerice de la tastatura va muta elementul la acel numar de ordine.

#=====================================================

Utilizatorul isi poate alege oricat de multe subiecte din lista de topicuri disponibile.
Utilizatorul isi poate alege cat de multe intrebari sa aibe sesiunea de quiz, cu maximul fiind toate intrebarile din topicurile selectate. Programul va alege aleatoriu atatea intrebari cat indica utilizatorul din lista de topicuri selectate.

Optiunea selectata default este ca intrebarile sa fie selectate in ordine aleatorie, insa poate fi dezactivata in favoarea ordinei in care sunt scrise intrebarile in cod.
* In cazul selectarii unui topic care contine intrebari de tip header-fill, deoarece acestea cuprind un numar mai mare de intrebari, exista optiunea de a afisa doar intrebarea pentru header, fara alte intrebari.

Dupa ce au fost selectate topicurile, sesiunea de quiz poate incepe.

In timpul sesiunii de quiz, utilizatorul are liber la care din intrebarile disponibile raspunde.
Intrebarile pot fi raspunse, sarite, sau modificate.
In partea dreapta a sesiunii de quiz exista o "harta" prin care utilizatorul poate naviga cu usurinta la oricare intrebare din quiz.
Exista optiunea de a "marca" o intrebare. Aceasta functie evidentiaza intrebarea in harta pentru posibila revizuire ulterioara. Marcarea este pur estetica.
Utilizatorul poate trimite raspunsul fara a fi completat toate intrebarile, insa intrebarile fara raspuns vor fi marcate drept incorect.

#=====================================================

Structura platformei:
Platforma are, la versiunea curenta, 6 tipuri de intrebari:
- 'open-ended'            -> intrebari cu raspunsul provenit de la tastatura;
- 'multiple-choice'       -> intrebari cu optiuni de raspuns (pot fi oricat de multe variante);
- 'multiple-choice-multi' -> intrebari cu optiuni de raspuns si mai multe variante corecte (pot fi oricat de multe optiuni si variante corecte);
- 'image-order'           -> intrebari unde utilizatorul trebuie sa puna o serie de imagini intr-o anumita ordine;
- 'label-order'           -> intrebari unde utilizatorul trebuie sa puna o lista de elemente intr-o anumita ordine;
- 'matching'              -> intrebari unde trebuie facute asocieri intre o lista de intrebari si o lista de variante de raspuns.
- 'header-fill'			  -> intrebari unde sunt afisate imagini 'blank' pentru antetele protocoalelor de comunicare, asemanator unei harti mute, unde utilizatorul trebuie sa completeze campurile in ordinea corecta.

Toate intrebarile au suport pentru:
- Afisarea unui hint optional in timpul grilei;
- Afisarea unei explicatii optionale dupa trimiterea grilei;
Pentru intrebarile 'open-ended', 'multiple-choice', 'multiple-choice-multi', 'matching':
- Afisarea unei imagini in timpul grilei.

#=====================================================

