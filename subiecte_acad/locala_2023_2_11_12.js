window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'locala_2023_2_11_12',
  topic: 'Locala (2) 11-12 2023',
  questions: [
    {
      type: 'multiple-choice',
      text: 'Ce protocol ar trebui utilizat pentru a atenua vulnerabilitatea utilizării Telnet la administrarea de la distanță a dispozitivelor de rețea?',
      options: ['SCP', 'SSH', 'DNS', 'SNMP', 'TFTP', 'TELNET'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care afirmație descrie conceptul de cloud computing?',
      options: [
        'separarea sistemului de operare de hardware',
        'separarea planului de control de planul de date',
        'separarea aplicației de hardware',
        'efectuarea muncii pe un calculator fără conexiune la rețea',
        'separarea planului de management de planul de control',
        'conectarea prin portul consolă la router'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice-multi',
      text: 'Conform schemei, ServerB încearcă să contacteze HostA. Care două afirmații identifică corect adresarea pe care ServerB o va genera în acest proces? (Alegeți 2)',
      image: 'subiecte_acad/images/locala_2023_2_1112/q3.png',
      options: [
        'ServerB va genera un pachet cu adresa IP destinație a RouterB.',
        'ServerB va genera un cadru cu adresa MAC destinație a RouterA.',
        'ServerB va genera un cadru cu adresa MAC destinație a RouterB.',
        'ServerB va genera un pachet cu adresa IP destinație a HostA.',
        'ServerB va genera un pachet cu adresa IP destinație a RouterA.',
        'ServerB va genera un cadru cu adresa MAC destinație a SwitchB.'
      ],
      correctIndices: [2, 3]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce este necesar pentru a configura un EtherChannel de tip trunk între două switch-uri? (Alegeți 2)',
      options: [
        'Viteza negociată a legăturilor trebuie să fie aceeași.',
        'Interfețele participante trebuie să fie fizic contigue pe switch.',
        'Interfețele participante trebuie atribuite aceluiași număr de VLAN pe ambele switch-uri.',
        'Cablurile trebuie să fie exclusiv straight-through.',
        'Interfețele participante trebuie să fie pe același modul al switch-ului.',
        'Intervalul permis de VLAN-uri trebuie să fie același pe ambele switch-uri.'
      ],
      correctIndices: [0, 5]
    },
    {
      type: 'multiple-choice-multi',
      text: 'La rutarea unui număr mare de VLAN-uri, care două dezavantaje are metoda router-on-a-stick față de metoda de rutare inter-VLAN cu switch multilayer? (Alegeți 2)',
      options: [
        'Este necesar un router dedicat.',
        'RoAS necesită tot atâtea conexiuni fizice câte VLAN-uri există.',
        'Router-on-a-stick necesită mai multe interfețe fizice pe router.',
        'Sunt necesare mai multe SVI-uri.',
        'Router-on-a-stick necesită configurarea subinterfețelor în aceleași subrețele.',
        'Subinterfețele multiple pot afecta viteza de transfer a traficului.'
      ],
      correctIndices: [0, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Ce protocol adaugă securitate conexiunilor la distanță?',
      options: ['OSPF', 'FHRP', 'SSH', 'FTP', 'POP', 'HTTP'],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Ce tip de VLAN este configurat specific pentru traficul de rețea cum ar fi SSH, Telnet, HTTPS, HTTP și SNMP?',
      options: [
        'VLAN de voce',
        'VLAN CCTV',
        'VLAN de securitate',
        'VLAN de management',
        'VLAN nativ',
        'VLAN IoT'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care două nume de host respectă regulile convențiilor de denumire pe dispozitivele Cisco IOS? (Alegeți 2)',
      options: [
        '5[unit]',
        'Branch2!',
        'Floor(15)',
        'HO Floor 17',
        'RM-3-Switch-2A4',
        'SwBranch799'
      ],
      correctIndices: [4, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Un administrator de rețea a configurat un EtherChannel între două switch-uri conectate prin patru link-uri trunk. Dacă interfața fizică pentru unul dintre link-urile trunk trece în starea down, ce se întâmplă cu EtherChannel-ul?',
      options: [
        'EtherChannel-ul va rămâne funcțional.',
        'EtherChannel-ul va trece în starea down.',
        'EtherChannel-ul va deveni un VLAN de management.',
        'Spanning Tree Protocol va trece interfața fizică defectă în modul forwarding.',
        'Switch-urile se vor reporni.',
        'Spanning Tree Protocol va recalcula legăturile trunk rămase.'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, elevul de la calculatorul H1 continuă să lanseze un atac ping cu pachete mari spre elevul de la calculatorul H2. Administratorul rețelei școlare dorește să oprească acest comportament, dar să permită în continuare ambilor elevi accesul la temele web. Care ar fi cel mai bun plan pentru administratorul de rețea?',
      image: 'subiecte_acad/images/locala_2023_2_1112/q10.png',
      options: [
        'Aplicați o ACL standard de intrare pe R1 Gi0/0.',
        'Aplicați o ACL extinsă de intrare pe R2 Gi0/1.',
        'Aplicați o ACL extinsă de ieșire pe R1 S0/0/1.',
        'Aplicați o ACL standard de ieșire pe R2 S0/0/1.',
        'Aplicați o ACL extinsă de intrare pe switch-ul conectat la H1.',
        'Aplicați o ACL extinsă de intrare pe R1 Gi0/0.'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Ce interfață permite administrarea de la distanță a unui switch de nivel 2?',
      options: [
        'primul port Ethernet',
        'interfața AUX',
        'interfața VPN',
        'interfața portului consolă',
        'interfața intranet',
        'interfața virtuală a switch-ului (SVI)'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'O companie a devenit recent multinațională. Angajații lucrează de la distanță, în fusuri orare diferite, și au nevoie de acces la serviciile companiei de oriunde și oricând. Ce serviciu sau tehnologie ar sprijini această cerință?',
      options: [
        'servere dedicate',
        'servicii intranet',
        'servicii cloud',
        'virtualizare',
        'servere cu acces local exclusiv',
        'centru de date'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice-multi',
      text: 'Un administrator de rețea scrie o ACL standard care va refuza orice trafic din rețeaua 172.16.0.0/16, dar va permite tot celălalt trafic. Care două comenzi ar trebui utilizate? (Alegeți 2)',
      options: [
        'Router(config)# access-list 95 deny 172.16.0.0 0.0.255.255',
        'Router(config)# access-list 95 host 172.16.0.0',
        'Router(config)# access-list 95 deny any',
        'Router(config)# access-list 95 permit any',
        'Router(config)# access-list 95 172.16.0.0 255.255.255.255',
        'Router(config)# access-list 95 deny 172.16.0.0 255.255.0.0'
      ],
      correctIndices: [0, 3]
    },
    {
      type: 'multiple-choice',
      text: 'Un tehnician de rețea introduce următoarele comenzi la configurarea unui router:\nR1(config)# router ospf 11\nR1(config-router)# network 10.10.10.0 0.0.0.255 area 0\nCe reprezintă numărul 11?',
      options: [
        'numărul de conexiuni fizice ale routerului',
        'numărul sistemului autonom căruia îi aparține R1',
        'ID-ul procesului OSPF pe R1',
        'distanța administrativă atribuită manual lui R1',
        'costul legăturii spre R1',
        'numărul ariei în care se află R1'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, NAT este configurat pe RT1 și RT2. PC-ul trimite o cerere către serverul web. Care adresă IPv4 este adresa IP sursă în pachetul dintre RT2 și serverul web?',
      image: 'subiecte_acad/images/locala_2023_2_1112/q15.png',
      options: [
        '172.16.1.254',
        '192.168.1.5',
        '203.0.113.10',
        '192.0.2.2',
        '172.16.1.10',
        '209.165.200.245'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Pool-ul de adrese al unui server DHCP este configurat cu 10.19.44.0/24. Administratorul de rețea rezervă 3 adrese IP pentru servere. Câte adrese IP rămân în pool pentru a fi atribuite altor hosturi?',
      options: ['241', '254', '250', '252', '255', '249'],
      correctIndex: 2
    },
    {
      type: 'multiple-choice-multi',
      text: 'Un laptop nu se poate conecta la un punct de acces wireless. Care doi pași de depanare ar trebui efectuați primii? (Alegeți 2)',
      options: [
        'Verificați că antena laptopului este atașată.',
        'Verificați că NIC-ul este configurat pentru frecvența corectă.',
        'Verificați că NIC-ul wireless este activat.',
        'Verificați că laptopul este oprit.',
        'Verificați că este selectat mediul de rețea corect.',
        'Verificați că SSID-ul wireless corect este ales.'
      ],
      correctIndices: [2, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Un administrator configurează OSPF cu o singură arie pe un router. Una dintre rețelele care trebuie anunțate este 64.102.0.0 255.255.255.128. Ce mască wildcard va folosi administratorul în instrucțiunea de rețea OSPF?',
      options: ['0.0.31.255', '0.0.0.127', '0.0.0.63', '255.255.255.127', '255.255.255.128', '0.0.63.255'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Un switch este configurat să ruleze STP. Ce termen descrie punctul de referință pentru toate calculele de cale?',
      options: [
        'first port',
        'root port',
        'designated port',
        'alternate port',
        'root bridge',
        'main bridge'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Ce conține trailerul unui cadru de nivel legătură de date?',
      options: [
        'date',
        'adresă logică',
        'timp și sincronizare',
        'detectarea erorilor',
        'adresă fizică',
        'chei de criptare'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Considerați următoarea comandă:\nip route 192.168.10.0 255.255.255.0 10.10.10.2 5\nCum ar testa un administrator această configurație?',
      options: [
        'Ping orice adresă validă din rețeaua 192.168.11.0/24.',
        'Ping adresa loopback locală 127.0.0.1.',
        'Opriți manual toate interfețele routerului.',
        'Ping de la rețeaua 192.168.10.0 la adresa 10.10.10.2.',
        'Ștergeți ruta default gateway de pe router.',
        'Opriți manual interfața routerului utilizată ca rută primară.'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Un administrator de rețea a fost însărcinat să creeze un plan de recuperare în caz de dezastru. Ca parte a acestui plan, administratorul caută un site de rezervă pentru toate datele de pe serverele companiei. Ce serviciu sau tehnologie ar sprijini această cerință?',
      options: [
        'conexiune de rețea cu latență redusă',
        'centru de date',
        'adăugarea mai multă RAM la dispozitivele finale',
        'rețele definite prin software (SDN)',
        'servere dedicate',
        'virtualizare'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, pe baza afișării prezentate, ce tip de adresare IPv6 este configurată?',
      image: 'subiecte_acad/images/locala_2023_2_1112/q23.png',
      options: [
        'SLAAC',
        'DHCPv6 Stateless',
        'adresare IPv4',
        'DHCPv4',
        'DHCPv6 Stateful',
        'link-local static'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce tip de VLAN este proiectat pentru a rezerva lățimea de bandă pentru a asigura calitatea telefoanelor IP?',
      options: [
        'VLAN CCTV',
        'VLAN IoT',
        'VLAN trunk',
        'VLAN de securitate',
        'VLAN de voce',
        'VLAN de management'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care este scopul câmpului FCS dintr-un cadru?',
      options: [
        'identificarea destinației',
        'verificarea adresei logice a nodului expeditor',
        'obținerea adresei MAC a nodului expeditor',
        'determinarea dacă au apărut erori în transmisie și recepție',
        'calcularea antetului CRC pentru câmpul de date',
        'identificarea expeditorului'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Ce protocol adaugă securitate conexiunilor la distanță?',
      options: ['FTP', 'HTTP', 'SSH', 'TELNET', 'NetBEUI', 'POP'],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Un tehnician configurează un switch cu aceste comenzi:\nSwitchA(config)# interface vlan 1\nSwitchA(config-if)# ip address 192.168.1.1 255.255.255.0\nSwitchA(config-if)# no shutdown\nCe configurează tehnicianul?',
      options: [
        'server DHCP',
        'acces Telnet',
        'SVI',
        'acces fizic prin switchport',
        'criptarea parolelor',
        'un server web'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Un switch este configurat să ruleze STP. Ce termen descrie un port non-rădăcină care are permisiunea de a transmite trafic în rețea?',
      options: [
        'root port',
        'blocking',
        'deisgnated port',
        'alt port',
        'alternate port',
        'main port'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Pool-ul de adrese al unui server DHCP este configurat cu 172.21.121.0/25. Administratorul de rețea rezervă 12 adrese IP pentru servere web. Câte adrese IP rămân în pool pentru a fi atribuite altor hosturi?',
      options: ['104', '113', '118', '114', '115', '112'],
      correctIndex: 4,
    },
    {
      type: 'multiple-choice',
      text: 'Un administrator de rețea al unui colegiu configurează procesul de autentificare a utilizatorilor WLAN. Utilizatorii wireless trebuie să introducă credențiale de tip username și parolă, care vor fi verificate de un server. Ce server ar furniza un astfel de serviciu?',
      options: ['AAA', 'SSH', 'SNMP', 'RADIUS', 'TELNET', 'NAT'],
      correctIndex: 3
    }
  ]
});
