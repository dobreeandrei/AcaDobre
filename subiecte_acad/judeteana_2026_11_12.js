window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'judeteana_2026_11_12',
  topic: 'Judeteana 11-12 2026',
  questions: [
    {
      type: 'multiple-choice',
      text: 'Ce protocol este folosit pentru a testa traseul pe care il parcurg pachetele pana la o destinatie intr-o retea',
      options: [
        'FTP',
        'SMTP',
        'Traceroute',
        'DHCP',
        'SNMP',
        'Telnet'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Ce se întâmplă dacă un switch detectează o adresă MAC sursă existentă în tabelul MAC, dar asociată unui port diferit față de cel pe care frame-ul a intrat?',
      options: [
        'Switch-ul ignoră frame-ul și îl șterge din buffer',
        'Switch-ul actualizează intrarea din tabelul MAC cu noul port',
        'Switch-ul efectuează o verificare FCS înainte de a decide transmiterea',
        'Switch-ul păstrează intrarea veche și adaugă o nouă intrare pentru portul curent',
        'Switch-ul transmite frame-ul pe toate porturile, cu excepția celui de intrare',
        'Switch-ul blochează portul curent pentru a preveni conflictele'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Stabiliți dacă următoarea afirmație este adevărată sau falsă:\nUn pachet LSA conține unul sau mai multe pachete LSU-uri, iar un pachet LSU conține informații despre rutele către rețele destinație.',
      options: ['Adevărat', 'Fals'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care din variantele de mai jos reprezintă un Wildcard valid al unui ACL ce oprește traficul primit de la un host specific?',
      options: [
        '0.0.0.255',
        'Niciuna dintre variante nu este corectă.',
        '255.255.255.255',
        '1.1.1.1',
        '255.255.0.0',
        '0.0.0.0'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Care este caracteristica principală a unui firewall stateful?',
      options: [
        'Se bazează doar pe adrese IP sursă și destinație.',
        'Menține o tabelă de stare cu informații despre conexiuni.',
        'Rulează doar la nivelul Sesiune.',
        'Blochează automat toate conexiunile cu IP public.',
        'Rulează doar la nivelul Aplicație.',
        'Permite doar trafic ce folosește porturile TCP.'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care comandă este folosită pentru a verifica lista tuturor host-urilor în rețeaua Ethernet locală a unui router?',
      options: [
        'show version',
        'show startup-config',
        'show interface',
        'show arp',
        'show ip interface',
        'show ip route'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Ce tip de NAT folosește o adresă publică diferită pentru fiecare adresă privată și este configurată manual?',
      options: [
        'NAT Overload',
        'Reverse NAT',
        'Dynamic NAT',
        'DNS NAT',
        'Static NAT',
        'PAT'
      ],
      correctIndex: 4
    },
    {
      type: 'open-ended',
      text: 'Care este numărul domeniilor de coliziune al rețelei de mai sus?',
      image: 'subiecte_acad/images/judeteana_2026_1112/q8.png',
      acceptedAnswers: ['12']
    },
    {
      type: 'multiple-choice',
      text: 'Alegeți dacă afirmația următoare este adevărată sau falsă: Modelul Peer-to-Peer (P2P) folosește protocolul FTP pentru a transfera fișiere direct între noduri, eliminând astfel necesitatea unui server centralizat, deoarece fiecare dispozitiv funcționează simultan ca și client și server FTP.',
      options: ['Adevărat', 'Fals'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care este rolul A flag dintr-un mesaj ICMPv6 RA?',
      options: [
        'Indică host-ului că trebuie folosită metoda SLAAC.',
        'Indică host-ului că routerul trebuie să răspundă la solicitările RS.',
        'Setează implicit M flag la 1.',
        'Indică host-ului că trebuie folosită stateful DHCPv6.',
        'Activează mecanismul Duplicate Address Detection.',
        'Setează implicit O și M flag la 1.'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice-multi',
      text: 'Selectează cele 3 componente ale structurii unei adrese IPv6 GUA. (Alegeți 3 variante)',
      options: [
        'Subnet Prefix',
        'Global Routing ID',
        'Interface Prefix',
        'Global Routing Prefix',
        'Interface ID',
        'Subnet ID'
      ],
      correctIndices: [3, 4, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Care este tipul unui mesaj LSA definit pentru zone de tip Not-So-Stubby?',
      options: [
        'LSA de tip 7',
        'LSA de tip 5',
        'LSA de tip 6',
        'LSA de tip 2',
        'LSA de tip 4',
        'LSA de tip 3'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care sunt mesajele pe baza cărora funcționează procesul de obținere a unei adrese IPv4 din cadrul protocolului DHCPv4 și care este ordinea lor de trimitere?',
      options: [
        '(1)Client:DHCPDISCOVER, (2)Server:DHCPOFFER, (3)Server:DHCPACK',
        '(1)Client:DHCPDISCOVER, (2)Server:DHCPOFFER, (3)Client:DHCPREQUEST, (4)Server:DHCPACK',
        'Niciuna dintre variante nu este corectă.',
        '(1)Client:DHCPREQUEST, (2)Client:DHCPDISCOVER, (3)Server:DHCPOFFER, (4)Server:DHCPACK',
        '(1)Server:DHCPDISCOVER, (2)Client:DHCPREQUEST, (3)Server:DHCPOFFER, (4)Client:DHCPACK',
        '(1)Client:DHCPDISCOVER, (2)Client:DHCPOFFER, (3)Client:DHCPREQUEST, (4)Server:DHCPACK'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care din variantele de mai jos reprezintă o adresă IPv4 Multicast validă? (Alegeți 3 variante)',
      options: [
        '241.104.107.21',
        '210.230.127.255',
        '250.100.255.255',
        '225.45.31.2',
        '230.101.30.15',
        '224.32.189.45'
      ],
      correctIndices: [3, 4, 5]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Alegeți din variantele de mai jos informațiile adevărate despre bazele de date existente la protocolul OSPF. (Alegeți 2 variante)',
      options: [
        '„Adjacency database" este o listă cu toate rețelele direct conectate la router. Acest tabel poate fi vizualizat cu comanda show ip route.',
        '„LSDB" reprezintă un tabel care conține toate informațiile despre toate routerele din rețea, reprezentând și o topologie de rețea. Acest tabel poate fi vizualizat cu comanda show ip ospf database.',
        '„Forwarding database" creează tabela de rutare cu toate rutele învățate în urma algoritmului OSPF. Acest tabel poate fi vizualizat cu comanda show ip route.',
        '„LSDB" reține doar adresele IP ale interfețelor routerului. Aceste informații pot fi vizualizate cu comanda show interfaces.',
        '„Forwarding database" conține lista de routere vecine OSPF. Acest tabel poate fi vizualizat cu comanda show ip ospf neighbor.',
        '„Adjacency database" reprezintă un tabel cu toate routerele vecine cu care un router a stabilit o conexiune bidirecțională. Acest tabel poate fi vizualizat cu comanda show ip ospf database.'
      ],
      correctIndices: [1, 2]
    },
    {
      type: 'multiple-choice',
      text: 'Care este valoarea maximă de secunde care poate fi configurată pentru „Hello Timer" pe un switch Cisco în cadrul protocolului STP?',
      options: ['4 secunde', '15 secunde', '30 secunde', '10 secunde', '2 secunde', '20 secunde'],
      correctIndex: 3
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care sunt două dintre avantajele principale ale unei rețele peer-to-peer? (Alegeți două opțiuni)',
      options: [
        'Complexitate redusă',
        'Fișiere ușor de găsit',
        'Centralizată',
        'Scalabilă',
        'Securitate sporită',
        'Cost mic de implementare'
      ],
      correctIndices: [0, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Câmpul Protocol al unui antet IPv4 are valoarea 6. Care este protocolul folosit de acel pachet IPv4?',
      options: ['DNS', 'UDP', 'ARP', 'TCP', 'ICMP', 'PUP'],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Cum este ales Root Bridge-ul în STP?',
      options: [
        'Switch-ul cu cea mai mică valoare a Bridge ID-ului este ales ca Root Bridge.',
        'Switch-ul cu cea mai mică adresă IP devine Root Bridge.',
        'Switch-ul cu cea mai mare valoare a Bridge ID-ului este ales ca Root Bridge.',
        'Switch-ul cu cea mai mare adresă IP devine Root Bridge.',
        'Se alege switch-ul cu cea mai mare prioritate configurată.',
        'Switch-ul care trimite primul un BPDU devine Root Bridge.'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Cum se calculează adresa de rețea pornind de la o adresă IP și o mască de rețea?',
      options: [
        'Aplicând operația logică SAU (OR) între adresa IP și inversul măștii de rețea',
        'Aplicând operația logică ȘI (AND) între adresa IP și adresa de broadcast',
        'Aplicând operația logică NOT (NEGARE) pe adresa IP',
        'Aplicând operația logică SAU (OR) între adresa IP și masca de rețea',
        'Aplicând operația logică XOR (SAU EXCLUSIV) între adresa IP și masca de rețea',
        'Aplicând operația logică ȘI (AND) între adresa IP și masca de rețea'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Ce este greșit în configurarea de mai sus a unui SVI al unui Switch de Layer 3?',
      image: 'subiecte_acad/images/judeteana_2026_1112/q11.png',
      options: [
        'Comanda „end" nu duce în nivelul corect de configurare.',
        'Comanda „vlan 10" duce în modul greșit de configurare.',
        'Unui SVI nu i se poate asigna o adresă IP.',
        'Interfața trebuia încapsulată.',
        'Nimic nu este greșit la configurare.',
        'Comanda „write" este folosită la nivelul greșit de permisiune.'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care este motivul pentru care PC0 și PC1 nu pot comunica?',
      image: 'subiecte_acad/images/judeteana_2026_1112/q22.png',
      options: [
        'VLAN-ul 10 nu este permis pe portul trunk Fa0/1.',
        'Nu există greșeli, iar PC-urile pot comunica.',
        'Ordinea comenzilor este greșită.',
        'Subinterfețele trebuiau să fie configurate cu comanda „no shutdown".',
        'Subinterfața Gig0/0/0.1 este folosită în loc de Gig0/0/0.10 pentru VLAN 10.',
        'Încapsularea subinterfețelor este greșită.'
      ],
      correctIndex: 1
    },
    {
      type: 'matching',
      text: 'Asociați următorii termeni cu definițiile corespunzătoare lor:',
      subQuestions: [
        { text: 'VLAN-ul de date', answer: 'este VLAN-ul configurat pentru a separa traficul generat de utilizatori. Acestea sunt denumite VLAN-uri de utilizator deoarece separă rețeaua în grupuri de utilizatori sau dispozitive.' },
        { text: 'VLAN-ul nativ', answer: 'este VLAN-ul folosit pentru a transporta trafic neetichetat între switch-uri; implicit este tot VLAN 1, dar poate fi schimbat pentru motive de securitate.' },
        { text: 'VLAN-ul de management', answer: 'este VLAN-ul special configurat pentru a permite accesul la interfața de administrare a dispozitivelor de rețea.' },
        { text: 'VLAN-ul default', answer: 'este VLAN-ul prezent pe toate porturile switch-ului, fără a fi nevoie de o configurare explicită.' }
      ],
      options: [
        'este VLAN-ul configurat pentru a separa traficul generat de utilizatori. Acestea sunt denumite VLAN-uri de utilizator deoarece separă rețeaua în grupuri de utilizatori sau dispozitive.',
        'este VLAN-ul folosit pentru a transporta trafic neetichetat între switch-uri; implicit este tot VLAN 1, dar poate fi schimbat pentru motive de securitate.',
        'este VLAN-ul special configurat pentru a permite accesul la interfața de administrare a dispozitivelor de rețea.',
        'este VLAN-ul prezent pe toate porturile switch-ului, fără a fi nevoie de o configurare explicită.'
      ]
    },
    {
      type: 'multiple-choice',
      text: 'Ce protocol este folosit pentru sincronizarea timpului între dispozitivele din rețea?',
      options: ['NTP', 'ICMP', 'DNS', 'FTP', 'SMTP', 'ARP'],
      correctIndex: 0
    },
    {
      type: 'multiple-choice-multi',
      text: 'În procesul de simplificare a structurii antetului IPv6 comparativ cu IPv4, anumite câmpuri au fost eliminate din antetul de bază. Care dintre următoarele câmpuri nu mai sunt prezente în antetul IPv6? (Alegeți 3 variante)',
      options: [
        'Protocol',
        'Header Checksum',
        'Differentiated Services',
        'Time-to-Live',
        'Flags',
        'Identification'
      ],
      correctIndices: [1, 4, 5]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Se dă următoarea comandă pe un router:\nR1(config)# access-list 10 permit 192.168.10.0 0.0.0.255\nAlegeți afirmațiile adevărate despre această comandă. (Alegeți 2 variante)',
      options: [
        'Permite tot traficul de la adresa IP 192.168.1.0 către orice destinație.',
        'este un ACL extins',
        'este un ACL standard',
        'Permite traficul provenit din intervalul 192.168.10.1 – 192.168.10.254, excluzând adresa de rețea și broadcast.',
        'Permite traficul provenit din rețeaua 192.168.0.0/23, adică de la 192.168.0.0 până la 192.168.1.255.',
        'Permite traficul provenit din intervalul 192.168.10.0 – 192.168.10.255 către orice destinație.'
      ],
      correctIndices: [2, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Care este rolul principal al stratului de acces într-un design de rețea campus pe trei niveluri?',
      options: [
        'Realizează agregarea traficului între clădiri și centre de date',
        'Monitorizează performanța aplicațiilor la nivel de rețea',
        'Administrează interconectarea cu rețelele externe (WAN/Internet)',
        'Coordonează redundanța între switch-urile de distribuție',
        'Oferă conectivitate directă pentru utilizatori și echipamente terminale',
        'Gestionează rutarea inter-VLAN și politica de securitate'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care este intervalul de valori pe care îl poate lua parametrul „distanța" al comenzii „ip route"?',
      options: ['1 - 255', '1 - 100', '0 - 100', '0 - 254', '1 - 256', '0 - 256'],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Dacă PC6 trimite un pachet către PC2, cum va arăta tabela CAM a Switch-ului 1, știind că înaintea trimiterii pachetului, tabela CAM a Switch-ului 1 era nepopulată?',
      image: 'subiecte_acad/images/judeteana_2026_1112/q29.png',
      options: [
        'PC6 - Fa0/3',
        'PC6 - Fa0/2',
        'PC3 - Fa0/1\nPC6 - Fa0/2',
        'PC2 - Fa0/2',
        'PC6 - Fa0/2\nPC2 - Fa0/2',
        'PC2 - Fa0/3'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Din blocul 192.168.80.0/22, se alocă succesiv subrețele pentru 250, 120, 60, 60 și 25 de host-uri asignabile folosind VLSM. Care este a treia adresă IP utilizabilă din ultimul subnet alocat?',
      options: [
        '192.168.82.67',
        '192.168.83.131',
        '192.168.82.195',
        '192.168.83.195',
        '192.168.82.35',
        '192.168.82.3'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Ce lungime are o adresă IPv4?',
      options: ['64 biți', '128 biți', '48 biți', '32 biți', '256 biți', '16 biți'],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Pe router se configurează următoarea comandă:\nR1(config)# access-list 1650 permit 192.168.10.0 0.0.0.255\nCare afirmație este corectă despre ACL-ul de mai sus?',
      options: [
        'ACL-ul 1650 este un ACL extins, deci poate filtra pe bază de adrese sursă, destinație și protocoale.',
        'ACL-ul 1650 este un ACL protocol type-code, deoarece se află în intervalul 1200–1700.',
        'ACL-ul 1650 este un ACL MAC extins, pentru că numărul său se află în intervalul 1100–1899.',
        'ACL-ul 1650 este un ACL standard, deoarece se află în intervalul 1300–1999.',
        'ACL-ul 1650 este invalid, pentru că doar intervalele 1–99 și 100–199 pot fi folosite pe IPv4.',
        'ACL-ul 1650 este un ACL rate-limit, deoarece se află în categoria accesului bazat pe limitarea ratei de trafic.'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Stabiliți dacă următoarea afirmație este adevărată sau falsă:\nÎn mod implicit prioritatea HSRP este 100, însă router-ul cu prioritatea cea mai mare va fi router-ul ales ca fiind router-ul activ. De asemenea, dacă acestuia se activează opțiunea de „preemption" și se va adăuga un router cu o prioritate mai mare ca acesta, în continuare el va rămâne router-ul activ din proces.',
      options: ['Adevărat', 'Fals'],
      correctIndex: 0
    },
    {
      type: 'multiple-choice-multi',
      text: 'Alegeți din variantele de mai jos protocoalele de rutare care sunt de tipul „Link-state". (Alegeți 2 variante)',
      options: ['IGRP', 'IS-IS', 'BGP', 'OSPF', 'RIP', 'EIGRP'],
      correctIndices: [1, 3]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Selectați cei 3 factori folosiți pentru calcularea metricii EIGRP. (Alegeți 3 variante)',
      options: [
        'Load',
        'Tipul de interfață',
        'Delay',
        'Bandwidth',
        'Hop Count-ul',
        'Distanța administrativă'
      ],
      correctIndices: [0, 2, 3]
    },
    {
      type: 'multiple-choice',
      text: 'Stabiliți dacă următoarea afirmație este adevărată sau falsă:\nNivelul legătură de date este alcătuit din 2 subnivele care au următoarele funcții: subnivelul LLC este responsabil pentru controlul accesului la mediu, iar subnivelul MAC se ocupă cu identificarea protocolului de nivel de rețea utilizat pentru cadrele care ajung la acest nivel.',
      options: ['Adevărat', 'Fals'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce secvență de biți este reprezentată de semnalul de mai sus? Semnalul este de tip Manchester.',
      image: 'subiecte_acad/images/judeteana_2026_1112/q37.png',
      options: [
        '01110010',
        'Metoda Manchester nu există.',
        '101001',
        '01010',
        '1001010110100110',
        '100110'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice-multi',
      text: 'Selectați două algoritme de criptare asimetrice. (Alegeți 2 variante)',
      options: ['AES', 'Blowfish', 'RSA', 'Twofish', 'ECC', 'DES'],
      correctIndices: [2, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Care protocol de nivel 3 al stivei TCP/IP oferă livrare segmentelor, cu control de flux, dar introduce overhead semnificativ?',
      options: ['TCP', 'REST', 'SLAAC', 'UDP', 'DHCPv4', 'SFTP'],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care este nivelul de severitate al unui mesaj Syslog de tip „Critical"?',
      options: ['Nivel 1', 'Nivel 4', 'Nivel 6', 'Nivel 2', 'Nivel 5', 'Nivel 3'],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele atacuri constă în trimiterea de mesaje către dispozitivele din rețea, cu scopul de a identifica ce adrese IP sunt active?',
      options: [
        'Trust Exploitation Attack',
        'Port Scan Attack',
        'DDoS Attack',
        'Man-in-the-Middle Attack',
        'Ping Sweep Attack',
        'Internet Queries Attack'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Ce se afișează când executăm comanda „show mac address-table"?',
      options: [
        'Starea de duplex și viteză a fiecărui port.',
        'Adresele IP ale dispozitivelor și porturile asociate.',
        'Lista de control al accesului aplicată.',
        'Rutele către rețelele la distanță.',
        'Adresele MAC, VLAN-urile și porturile asociate.',
        'Versiunea de IOS și timpul de funcționare.'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Pe baza configurărilor afișate, există erori de configurare ale EtherChannel-ului dintre Switch0 și Switch1?',
      image: 'subiecte_acad/images/judeteana_2026_1112/q43.png',
      options: [
        'VLAN-ul nativ nu este același în ambele părți.',
        'Switch0 are EtherChannel-ul dezactivat.',
        'Nu, EtherChannel-ul este configurat corespunzător.',
        'Portul Fa0/5 nu coincide cu portul Fa0/4.',
        'VLAN-ul 20 este blocat de STP.',
        'EtherChannel-ul nu este creat din cauza unui duplex mismatch.'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Ce se întâmplă dacă una dintre legăturile dintr-un EtherChannel este configurată diferit față de celelalte?',
      options: [
        'Portul configurat greșit va fi oprit.',
        'Toate porturile din EtherChannel vor intra în err-disabled.',
        'Switch-ul va exclude automat portul din EtherChannel.',
        'Portul diferit va fi convertit automat la configurarea corectă.',
        'EtherChannel va funcționa, dar cu erori.',
        'EtherChannel-ul va dezactiva STP-ul pe acel port.'
      ],
      correctIndex: 2
    },
    {
      type: 'open-ended',
      text: 'Câte domenii de broadcast sunt în rețeaua de mai sus?',
      image: 'subiecte_acad/images/judeteana_2026_1112/q45.png',
      acceptedAnswers: ['6']
    },
    {
      type: 'multiple-choice',
      text: 'Ce protocol folosește în mod implicit portul 587?',
      options: ['FTP', 'SNMP', 'SSH', 'POP3', 'SMTP', 'IMAP'],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Având la dispoziție topologia dată și știind că fiecare router are configurată adresa IPv4 și prioritatea HSRP conform etichetei atașate lor, determinați ce router va fi ales drept router activ în procesul de HSRP.',
      image: 'subiecte_acad/images/judeteana_2026_1112/q47.png',
      options: [
        'R2',
        'R4',
        'R1',
        'Dacă nicio prioritate HSRP nu depășește valoarea de 100, atunci nu se alege niciun router activ.',
        'Atât R1 cât și R3.',
        'R3'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele combinații de valori ale flag-urilor A, O și M dintr-un mesaj ICMPv6 RA determină utilizarea unui server DHCPv6 în mod stateful pentru obținerea unei adrese IPv6?',
      options: [
        'A = 1, O = 1, M = 1',
        'A = 1, O = 1, M = 0',
        'A = 1, O = 0, M = 1',
        'A = 1, O = 0, M = 0',
        'A = 0, O = 0, M = 1',
        'A = 0, O = 1, M = 0'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre următoarele afirmații despre NAT și PAT sunt corecte? (Alegeți 2 variante)',
      options: [
        'PAT permite mai multor gazde interne să partajeze o singură adresă IPv4 publică prin multiplexare la nivel de port, fără a fi nevoie de adrese suplimentare publice.',
        'NAT impune ca toate gazdele interne să fie vizibile pe Internet pentru ca traducerea să funcționeze corect.',
        'NAT nu suportă configurarea pool-urilor de rezervă sau echilibrarea încărcării între adresele publice disponibile.',
        'NAT permite menținerea schemei interne de adrese IPv4 private și asigură continuitatea comunicațiilor chiar dacă adresele publice furnizate de ISP se schimbă.',
        'PAT poate fi utilizat doar dacă fiecare gazdă internă are o adresă publică unică atribuită.',
        'NAT conferă o protecție completă împotriva atacurilor externe, eliminând necesitatea unui firewall cu stări.'
      ],
      correctIndices: [0, 3]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce tip de mesaje ICMPv6 se folosesc pentru comunicarea între un dispozitiv IPv6 și router IPv6? (Alegeți 2 variante)',
      options: [
        'Router Respond (RR) message',
        'Router Solicitation (RS) message',
        'Neighbor Solicitation (NS) message',
        'Neighbor Advertisement (NA) message',
        'Neighbour Respond (NR) message',
        'Router Advertisement (RA) message'
      ],
      correctIndices: [1, 5]
    }
  ]
});
