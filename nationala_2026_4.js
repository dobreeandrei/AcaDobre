window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'nationala_2026_4',
  topic: 'Nationala 2026 11-12 Setul 4',
  questions: [
  {
    type: 'label-order',
    text: 'Puneți în ordine corectă cele trei mesaje schimbate în procesul TCP Three-Way Handshake, de la inițierea conexiunii până la confirmarea ei finală.',
    labels: ['SYN (Client → Server)', 'SYN-ACK (Server → Client)', 'ACK (Client → Server)'],
    correctOrder: [0, 1, 2],
  },
  {
    type: 'multiple-choice',
    text: 'Câmpul IHL (Internet Header Length) din antetul IPv4 specifică lungimea header-ului. În ce unitate de măsură este exprimată această valoare?',
    options: [
      'biți individuali',
      'octeți individuali',
      'cuvinte de 32 de biți',
      'cuvinte de 16 biți',
      'cuvinte de 64 de biți',
      'jumătăți de octet (nibble)'
    ],
    correctIndex: 2
  },
  {
    type: 'multiple-choice',
    text: 'Alegeți dacă afirmația următoare este adevărată sau falsă:\nSpre deosebire de HSRP, protocolul VRRP activează preemption implicit — un router cu prioritate mai mare care revine după o defecțiune preia automat rolul de Master, fără configurare suplimentară.',
    options: ['Adevărat', 'Fals'],
    correctIndex: 0
  },
  {
    type: 'matching',
    text: 'Asociați fiecare combinație de moduri EtherChannel cu rezultatul negocierii:',
    subQuestions: [
      { text: 'LACP active – LACP passive', answer: 'Se formează EtherChannel' },
      { text: 'LACP passive – LACP passive', answer: 'Nu se formează EtherChannel' },
      { text: 'PAgP desirable – PAgP auto', answer: 'Se formează EtherChannel' },
      { text: 'PAgP auto – PAgP auto', answer: 'Nu se formează EtherChannel' },
      { text: 'on – on (fără protocol de negociere)', answer: 'Se formează EtherChannel' },
    ],
    options: ['Se formează EtherChannel', 'Nu se formează EtherChannel'],
  },
  {
    type: 'open-ended',
    text: 'Convertiți numărul hexazecimal 0x9F în reprezentare zecimală. (Scrieți doar numărul întreg, fără alte caractere.)',
    acceptedAnswers: ['159'],
  },
  {
    type: 'multiple-choice',
    text: 'Care este dimensiunea totală (în octeți) a unui antet UDP, incluzând toate câmpurile sale fixe?',
    options: ['4 octeți', '12 octeți', '20 octeți', '8 octeți', '16 octeți', '40 octeți'],
    correctIndex: 3
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele afirmații despre SLAAC (Stateless Address Autoconfiguration) sunt corecte? (alegeți 2 variante)',
    options: [
      'Adresa IPv6 este generată din prefixul anunțat în RA combinat cu identificatorul de interfață prin EUI-64 sau aleatoriu',
      'SLAAC trimite un mesaj DHCPv6 Solicit pentru a confirma cu serverul DHCP validitatea adresei generate local',
      'Flagul M setat la valoarea 1 în mesajul Router Advertisement semnalează hostului să utilizeze DHCPv6 stateful',
      'Un host SLAAC nu execută niciodată DAD (Duplicate Address Detection); unicitatea adresei este garantată matematic',
      'SLAAC funcționează exclusiv cu adrese link-local; adresele global unicast necesită obligatoriu DHCPv6 stateful',
      'Mesajele Router Solicitation sunt trimise de host spre adresa multicast FF02::1 (all nodes) pentru a solicita un RA imediat'
    ],
    correctIndices: [0, 2]
  },
  {
    type: 'label-order',
    text: 'Puneți în ordine corectă cele șapte stări prin care trece un router OSPF în procesul de stabilire a adiacenței cu un vecin, de la absența oricărei comunicări până la sincronizarea completă a bazelor de date.',
    labels: ['Down', 'Init', '2-Way', 'ExStart', 'Exchange', 'Loading', 'Full'],
    correctOrder: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    type: 'multiple-choice',
    text: 'Alegeți dacă afirmația următoare este adevărată sau falsă:\nÎn STP clasic (IEEE 802.1D), dacă două switch-uri au aceeași Bridge Priority, switch-ul cu adresa MAC mai mare va fi ales Root Bridge, deoarece un ID mai mare indică un echipament mai recent.',
    options: ['Adevărat', 'Fals'],
    correctIndex: 1
  },
  {
    type: 'multiple-choice',
    text: 'Câmpul PCP (Priority Code Point) din tagul 802.1Q este utilizat pentru marcarea priorității traficului la nivel 2 (CoS). Câți biți ocupă acest câmp?',
    options: ['1 bit', '4 biți', '3 biți', '8 biți', '2 biți', '12 biți'],
    correctIndex: 2
  },
  {
    type: 'multiple-choice',
    text: 'Un port configurat cu "switchport mode dynamic desirable" va iniția activ negocierea trunk-ului. Cu care dintre configurațiile de mai jos ale portului opus NU se va forma un trunk?',
    options: [
      'trunk',
      'dynamic auto',
      'dynamic desirable',
      'access',
      'nonegotiate',
      'on'
    ],
    correctIndex: 3
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele afirmații despre OSPF sunt corecte? (alegeți 3 variante)',
    options: [
      'OSPF este un protocol link-state care menține o hartă completă a topologiei sub forma LSDB (Link-State Database)',
      'OSPF utilizează algoritmul SPF (Dijkstra) pentru calculul celui mai scurt drum spre fiecare destinație din arie',
      'OSPF este un protocol classless; include masca de subrețea în actualizările de rutare și suportă VLSM',
      'OSPF trimite tabela de rutare completă vecinilor la fiecare 30 de secunde, similar cu comportamentul RIP',
      'OSPF folosește hop count ca metrică principală, la fel ca RIP, alegând calea cu cel mai mic număr de salturi',
      'OSPF stabilește adiacențe numai cu routerele aflate în aria 0; routerele din alte arii nu pot deveni vecini'
    ],
    correctIndices: [0, 1, 2]
  },
  {
    type: 'open-ended',
    text: 'Un administrator primește blocul de adrese IPv6 2001:DB8:ACAD::/48. Câte subrețele de tip /64 poate crea din acest bloc? (Scrieți doar numărul întreg.)',
    acceptedAnswers: ['65536'],
  },
  {
    type: 'multiple-choice',
    text: 'Care este intervalul Hello implicit al protocolului EIGRP pe o interfață GigabitEthernet (rețea de mare viteză)?',
    options: ['1 secundă', '10 secunde', '15 secunde', '30 secunde', '5 secunde', '60 secunde'],
    correctIndex: 4
  },
  {
    type: 'multiple-choice',
    text: 'Alegeți dacă afirmația următoare este adevărată sau falsă:\nAdresa multicast IPv6 FF02::1 desemnează grupul "all routers" al unui segment, în timp ce FF02::2 desemnează grupul "all nodes" — routerele trimit RA spre FF02::1, iar hosturile trimit RS spre FF02::2.',
    options: ['Adevărat', 'Fals'],
    correctIndex: 1
  },
  {
    type: 'matching',
    text: 'Asociați fiecare scenariu de atac cu principiul din triada CIA pe care îl compromite în mod primar:',
    subQuestions: [
      { text: 'Un atacator interceptează și citește în clar traficul nesecurizat dintre două aplicații fără a-l modifica.', answer: 'Confidențialitate' },
      { text: 'Un script malițios alterează sumele dintr-un raport financiar fără a lăsa urme vizibile în sistem.', answer: 'Integritate' },
      { text: 'Un atac DDoS cu volume masive de trafic face un serviciu de email corporativ inaccesibil timp de 6 ore.', answer: 'Disponibilitate' },
      { text: 'Un angajat accesează dosarele medicale ale colegilor folosind credențialele unui cont de administrator compromis.', answer: 'Confidențialitate' },
    ],
    options: ['Confidențialitate', 'Integritate', 'Disponibilitate'],
  },
  {
    type: 'multiple-choice',
    text: 'Care este dezavantajul principal al rutării inter-VLAN prin metoda Router-on-a-Stick față de un switch Layer 3 cu SVI-uri?',
    options: [
      'Legătura trunk devine un bottleneck unic; tot traficul inter-VLAN traversează un singur link fizic spre router',
      'Subinterfețele nu suportă protocoale de rutare dinamică precum OSPF sau EIGRP în modul normal de operare',
      'Metoda este limitată la maximum 8 VLAN-uri per interfață fizică datorită specificației protocolului 802.1Q',
      'Rutarea pachetelor IPv6 nu este posibilă pe subinterfețele unui router cu encapsulare dot1q configurată',
      'Necesită un proces de autentificare suplimentar între subinterfețele routerului și porturile trunk ale switch-ului',
      'STP nu rulează pe subinterfețele routerului, ceea ce poate genera bucle de comutare la nivel 2 în rețea'
    ],
    correctIndex: 0
  },
  {
    type: 'label-order',
    text: 'Puneți în ordine corectă unitățile de date de protocol (PDU) corespunzătoare procesului de încapsulare în modelul OSI, de la nivelul Aplicație până la nivelul Fizic.',
    labels: ['Date (Aplicație / Prezentare / Sesiune)', 'Segment (Transport)', 'Pachet (Rețea)', 'Cadru (Legătură de date)', 'Biți (Fizic)'],
    correctOrder: [0, 1, 2, 3, 4],
  },
  {
    type: 'multiple-choice',
    text: 'Ce efect produce cuvântul cheie "established" într-o regulă Extended ACL care filtrează trafic TCP?',
    options: [
      'Permite numai segmentele TCP cu flag-ul SYN setat, validând exclusiv inițierea de noi conexiuni spre server',
      'Permite segmentele TCP cu flag-ul ACK sau RST setat, corespunzând traficului de retur al conexiunilor inițiate',
      'Blochează traficul TCP până la validarea conexiunii de către serverul AAA configurat local pe router',
      'Permite segmentele TCP care au finalizat three-way handshake complet și au intrat în starea TCP ESTABLISHED',
      'Limitează numărul maxim de conexiuni TCP simultane la valoarea numerică specificată după cuvântul cheie',
      'Permite exclusiv segmentele TCP cu flag-ul PSH setat, utilizate pentru date cu prioritate de livrare urgentă'
    ],
    correctIndex: 1
  },
  {
    type: 'multiple-choice',
    text: 'Alegeți dacă afirmația următoare este adevărată sau falsă:\nÎn STP clasic (IEEE 802.1D), un port aflat în starea Listening poate popula tabela CAM (MAC address table) cu adresele sursă ale cadrelor recepționate, pregătind astfel decizia de comutare.',
    options: ['Adevărat', 'Fals'],
    correctIndex: 1
  },
  {
    type: 'multiple-choice',
    text: 'Ce funcționalitate adaugă LLQ (Low Latency Queuing) față de CBWFQ (Class-Based Weighted Fair Queuing)?',
    options: [
      'LLQ introduce conceptul de clase de trafic cu lățime de bandă garantată; CBWFQ nu suportă definirea de clase',
      'LLQ înlocuiește algoritmul WFQ cu FIFO pur pentru toate clasele, reducând latența generală a cozilor',
      'LLQ adaugă suport pentru traffic shaping integrat, permițând netezirea burst-urilor de trafic din clasele vocale',
      'LLQ permite configurarea unui număr nelimitat de clase de trafic, față de limita fixă de 64 a CBWFQ',
      'LLQ introduce compresia RTP (cRTP) pentru antetele pachetelor VoIP transmise pe legăturile WAN seriale',
      'LLQ adaugă o coadă cu prioritate strictă dedicată traficului sensibil la latență, garantând serviciu imediat'
    ],
    correctIndex: 5
  },
  {
    type: 'open-ended',
    text: 'Care este rezultatul operației AND la nivel de bit (bitwise AND) aplicată între valorile binare 10101010 și 11110000? Scrieți rezultatul pe 8 biți, fără spații sau separatori (fără ghilimele).',
    acceptedAnswers: ['10100000'],
  },
  {
    type: 'multiple-choice',
    text: 'Un atac ransomware criptează toate fișierele victimei și afișează un mesaj de răscumpărare. Care principiu din triada CIA este afectat în mod primar de acest atac?',
    options: [
      'Confidențialitate – fișierele au fost expuse unui terț neautorizat în urma procesului de criptare',
      'Integritate – ransomware-ul modifică structura binară internă a fișierelor prin algoritmul de criptare',
      'Non-repudiere – victima nu mai poate certifica autenticitatea documentelor după criptarea acestora',
      'Disponibilitate – fișierele devin inaccesibile utilizatorului legitim până la plata răscumpărării',
      'Autenticitate – ransomware-ul falsifică metadatele fișierelor pentru a evita semnăturile antivirus',
      'Autorizare – atacatorul obține privilegii de scriere ocolind lista de control al accesului sistemului'
    ],
    correctIndex: 3
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următoarele intervale de adrese IPv4 NU face parte din spațiul de adrese private definit de RFC 1918?',
    options: [
      '10.0.0.0/8',
      '172.16.0.0/12',
      '192.168.0.0/16',
      '172.31.255.0/24',
      '172.32.0.0/12',
      '10.255.0.0/16'
    ],
    correctIndex: 4
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele reprezintă mecanisme de tranziție de la IPv4 la IPv6 utilizate în rețelele reale? (alegeți 3 variante)',
    options: [
      '6to4 – encapsulează automat pachetele IPv6 în antet IPv4, utilizând prefixul rezervat 2002::/16',
      'Dual-stack – dispozitivul menține stive IPv4 și IPv6 active simultan, selectând protocolul pe baza destinației',
      'IPv6-over-HDLC – standard specific legăturilor seriale punct-la-punct cu magistrală HDLC dedicată IPv6',
      'NAT64 – translatează adrese și pachete IPv6 în IPv4 și invers, asigurând comunicarea între hosturi IPv6-only și IPv4-only',
      'PPPv6 – extensie PPP dedicată exclusiv transportului IPv6 pe legăturile WAN cu serializare bit-cu-bit',
      'IPv6-over-Coax – protocol de tunelizare standardizat IEEE pentru rețelele de televiziune prin cablu cu IPv6'
    ],
    correctIndices: [0, 1, 3]
  },
  {
    type: 'multiple-choice',
    text: 'Alegeți dacă afirmația următoare este adevărată sau falsă:\nProtocolul OSPF este un protocol link-state care utilizează algoritmul SPF (Dijkstra) pentru calculul celor mai scurte căi, în timp ce protocoalele distance-vector precum RIP și IGRP utilizează algoritmul Bellman-Ford.',
    options: ['Adevărat', 'Fals'],
    correctIndex: 0
  },
  {
    type: 'label-order',
    text: 'Puneți în ordine corectă cele patru mesaje schimbate în procesul de terminare normală a unei conexiuni TCP (four-way teardown), pornind de la inițiatorul care decide să închidă conexiunea.',
    labels: [
      'FIN (Inițiator → Receptor)',
      'ACK (Receptor → Inițiator)',
      'FIN (Receptor → Inițiator)',
      'ACK (Inițiator → Receptor)'
    ],
    correctOrder: [0, 1, 2, 3],
  },
  {
    type: 'multiple-choice',
    text: 'Atunci când un switch Layer 3 realizează rutare inter-VLAN prin SVI-uri, la ce niveluri ale modelului OSI operează simultan?',
    options: [
      'Exclusiv la Nivelul 3 (Rețea), deoarece rutarea înlocuiește complet comutarea în cadrul acestui scenariu',
      'La Nivelul 2 (Legătură de date) și Nivelul 3 (Rețea), comutând cadre în VLAN-uri și rutând pachete între ele',
      'La Nivelul 1 (Fizic) și Nivelul 2 (Legătură de date); rutarea este realizată de un modul software independent',
      'La Nivelul 3 (Rețea) și Nivelul 4 (Transport), deoarece rutarea inter-VLAN necesită inspecția porturilor',
      'La toate nivelurile 1–7 ale modelului OSI, similar unui firewall modern cu inspecție stateful completă',
      'Exclusiv la Nivelul 2 (Legătură de date); rutarea inter-VLAN este gestionată de un proces la Nivelul 7'
    ],
    correctIndex: 1
  },
  {
    type: 'matching',
    text: 'Asociați fiecare comandă Cisco IOS cu informația principală pe care o afișează în contextul depanării rețelei:',
    subQuestions: [
      { text: 'Afișează starea (up/down) și adresele IP ale tuturor interfețelor routerului, câte o linie per interfață.', answer: 'show ip interface brief' },
      { text: 'Afișează tabela de comutare MAC cu portul fizic asociat fiecărei adrese, utilă în depanarea Layer 2.', answer: 'show mac address-table' },
      { text: 'Afișează adiacențele OSPF active, starea fiecăruia și valoarea curentă a timerului Dead rămas.', answer: 'show ip ospf neighbor' },
      { text: 'Afișează configurația activă din RAM, inclusiv interfețe, rute statice, ACL-uri și setări de securitate.', answer: 'show running-config' },
    ],
    options: ['show ip interface brief', 'show mac address-table', 'show ip ospf neighbor', 'show running-config', 'show ip route', 'show version'],
  },
  {
    type: 'multiple-choice',
    text: 'Ce problemă rezolvă mecanismul Split Horizon în protocoalele de rutare distance-vector?',
    options: [
      'Previne retransmiterea rutelor pe interfața prin care au fost primite, eliminând o cauză frecventă de bucle de rutare',
      'Împarte tabela de rutare în segmente independente pentru rutele interne și externe, evitând conflictele de metrică',
      'Divide domeniul de rutare în zone separate pentru a distribui uniform încărcarea traficului de rutare',
      'Previne redistribuirea necontrolată a rutelor între două protocoale diferite care rulează pe același router',
      'Limitează numărul maxim de salturi la jumătate din valoarea configurată ca metrică infinită a protocolului',
      'Blochează propagarea rutelor cu metrică infinită (Poison Reverse) în toată rețeaua de rutare distance-vector'
    ],
    correctIndex: 0
  }
]
});
