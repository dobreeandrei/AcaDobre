window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'judeteana_2023_1_11_12',
  topic: 'Judeteana 2023 (1) 11-12',
  questions: [
    {
      type: 'multiple-choice',
      text: 'Care opțiune prezintă o rută statică default IPv4 configurată corect?',
      options: [
        'ip route 0.0.0.0 255.255.255.255 S0/0/0',
        'ip route 0.0.0.0 255.255.0.0 S0/0/0',
        'ip route 0.0.0.0 255.0.0.0 S0/0/0',
        'ip route 0.0.0.0 255.255.255.0 S0/0/0',
        'ip route 0.0.0.0 255.255.255.252 S0/0/0',
        'ip route 0.0.0.0 0.0.0.0 S0/0/0'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, pe baza configurației și afișării prezentate, de ce lipsește VLAN 99?',
      image: 'subiecte_acad/images/judeteana_2023_1_1112/q2.png',
      options: [
        'deoarece VLAN 1 este inactiv și nu putem crea VLAN 99 fără el',
        'deoarece VLAN 99 nu a fost încă creat',
        'deoarece VLAN 99 nu poate exista',
        'deoarece există o problemă de cablare pe VLAN 99',
        'deoarece VLAN 1 este activ și poate exista un singur VLAN de management pe switch',
        'deoarece VLAN 99 nu este un VLAN de management valid'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce funcție Cisco Catalyst dezactivează automat portul aflat în starea PortFast la primirea unui BPDU?',
      options: [
        'BPDU Filter',
        'BackboneFast',
        'Root Port',
        'BPDU Guard',
        'Root Guard',
        'UplinkFast'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Ce protocol sau tehnologie dezactivează căile redundante pentru a elimina buclele de nivel 2?',
      options: [
        'VTP',
        'EtherChannel',
        'NAT',
        'OSPF',
        'STP',
        'DTP'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, care este metrica pentru a transmite un pachet de date cu adresa IPv6 destinație 2001:DB8:ACAD:E:240:BFF:FED4:9DD2?',
      image: 'subiecte_acad/images/judeteana_2023_1_1112/q5.png',
      options: [
        '2682112',
        '2681856',
        '2170112',
        '128',
        '3193856',
        '90'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice-multi',
      text: 'Un administrator de rețea configurează un nou switch Cisco pentru acces de management de la distanță. Care trei elemente NU ar trebui configurate pe switch pentru această sarcină? (Alegeți 3)',
      options: [
        'adresă loopback',
        'linii vty',
        'default gateway',
        'domeniu VTP',
        'VLAN implicit',
        'adresă IP'
      ],
      correctIndices: [0, 3, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Conform schemei, un switch de nivel 3 rutează pentru trei VLAN-uri și se conectează la un router pentru conectivitate la Internet. Care două configurații ar fi aplicate pe switch? (Alegeți 2)',
      image: 'subiecte_acad/images/judeteana_2023_1_1112/q7.png',
      options: [
        '(config)# interface vlan 1\n(config-if)# ip address 192.168.1.2 255.255.255.0\n(config-if)# no shutdown',
        '(config)# ip routing',
        '(config)# interface gigabitethernet 1/1\n(config-if)# no switchport\n(config-if)# ip address 192.168.1.2 255.255.255.252',
        '(config)# interface gigabitethernet 1/1\n(config-if)# ip address 192.168.1.2 255.255.255.252',
        '(config)# interface gigabitethernet1/1\n(config-if)# switchport mode trunk',
        '(config)# interface fastethernet0/4\n(config-if)# switchport mode trunk'
      ],
      correctIndices: [1, 2]
    },
    {
      type: 'multiple-choice',
      text: 'Ce informații utilizează un switch pentru a popula tabela de adrese MAC?',
      options: [
        'adresa MAC destinație și portul de ieșire',
        'adresa MAC sursă și portul de ieșire',
        'adresa MAC sursă și portul de intrare',
        'adresele MAC sursă și destinație și portul de intrare',
        'adresa MAC destinație și portul de intrare',
        'adresele MAC sursă și destinație și portul de ieșire'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, un administrator de rețea verifică configurația switch-ului S1. Ce protocol a fost implementat pentru a grupa mai multe porturi fizice într-o singură legătură logică?',
      image: 'subiecte_acad/images/judeteana_2023_1_1112/q9.png',
      options: [
        'PAgP',
        'STP',
        'DTP',
        'NAT',
        'LACP',
        'PAT'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care trei standarde Wi-Fi NU funcționează în intervalul de frecvențe de 2,4 GHz? (Alegeți 3)',
      options: [
        '802.11g',
        '802.2a',
        '802.11b',
        '802.11a',
        '802.2b',
        '802.11n'
      ],
      correctIndices: [1, 3, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Ce comandă ar fi utilizată ca parte a configurării NAT sau PAT pentru a șterge intrările dinamice înainte de expirarea timeout-ului?',
      options: [
        'clear ip pat statistics',
        'clear nat ip translation',
        'clear access-list counters',
        'clear dhcp ip',
        'clear ip dhcp',
        'clear ip nat translation'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, un administrator de rețea verifică configurarea rutării inter-VLAN. Utilizatorii reclamă că PC2 nu poate comunica cu PC1. Pe baza afișării, care este cauza posibilă a problemei?',
      image: 'subiecte_acad/images/judeteana_2023_1_1112/q12.png',
      options: [
        'Comanda encapsulation dot1Q 20 conține VLAN-ul greșit.',
        'Comanda interface GigabitEthernet0/0.5 a fost introdusă incorect.',
        'Comanda no shutdown nu a fost introdusă pe subinterfețe.',
        'Nu este configurată nicio adresă IP pe interfața Gi0/0.',
        'Comanda encapsulation dot1Q 5 conține VLAN-ul greșit.',
        'Gi0/0 nu este configurat ca port trunk.'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, un administrator de rețea configurează rutarea inter-VLAN pe o rețea. Deocamdată se utilizează un singur VLAN, dar urmează să fie adăugate altele. Care este parametrul lipsă reprezentat prin semnul de întrebare evidențiat în figură?',
      image: 'subiecte_acad/images/judeteana_2023_1_1112/q13.png',
      options: [
        'Identifică interfața',
        'Identifică tipul de încapsulare utilizat.',
        'Identifică numărul VLAN-ului nativ.',
        'Identifică numărul de hosturi permise pe interfață.',
        'Identifică numărul VLAN-ului.',
        'Identifică subinterfața.'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Ce protocol sau tehnologie utilizează IP sursă către IP destinație ca mecanism de load balancing?',
      options: [
        'EtherChannel',
        'OSPF Multi-Area',
        'DTP',
        'STP',
        'OSPF Single-Area',
        'VTP'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care NU sunt trei tehnici de atenuare a atacurilor VLAN? (Alegeți 3)',
      options: [
        'Dezactivați DTP.',
        'Activați BPDU guard.',
        'Activați trunking-ul manual.',
        'Utilizați VLAN-uri private.',
        'Setați VLAN-ul nativ la un VLAN neutilizat.',
        'Activați Source Guard.'
      ],
      correctIndices: [1, 3, 5]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Conform schemei, administratorul de rețea configurează funcția port security pe switch-ul SWC și a executat comanda show port-security interface fa0/2 pentru a verifica configurația. Ce NU poate fi concluzionat din afișarea prezentată? (Alegeți 3)',
      image: 'subiecte_acad/images/judeteana_2023_1_1112/q16.png',
      options: [
        'Portul este configurat ca link trunk.',
        'Pe această interfață au fost detectate trei incalcari de securitate.',
        'În prezent nu este conectat niciun dispozitiv la acest port.',
        'Acest port este în prezent activ.',
        'Modul portului de switch pentru această interfață este modul access.',
        'Violările de securitate vor determina oprirea imediată a acestui port.'
      ],
      correctIndices: [0, 1, 2]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Conform schemei, care două concluzii pot fi trase din afișare? (Alegeți 2)',
      image: 'subiecte_acad/images/judeteana_2023_1_1112/q17.png',
      options: [
        'ID-ul port channel-ului nu este un canal de nivel 3.',
        'Bundle-ul este complet operațional.',
        'Metoda de echilibrare a încărcării utilizată este port sursă la port destinație.',
        'ID-ul port channel-ului este 3.',
        'EtherChannel-ul este activ.',
        'ID-ul port channel-ului este 2.'
      ],
      correctIndices: [0, 5]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Un nou switch de nivel 3 este conectat la un router și este configurat pentru rutare inter-VLAN. Care trei din cei cinci pași necesari configurației NU sunt obligatorii? (Alegeți 3)',
      options: [
        'instalarea unei rute statice',
        'atribuirea porturilor la VLAN-uri',
        'modificarea VLAN-ului implicit',
        'introducerea comenzii „no switchport" pe portul conectat la router',
        'atribuirea porturilor la VLAN-ul nativ',
        'activarea rutării IP'
      ],
      correctIndices: [0, 2, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care trei afirmații NU descriu cu exactitate setările duplex și viteză pe switch-urile Cisco 2960? (Alegeți 3)',
      options: [
        'În mod implicit, viteza este setată la 100 Mb/s, iar modul duplex este setat la autonegociere.',
        'În mod implicit, funcția de autonegociere este dezactivată.',
        'Activarea autonegocierii pe un hub va preveni vitezele de port nepotrivite la conectarea hub-ului la switch.',
        'Când viteza este setată la 1000 Mb/s, porturile switch-ului vor funcționa în modul full-duplex.',
        'Setările duplex și viteză ale fiecărui port de switch pot fi configurate manual.',
        'Un eșec de autonegociere poate cauza probleme de conectivitate.'
      ],
      correctIndices: [0, 1, 2]
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, un administrator de rețea configurează R1 pentru rutare inter-VLAN între VLAN 10 și VLAN 20. Cu toate acestea, dispozitivele din VLAN 10 și VLAN 20 nu pot comunica. Pe baza configurației din schemă, care este o cauză posibilă a problemei?',
      image: 'subiecte_acad/images/judeteana_2023_1_1112/q20.png',
      options: [
        'Portul Gig0/0 ar trebui configurat ca port trunk.',
        'Încapsularea este configurată greșit pe o subinterfață.',
        'Portul Gig0/1 ar trebui configurat ca port trunk.',
        'Comenzile de încapsulare sunt greșite.',
        'Comanda interface gigabitEthernet 0/0.1 este greșită.',
        'O comandă no shutdown ar trebui adăugată în configurarea fiecărei subinterfețe.'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, PC-A și PC-B se află ambele în VLAN 60. PC-A nu poate comunica cu PC-B. Care este problema?',
      image: 'subiecte_acad/images/judeteana_2023_1_1112/q21.png',
      options: [
        'Trunk-ul a fost configurat cu comanda switchport nonegotiate.',
        'VLAN-ul nativ ar trebui să fie VLAN 1.',
        'VLAN-ul nativ este eliminat (pruned) din legătură.',
        'VLAN-ul nativ nu ar trebui să fie VLAN 99.',
        'VLAN-ul utilizat de PC-A nu se află în lista de VLAN-uri permise pe trunk.',
        'VLAN-ul nativ ar trebui să fie VLAN 60.'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Ce comandă ar fi utilizată ca parte a configurării NAT sau PAT pentru a afișa informații despre parametrii de configurare NAT și numărul de adrese din pool?',
      options: [
        'show ip cache',
        'show ip pat',
        'show version',
        'show ip nat statistics',
        'show ip nat',
        'show running-config'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, un administrator încearcă să instaleze o rută statică IPv6 pe routerul R1 pentru a ajunge la rețeaua conectată la routerul R2. După introducerea comenzii de rută statică, conectivitatea la rețea eșuează în continuare. Ce eroare s-a comis în configurarea rutei statice?',
      image: 'subiecte_acad/images/judeteana_2023_1_1112/q23.png',
      options: [
        'Comanda trebuie să conțină ip în loc de ipv6.',
        'Adresa next-hop este incorectă.',
        'Interfața este incorectă.',
        'Comanda este incompletă.',
        'Prefixul de rețea este incorect.',
        'Rețeaua destinație este incorectă.'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care trei stări sunt stări tranzitorii ale vecinului OSPF care indică formarea unei adiacențe stabile între două routere? (Alegeți 3)',
      options: [
        'full',
        'loading',
        '2way',
        'established',
        'exchange',
        'exstart'
      ],
      correctIndices: [1, 4, 5]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care patru perechi de moduri de trunking NU vor stabili un link trunk funcțional între două switch-uri Cisco? (Alegeți 4)',
      options: [
        'access – trunk',
        'dynamic desirable – dynamic desirable',
        'dynamic auto – dynamic auto',
        'dynamic desirable – dynamic auto',
        'trunk – access',
        'access – dynamic auto'
      ],
      correctIndices: [0, 2, 4, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Ce tip de ACL ar trebui plasat cât mai aproape de destinația traficului?',
      options: [
        'Decrease',
        'Standard',
        'Dynamic',
        'Reflexive',
        'Extended',
        'Static'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce comandă puteți folosi pentru a verifica dacă o listă de acces este aplicată pe o interfață?',
      options: [
        'Router#show interface ip',
        'Router#show interface fast 0/1',
        'Router#show ip interface fast 0/1',
        'Router#show ip access-list',
        'Router#show list-access',
        'Router#show access-list'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Ce este necesar înainte de generarea cheilor de criptare pentru SSH pe un router sau switch?',
      options: [
        'Setarea orei și datei',
        'Setarea fișierului cheii publice',
        'Setarea fișierului cheii private',
        'Setarea puterii cheii',
        'Setarea hostname-ului și numelui de domeniu',
        'Setarea depozitului de chei'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce protocol și ce număr de port utilizează DNS pentru interogări directe? (Alegeți 2)',
      options: [
        '68',
        '55',
        'HTTP',
        'UDP',
        '53',
        'TCP'
      ],
      correctIndices: [3, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Care este numărul maxim de adrese MAC permis implicit când port security este activat pe o interfață?',
      options: [
        '1 adresă MAC',
        '10 adrese MAC',
        '0 adrese MAC',
        '2 adrese MAC',
        '100 adrese MAC',
        '16 adrese MAC'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce comandă va afișa cache-ul ARP al routerului?',
      options: [
        'show arp ip',
        'show arp',
        'show arp table',
        'show cache arp',
        'show arp cache',
        'show ip arp'
      ],
      correctIndices: [0, 1],
    },
    {
      type: 'multiple-choice',
      text: 'Ce măsurătoare descrie timpul pe care îl ia un pachet de la sursă la destinație?',
      options: [
        'Loss',
        'Numărul de cabluri până la destinație',
        'Delay',
        'Numărul de routere până la destinație',
        'Bandwidth',
        'Numărul de porturi până la destinație'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care sunt două reguli de sintaxă pentru scrierea unui array JSON? (Alegeți 2)',
      options: [
        'Un spațiu trebuie să separe fiecare valoare din array.',
        'Fiecare valoare din array este separată printr-o virgulă.',
        'Valorile sunt incluse între paranteze pătrate.',
        'Valorile nu sunt incluse între paranteze pătrate.',
        'Un punct și virgulă separă cheia de lista de valori.',
        'Array-ul poate include un singur tip de valoare.'
      ],
      correctIndices: [1, 2]
    },
    {
      type: 'multiple-choice',
      text: 'Care afirmație este adevărată despre un ARP Request care intră într-un switch?',
      options: [
        'Adresa MAC destinație a cadrului va fi formată doar din F.',
        'Switch-ul va răspunde direct cu un ARP Request.',
        'Switch-ul va răspunde direct cu un ARP.',
        'Adresa MAC sursă a cadrului va fi formată din toți F.',
        'Switch-ul va transmite cererea ARP doar pe portul calculatorului destinație.',
        'Switch-ul va răspunde direct cu un răspuns ARP.'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre acestea este o adresă MAC virtuală HSRP validă?',
      options: [
        '0000.0c07.ac01',
        '0001.0c07.ac01',
        '0000.5E00.0110',
        '0001.0c9f.ac01',
        '0001.0c9f.a001',
        '0000.5E01.0110'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care NU sunt moduri valide pentru un port de switch utilizat ca trunk VLAN? (Alegeți 3)',
      options: [
        'desirable',
        'on',
        'auto',
        'transparent',
        'blocking',
        'forwarding'
      ],
      correctIndices: [3, 4, 5]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce protocol și ce număr de port utilizează HTTPS în mod implicit? (Alegeți 2)',
      options: [
        'UDP',
        '81',
        '443',
        '444',
        'TCP',
        '80'
      ],
      correctIndices: [2, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce protocol și ce număr de port utilizează SSH în mod implicit? (Alegeți 2)',
      options: [
        '443',
        '22',
        '44',
        'UDP',
        '23',
        'TCP'
      ],
      correctIndices: [1, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Câți biți sunt conținuți în fiecare grup al unei adrese IPv6?',
      options: [
        '24',
        '4',
        '128',
        '15',
        '256',
        '16'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care două sunt existente in IPv6? (Alegeți 2)',
      options: [
        'anycast',
        'nonecast',
        'allcast',
        'podcast',
        'multicast',
        'broadcast'
      ],
      correctIndices: [0, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Ce comandă va activa SSH versiunea 2 pentru autentificare?',
      options: [
        'Router(config)#ssh version 2',
        'Router(config)#version ssh 2',
        'Router(config-line)#version 2',
        'Router(config)#ip ssh version 2',
        'Router(config-ssh)#version 2',
        'Router(config-ssh)#2 version'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice-multi',
      text: 'Când un server DHCP este configurat, care două adrese IP nu ar trebui niciodată atribuite hosturilor? (Alegeți 2)',
      options: [
        'adresa IP de rețea sau subrețea',
        'adresa de broadcast a rețelei',
        'adresa IP utilizată de interfețe',
        'adresa atribuită manual clienților',
        'adresa IP desemnată serverului DHCP',
        'adresa IP atribuită prin leasing în LAN'
      ],
      correctIndices: [0, 1]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care trei opțiuni NU sunt stări HSRP pentru un router? (Alegeți 3)',
      options: [
        'listen',
        'initialize',
        'speak',
        'learn',
        'primary',
        'secondary'
      ],
      correctIndices: [1, 4, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Un administrator configurează OSPF cu o singură arie pe un router. Una dintre rețelele care trebuie anunțate este 172.20.0.0 255.255.252.0. Ce mască wildcard va folosi administratorul în instrucțiunea de rețea OSPF?',
      options: [
        '0.0.1.255',
        '0.0.0.3',
        '0.0.7.255',
        '0.0.0.7',
        '0.0.15.255',
        '0.0.3.255'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce protocol și ce număr de port utilizează Telnet în mod implicit? (Alegeți 2)',
      options: [
        'UDP',
        '23',
        '24',
        'SSH',
        '80',
        'TCP'
      ],
      correctIndices: [1, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, care este costul OSPF pentru a ajunge la LAN-ul West 172.16.2.0/24 din East?',
      image: 'subiecte_acad/images/judeteana_2023_1_1112/q46.png',
      options: [
        '64',
        '74',
        '65',
        '782',
        '128',
        '66'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care două informații ar trebui incluse într-o diagramă de topologie logică a rețelei? (Alegeți 2)',
      options: [
        'versiunea OS/IOS',
        'tipul și identificatorul cablului',
        'tipul de conexiune',
        'specificațiile cablului',
        'identificatorul interfeței',
        'tipul de dispozitiv'
      ],
      correctIndices: [2, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care sunt două beneficii ale utilizării trap-urilor SNMP? (Alegeți 2)',
      options: [
        'Limitează accesul doar pentru sistemele de management.',
        'Reduc încărcarea resurselor de rețea și ale agentului.',
        'Pot asculta pasiv datagrame NetFlow exportate.',
        'Nu elimină nevoia de cereri periodice de votare.',
        'Pot furniza statistici despre pachetele TCP/IP care trec prin dispozitivele Cisco.',
        'Nu pot furniza statistici despre pachetele TCP/IP care trec prin dispozitivele Cisco.'
      ],
      correctIndices: [1, 5]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care două afirmații descriu utilizarea algoritmilor asimetrici? (Alegeți 2)',
      options: [
        'Cheile publice și private nu pot fi utilizate interschimbabil.',
        'Dacă o cheie privată este utilizată pentru a cripta datele, o cheie privată trebuie utilizată pentru a le decripta.',
        'Dacă o cheie publică nu este utilizată pentru a cripta datele, o cheie privată trebuie utilizată pentru decriptare.',
        'Cheile publice și private pot fi utilizate interschimbabil.',
        'Dacă o cheie publică este utilizată pentru a cripta datele, o cheie publică trebuie utilizată pentru decriptare.',
        'Dacă o cheie privată este utilizată pentru a cripta datele, o cheie publică trebuie utilizată pentru decriptare.'
      ],
      correctIndices: [0, 5]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care este o caracteristică a unei rețele OSPF cu o singură arie? (Alegeți 2)',
      options: [
        'Toate routerele impart un forwarding database comun.',
        'Toate routerele au aceeași tabelă de vecini.',
        'Toate routerele nu se află în aria backbone.',
        'Toate routerele au aceeași tabelă de rutare.',
        'Toate routerele se află în aria backbone.',
        'Toate routerele au aceeași tabelă de vecini.'
      ],
      correctIndices: [1, 4]
    }
  ]
});
