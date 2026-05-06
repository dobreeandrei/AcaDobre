window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'nationala_2026_generated',
  topic: 'Nationala 11-12 Setul 1',
  questions: [
  {
    type: 'open-ended',
    text: 'Care va fi rezultatul operației EUI-64 aplicat pe adresa MAC 2C:54:91:88:C9:E3? Scrieți doar partea de host a adresei IPv6 respectând notația "ABCD:ABCD:ABCD:ABCD" (cu majuscule, fără ghilimele).',
    acceptedAnswers: ['2E54:91FF:FE88:C9E3'],
  },
  {
    type: 'multiple-choice',
    text: 'Care este diferența principală dintre un port de tip Alternate și un port de tip Backup în contextul RSTP?',
    options: [
      'Alternate port asigură o cale alternativă spre root bridge; Backup port asigură o cale de rezervă față de un designated port pe același segment partajat',
      'Alternate port este în stare Forwarding; Backup port este în stare Discarding',
      'Nu există diferență; ambii termeni sunt sinonimi în RSTP față de STP clasic',
      'Alternate port conectează switch-urile non-root între ele; Backup port conectează switch-ul root la restul topologiei',
      'Alternate port apare doar în STP clasic; Backup port este specific RSTP',
      'Alternate port are costul cel mai mic spre root; Backup port are costul cel mai mare spre root'
    ],
    correctIndex: 0
  },
  {
    type: 'open-ended',
    text: 'Un administrator OSPF configurează comanda "auto-cost reference-bandwidth 1000" pe toate routerele din domeniu. Care va fi costul OSPF calculat automat pentru o interfață FastEthernet (100 Mbps)? (scrieți doar numărul întreg)',
    acceptedAnswers: ['10'],
  },
  {
    type: 'matching',
    text: 'Asociați fiecare termen NAT cu definiția sa corectă:',
    subQuestions: [
      { text: 'Adresa IP privată a unui host din rețeaua internă, înainte de orice translație.', answer: 'Inside Local' },
      { text: 'Adresa IP publică, atribuită de ISP, care reprezintă host-ul intern în rețeaua externă.', answer: 'Inside Global' },
      { text: 'Adresa IP a unui host extern, văzută din perspectiva rețelei interne (poate fi o adresă privată translată).', answer: 'Outside Local' },
      { text: 'Adresa IP reală, publică, a unui host din rețeaua externă.', answer: 'Outside Global' },
    ],
    options: ['Inside Local', 'Inside Global', 'Outside Local', 'Outside Global'],
  },
  {
    type: 'multiple-choice',
    text: 'SW1 și SW2 sunt interconectate printr-o legătură trunk. SW1 are native VLAN 10, iar SW2 are native VLAN 20. Un host din VLAN 10 conectat la SW1 trimite un frame. Cum va procesa SW2 acest frame la recepție?',
    options: [
      'Frame-ul va fi asociat cu VLAN 20, deoarece sosește fără tag 802.1Q, iar SW2 asociază frame-urile netagate cu native VLAN-ul său (VLAN 20)',
      'Frame-ul va fi asociat cu VLAN 10, deoarece switch-urile recunosc automat VLAN-ul original din campul source MAC',
      'Frame-ul va fi eliminat, deoarece native VLAN-urile nu coincid',
      'Frame-ul va fi trimis în broadcast pe toate VLAN-urile switch-ului SW2',
      'SW2 va genera un mesaj CDP de eroare și va bloca portul trunk',
      'Frame-ul va fi asociat cu VLAN 1, deoarece acesta este întotdeauna VLAN-ul nativ implicit Cisco'
    ],
    correctIndex: 0
  },
  {
    type: 'multiple-choice',
    text: 'Un administrator dorește să scrie un ACL care să permită traficul de la toate host-urile din intervalul 10.0.4.0 – 10.0.7.255. Care este masca wildcard corectă pentru această intrare?',
    options: [
      '0.0.3.255',
      '0.0.4.255',
      '0.0.255.255',
      '0.0.7.255',
      '255.255.252.0',
      '0.0.1.255'
    ],
    correctIndex: 0
  },
  {
    type: 'multiple-choice',
    text: 'Ce dimensiune (în biți) are câmpul "Urgent Pointer" dintr-un header TCP?',
    options: ['8', '32', '4', '64', '16', '24'],
    correctIndex: 4
  },
  {
    type: 'open-ended',
    text: 'Un administrator subnetează eficient spațiul 192.168.100.0/24 prin VLSM în ordinea: HR (30 hosturi necesare), IT (14 hosturi necesare), WAN (2 hosturi necesare). Fiecare interfață are nevoie de un IP. Care este adresa de rețea a subrețelei IT? Scrieți adresa cu mască fără spații. Exemplu: "192.168.0.0/24" (fără ghilimele).',
    acceptedAnswers: ['192.168.100.32/28'],
  },
  {
    type: 'multiple-choice',
    text: 'SW1 are portul configurat cu "channel-protocol pagp" și modul "desirable". SW2 are portul configurat cu "channel-protocol lacp" și modul "active". Se va forma un EtherChannel funcțional între cele două switch-uri?',
    options: [
      'Da, deoarece ambele porturi sunt în modul activ de negociere și doresc formarea unui canal',
      'Da, deoarece PAgP și LACP sunt interoperabile dacă ambele capete sunt în modul activ',
      'Nu, deoarece PAgP și LACP sunt protocoale diferite, incompatibile între ele',
      'Da, dar numai dacă switch-urile sunt din aceeași serie de echipamente Cisco',
      'Nu, deoarece SW1 trebuie să fie în modul "auto" pentru a accepta negocieri LACP',
      'Da, deoarece dispozitivele Cisco moderne acceptă automat ambele protocoale simultan pe același port'
    ],
    correctIndex: 2
  },
  {
    type: 'open-ended',
    text: 'Care este adresa multicast solicited-node corespunzătoare adresei IPv6 2001:DB8::A1B2:C3D4? Scrieți adresa în format comprimat, cu majuscule. Exemplu: "FF02::1:FF00:0001" (fără ghilimele).',
    acceptedAnswers: ['FF02::1:FFB2:C3D4'],
  },
  {
    type: 'matching',
    text: 'Asociați fiecare mesaj din procesul DORA cu descrierea sa corectă:',
    subQuestions: [
      { text: 'Mesaj broadcast trimis de client pentru a descoperi serverele DHCP disponibile în rețea.', answer: 'DHCPDISCOVER' },
      { text: 'Mesaj trimis de server ca răspuns, conținând o adresă IP propusă și parametrii de configurare.', answer: 'DHCPOFFER' },
      { text: 'Mesaj broadcast trimis de client pentru a accepta oficial oferta și a informa și alți serveri DHCP potențiali.', answer: 'DHCPREQUEST' },
      { text: 'Mesaj de confirmare trimis de server, finalizând atribuirea adresei IP clientului.', answer: 'DHCPACK' },
    ],
    options: ['DHCPDISCOVER', 'DHCPOFFER', 'DHCPREQUEST', 'DHCPACK', 'DHCPNAK'],
  },
  {
    type: 'multiple-choice',
    text: 'Pe un segment multi-access Ethernet, R1 (router-id 3.3.3.3, prioritate implicită) este ales DR, iar R2 (router-id 2.2.2.2, prioritate implicită) este ales BDR. Ulterior, R3 se alătură aceluiași segment cu router-id 4.4.4.4 și prioritate implicită. Ce se va întâmpla?',
    options: [
      'R3 va prelua imediat rolul de DR, deoarece are cel mai mare router-id din segment',
      'R3 va deveni noul BDR, forțând R2 să cedeze rolul',
      'R3 nu va prelua rolul de DR sau BDR; alegerea OSPF nu este preemptivă după ce a fost finalizată',
      'R1 va rămâne DR, dar R3 va deveni BDR în locul lui R2, deoarece are un router-id mai mare',
      'Toți routerele din segment vor reintra simultan în procesul de alegere DR/BDR',
      'R3 nu se poate alătura segmentului deoarece există deja un DR și un BDR ales'
    ],
    correctIndex: 2
  },
  {
    type: 'multiple-choice',
    text: 'Care este valoarea zecimală DSCP pentru clasa Expedited Forwarding (EF), utilizată în mod tipic pentru traficul VoIP cu prioritate maximă?',
    options: ['40', '34', '56', '48', '46', '32'],
    correctIndex: 4
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele reprezintă funcții de hash criptografic? (alegeți 2 variante)',
    options: ['AES-256', 'SHA-256', 'RSA-2048', 'MD5', 'DH Group 14', '3DES'],
    correctIndices: [1, 3]
  },
  {
    type: 'multiple-choice',
    text: 'Un administrator configurează "switchport port-security mac-address sticky" pe un port de switch și adresele MAC sunt învățate dinamic. Ce se întâmplă cu aceste adrese dacă switch-ul este repornit fără a se executa în prealabil "copy running-config startup-config"?',
    options: [
      'Adresele MAC sunt permanent stocate în NVRAM și nu se pierd la reboot, indiferent de salvare',
      'Adresele MAC se pierd, deoarece sunt salvate în running-config (RAM volatil), nu în startup-config',
      'Adresele MAC sunt mutate automat în tabela CAM permanentă a switch-ului',
      'Switch-ul va reînvăța automat aceleași adrese MAC la prima cadru recepționat pe port',
      'Portul va intra în starea err-disabled, deoarece adresele MAC nu mai sunt recunoscute',
      'Adresele MAC sticky sunt stocate pe Flash și rămân disponibile după reboot indiferent de salvare'
    ],
    correctIndex: 1
  },
  {
    type: 'multiple-choice',
    text: 'SW1 are portul Fa0/1 configurat cu "switchport mode dynamic auto", iar SW2 are portul Fa0/1 configurat identic cu "switchport mode dynamic auto". Ce tip de legătură se va forma între cele două switch-uri?',
    options: [
      'Trunk, deoarece ambele porturi acceptă trunking și se vor negocia reciproc',
      'Nu se va forma nicio legătură din cauza conflictului de configurație DTP',
      'Access, deoarece niciunul dintre porturi nu inițiază activ negocierea trunk',
      'Depinde de VLAN-ul nativ configurat pe fiecare switch',
      'Trunk, deoarece porturile cu DTP activat negociază întotdeauna trunk',
      'Depinde de viteza porturilor; porturile FastEthernet formează trunk implicit'
    ],
    correctIndex: 2
  },
  {
    type: 'multiple-choice',
    text: 'Ce efect are configurarea comenzii "passive-interface GigabitEthernet 0/0" sub procesul OSPF al unui router?',
    options: [
      'Interfața este dezactivată complet (shutdown) și nu mai transmite sau primește niciun trafic',
      'OSPF nu va mai include rețeaua acelei interfețe în LSA-urile trimise vecinilor',
      'OSPF nu mai trimite pachete Hello pe acea interfață, dar rețeaua conectată este în continuare anunțată în domeniu',
      'OSPF menține adiacența cu vecinii existenți, dar nu mai generează LSA-uri prin acea interfață',
      'Interfața nu mai acceptă trafic de rutare, dar permite traficul normal de date al utilizatorilor',
      'OSPF va trimite Hello-uri, dar va ignora toate Hello-urile primite de la vecini pe acea interfață'
    ],
    correctIndex: 2
  },
  {
    type: 'multiple-choice',
    text: 'Care este caracteristica care diferențiază GLBP față de HSRP și VRRP?',
    options: [
      'GLBP folosește o singură adresă IP virtuală și un singur MAC virtual, la fel ca HSRP',
      'GLBP permite load balancing activ între mai multe routere gateway folosind o singură adresă IP virtuală, asignând câte un MAC virtual distinct fiecărui router (AVF)',
      'GLBP este singurul protocol FHRP care suportă nativ IPv6 stateful',
      'GLBP nu are un router activ desemnat; toți routerele din grup redirecționează traficul prin același MAC virtual',
      'GLBP folosește mai multe adrese IP virtuale simultan, câte una pentru fiecare router din grup',
      'GLBP oferă timere de convergență mai mici decât HSRP și VRRP în orice topologie'
    ],
    correctIndex: 1
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele afirmații despre protocoalele IPsec AH și ESP sunt corecte? (alegeți 2 variante)',
    options: [
      'AH (Authentication Header) oferă atât confidențialitate (criptare) cât și autentificare pentru pachetul IP',
      'ESP (Encapsulating Security Payload) poate oferi atât confidențialitate cât și autentificare/integritate',
      'AH nu funcționează corect prin dispozitive NAT, deoarece autentifică și header-ul IP exterior, care este modificat de NAT',
      'ESP nu poate funcționa independent; trebuie folosit obligatoriu împreună cu AH',
      'AH și ESP folosesc același număr de protocol IP (50)',
      'ESP este utilizat exclusiv în modul tunel și nu poate funcționa în modul transport'
    ],
    correctIndices: [1, 2]
  },
  {
    type: 'multiple-choice-multi',
    text: 'În care dintre următoarele scenarii este utilizat un Gratuitous ARP? (alegeți 2 variante)',
    options: [
      'Un host tocmai s-a conectat la rețea și dorește să detecteze potențiale conflicte de adresă IP înainte de a-și configura interfața',
      'Un host dorește să afle adresa MAC a gateway-ului implicit pentru prima dată',
      'Router-ul care preia rolul de Active în HSRP trimite un Gratuitous ARP pentru a actualiza tabelele ARP ale host-urilor din rețea',
      'Un switch populează tabela CAM la prima conectare fizică a unui dispozitiv',
      'Un host solicită o adresă IP nouă de la serverul DHCP la expirarea lease-ului',
      'Un router trimite Gratuitous ARP pentru a notifica vecinii OSPF de schimbarea router-id-ului'
    ],
    correctIndices: [0, 2]
  },
  {
    type: 'open-ended',
    text: 'Care este forma completă (expandată, necomprimată) a adresei IPv6 FE80::1? Scrieți adresa cu toate cele 8 grupuri de câte 4 cifre hexazecimale, separate prin ":", fără spații, cu majuscule. Exemplu: "ABCD:0000:0000:0000:0000:0000:0000:0001" (fără ghilimele).',
    acceptedAnswers: ['FE80:0000:0000:0000:0000:0000:0000:0001'],
  },
  {
    type: 'multiple-choice',
    text: 'Un switch primește un cadru unicast pe portul Fa0/1 (VLAN 10) cu adresa MAC destinație 00:AA:BB:CC:DD:EE, care nu există în tabela CAM. Ce acțiune va întreprinde switch-ul?',
    options: [
      'Elimină cadrul, deoarece destinația MAC nu este înregistrată în tabela CAM',
      'Trimite cadrul pe toate porturile din VLAN 10, inclusiv portul sursă Fa0/1',
      'Trimite cadrul pe toate porturile din toate VLAN-urile, cu excepția portului Fa0/1',
      'Trimite cadrul pe toate porturile din VLAN 10, cu excepția portului sursă Fa0/1',
      'Trimite un request ARP pe portul Fa0/1 pentru a determina portul de ieșire al destinației',
      'Returnează cadrul la sursă cu un mesaj ICMP Destination Unreachable'
    ],
    correctIndex: 3
  },
  {
    type: 'multiple-choice',
    text: 'Un router are o rută OSPF spre rețeaua 10.10.10.0/24 cu distanța administrativă implicită. Administratorul dorește să adauge o rută statică spre aceeași rețea via 192.168.1.1 care să fie activată NUMAI dacă ruta OSPF dispare. Ce distanță administrativă trebuie configurată pentru ruta statică flotantă?',
    options: [
      'Orice valoare cuprinsă între 1 și 109',
      '1, deoarece rutele statice au mereu prioritate față de protocoalele dinamice',
      'Orice valoare mai mare decât 110, de exemplu 115',
      '120, deoarece acesta este AD-ul implicit al rutelor statice flotante',
      '90, deoarece este mai mică decât AD-ul OSPF',
      'Distanța administrativă nu poate fi modificată pentru rutele statice pe routerele Cisco'
    ],
    correctIndex: 2
  },
  {
    type: 'matching',
    text: 'Asociați fiecare tip de mesaj ICMP cu descrierea sa corectă:',
    subQuestions: [
      { text: 'Răspuns la un mesaj Echo Request; reprezintă răspunsul utilizat de utilitarul ping.', answer: 'Type 0 - Echo Reply' },
      { text: 'Notifică sursa că pachetul nu a putut ajunge la destinație (port închis, rețea inaccesibilă etc.).', answer: 'Type 3 - Destination Unreachable' },
      { text: 'Trimis de un router pentru a informa host-ul că există o rută mai bună spre destinație.', answer: 'Type 5 - Redirect' },
      { text: 'Generat când câmpul TTL al unui pachet ajunge la 0; utilizat de utilitarul traceroute.', answer: 'Type 11 - Time Exceeded' },
    ],
    options: ['Type 0 - Echo Reply', 'Type 3 - Destination Unreachable', 'Type 5 - Redirect', 'Type 8 - Echo Request', 'Type 11 - Time Exceeded'],
  },
  {
    type: 'multiple-choice',
    text: 'Un administrator de sistem Linux execută comanda "chmod 750 script.sh". Care sunt permisiunile corecte aplicate fișierului?',
    options: [
      'Owner: rwx, Group: r-x, Others: ---',
      'Owner: rwx, Group: r-x, Others: r--',
      'Owner: rw-, Group: r-x, Others: ---',
      'Owner: rwx, Group: ---, Others: r-x',
      'Owner: rw-, Group: rw-, Others: r--',
      'Owner: rwx, Group: rwx, Others: r-x'
    ],
    correctIndex: 0
  },
  {
    type: 'matching',
    text: 'Asociați fiecare model de control al accesului cu descrierea sa corectă:',
    subQuestions: [
      { text: 'Proprietarul resursei este cel care decide cine are acces la aceasta și ce nivel de acces este permis.', answer: 'DAC' },
      { text: 'Accesul este controlat de politici impuse de sistem, bazate pe etichete de sensibilitate (clasificări de securitate).', answer: 'MAC' },
      { text: 'Accesul este acordat în funcție de rolul atribuit utilizatorului în cadrul organizației.', answer: 'RBAC' },
      { text: 'Deciziile de acces se bazează simultan pe mai multe atribute ale utilizatorului, ale resursei și ale contextului de mediu.', answer: 'ABAC' },
    ],
    options: ['DAC', 'MAC', 'RBAC', 'ABAC'],
  },
  {
    type: 'multiple-choice',
    text: 'Router R1 are o rută Successor spre rețeaua 10.0.0.0/8 cu Feasible Distance (FD) = 20. Vecinul R2 raportează aceeași rețea cu Reported Distance (RD) = 20. Va fi R2 instalat ca Feasible Successor în topologia EIGRP?',
    options: [
      'Da, deoarece RD este egal cu FD, iar condiția de feasibility este considerată îndeplinită',
      'Nu, deoarece condiția de feasibility EIGRP necesită ca RD să fie strict mai mic decât FD (RD < FD)',
      'Da, deoarece R2 oferă o cale cu cost identic, care poate fi folosită și pentru load balancing',
      'Nu, deoarece un Feasible Successor poate exista doar dacă sunt minimum 3 routere în topologie',
      'Da, R2 devine automat Feasible Successor dacă RD ≤ FD',
      'Nu, deoarece ruta lui R2 are o metrică prea mare față de ruta succesoare curentă'
    ],
    correctIndex: 1
  },
  {
    type: 'multiple-choice',
    text: 'Care standard 802.11 a fost primul care a suportat atât banda de 2.4 GHz cât și banda de 5 GHz simultan (dual-band)?',
    options: [
      '802.11a',
      '802.11b',
      '802.11g',
      '802.11n',
      '802.11ac',
      '802.11ax'
    ],
    correctIndex: 3
  },
  {
    type: 'multiple-choice',
    text: 'Într-un firewall zone-based (ZPF) pe un router Cisco, cum este tratat implicit traficul generat chiar de router (zona "self") destinat unei zone definite de utilizator, în absența oricărei politici de zonă configurate explicit?',
    options: [
      'Este blocat implicit, la fel ca orice alt trafic inter-zone fără politică definită',
      'Este permis implicit, deoarece zona self beneficiază de un comportament special față de celelalte zone',
      'Depinde de interfața fizică prin care iese traficul; porturile trunk permit, porturile access blochează',
      'Este redirecționat spre zona implicită (default zone) unde se aplică politica globală',
      'Este blocat, dar se generează automat un log syslog cu nivelul de severitate Warning',
      'Este permis numai dacă există o regulă "pass" explicită configurată pentru zona self în ambele direcții'
    ],
    correctIndex: 1
  },
  {
    type: 'matching',
    text: 'Asociați fiecare nivel de securitate SNMPv3 cu caracteristicile sale de autentificare și confidențialitate:',
    subQuestions: [
      { text: 'Identificarea se face exclusiv pe bază de username; nu există autentificare prin mesaj și nici criptare a conținutului.', answer: 'noAuthNoPriv' },
      { text: 'Autentificare prin HMAC-MD5 sau HMAC-SHA este prezentă, dar conținutul mesajului nu este criptat.', answer: 'authNoPriv' },
      { text: 'Autentificare prin HMAC-MD5 sau HMAC-SHA combinată cu criptarea conținutului prin DES sau AES.', answer: 'authPriv' },
    ],
    options: ['noAuthNoPriv', 'authNoPriv', 'authPriv', 'noAuthPriv', 'authAuthPriv'],
  },
]
});
