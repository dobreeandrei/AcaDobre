window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'judeteana_2024_11_12',
    topic: 'Judeteana 11-12 2024',
    questions: [
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele adrese IPv4, va fi blocată de următorul ACL:\nip access-list standard 1\ndeny 172.16.0.241 0.0.0.250\npermit any',
    options: [
      '172.16.0.2',
      '172.16.0.3',
      '172.16.0.199',
      '172.16.0.143',
      '172.16.0.223',
      '172.16.0.27'
    ],
    correctIndices: [1, 5]
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următoarele afirmații despre NAT nu este adevărată?',
    options: [
      'Outside local address și outside global address nu sunt întotdeauna identice',
      'Rularea NAT cauzează degradări de performanță într-o rețea',
      'Outside local address și outside global address sunt întotdeauna identice',
      'Nu necesită modificarea schemei de adresare într-o rețea deja configurată',
      'Adresele IP private nu sunt accesibile din internet',
      'Utilizarea NAT nu respectă principiul adresării end-to-end'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'În ce memorie sunt stocate în mod implicit configurațiile VLAN?',
    options: [
      'Flash',
      'Cloud',
      'NVRam',
      'Bios',
      'Running config',
      'POST'
    ],
    correctIndex: 0,
  },
  {
    type: 'multiple-choice',
    text: 'Care este adresa de broadcast a următoarei adrese IP : 172.16.4.254/22 ?',
    options: [
      '172.16.4.0',
      '172.16.7.254',
      '172.16.7.255',
      '172.16.7.0',
      '172.16.4.254',
      '172.16.4.255'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următoarele comenzi este utilizată pentru a configura un dispozitiv Cisco să sincronizeze timpul utilizând protocolul NTP (Network Time Protocol)?',
    options: [
      'ntp peer 0.ro.pool.ntp.org',
      'clock source ntp',
      'time-sync ntp',
      'ntp sync server0.ro.pool.ntp.org',
      'ntp enable',
      'ntp server 0.ro.pool.ntp.org'
    ],
    correctIndex: 5,
  },
  {
    type: 'multiple-choice',
    text: 'Care tip de atac poate fi executat doar în LAN?',
    options: [
      'IP Adress Spoofing',
      'ARP Spoofing',
      'DOS',
      'DHCP Starvation',
      'Fishing',
      'Man in the middle'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următoarele variante este un model de implementare QoS?',
    options: [
      'Low-effort model',
      'Differentiated Protocols',
      'Prioritized Services',
      'niciuna din variante',
      'Integrated Services',
      'toate variantele'
    ],
    correctIndex: 4,
  },
  {
    type: 'multiple-choice',
    text: 'Care este formula prin care putem calcula o adresă de broadcast?',
    options: [
      'ȘI logic între adresa IP și mască.',
      'Adresa IP inversată.',
      'ȘI logic între adresa IP și masca inversată.',
      'XOR între adresa IP și mască.',
      'SAU logic între adresa IP și mască.',
      'SAU logic între adresa IP și masca inversată.'
    ],
    correctIndex: 5,
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următoarele seturi de comenzi encriptează parolele din startup-config și din running-config pe dispozitive Cisco?',
    options: [
      'enable\nconfigure terminal\nservice password-encryption',
      'enable\nconfigure terminal\nline console 0\nservice password-encryption\nno shutdown',
      'enable\nconfigure terminal\ninterface vlan 1\nservice encrypt-password',
      'enable\nservice password-encryption',
      'enable\nservice encrypt-password',
      'enable\nconfigure terminal\nencrypt password'
    ],
    correctIndex: 0,
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următoarele adrese IPV4, va fi blocat de următorul ACL:\nip access-list standard 1\ndeny 172.16.0.240 0.0.0.250\npermit any',
    options: [
      '172.16.0.166',
      '172.16.0.100',
      '172.16.0.96',
      '172.16.0.1',
      '172.16.0.132',
      '172.16.0.36'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Câte adrese asignabile (care pot fi asociate unei stații) se găsesc într-o rețea cu masca /23?',
    options: [
      '511',
      '513',
      '510',
      '500',
      '512',
      '254'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Cum poți configura costul STP (Spanning Tree Protocol) pe o interfață a unui switch Cisco?',
    options: [
      'set spanning-tree interface cost <cost>',
      'spanning-tree cost <cost>',
      'stp interface cost <cost>',
      'configure cost <cost> spanning-tree',
      'configure interface stp-cost <cost> ',
      'cost <cost> spanning-tree interface'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Un pachet de la un client este primit de un server. Pachetul are un număr de port destinație de 69. Ce serviciu solicită clientul?',
    options: [
      'TELNET',
      'SMTP',
      'TFTP',
      'DNS',
      'POP3',
      'DHCP'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Asupra cărei structuri de date, se aplică algoritmul de calcul al rutelor din OSPF?',
    options: [
      'Forwarding Database',
      'Adjacency Database',
      'CAM Table',
      'Link-State Database',
      'Routing Table',
      'ARP Table'
    ],
    correctIndex: 3,
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care este metoda corectă de a seta banner-ul "Hello! Acces interzis!" pe un dispozitiv Cisco? (alegeți 2 variante de răspuns)',
    options: [
      'banner #Hello! Acces interzis!#',
      'banner motd Hello! Acces interzis!',
      'banner motd [Hello! Acces interzis![',
      'banner Hello! Acces interzis!',
      'banner motd !Hello! Acces interzis!',
      'banner motd #Hello! Acces interzis!#'
    ],
    correctIndices: [2, 5],
  },
  {
    type: 'multiple-choice',
    text: 'Care este adresa de rețea a următoarei adrese IP: 172.16.0.201/28?',
    options: [
      '172.16.0.192',
      '172.16.0.0',
      '172.16.1.192',
      '172.16.1.0',
      '172.16.0.207',
      '172.16.0.201'
    ],
    correctIndex: 0,
  },
  {
    type: 'multiple-choice',
    text: 'Care este lungimea măștii adreselor din clasa B de adrese private?',
    options: [
      '/8',
      '/24',
      '/14',
      '/16',
      '/12',
      '/10'
    ],
    correctIndex: 4,
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care din următoarele afirmații sunt adevărate cu privire la adresele IPv6? (alegeți 3 variante de răspuns)',
    options: [
      'adresele global unicast care sunt folosite în acest moment au cel mai puțin semnificativ bit din primul octet egal cu 0',
      'ca:fe:ba:be:ip:00 este o adresă validă',
      'de:ad:be:ef:00:00:: este o adresă validă',
      'prefixul unei adrese poate varia între /0 și /128',
      'nu toate routerele IPv6 au nevoie de un LLA (linklocal address)',
      'adresele IPv6 nu pot fi folosite la subnetare'
    ],
    correctIndices: [0, 2, 3],
  },
  {
    type: 'multiple-choice',
    text: 'Pe ce port comunică un client DHCP?',
    options: [
      '80',
      '67',
      '68',
      '33',
      '137',
      '138'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Care model QoS nu necesită mecanisme QoS speciale?',
    options: [
      'WFQ',
      'Best-Effort',
      'Differential Services',
      'Integrated Services',
      'CBWFQ',
      'LLQ'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Care din următoarele variante NU e o etapă pentru configurarea unui router?',
    options: [
      'securizarea parolelor',
      'salvarea configurației',
      'securizarea atât a modului user EXEC, cât și privileged EXED',
      'niciuna din variante',
      'furnizarea unui mesaj de primire',
      'configurarea numelui device-ului'
    ],
    correctIndex: 3,
  },
  {
    type: 'multiple-choice',
    text: 'Care este valoare default pentru CAM aging time?',
    options: [
      '1 minut',
      'nu există CAM aging time',
      '24 de ore',
      '500 de secunde',
      '300 de secunde',
      '100 de secunde'
    ],
    correctIndex: 4,
  },
  {
    type: 'multiple-choice',
    text: 'Cum funcționează serviciul VPN (Virtual Private Network) în cadrul unei rețele?',
    options: [
      'Filtrare strictă a traficului bazat pe adrese MAC',
      'Asigură conectivitatea între dispozitive în aceeași VLAN',
      'Prioritizează traficul în funcție de cerințele utilizatorilor',
      'Criptează traficul pentru a-l proteja împotriva accesului neautorizat'
    ],
    correctIndex: 3,
  },
  {
    type: 'multiple-choice',
    text: 'Care este adresa de IPv4, de tip multicast, folosită de Routere, pentru a trimite traficul doar către DR și BDR?',
    options: [
      '10.0.0.1',
      '224.0.0.5',
      '169.254.243.5',
      '224.0.0.6',
      '192.168.0.255',
      '172.16.0.1'
    ],
    correctIndex: 3,
  },
  {
    type: 'multiple-choice',
    text: 'Cum se numesc cele 4 tipuri de mesaje care se trimit între un server DHCP și client DHCP?',
    options: [
      'Request, Discover, Order, Accept',
      'Discover, Receive, Order, Accept',
      'Offer, Request, Develop, Acknowledge',
      'Start, Accept, Discover, Accept',
      'Request, Offer, Receive, Acknowledge',
      'Discover, Offer, Request, Acknowledge'
    ],
    correctIndex: 5,
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele concepte se referă la WAN? (alegeți 3 variante de răspuns)',
    options: [
      'Marked Point',
      'Back-to-Back Device Equipment',
      'Backhaul network',
      'Voicelength Modem',
      'Point-of-Presence (POP)',
      'Data Terminal Equipment (DTE)'
    ],
    correctIndices: [2, 4, 5],
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
    text: 'In ce stare va fi un Router care rulează OSPF dacă acesta a trimis un packet de tip Hello, dar încă nu a primit niciunul?',
    options: [
      'Starea ExStart',
      'Starea Down',
      'Starea Exchange',
      'Starea Two-Way',
      'Starea Loading',
      'Starea Init'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Care va fi Wildcard Mask-ul care va face match pe următoarele adrese IP, plecând de la următorul ip de referință 172.16.0.192: 172.16.0.16, 172.16.0.32. 172.16.0.48, 172.16.0.240, 172.16.0.224',
    options: [
      '0.0.0.255',
      '0.0.0.240',
      '0.0.0.200',
      '0.0.0.253',
      '0.0.0.250',
      '0.0.0.254'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Care este adresa de broadcast a următoarei adrese IP: 192.168.1.9/26 ?',
    options: [
      '192.168.1.0',
      '192.168.1.63',
      '192.168.1.64',
      '192.168.2.0',
      '192.168.1.255',
      '192.168.1.1'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'Ce este MPLS (Multiprotocol Label Switching) în contextul rețelelor?',
    options: [
      'Un protocol de rutare dinamică',
      'Un standard de securitate pentru rețelele fără fir',
      'O tehnică de comutare a etichetelor pentru îmbunătățirea performanței',
      'Un protocol de securitate pentru VPN-uri'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Care sunt cele 4 tipuri de adrese NAT?',
    options: [
      'Inside global address, Outside global address, Local outside address, Local inside address',
      'Inside local address, Global outside address, Local outside address, Inside global address',
      'Global inside address, Local outside address, Global outside address, Local inside address',
      'Global inside address, Outside local address, Local inside address, Outside global address',
      'Inside local address, Outside global address, Inside global address, Outside local address',
      'Outside local address, Global inside address, Inside local address, Global outside address'
    ],
    correctIndex: 4,
  },
  {
    type: 'multiple-choice',
    text: 'La ce nivel din stiva OSI pachetele se transmit sub formă de biți?',
    options: [
      'Sesiune',
      'Transport',
      'Legătură de date',
      'Aplicație',
      'Rețea',
      'Fizic'
    ],
    correctIndex: 5,
  },
  {
    type: 'multiple-choice',
    text: 'Ce funcționalitate a multor switchuri și plăci de rețea permite ca 2 dispozitive să negocieze viteza optimă și capabilitatea duplex?',
    options: [
      'autoset',
      'autonegotiation',
      'autospeed',
      'auto-MDIX',
      'auto-duplex',
      'auto-tune'
    ],
    correctIndex: 1,
  },
  {
    type: 'multiple-choice',
    text: 'În cazul unui atac de tip STP manipulation se pot întâmpla următoarele acțiuni:',
    options: [
      'Root Bridge se modifică',
      'IP-ul default gateway-ului se modifică',
      'Toate variantele',
      'Arborele STP se modifică și Root Bridge se modifică',
      'Arborele STP se modifică',
      'Niciuna din variante'
    ],
    correctIndex: 3,
  },
  {
    type: 'multiple-choice',
    text: 'Ce tip de VLAN acceptă și trafic neetichetat?',
    options: [
      'VLAN de management',
      'VLAN de securitate',
      'VLAN default',
      'VLAN nativ',
      'VLAN desirable',
      'VLAN de voce'
    ],
    correctIndex: 3,
  },
  {
    type: 'multiple-choice',
    text: 'Cum influențează configurarea VTP (VLAN Trunking Protocol) o rețea?',
    options: [
      'Prioritizează traficul VLAN în funcție de cerințele utilizatorilor',
      'Optimizarea rutării între diferite VLAN-uri',
      'Stabilește legături trunk între ruterele din rețea',
      'niciuna din variante',
      'toate variantele',
      'Sincronizează informațiile VLAN între switch-uri'
    ],
    correctIndex: 5,
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele adrese IP sunt asignabile pentru rețeaua 192.172.8.0/24? (alegeți 2 variante de răspuns)',
    options: [
      '192.172.8.172',
      '192.172.8.255',
      '192.172.9.254',
      '192.172.9.172',
      '192.172.8.0',
      '192.172.8.254'
    ],
    correctIndices: [0, 5],
  },
  {
    type: 'multiple-choice',
    text: 'În cazul rutării unui număr mare de VLAN-uri, care este unul din dezavantajele folosirii RoaS (Router on a Stick) în locul rutării folosind un switch multi-layer?',
    options: [
      'Oferă o performanță ridicată în rețelele mari',
      'Sunt necesare mai multe interfețe virtuale',
      'RoaS necesită configurarea subinterfețelor în același subnet',
      'Necesită mai puține configurații',
      'RoaS necesită mai multe interfețe fizice pe router',
      'Mai multe subinterfețe vor impacta viteza traficului'
    ],
    correctIndex: 5,
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următoarele moduri de agregare de porturi este într-o stare de negociere pasivă?',
    options: [
      'Auto',
      'PAgP',
      'ether',
      'LACP',
      'Desirable',
      'Active'
    ],
    correctIndex: 0,
  },
  {
    type: 'multiple-choice',
    text: 'Selectați care dintre următoarele este o adresă IPv4 validă pentru un host:',
    options: [
      '192.168.17.256/26',
      '192.16.8.17.64/26',
      '192.168.17.127/26',
      '192.168.17.31/27',
      '192.168.17.300/24',
      '255.255.255.2/30'
    ],
    correctIndex: 5,
  },
  {
    type: 'multiple-choice',
    text: 'Autentificarea pe tunele de VPN tip IPsec se realizează folosind Pre-shared Key sau Certificat Digital. GRE are nevoie de IPsec pentru a fi securizat. IPsec se folosește de AH, ESP și IKE pentru a functiona.',
    options: [
      'Fals, Adevărat, Adevărat',
      'Fals, Adevărat, Fals',
      'Adevărat, adevărat, adevărat',
      'Adevărat, Fals, Adevărat',
      'Fals, Fals, Adevărat',
      'Fals, fals, fals'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Care este scopul serviciului HSRP?',
    options: [
      'Asigură redundanță și disponibilitate crescută',
      'Distribuie traficul uniform între mai multe rutere',
      'Optimizarea tabelelor de rutare în mod dinamic',
      'Prioritizarea traficului bazat pe adresele IP sursă',
      'niciuna din variante',
      'toate variantele'
    ],
    correctIndex: 0,
  },
  {
    type: 'multiple-choice',
    text: 'În care din stările prin care trece un Router, în timpul rulării unui proces de OSPF, se acceptă mesajele de tip LSRs?',
    options: [
      'Exchange, Loading, Full',
      'ExStart, Init, Exchange și Loading',
      'Down, Init, Full',
      'In toate stările',
      'Full, Init și Exchange',
      'Doar Full'
    ],
    correctIndex: 0,
  },
  {
    type: 'multiple-choice',
    text: 'Un grup de 2 routere (A și B) formează un grup GLBP. A este AVG (active virtual gateway). Care dintre routere va răspunde la mesaje de tip ARP request venite pentru adresa IP virtuală a grupului?',
    options: [
      'atât A cât și B vor răspunde în același timp, de fiecare dată',
      'doar B',
      'A și B vor răspunde separat la acestea, în mod egal',
      'doar A',
      'A la majoritatea, B la restul',
      'răspunde mai des cel cu capacitate mai mare (numărul de proprietăți GLBP)'
    ],
    correctIndex: 3,
  },
  {
    type: 'multiple-choice',
    text: 'Fie topologia din imaginea de mai jos. Considerăm BID-urile: SwA < SwB < SwC < SwD < SwE < SwF. Legăturile punctate (GigabitEthernet) au costul 19, în timp ce restul au costul 100 (FastEthernet). În urma rulării STP, care vor fi rolurile porturilor switch-ului F?',
    image: 'subiecte_acad/images/judeteana_2024_1112/q46.png',
    options: [
      '1-Designated, 2-Designated, 3-Root',
      '1-Root, 2-Designated, 3-Root',
      '1-Root, 2-Designated, 3-Blocked',
      '1-Blocked, 2-Designated, 3-Root',
      '1-Designated, 2-Designated, 3-Designated',
      '1-Blocked, 2-Blocked, 3-Designated'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Care sunt componentele principale, care facilitează funcționarea corectă a protocolului de rutare dinamică OSPF?',
    options: [
      'Certificate digitale, Algoritm de calcul al rutelor, Structuri de date pentru mentinerea informatiilor',
      'Structuri de date pentru mentinerea informatiilor, Chei Publice , Chei Private',
      'Mecanisme de Retransmisie, Mecanisme de detectare ale Erorilor, Mesaje specifice Protocolului',
      'Mesaje Specifice protocolului , Structuri de date pentru mentinerea informatiilor , Algoritm de calcul al rutelor',
      'Certificate digitale, Chei Publice, Chei private',
      'Algoritm de calcul al rutelor, Mesaje specifice protocolului, Mecanisme de retransmisie'
    ],
    correctIndex: 3,
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următorii parametri este folosit într-un ACL standard?',
    options: [
      'Port sursă',
      'Protocolul folosit (IP/TCP)',
      'Adresa IP destinație',
      'Port destinație',
      'Adresa IP sursă',
      'Adresa MAC'
    ],
    correctIndex: 4,
  },
  {
    type: 'multiple-choice',
    text: 'Câte domenii de broadcast există în topologia de mai jos?',
    image: 'subiecte_acad/images/judeteana_2024_1112/q49.png',
    options: [
      '6',
      '3',
      '5',
      '4',
      '0',
      '2'
    ],
    correctIndex: 2,
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre afirmațiile următoare despre SLAAC este adevărată?',
    options: [
      'Denumirea sa vine de la System Logic Address AutoConfiguration',
      'Flag-ul O este setat pe 1 și M este setat pe 0',
      'Gateway nu va fi niciodată adresa link-local a interfeței din aceeaşi rețea',
      'Flag-ul M este setat pe 1 și O este setat pe 0',
      'Niciuna dintre variante',
      'Mesajele pe care le folosește SLAAC sunt Router Synchronisation și Router Acknowledge'
    ],
    correctIndex: 4,
  }
]
});
