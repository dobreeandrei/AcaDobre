window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'nationala_2026_2',
  topic: 'Nationala 2026 11-12 Setul 2',
  questions: [
  {
    type: 'matching',
    text: 'Asociați fiecare tip de LSA OSPF cu descrierea sa corectă:',
    subQuestions: [
      { text: 'Descrie routerele și rețelele din interiorul unei arii; generat de fiecare router OSPF în parte.', answer: 'Type 1 – Router LSA' },
      { text: 'Generat de DR-ul unui segment multi-access; descrie toate routerele conectate la acel segment.', answer: 'Type 2 – Network LSA' },
      { text: 'Generat de ABR; anunță rețelele din alte arii spre aria curentă (rute inter-area).', answer: 'Type 3 – Summary LSA' },
      { text: 'Generat de ASBR; anunță rute externe redistribuite în OSPF dintr-un protocol de rutare exterior.', answer: 'Type 5 – AS External LSA' },
      { text: 'Generat de ABR în interiorul unei arii NSSA; transportă rute externe în locul LSA-urilor de tip 5.', answer: 'Type 7 – NSSA External LSA' },
    ],
    options: ['Type 1 – Router LSA', 'Type 2 – Network LSA', 'Type 3 – Summary LSA', 'Type 4 – ASBR Summary LSA', 'Type 5 – AS External LSA', 'Type 7 – NSSA External LSA'],
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre valorile K din formula metricii compuse EIGRP sunt setate la 1 (nenule) în configurația implicită a unui router Cisco?',
    options: [
      'K1 (bandwidth) și K2 (load)',
      'K1 (bandwidth), K2 (load) și K3 (delay)',
      'K2 (load) și K4 (reliability)',
      'K3 (delay) și K5 (MTU)',
      'K1 (bandwidth) și K3 (delay)',
      'Toți coeficienții K1–K5 sunt setați la valoarea 1 în configurația implicită'
    ],
    correctIndex: 4
  },
  {
    type: 'open-ended',
    text: 'Un administrator dorește să creeze o singură rută sumară care să acopere exact rețelele 172.16.4.0/24, 172.16.5.0/24, 172.16.6.0/24 și 172.16.7.0/24, fără a include alte rețele. Care este adresa sumară și masca corespunzătoare? Scrieți în formatul "X.X.X.X/YY" fără spații (fără ghilimele).',
    acceptedAnswers: ['172.16.4.0/22'],
  },
  {
    type: 'multiple-choice',
    text: 'Pe un switch cu DHCP Snooping activat pe VLAN 10, un mesaj DHCPOFFER sosește pe portul Fa0/2, configurat ca "untrusted". Ce acțiune va întreprinde switch-ul?',
    options: [
      'Elimină pachetul, deoarece mesajele DHCPOFFER sunt permise doar pe porturi marcate trusted',
      'Permite pachetul și îl transmite spre client, jurnalizând evenimentul ca avertisment de securitate',
      'Permite pachetul dacă adresa IP sursă din DHCPOFFER se regăsește în baza de date DHCP Snooping',
      'Plasează portul în stare err-disabled după al doilea DHCPOFFER consecutiv recepționat',
      'Permite pachetul, dar marchează adresa MAC sursă ca suspectă în baza de date DHCP Snooping',
      'Redirecționează pachetul spre portul trunk cel mai apropiat pentru verificare suplimentară'
    ],
    correctIndex: 0
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele tipuri de mesaje fac parte din protocolul NDP (Neighbor Discovery Protocol) pentru IPv6? (alegeți 3 variante)',
    options: [
      'Neighbor Solicitation (NS)',
      'Router Advertisement (RA)',
      'DHCP Discover',
      'Neighbor Cache Update',
      'Redirect',
      'ARP Reply'
    ],
    correctIndices: [0, 1, 4]
  },
  {
    type: 'multiple-choice',
    text: 'Un mesaj Syslog de nivel 2 indică ce tip de condiție pe un dispozitiv Cisco?',
    options: [
      'Emergency',
      'Alert',
      'Error',
      'Critical',
      'Warning',
      'Informational'
    ],
    correctIndex: 3
  },
  {
    type: 'matching',
    text: 'Asociați fiecare tip de înregistrare DNS cu rolul său:',
    subQuestions: [
      { text: 'Mapează un hostname la o adresă IPv4.', answer: 'A' },
      { text: 'Mapează un hostname la o adresă IPv6.', answer: 'AAAA' },
      { text: 'Specifică serverul de mail responsabil pentru acceptarea mesajelor unui domeniu.', answer: 'MX' },
      { text: 'Definește un alias (nume canonic) de la un hostname la altul.', answer: 'CNAME' },
      { text: 'Utilizat pentru rezoluția inversă: mapează o adresă IP înapoi la un hostname.', answer: 'PTR' },
    ],
    options: ['A', 'AAAA', 'MX', 'CNAME', 'PTR', 'NS'],
  },
  {
    type: 'multiple-choice',
    text: 'Care este diferența esențială dintre RADIUS și TACACS+ în ceea ce privește criptarea comunicației dintre client și server?',
    options: [
      'Ambele protocoale criptează doar câmpul de parolă din cadrul schimbului de autentificare',
      'RADIUS criptează întregul payload; TACACS+ criptează exclusiv câmpul de autentificare',
      'Niciun protocol nu realizează criptare propriu-zisă; ambele se bazează pe TLS la transport',
      'RADIUS criptează doar header-ul pachetului; TACACS+ nu criptează nimic în mod implicit',
      'TACACS+ folosește criptare asimetrică; RADIUS folosește criptare simetrică AES',
      'TACACS+ criptează întregul payload al pachetului; RADIUS criptează doar câmpul de parolă'
    ],
    correctIndex: 5
  },
  {
    type: 'multiple-choice',
    text: 'Un administrator captează trafic și observă un segment TCP cu flag-urile FIN și ACK setate simultan. Ce semnifică corect acest segment în contextul unei sesiuni TCP active?',
    options: [
      'Segmentul indică o terminare abruptă a sesiunii de pe partea care l-a trimis, echivalent cu un RST',
      'Expeditorul nu mai are date de trimis, dar poate în continuare să primească; face parte din procesul normal de terminare TCP',
      'Combinația FIN+ACK este invalidă conform RFC 793; routerele intermediare elimină astfel de segmente',
      'Segmentul confirmă ultimul pachet de date și inițiază simultan o nouă conexiune TCP',
      'Fereastra de recepție a expeditorului a atins valoarea 0, suspendând fluxul de date',
      'Ambele capete au decis simultan să închidă sesiunea printr-un schimb sincronizat de FIN+ACK'
    ],
    correctIndex: 1
  },
  {
    type: 'open-ended',
    text: 'Care este adresa de broadcast a subrețelei în care se află host-ul cu adresa 172.20.200.100/21? Scrieți adresa completă, fără mască (fără ghilimele).',
    acceptedAnswers: ['172.20.207.255'],
  },
  {
    type: 'multiple-choice',
    text: 'Problema "hidden node" (nod ascuns) în rețelele wireless 802.11 apare atunci când:',
    options: [
      'Un client wireless are semnal insuficient și nu poate asocia cu AP-ul, deși se află fizic în clădire',
      'Două AP-uri funcționează pe același canal și interferează reciproc, reducând debitul ambelor celule',
      'Două stații se pot auzi de AP dar nu reciproc, putând transmite simultan și genera coliziuni la AP',
      'Un client mobil se află la granița a două celule și recepționează același SSID de la ambele AP-uri',
      'AP-ul nu poate diferenția traficul legitim de cel produs de un AP rogue pe același canal',
      'Un dispozitiv din rețeaua cablată nu poate comunica cu un client wireless din cauza lipsei unui bridge'
    ],
    correctIndex: 2
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele afirmații despre plasarea unui Standard ACL pe un router Cisco sunt corecte? (alegeți 2 variante)',
    options: [
      'Standard ACL-urile trebuie plasate cât mai aproape posibil de sursă pentru a bloca traficul eficient',
      'Standard ACL-urile trebuie plasate cât mai aproape de destinație, deoarece filtrează exclusiv după adresa IP sursă',
      'Un Standard ACL poate fi aplicat atât în direcția inbound cât și outbound pe o interfață de router',
      'Standard ACL-urile pot filtra simultan după adresa sursă, adresa destinație și numărul de port',
      'Un Standard ACL aplicat outbound blochează și traficul generat de router prin interfața respectivă',
      'Standard ACL-urile nu pot fi aplicate pe interfețe virtuale de tip SVI (Switch Virtual Interface)'
    ],
    correctIndices: [1, 2]
  },
  {
    type: 'multiple-choice',
    text: 'Ce număr de protocol IP este utilizat de GRE (Generic Routing Encapsulation) în header-ul IPv4 exterior?',
    options: [
      '41',
      '50',
      '51',
      '47',
      '89',
      '17'
    ],
    correctIndex: 3
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următoarele afirmații despre OSPFv3 este FALSĂ?',
    options: [
      'OSPFv3 rulează nativ pe IPv6 și elimină câmpurile de adresare din structura de bază a LSA-urilor',
      'OSPFv3 activează OSPF direct pe interfață (ipv6 ospf <pid> area <area>), fără comanda "network"',
      'OSPFv3 suportă mai multe instanțe pe aceeași legătură fizică prin câmpul Instance ID din header',
      'OSPFv3 utilizează adrese link-local pentru comunicarea cu routerele vecine',
      'OSPFv3 menține același mecanism de autentificare MD5/SHA integrat în header-ul OSPF, identic cu OSPFv2',
      'OSPFv3 identifică routerele vecine prin Router ID pe 32 de biți, nu prin adrese IPv6'
    ],
    correctIndex: 4
  },
  {
    type: 'open-ended',
    text: 'Care este reprezentarea binară pe 8 biți a numărului zecimal 217? Scrieți toți cei 8 biți fără spații sau separatori (fără ghilimele).',
    acceptedAnswers: ['11011001'],
  },
  {
    type: 'multiple-choice',
    text: 'Un port de switch are configurate simultan PortFast și BPDU Guard. La acel port este conectat un alt switch care trimite imediat un BPDU. Ce se va întâmpla?',
    options: [
      'Portul va rămâne în starea Forwarding, ignorând BPDU-ul, deoarece PortFast suprascrie orice verificare STP',
      'Switch-ul va dezactiva BPDU Guard automat și va reiniția STP în mod normal pe acel port',
      'Portul va trimite un BPDU de răspuns și va iniția o nouă elecție de Root Bridge',
      'PortFast va suprascrie BPDU Guard; portul rămâne activ și participă normal la STP',
      'Portul va intra în starea Blocking până când BPDU-urile încetează să sosească pe segment',
      'Portul va intra în starea err-disabled imediat la recepționarea primului BPDU'
    ],
    correctIndex: 5
  },
  {
    type: 'multiple-choice',
    text: 'Care este diferența esențială dintre traffic shaping și traffic policing în contextul mecanismelor QoS?',
    options: [
      'Shaping elimină pachetele care depășesc rata configurată; policing le pune în buffer de așteptare',
      'Shaping se aplică exclusiv traficului inbound; policing exclusiv celui outbound pe interfață',
      'Policing elimină sau marchează pachetele ce depășesc rata; shaping le bufferează și netezește rata de ieșire',
      'Policing garantează o lățime de bandă minimă garantată; shaping limitează lățimea maximă disponibilă',
      'Ambele tehnici produc același efect practic; diferă doar prin locul de aplicare în topologie',
      'Shaping operează la nivelul 2; policing operează exclusiv la nivelul 3 al modelului OSI'
    ],
    correctIndex: 2
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele protocoale sunt suportate nativ pentru autentificarea conexiunilor PPP? (alegeți 2 variante)',
    options: [
      'PAP',
      'CHAP',
      'EAP-TLS',
      'RADIUS',
      'MD5 standalone',
      'LDAP'
    ],
    correctIndices: [0, 1]
  },
  {
    type: 'matching',
    text: 'Asociați fiecare flag TCP cu descrierea sa corectă:',
    subQuestions: [
      { text: 'Inițiază stabilirea unei conexiuni TCP; prezent în primul pachet al procesului three-way handshake.', answer: 'SYN' },
      { text: 'Semnalează închiderea normală a fluxului de date dintr-o singură direcție a conexiunii.', answer: 'FIN' },
      { text: 'Indică că datele conținute sunt urgente și trebuie procesate prioritar de aplicația receptor.', answer: 'URG' },
      { text: 'Resetează forțat o conexiune existentă ca urmare a unei erori sau a unei cereri nevalide.', answer: 'RST' },
      { text: 'Confirmă recepția unui segment și specifică numărul de secvență următor așteptat de receptor.', answer: 'ACK' },
    ],
    options: ['SYN', 'FIN', 'URG', 'RST', 'ACK', 'PSH'],
  },
  {
    type: 'multiple-choice',
    text: 'Un port de switch Cisco este configurat cu un VLAN de date (VLAN 10) și un VLAN de voce (VLAN 20). Un telefon IP este conectat la port, iar un PC este conectat prin telefonul IP. Cum procesează switch-ul cadrele generate de telefon față de cele generate de PC?',
    options: [
      'Portul devine trunk și aplică tag VLAN 20 cadrelor de voce și tag VLAN 10 celor de date',
      'Cadrele de voce și date sunt trimise fără tag, portul funcționând în modul access pur',
      'Switch-ul aplică tag VLAN 10 tuturor cadrelor indiferent de sursă, pe baza portului de intrare',
      'Cadrele de voce nu sunt taguite; VLAN-ul de voce este identificat exclusiv prin câmpul CoS din Ethernet',
      'Telefonul IP trimite cadre tagged cu VLAN 20; PC-ul conectat prin telefon trimite cadre untagged pe VLAN 10',
      'Switch-ul creează un trunk intern virtual între VLAN 10 și VLAN 20 pentru gestionarea traficului mixt'
    ],
    correctIndex: 4
  },
  {
    type: 'multiple-choice',
    text: 'Pe ce port UDP primește managerul SNMP mesajele de tip trap trimise de agentul SNMP al unui dispozitiv gestionat?',
    options: [
      '161',
      '162',
      '514',
      '69',
      '123',
      '389'
    ],
    correctIndex: 1
  },
  {
    type: 'multiple-choice',
    text: 'Într-un sistem de criptografie asimetrică, cum decriptează destinatarul un mesaj care a fost criptat și transmis de expeditor?',
    options: [
      'Folosind cheia privată a destinatarului, care formează pereche cu cheia publică utilizată la criptare',
      'Folosind cheia publică a destinatarului, aceeași cu cea utilizată pentru criptarea mesajului',
      'Folosind cheia privată a expeditorului, transmisă anterior pe un canal securizat separat',
      'Folosind o cheie de sesiune simetrică generată automat la inițierea comunicației',
      'Folosind cheia publică a expeditorului, disponibilă oricui, care poate inversa operația de criptare',
      'Folosind un hash al cheii publice a destinatarului, verificat față de un server PKI central'
    ],
    correctIndex: 0
  },
  {
    type: 'multiple-choice',
    text: 'Ce avantaj specific oferă un firewall stateful față de un firewall stateless în tratarea traficului de retur (return traffic)?',
    options: [
      'Firewall-ul stateful permite orice trafic de retur, deoarece porturile efemere sunt considerate mereu permise',
      'Firewall-ul stateless urmărește sesiunile active și permite automat traficul de retur asociat conexiunilor',
      'Nu există diferență; ambele tipuri utilizează ACL-uri simetrice pentru a gestiona traficul de retur',
      'Firewall-ul stateful menține o tabelă de stări ale conexiunilor și permite automat traficul de retur aferent sesiunilor inițiate din interior',
      'Firewall-ul stateful blochează traficul de retur dacă portul de destinație depășește valoarea 1024',
      'Firewall-ul stateless este mai eficient pentru traficul de retur datorită absenței overhead-ului de urmărire'
    ],
    correctIndex: 3
  },
  {
    type: 'open-ended',
    text: 'Câte subrețele a câte 30 de hosturi utili se pot obține prin subnetare egală din spațiul de adrese 10.1.0.0/16? (scrieți doar numărul, fără unități)',
    acceptedAnswers: ['2048'],
  },
  {
    type: 'multiple-choice',
    text: 'La ce nivel al modelului OSI funcționează protocolul CDP (Cisco Discovery Protocol) și de ce?',
    options: [
      'Nivel 1 (Fizic) – semnalele CDP sunt transmise ca impulsuri electrice pe mediul fizic',
      'Nivel 3 (Rețea) – CDP utilizează pachete IP pentru schimbul de informații între dispozitive',
      'Nivel 4 (Transport) – CDP folosește UDP pentru livrarea fiabilă a mesajelor de descoperire',
      'Nivel 7 (Aplicație) – CDP rulează ca serviciu de management al dispozitivelor de rețea',
      'Nivel 5 (Sesiune) – CDP stabilește sesiuni dedicate de mentenanță între dispozitivele adiacente',
      'Nivel 2 (Legătură de date) – CDP utilizează encapsulare SNAP și funcționează independent de Nivelul 3'
    ],
    correctIndex: 5
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele afirmații sunt corecte despre un switch configurat în modul VTP Transparent? (alegeți 2 variante)',
    options: [
      'Switch-ul nu sincronizează propria bază de date VLAN cu serverul VTP din domeniu',
      'Switch-ul retransmite mesajele VTP primite fără a le procesa în propria bază de date locală',
      'Modificările VLAN efectuate local sunt propagate automat spre serverul VTP pentru sincronizare',
      'Switch-ul devine automat server VTP dacă serverul curent din domeniu devine indisponibil',
      'Switch-ul acceptă și aplică orice modificare VLAN anunțată de serverul VTP cu revision number mai mare',
      'VLAN-urile create local pe un switch transparent nu pot fi utilizate pe porturile sale fizice'
    ],
    correctIndices: [0, 1]
  },
  {
    type: 'multiple-choice',
    text: 'Ce standard IEEE definește protocolul LLDP (Link Layer Discovery Protocol)?',
    options: [
      '802.1Q',
      '802.1D',
      '802.1AB',
      '802.3ad',
      '802.11i',
      '802.1X'
    ],
    correctIndex: 2
  },
  {
    type: 'multiple-choice',
    text: 'Care este distanța administrativă pentru rutele EIGRP interne pe un router Cisco?',
    options: [
      '100',
      '70',
      '115',
      '110',
      '90',
      '80'
    ],
    correctIndex: 4
  },
  {
    type: 'matching',
    text: 'Asociați fiecare protocol/tehnologie WAN cu caracteristica sa definitorie:',
    subQuestions: [
      { text: 'Protocol WAN simplu, proprietar Cisco, folosit implicit pe interfețele seriale; nu suportă autentificare.', answer: 'HDLC' },
      { text: 'Protocol WAN standard IETF, multiprotocol; suportă autentificare PAP/CHAP și compresie.', answer: 'PPP' },
      { text: 'Tehnologie WAN cu circuite virtuale (PVC/SVC); specifică rețelelor legacy cu comutare de pachete.', answer: 'Frame Relay' },
      { text: 'Tehnologie WAN modernă bazată pe etichete de comutare; separă planul de control de planul de date.', answer: 'MPLS' },
    ],
    options: ['HDLC', 'PPP', 'Frame Relay', 'MPLS', 'ATM'],
  },
  {
    type: 'multiple-choice',
    text: 'Pe ce structură de date se bazează Dynamic ARP Inspection (DAI) pentru a valida pachetele ARP recepționate pe porturile untrusted ale unui switch?',
    options: [
      'Tabela ARP a switch-ului, populată static de administrator cu perechi IP-MAC aprobate',
      'Baza de date DHCP Snooping Binding Table, care asociază adresa IP, adresa MAC, VLAN-ul și portul fiecărui host',
      'Tabela CAM a switch-ului, verificând că adresa MAC sursă corespunde portului de intrare al cadrului',
      'Tabela de rutare Layer 3 a switch-ului, utilizată pentru a valida adresele IP sursă din pachetele ARP',
      'O listă de acces ACL configurată manual cu perechi IP-MAC autorizate de administrator',
      'Tabela NDP a switch-ului, care stochează asocierile IPv6-MAC pentru rețelele cu IPv6 activ'
    ],
    correctIndex: 1
  }
]
});
