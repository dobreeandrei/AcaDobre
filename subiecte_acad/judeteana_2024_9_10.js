window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'locala_2024_9_10',
    topic: 'Judeteana 9-10 2024',
    questions: [
    {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele afirmații sunt corecte?',
    options: [
      'VLAN-urile sunt o metodă mai puțin costisitoare în segmentarea domeniilor de broadcast decât ruterele',
      'Un cadru nu poate avea mai multe tag-uri de VLAN',
      'VLAN-urile sunt folosite pentru segmentarea domeniilor de broadcast dintr-o rețea fizică',
      'Nu putem avea conectivitate între mai multe VLAN-uri',
      'Pe un switch putem seta o interfață doar în unul dintre modurile access și trunk în același timp',
      'Un cadru care provine din VLAN 20 va circula cu tag 802.1q pe o legatură cu VLAN Nativ 20'
    ],
    correctIndices: [0, 2, 4],
  },
  {
    type: 'multiple-choice',
    text: 'Cu ajutorul cărei comenzi se poate seta o parolă criptată la trecerea dintre user exec și privileged exec pe un dispozitiv Cisco?',
    options: [
      'enable password <password>',
      'password <password>',
      'service password-encryption <password>',
      'pass <password>',
      'pswd <password>',
      'enable secret <password>',
    ],
    correctIndex: 5,
  },
  {
    type: 'multiple-choice',
    text: 'Cum va arăta tabela ARP a PC0 după ce acesta trimite un pachet către PC1 și Google, în această ordine?',
    image: 'subiecte_acad/images/judeteana_2024_910/q3.png',
    options: [
      'IP-PC0 <-> MAC-PC0\nIP-Google <-> MAC-Def-Gateway',
      'IP-PC1 <-> MAC-PC1\nIP-Google <-> MAC-Google',
      'IP-PC1 <-> MAC-PC1\nIP-Def-Gateway <-> MAC-Def-Gateway',
      'IP-PC1 <-> MAC-PC1\nIP-Google <-> MAC-PC0',
      'IP-PC1 <-> MAC-PC1\nIP-PC0 <-> MAC-PC0',
      'IP-PC1 <-> MAC-PC1\nIP-Google <-> MAC-PC1'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele variante este corectă?',
    options: [
      'SSH nu realizează conexiunea la distanță',
      'NTP desincronizează ceasurile după un server NTP',
      'O breșă de securitate reprezintă schimbarea parolei des',
      'Dezactivarea porturilor inactive reprezintă o metodă simplă de securitate',
      'Distanța față de cel mai îndepărtat server se numește stratum',
      'SSH realizează conexiunea necriptată la distanță'
    ],
    correctIndices: [3, 4],
  },
  {
    type: 'multiple-choice',
    text: 'Câte host-uri sunt asignabile dintr-o rețea cu masca /20?',
    options: [
      '4092',
      '2^20-2',
      '2046',
      '4096',
      '2048',
      '4094'
    ],
    correctIndex: 5,
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următoarele variante reprezintă corect cele trei componente principale ale unui protocol de rutare?',
    options: [
      'Frame, Porturi, Mesaje de rutare',
      'Structuri de Date, Mesaje de rutare, Algoritm',
      'Structuri de Date, DNS (Domain Name System), Algoritm',
      'Adrese IP, Porturi, SPF (Shortest Path First)',
      'Segmentare, Algoritm, OSPF (Open Shortest Path First)',
      'Porturi, Algoritm, OSPF (Open Shortest Path First)'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Care este reprezentarea în hexazecimal a adresei binare 01111000.11111110.01010101.00011111?',
    options: [
      '7D.FE.50.1F',
      '78.FE.55.1F',
      '78.FF.57.1F',
      '7D.FA.55.1F',
      '78.FE.57.1F',
      '7D.FA.50.1F'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'În tabela CAM se stochează corespondența între:',
    options: [
      'adrese MAC si adrese IP',
      'adrese IP si porturi',
      'adrese IP si porturi',
      'porturi si VLAN-uri',
      'adrese IP si masti',
      'adrese MAC si porturi'
    ],
    correctIndex: 5,
  },
  {
    type: 'multiple-choice',
    text: 'În cazul rutării unui număr mare de VLAN-uri, care este un dezavantaj al folosirii RoaS (Router on a Stick) în locul rutării folosind un switch multi-layer?',
    options: [
      'RoaS necesită mai multe interfețe fizice pe router',
      'Sunt necesare mai multe interfețe virtuale',
      'Oferă o performanță ridicată în rețelele mari',
      'Mai multe subinterfețe vor impacta viteza traficului',
      'RoaS necesită configurarea subinterfețelor în același subnet',
      'Necesită mai puține configurații'
    ],
    correctIndex: 3,
  },
  {
    type: 'multiple-choice',
    text: 'Alexandru, un angajat la Bitdefender, observă o comunicare slabă cu serverul web al companiei. După investigații, vede că un calculator trimite un număr foarte mare de cereri. Ce tip de atac descrie acest scenariu?',
    options: [
      'MITM',
      'Reconnaissance attack',
      'Malware Attack',
      'DoS',
      'Zero-Day',
      'Acces attack'
    ],
    correctIndex: 3,
  },
  {
    type: 'multiple-choice',
    text: 'Considerăm o rețea împărțită în 3 VLAN-uri: VLAN 10, VLAN 20 și VLAN 30. Subnetarea optimă corectă pentru spațiul de adrese 127.0.0.0/8, astfel încât să avem 1000 de stații în VLAN 10, 100 în VLAN 20 și 20 în VLAN 30:',
    options: [
      'VLAN 10: Adresa rețea: 127.0.3.0/18 Adresa broadcast: 127.0.3.255/18\nVLAN 20: Adresa rețea: 127.0.4.0/30 Adresa broadcast: 127.0.4.127/30\nVLAN 30: Adresa rețea: 127.0.4.128/30 Adresa broadcast: 127.0.4.159/30',
      'VLAN 10: Adresa rețea: 127.0.0.1/22 Adresa broadcast: 127.0.4.0/22\nVLAN 20: Adresa rețea: 127.0.4.1/25 Adresa broadcast: 127.0.4.128/25\nVLAN 30: Adresa rețea: 127.0.4.129/27 Adresa broadcast: 127.0.4.160/27',
      'VLAN 10: Adresa rețea: 127.0.0.0/18 Adresa broadcast: 127.0.3.255/18\nVLAN 20: Adresa rețea: 127.0.4.0/30 Adresa broadcast: 127.0.4.127/30\nVLAN 30: Adresa rețea: 127.0.4.128/30 Adresa broadcast: 127.0.4.159/30',
      'VLAN 10: Adresa rețea: 127.0.0.0/22 Adresa broadcast: 127.0.3.255/22\nVLAN 20: Adresa rețea: 127.0.4.0/25 Adresa broadcast: 127.0.4.127/25\nVLAN 30: Adresa rețea: 127.0.4.128/27 Adresa broadcast: 127.0.4.159/27',
      'VLAN 10: Adresa rețea: 128.0.3.0/10 Adresa broadcast: 128.0.3.127/10\nVLAN 20: Adresa rețea: 128.0.4.128/17 Adresa broadcast: 128.0.5.129/17\nVLAN 30: Adresa rețea: 128.0.5.130/22 Adresa broadcast: 128.0.127.159/22',
      'VLAN 10: Adresa rețea: 127.255.0.1/22 Adresa broadcast: 127.255.4.0/22\nVLAN 20: Adresa rețea: 127.255.4.1/25 Adresa broadcast: 127.255.4.128/25\nVLAN 30: Adresa rețea: 127.255.4.129/27 Adresa broadcast: 127.255.4.160/27'
    ],
    correctIndex: 3,
  },
  {
    type: 'multiple-choice',
    text: 'Fie topologia din imagine. BID-uri: SwA < SwB < SwC < SwD < SwE < SwF. Legăturile punctate (GigabitEthernet) au costul 19, restul 100. În urma rulării STP, care vor fi rolurile porturilor switch-ului F?',
    image: 'subiecte_acad/images/judeteana_2024_910/q12.png',
    options: [
      '1-Blocked, 2-Designated, 3-Root',
      '1-Root, 2-Designated, 3-Root',
      '1-Designated, 2-Designated, 3-Root',
      '1-Blocked, 2-Blocked, 3-Designated',
      '1-Root, 2-Designated, 3-Blocked',
      '1-Designated, 2-Designated, 3-Designated'
    ],
    correctIndex: 0,
  },
  {
    type: 'multiple-choice',
    text: 'Care din următoarele afirmații este corectă?',
    options: [
      'Rutarea statică nu necesită cunoașterea întregii rețele',
      'Rutarea statică trebuie reconfigurată de către un administrator mereu când sunt realizate schimbări în rețea',
      'Rutarea statică necesită resurse adiționale față de cea dinamică',
      'Rutarea dinamică trebuie reconfigurată de către un administrator mereu când sunt realizate schimbări in rețea',
      'Rutarea dinamică necesită cunoașterea întregii rețele',
      'Rutarea dinamică este mai sigură decât rutarea statica',
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Care este rezultatul transformării adresei MAC următoare din binar în hexazecimal?\n00011010:10111100:00100011:01000101:11101111:01100111',
    options: [
      '1A:BC:EE:45:EF:67',
      '1A:AE:3B:45:EF:67',
      '1A:BC:33:45:EF:76',
      '1A:BC:23:45:EF:67',
      '1E:EE:23:45:EF:76',
      '1E:BE:23:45:EF:67',
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care din următoarele afirmații sunt adevărate cu privire la adresele IPv4?',
    options: [
      'masca de rețea indică numărul maxim de subrețele în care poate fi împărțită o rețea',
      '172.16.42.100 este o adresă privată',
      'adresele de loopback sunt folosite pentru a direcționa traficul unui utilizator la el insuși',
      'pentru o împărțire optimă a unei rețele avem nevoie de numărul de hosturi din fiecare subrețea',
      'adresa de rețea se poate afla prin "SAU logic" (||) cu masca de rețea',
      '64.104.0.22 este o adresă privată'
    ],
    correctIndices: [1, 2, 3],
  },
  {
    type: 'multiple-choice',
    text: 'Care afirmație despre antetul IPv6 este greșită?',
    options: [
      'Source IPv6 are 128 de biți',
      'Payload Length indică dimensiunea totală a pachetului măsurată în bytes',
      'Mesajul ICMPv6 este trimis de router dacă Hop Limit ajunge la valoarea 1',
      'Câmpul version se află la începutul header-ului și indică versiunea folosită pentru protocolul IP',
      'Are o dimensiune de 40 bytes',
      'Pachetele cu același Flow Label sunt gestionate la fel de router'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre afirmațiile următoare despre SLAAC este adevărată?',
    options: [
      'Mesajele pe care le folosește SLAAC sunt Router Synchronisation și Router Acknowledge',
      'Flag-ul M este setat pe 1 și O este setat pe 0',
      'Denumirea sa vine de la System Logic Address AutoConfiguration',
      'Niciuna dintre variante',
      'Flag-ul O este setat pe 1 și M este setat pe 0',
      'Gateway nu va fi niciodată adresa link-local a interfeței din aceeaşi rețea'
    ],
    correctIndex: 4,
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele afirmații legate de sistemul hexazecimal sunt greșite?',
    options: [
      'Hexazecimalul este util în reprezentarea adresei IP și a altor identificatori în rețele informatice',
      'În criptografie, valorile hexazecimale sunt utilizate pentru reprezentarea cheilor și a valorilor hash',
      'Este utilizat în programare pentru reprezentarea eficientă a datelor binare',
      'În sistemele de operare și programare, adresele de memorie și registrele hardware sunt adesea exprimate în hexazecimal',
      'Este utilizat doar pentru reprezentarea numerelor pozitive',
      'Este inutil în domeniile în care cifrele zecimale sunt predominante'
    ],
    correctIndices: [4, 5],
  },
  {
    type: 'multiple-choice',
    text: 'Care este formula prin care putem calcula o adresă de rețea?',
    options: [
      'SAU logic între adresa IP și mască',
      'XOR între adresa IP și mască',
      'ȘI logic între adresa IP și masca inversată',
      'Adresa IP inversată',
      'ȘI logic între adresa IP și mască',
      'SAU logic între adresa IP și masca inversată'
    ],
    correctIndex: 4,
  },
  {
    type: 'multiple-choice',
    text: 'Cum poți seta manual prioritatea pentru un anumit VLAN în cadrul STP pe echipamentele de rețea Cisco?',
    options: [
      'spanning-tree vlan <vlan-id> priority <priority>',
      'vlan <vlan-id> spanning-tree priority <priority>',
      'configure priority <priority> spanning-tree vlan <vlan-id>',
      'priority <priority> spanning-tree vlan <vlan-id>',
      'stp vlan <vlan-id> set-priority <priority>',
      'set spanning-tree vlan <vlan-id> priority <priority>'
    ],
    correctIndex: 0,
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următoarele este o formă de frame forwarding?',
    options: [
      'Store-and-forward',
      'Fragment-free',
      'Fast-forward',
      'Cut-through',
      'Toate variantele',
      'Niciuna din variante'
    ],
    correctIndex: 4,
  },
  {
    type: 'multiple-choice',
    text: 'Care este lungimea prefixului recomandată pentru majoritatea subrețelelor IPv6?',
    options: [
      '/32',
      '/16',
      '/64',
      '/8',
      '/128',
      '/42'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Un pachet de la un client este primit de un server. Pachetul are un număr de port destinație 110. Ce serviciu solicită clientul?',
    options: [
      'DHCP',
      'POP3',
      'SMTP',
      'EMAIL',
      'DNS',
      'HTTPS'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următoarele este o adresă de loopback?',
    options: [
      '127.0.0.1',
      '126.0.0.1',
      '0.0.0.0',
      '128.0.0.1',
      '255.255.255.255',
      '126.0.0.0'
    ],
    correctIndex: 0,
  },
  {
    type: 'multiple-choice',
    text: 'Ce reprezintă ARP spoofing în contextul securității cibernetice?',
    options: [
      'Un protocol de rutare avansat',
      'O metodă de monitorizare a traficului de rețea',
      'Un tip de atac cibernetic',
      'Un protocol de comunicare între dispozitive IoT',
      'Un standard de criptare a datelor',
      'O tehnologie de autentificare a rețelelor Wi-Fi'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Se dă adresa 25.64.165.15/18. Care este adresa de rețea?',
    options: [
      '25.64.160.0',
      '25.64.176.0',
      '25.64.128.0',
      '25.64.0.0',
      '25.64.192.0',
      '25.64.128.2'
    ],
    correctIndex: 0,
  },
  {
    type: 'multiple-choice',
    text: 'Care din următoarele comenzi activează BPDU-guard?',
    options: [
      'spanning-tree enable bpduguard',
      'spanning-tree portfast',
      'spanning-set bpduguard enable',
      'spanning-tree bpduguard portfast',
      'spanning-tree bpduguard enable',
      'spanning-enable bpduguard enable'
    ],
    correctIndex: 4,
  },
  {
    type: 'multiple-choice',
    text: 'Alegeți afirmația care este mereu falsă despre Cisco Discovery Protocol:',
    options: [
      'Este pornit by default',
      'Este folosit pentru descoperirea echipamentelor vecine',
      'VLAN 1 este locația default pentru a conține adresa IP pentru management',
      'Nicio variantă',
      'Conține mereu 3 adrese IP de management',
      'Poate fi considerat un risc de securitate'
    ],
    correctIndex: 4,
  },
  {
    type: 'multiple-choice-multi',
    text: 'Ce comandă putem folosi pentru a salva configurațiile active pe un router Cisco?',
    options: [
      'copy runningconfig startupconfig',
      'save',
      'write',
      'copy running-config startup-config',
      'copy running-config startup config',
      'write now'
    ],
    correctIndices: [0, 3],
  },
  {
    type: 'multiple-choice',
    text: 'Care este reprezentarea in hexazecimal a adresei 204.114.73.123?',
    options: [
      'CC.72.49.7B',
      'CC.68.47.7B',
      'C9.68.49.78',
      'C9.72.49.78',
      'C9.72.49.78',
      'CC.72.47.7B'
    ],
    correctIndex: 0,
  },
  {
    type: 'multiple-choice',
    text: 'Ce comandă setează default gateway-ul unui dispozitiv Cisco?',
    options: [
      'set default <ip address>',
      'ip -default <ip address>',
      'ip default-gateway <ip address>',
      'ip set default <ip address>',
      'set default-gateway <ip address>',
      'default-gateway -set <ip address>'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Ce adrese trebuie excluse explicit atunci când se face configurarea unui server DHCPv4 pe un router, iar router-ul joacă rolul de server?',
    options: [
      'adresa de rețea, adresa de broadcast',
      'adresa default gateway, adresa de rețea, adresa de broadcast',
      'adresa default gateway',
      'adresa de rețea, adresa default gateway',
      'adresa de broadcast',
      'adresa default gateway, adresa de broadcast'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Care este rolul protocolului NTP într-o rețea?',
    options: [
      'Asigură redundanța și disponibilitate crescută',
      'Sincronizează ceasurile dispozitivelor în rețea',
      'niciuna din variante',
      'Criptează traficul pentru a-l proteja împotriva accesului neautorizat',
      'Distribuie adrese IP dinamic prin intermediul DHCP'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Căror niveluri din stiva OSI îi corespund nivelul Aplicație de la stiva TCP/IP?',
    options: [
      'aplicație & prezentare',
      'sesiune & prezentare',
      'sesiune & transport & rețea & legatură de date',
      'aplicație & sesiune & prezentare',
      'aplicație & sesiune & rețea',
      'aplicație & legătură de date'
    ],
    correctIndex: 3,
  },
  {
    type: 'multiple-choice',
    text: 'Pe ce port comunică un server DHCP?',
    options: [
      '80',
      '137',
      '67',
      '138',
      '33',
      '68'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'În urma rulării STP, care porturi vor avea rolul de root? Toate conexiunile au același cost. BID(SwitchA) < BID(SwitchB) < BID(SwitchC) < BID(SwitchD) < BID(SwitchE)',
    image: 'subiecte_acad/images/judeteana_2024_910/q36.png',
    options: [
      'Fa0/2, Fa0/4, Fa0/7, Fa0/8',
      'Fa0/4, Fa0/8, Fa0/7',
      'Fa0/0, Fa0/1, Fa0/7',
      'Fa0/4, Fa0/2, Fa0/7, Fa0/8, Fa0/5',
      'Fa0/4, Fa0/7, Fa0/0, Fa0/1',
      'Fa0/4, Fa0/8, Fa0/7, Fa0/6'
    ],
    correctIndex: 0,
  },
  {
    type: 'multiple-choice',
    text: 'Cum putem permite utilizatorilor să se autentifice fără a utiliza o parolă prin ssh?',
    options: [
      'Cu ajutorul unui browser web',
      'Cu ajutorul cheii publice',
      'Cu ajutorul unui server proxy',
      'Cu ajutorul unui restart la dispozitiv',
      'Cu ajutorul adresei MAC',
      'Cu ajutorul unei autentificări biometrice'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Un grup de 2 routere (A și B) formează un grup GLBP. A este AVG (active virtual gateway). Care dintre routere va răspunde la mesaje de tip ARP request venite pentru adresa IP virtuală a grupului?',
    options: [
      'doar B',
      'atât A cât și B vor răspunde în același timp, de fiecare dată',
      'răspunde mai des cel cu capacitate mai mare (numărul de proprietăți GLBP)',
      'doar A',
      'A și B vor răspunde separat la acestea, în mod egal',
      'A la majoritatea, B la restul'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următoarele seturi de comenzi salvează configurațiile active pe un dispozitiv Cisco?',
    options: [
      'enable configure terminal line console 0 copy startup-config running-config',
      'enable copy running-config startup-config',
      'enable copy startup-config running-config',
      'enable configure terminal interface vlan 1 copy running-config startup-config',
      'enable configure terminal copy running-config startup-config',
      'enable configure terminal copy startup-config running-config'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Un pachet de la un client este primit de un server. Pachetul are un număr de port destinație de 67. Ce serviciu solicită clientul?',
    options: [
      'FTP',
      'DNS',
      'SSH',
      'POP3',
      'DHCP',
      'TELNET'
    ],
    correctIndex: 4,
  },
  {
    type: 'multiple-choice',
    text: 'Care din următoarele NU este un tip de adresă unicast IPv6?',
    options: [
      'loopback',
      'unspecified address',
      'unique global unicast',
      'link-local unicast',
      'unique local unicast',
      'global unicast'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Alegeți varianta incorectă:',
    options: [
      'Ultimul nivel din stiva OSI este nivelul Aplicație.',
      'ARP și ICMP sunt ambele protocoale de nivel trei în stiva OSI.',
      'Nivelul prezentare aparține stivei OSI.',
      'Nivelul șase din stiva OSI este nivelul prezentare.',
      'Nivelul fizic este cel mai de jos din stiva OSI.',
      'Stiva OSI are șapte nivele.'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Plecând de la adresa 21.69.192.0 cu masca 255.255.254.0, vom împărți spațiul în cât mai multe subrețele de 16 host-uri. Care va fi masca noilor subrețele?',
    options: [
      '255.255.255.224',
      '255.255.255.252',
      '255.255.255.0',
      '255.255.255.240',
      '255.255.254.0',
      '255.255.0.0'
    ],
    correctIndex: 0,
  },
  {
    type: 'multiple-choice',
    text: 'La ce nivel din stiva OSI datele se transmit sub formă de cadre (frames)?',
    options: [
      'Fizic',
      'Aplicație',
      'Legătură de date',
      'Transport',
      'Sesiune',
      'Rețea'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Ce tip de VLAN acceptă și trafic neetichetat?',
    options: [
      'VLAN desirable',
      'VLAN de securitate',
      'VLAN nativ',
      'VLAN de voce',
      'VLAN default',
      'VLAN de management'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care este diferența dintre cablurile STP si UTP?',
    options: [
      'Învelișul exterior diferă',
      'STP-ul are ecranare în jurul firelor, iar UTP nu',
      'UTP-ul este mai scump',
      'UTP-ul are ecranare în jurul firelor, iar STP nu',
      'STP-ul este mai scump'
    ],
    correctIndices: [1, 4],
  },
  {
    type: 'multiple-choice-multi',
    text: 'Cum se poate prescurta corect adresa 2001:0db8:0000:0000:acad:0000:0000:0010?',
    options: [
      'nu se poate prescurta',
      '2001:0db8::acad:0:0:10',
      '2001:0db8::acad::10',
      '2001:0db8::acad:0000:0010',
      '2001:0db8:0:0:acad::0010',
      '2001:0db8::acad:10'
    ],
    correctIndices: [1, 4],
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele afirmații despre DHCP sunt false?',
    options: [
      'atribuie static adrese IP',
      'poate schimba adresa IP dacă primește o cerere de la dispozitiv',
      'atribuie dinamic adrese IP',
      'oferă configurare automată a dispozitivelor care se alătură unei rețele',
      'este un standard realizat de IEEE',
      'necesită o conexiune prin cablu'
    ],
    correctIndices: [0, 4, 5],
  },
  {
    type: 'multiple-choice',
    text: 'Care tehnologie wireless este foarte popular folosită în aplicațiile de automatizare a casei?',
    options: [
      'LoRaWAN',
      'Infrared',
      '5G',
      'WiMAX',
      'ZigBee',
      'Bluetooth'
    ],
    correctIndex: 4,
  },
  {
    type: 'multiple-choice',
    text: 'Ce afirmație este adevarată în privința PAgP (Port Aggregation Protocol)?',
    options: [
      'Pachetele PAgP sunt trimise o data la 20 de secunde',
      'PAgP nu este proprietar Cisco',
      'În modul desirable de negociere, interfața este într-o stare de negociere activă',
      'Pachetele PAgP sunt trimise doar la începutul negocierilor',
      'În modul ON de negociere, interfața formează un channel cu PAgP',
      'Niciuna dintre variante'
    ],
    correctIndex: 2,
  },
  ]
});