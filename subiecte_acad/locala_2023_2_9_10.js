window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'locala_2023_2_9_10',
  topic: 'Locala (2) 9-10 2023',
  questions: [
    {
      type: 'multiple-choice-multi',
      text: 'Care două comenzi pot fi folosite pe un host Windows pentru a afișa tabela de rutare? (Alegeți 2)',
      options: [
        'show ip route',
        'tracert',
        'netstat -s',
        'route print',
        'print route',
        'netstat -r'
      ],
      correctIndices: [3, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Care nivel al modelului TCP/IP asigură o rută pentru transmiterea mesajelor printr-o rețea interconectată?',
      options: [
        'Sesiune',
        'Prezentare',
        'Aplicație',
        'Transport',
        'Internet',
        'Acces la rețea'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice-multi',
      text: 'Un administrator de rețea proiectează o rețea wireless. Care trei aspecte NU trebuie luate în considerare la construirea unei rețele wireless? (Alegeți 3)',
      options: [
        'securitate',
        'coliziunea pachetelor',
        'interferențe',
        'aria de acoperire',
        'opțiuni de mobilitate',
        'cablare extensivă'
      ],
      correctIndices: [1, 4, 5]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care afirmații despre rutele statice IPv4 sunt false? (Alegeți 3)',
      options: [
        'Cuvântul cheie distance este folosit pentru a crea o rută statică complet specificată.',
        'Folosirea exclusivă a interfeței de ieșire este comună în configurațiile point-to-point.',
        'Rețeaua sursă este identificată folosind adresa de rețea și masca wildcard.',
        'Rețeaua destinație nu este identificată folosind adresa de rețea și masca wildcard.',
        'Folosirea exclusivă a interfeței de ieșire nu este comună în configurațiile point-to-point.',
        'Rețeaua sursă nu este identificată folosind adresa de rețea și masca wildcard.'
      ],
      correctIndices: [0, 2, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Un nou switch de nivel 3 este conectat la un router și este configurat pentru rutare inter-VLAN. Care trei din cele cinci pași necesari configurării NU sunt obligatorii? (Alegeți 3)',
      options: [
        'atribuirea porturilor la VLAN-uri',
        'introducerea comenzii „no switchport" pe portul conectat la router',
        'atribuirea porturilor la VLAN-ul nativ',
        'activarea rutării IP',
        'modificarea VLAN-ului implicit',
        'instalarea unei rute statice'
      ],
      correctIndices: [2, 4, 5]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Conform schemei, care hosturi vor primi cereri ARP de la hostul B, presupunând că portul Fa0/4 de pe ambele switch-uri este configurat să transporte trafic pentru mai multe VLAN-uri? (Alegeți 2)',
      image: 'subiecte_acad/images/locala_2023_2_910/q6.png',
      options: [
        'hostul C',
        'hostul E',
        'hostul F',
        'hostul G',
        'hostul B',
        'hostul D'
      ],
      correctIndices: [1, 3]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Nivelul aplicație al modelului TCP/IP îndeplinește funcțiile a trei niveluri ale modelului OSI. Care sunt doua dintre acestea? (Alegeți 2)',
      options: [
        'fizic',
        'transport',
        'legătură de date',
        'aplicație',
        'sesiune',
        'rețea'
      ],
      correctIndices: [3, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care NU sunt componente ale unei adrese IPv6 unicast globale? (Alegeți 2)',
      options: [
        'Internet Routing Prefix',
        'Global Routing Prefix',
        'prefix length',
        'Interface ID',
        'broadcast address',
        'ID subrețea'
      ],
      correctIndices: [0, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Un server primește un pachet de la un client. Pachetul are numărul portului destinație 179. Ce serviciu solicită clientul?',
      options: [
        'HTTP',
        'SMTP',
        'DNS',
        'BGP',
        'DHCP',
        'POP3'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, dacă adresele IP ale routerului default gateway și ale serverului DNS sunt corecte, care este problema de configurare?',
      image: 'subiecte_acad/images/locala_2023_2_910/q10.png',
      options: [
        'Serverul DNS și routerul default gateway trebuie să fie în aceeași subrețea.',
        'Comanda network este greșită.',
        'Adresa IP a serverului DNS nu se află în lista de adrese excluse.',
        'Comanda network este incompletă.',
        'Adresa IP a routerului default gateway nu se află în lista de adrese excluse.',
        'Comenzile default-router și dns-server trebuie configurate cu măști de subrețea.'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice-multi',
      text: 'Un angajat al unei mari corporații se conectează de la distanță la companie folosind numele de utilizator și parola corespunzătoare. Angajatul participă la o videoconferință importantă cu un client referitoare la o vânzare mare. Este important ca calitatea video să fie excelentă în timpul întâlnirii. Angajatul nu știe că, după ce s-a autentificat cu succes, conexiunea către ISP-ul companiei a eșuat. Totuși, conexiunea secundară s-a activat în câteva secunde. Disfuncționalitatea nu a fost observată de angajat sau de ceilalți angajați.\n\nCare trei caracteristici ale rețelei nu sunt descrise în acest scenariu? (Alegeți 3)',
      options: [
        'integritate',
        'calitatea serviciului (QoS)',
        'toleranță la erori',
        'scalabilitate',
        'securitate',
        'rețea prin cablul de alimentare (powerline networking)'
      ],
      correctIndices: [0, 3, 5]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Un administrator a definit un cont de utilizator local cu parolă secretă pe routerul R1 pentru utilizare cu SSH. Care trei pași suplimentari NU sunt necesari pentru a configura R1 să accepte doar conexiuni SSH criptate? (Alegeți 3)',
      options: [
        'Configurarea DNS pe router.',
        'Generarea cheilor pre-shared bidirecționale.',
        'Activarea sesiunilor vty Telnet de intrare.',
        'Generarea cheilor SSH.',
        'Activarea sesiunilor vty SSH de intrare.',
        'Configurarea numelui de domeniu IP pe router.'
      ],
      correctIndices: [0, 1, 2]
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, ce protocol a fost responsabil pentru construirea tabelei afișate?',
      image: 'subiecte_acad/images/locala_2023_2_910/q13.png',
      options: [
        'ICMP',
        'STP',
        'DNS',
        'ARP',
        'SSH',
        'DHCP'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice-multi',
      text: 'Conform schemei, care trei informații NU pot fi determinate din afișarea comenzii show ip interface brief? (Alegeți 3)',
      image: 'subiecte_acad/images/locala_2023_2_910/q14.png',
      options: [
        'Două dispozitive sunt conectate la switch.',
        'Switch-ul nu poate fi administrat de la distanță.',
        'Două interfețe fizice nu au fost configurate.',
        'SVI-ul implicit a fost configurat.',
        'Au fost configurate parole pe switch.',
        'Un dispozitiv este conectat la o interfață fizică.'
      ],
      correctIndices: [0, 1, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Ce protocol adaugă securitate conexiunilor la distanță?',
      options: [
        'FTP',
        'HTTP',
        'FHRP',
        'SSH',
        'POP',
        'NetBEUI'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Un server primește un pachet de la un client. Pachetul are numărul portului destinație 22. Ce serviciu solicită clientul?',
      options: [
        'FTP Control',
        'FTP Data',
        'DHCP',
        'SMTP',
        'SSH',
        'Telnet'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Un server primește un pachet de la un client. Pachetul are numărul portului destinație 53. Ce serviciu solicită clientul?',
      options: [
        'DNS',
        'NetBIOS',
        'POP3',
        'NETBT',
        'HTTPS',
        'IMAP'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Ce comandă poate fi folosită pe un PC Windows pentru a vedea configurația IP a acelui calculator?',
      options: [
        'show interface ip',
        'show ip',
        'ipconfig',
        'show ip interface brief',
        'ping',
        'show interface'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'O imprimantă laser cu fir este conectată la un calculator de acasă. Imprimanta a fost partajată astfel încât și alte calculatoare din rețeaua de acasă o pot folosi. Ce model de rețea este utilizat?',
      options: [
        'peer-to-point',
        'point-to-point',
        'peer-to-peer',
        'master-slave',
        'master-client',
        'client-based'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Un server primește un pachet de la un client. Pachetul are numărul portului destinație 110. Ce serviciu solicită clientul?',
      options: [
        'HTTP',
        'DNS',
        'SMTP',
        'POP3',
        'DHCP',
        'BGP'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care două protocoale funcționează la nivelul superior al suitei de protocoale TCP/IP? (Alegeți 2)',
      options: [
        'IP',
        'Ethernet',
        'POP',
        'TCP',
        'UDP',
        'DNS'
      ],
      correctIndices: [2, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Utilizatorii unei sucursale au putut accesa un site dimineața, dar nu au mai avut conectivitate cu acesta de la prânz. Ce ar trebui verificat sau făcut?',
      options: [
        'Verificați configurația rutei statice flotante și ajustați distanța administrativă.',
        'Folosiți comanda „show ip interface brief" pentru a vedea dacă o interfață este inactivă.',
        'Folosiți comanda „show interface ip brief" pentru a vedea dacă o interfață este inactivă.',
        'Folosiți comanda „show ip brief" pentru a vedea dacă o interfață este inactivă.',
        'Verificați că ruta statică către server este prezentă în tabela de rutare.',
        'Creați o rută statică flotantă către acea rețea.'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care sunt două tehnici de atenuare a atacurilor VLAN? (Alegeți 2)',
      options: [
        'Setați VLAN-ul nativ la un VLAN neutilizat.',
        'Activați DTP.',
        'Dezactivați trunking-ul manual.',
        'Utilizați VLAN-uri private.',
        'Dezactivați DTP.',
        'Activați Source Guard.'
      ],
      correctIndices: [0, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care două afirmații despre adresele IPv4 și IPv6 sunt corecte? (Alegeți 2)',
      options: [
        'Adresele IPv4 sunt reprezentate prin numere hexazecimale.',
        'Adresele IPv6 au lungimea de 124 de biți.',
        'Adresele IPv6 sunt reprezentate prin numere hexazecimale.',
        'Adresele IPv4 au lungimea de 32 de biți.',
        'Adresele IPv6 au lungimea de 32 de biți.',
        'Adresele IPv6 nu sunt reprezentate prin numere hexazecimale.'
      ],
      correctIndices: [2, 3]
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, adresa IP a cărui interfețe de dispozitiv ar trebui utilizată ca setare a default gateway-ului pentru hostul H1?',
      image: 'subiecte_acad/images/locala_2023_2_910/q26.png',
      options: [
        'R1: S0/0/0',
        'R1: G0/0',
        'R3: G0/0',
        'R2: S0/0/0',
        'R1: G0/1',
        'R2: S0/0/1'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Dacă un dispozitiv de rețea are o mască de /19, câte adrese IP sunt disponibile pentru hosturi în această rețea?',
      options: [
        '8190',
        '8194',
        '3968',
        '8000',
        '4000',
        '8192'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care NU sunt trei caracteristici ale procesului CSMA/CD? (Alegeți 3)',
      options: [
        'Dispozitivul cu token-ul electronic este singurul care poate transmite după o coliziune.',
        'Toate dispozitivele dintr-un segment văd datele care trec prin mediul de rețea.',
        'Un dispozitiv ascultă și așteaptă până când mediul nu este neocupat înainte de a transmite.',
        'Dispozitivele pot fi configurate cu o prioritate de transmisie mai mare.',
        'Un semnal jam indică faptul că coliziunea s-a rezolvat și mediul nu este ocupat.',
        'După detectarea unei coliziuni, hosturile pot încerca să reia transmisia după o întârziere aleatorie.'
      ],
      correctIndices: [2, 3, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care NU sunt trei standarde comune respectate la construirea și instalarea cablurilor? (Alegeți 3)',
      options: [
        'tipuri de conectori',
        'culoarea conectorilor',
        'rezistența la tracțiune a izolatorului din plastic',
        'pinout-uri',
        'lungimi de cablu',
        'cost pe metru'
      ],
      correctIndices: [1, 2, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Un server primește un pachet de la un client. Pachetul are numărul portului destinație 80. Ce serviciu solicită clientul?',
      options: [
        'SMTP',
        'DHCP',
        'HTTP',
        'DNS',
        'SSL',
        'SSH'
      ],
      correctIndex: 2
    }
  ]
});
