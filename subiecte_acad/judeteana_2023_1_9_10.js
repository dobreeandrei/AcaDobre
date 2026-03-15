window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'judeteana_2023_1_9_10',
  topic: 'Judeteana (1) 9-10 2023',
  questions: [
    {
      type: 'multiple-choice',
      text: 'Switch-A și Switch-B sunt ambele configurate cu porturi în VLAN-urile Marketing, Vânzări, Contabilitate și Admin. Fiecare VLAN conține 12 utilizatori. Câte subrețele diferite vor fi necesare pentru a permite conectivitate rutată între VLAN-uri?',
      options: [
        '48',
        '4',
        '1',
        '12'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice-multi',
      text: 'Un administrator de rețea încearcă să configureze rutarea între VLAN-uri pe un link trunk. Nu se poate stabili un link trunk între un switch și un router. Care dintre următoarele sunt surse posibile ale acestei probleme? (Alegeți 2)',
      options: [
        'IOS-ul routerului nu suportă trunking.',
        'Duplex-ul și viteza switch-ului nu sunt setate corect.',
        'Routerul și switch-ul rulează versiuni diferite de STP.',
        'Adresa IP a switch-ului este configurată incorect.',
        'Portul este conectat și nu primește erori de aliniere și FCS.'
      ],
      correctIndices: [0, 1]
    },
    {
      type: 'multiple-choice',
      text: 'Care este scopul unui IPS?',
      options: [
        'autentificarea și validarea traficului',
        'autentificarea utilizatorilor VPN',
        'filtrarea site-urilor web periculoase',
        'conectarea informațiilor globale despre amenințări la dispozitivele de securitate Cisco',
        'detectarea și blocarea atacurilor în timp real',
        'detectarea și raportarea atacurilor către administratorul de sistem'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Deși fișierul de configurare de rezervă al unui switch Catalyst 2950 a fost șters, se constată că VLAN-urile sunt încă configurate în switch. Ce trebuie făcut pentru a șterge VLAN-urile configurate?',
      options: [
        'Memoria flash a switch-ului trebuie ștearsă și switch-ul repornit.',
        'Fișierul vlan.dat trebuie șters și switch-ul reîncărcat.',
        'Switch-ul trebuie repornit, deoarece vechea configurație running este încă în memorie.',
        'Fișierul vlan.cfg trebuie redenumit și IOS-ul repornit.',
        'Fiecare VLAN trebuie șters individual și configurația salvată.'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, câte domenii broadcast sunt afișate?',
      image: 'subiecte_acad/images/judeteana_2023_1_910/q5.png',
      options: [
        '1',
        '4',
        '16',
        '55',
        '8',
        '60'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Un utilizator execută comanda ping 192.135.250.103 și primește un răspuns care include codul 1. Ce reprezintă acest cod?',
      options: [
        'port reachable',
        'host unreachable',
        'net unreachable',
        'host reachable',
        'protocol unreachable',
        'port unreachable'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce informații despre router și procesul său de pornire pot fi obținute din afișarea comenzii show version? (Alegeți 3)',
      options: [
        'locația de unde a fost încărcat IOS-ul',
        'conținutul buffer-ului de comenzi',
        'ultima metodă de repornire',
        'setările registrului de configurare',
        'cantitatea de NVRAM și FLASH utilizată'
      ],
      correctIndices: [0, 2, 3]
    },
    {
      type: 'multiple-choice',
      text: 'O companie trebuie să extindă rețeaua LAN la șase clădiri separate. Pentru a limita atenuarea semnalului pe mediul LAN, ce tip de mediu ar fi cel mai bun de utilizat între clădiri?',
      options: [
        'cablu coaxial',
        'pereche torsadată neecranată (UTP)',
        'pereche torsadată ecranată (STP)',
        'fibră optică',
        'aer (wireless)'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Ce se întâmplă cu porturile membre ale unui VLAN când VLAN-ul este șters?',
      options: [
        'Revin la VLAN-ul de management.',
        'Devin automat parte din VLAN1.',
        'Devin inactive.',
        'Trebuie atribuite unui alt VLAN înainte ca VLAN-ul original să poată fi șters.',
        'Rămân parte din acel VLAN până la repornirea switch-ului, după care devin membre ale VLAN-ului de management.'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care afirmație descrie modul în care sunt tratate cererile ARP pe legătura locală?',
      options: [
        'Sunt abandonate de toate switch-urile din rețeaua locală.',
        'Sunt abandonate de dispozitivele destinație.',
        'Sunt transmise în afara rețelei locale.',
        'Trebuie transmise de toate routerele din rețeaua locală.',
        'Sunt primite și procesate de fiecare dispozitiv din rețeaua locală.',
        'Sunt primite și procesate doar de dispozitivul destinație.'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce două sarcini îndeplinește protocolul DHCP? (Alegeți 2)',
      options: [
        'Atribuie și reînnoiește adresa IP din pool-ul implicit.',
        'Monitorizează performanța IP folosind serverul DHCP.',
        'Realizează descoperirea hosturilor folosind mesajul DHCPDISCOVER.',
        'Facilitează administrarea ușoară a dispozitivelor de nivel 3.',
        'Configurează parametrii adresei IP de la serverul DHCP la un host.',
        'Setează gateway-ul IP care urmează să fie utilizat de rețea.'
      ],
      correctIndices: [0, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Când adresarea IPv4 este configurată manual pe un server web, care proprietate a configurației IPv4 identifică porțiunea de rețea și de host a adresei IPv4?',
      options: [
        'adresa IP',
        'securitate 802.1X',
        'adresa serverului DHCP',
        'adresa serverului DNS',
        'default gateway',
        'mască de subrețea'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Care afirmație descrie o caracteristică a câmpurilor antetului cadrului la nivelul legătură de date?',
      options: [
        'Câmpurile antetului cadrului Ethernet conțin chei de criptare RSA 2048 biți.',
        'Câmpurile antetului cadrului Ethernet conțin adresele sursă și destinație de nivel 3.',
        'Câmpurile antetului cadrului Ethernet conțin porturile sursă și destinație.',
        'Variază în funcție de protocoale.',
        'Includ informații despre aplicațiile utilizatorilor.',
        'Toate includ câmpurile de control al fluxului și conexiunile logice.'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Ce tip de adresă IPv6 se referă la orice adresă unicast atribuită mai multor hosturi?',
      options: [
        'unicast global',
        'unicast unic local',
        'anycast',
        'unicast local',
        'link-local',
        'link-common'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Ce este funcția auto-MDIX?',
      options: [
        'Permite unui dispozitiv să configureze automat o interfață pentru a utiliza un cablu straight-through sau crossover.',
        'Capacitatea duplex trebuie configurată manual, deoarece nu poate fi negociată.',
        'Permite unui dispozitiv să configureze automat setările duplex ale unui segment.',
        'Permite unui switch să selecteze dinamic metoda de forwardare.',
        'Permite unui dispozitiv să configureze automat adresa GUA IPv6.',
        'Funcția auto-MDIX va configura interfețele eliminând nevoia de cablu crossover.'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Ce aplicații sau servicii permit hosturilor să acționeze simultan atât ca client, cât și ca server?',
      options: [
        'server RADIUS',
        'servicii de autentificare',
        'client VPN',
        'aplicații de email',
        'aplicații P2P',
        'aplicații client/server'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Un inginer de rețea analizează rapoarte dintr-o linie de bază de rețea recent efectuată. Care situație ar ilustra o posibilă problemă de latență?',
      options: [
        'o modificare a lățimii de bandă conform afișării comenzii show interfaces',
        'o creștere a lățimii de bandă conform afișării comenzii show interfaces',
        'un timeout la next-hop din traceroute',
        'o modificare a cantității de RAM conform afișării comenzii show version',
        'o creștere a timpilor de răspuns ping host-la-host',
        'o scădere a timpilor de răspuns ping host-la-host'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care este un avantaj al definirii comunicării în rețea prin cele șapte niveluri ale modelului OSI?',
      options: [
        'Reduce nevoia de testare a conectivității rețelei.',
        'Crește débitul rețelei.',
        'Face rețelistica mai ușor de înțeles și studiat.',
        'Elimină multe restricții de protocol.',
        'Crește lățimea de bandă a rețelei.'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce trei blocuri de adrese sunt definite de RFC 1918 pentru utilizare în rețele private? (Alegeți 3)',
      options: [
        '100.64.0.0/14',
        '169.254.0.0/16',
        '239.0.0.0/8',
        '192.168.0.0/16',
        '172.16.0.0/12',
        '10.0.0.0/8'
      ],
      correctIndices: [3, 4, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Ce comandă poate executa un administrator pentru a determina ce interfață va folosi un router pentru a ajunge la rețelele îndepărtate?',
      options: [
        'show protocols',
        'show arp',
        'show ip interface brief',
        'show interfaces',
        'show ip route',
        'show interface Gig0/1 switchport'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care trei condiții ar necesita instalarea unui nou NIC de către un administrator? (Alegeți 3)',
      options: [
        'ori de câte ori se aplică patch-uri de securitate ale sistemului de operare',
        'ori de câte ori calculatorul a fost mutat într-o altă locație',
        'când este nevoie de un NIC secundar sau de rezervă',
        'când se face trecerea de la medii de cupru la wireless',
        'ori de câte ori un NIC este defect'
      ],
      correctIndices: [2, 3, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Ce comandă puteți folosi pentru a atribui manual o adresă statică IPv6 unei interfețe de router?',
      options: [
        'ipv6 address 2001:db8:2222:7272::72/64',
        'ipv6 address PREFIX_1 ::1/64',
        'ipv6 autoconfig',
        'ipv6 autoconfig 2001:db8:2222:7272::72/64'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Ce informații importante sunt adăugate în antetul nivelului transport TCP/IP pentru a asigura comunicarea și conectivitatea cu un dispozitiv de rețea la distanță?',
      options: [
        'temporizare și sincronizare',
        'adrese fizice sursă și destinație',
        'lungimea de undă a undei radio',
        'numerele porturilor sursă și destinație',
        'numărul de biți transmiși pe secundă',
        'adrese logice de rețea sursă și destinație'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Un mesaj este trimis tuturor hosturilor dintr-o rețea remote. Ce tip de mesaj este?',
      options: [
        'broadcast limitat',
        'broadcast direcționat',
        'unicast',
        'single cast',
        'multicast',
        'mesaj cu lățime de bandă mare'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care sunt doi factori care determină throughputul? (Alegeți 2)',
      options: [
        'topologia rețelei',
        'lățimea cablului de rețea',
        'tipul protocolului de nivel 3 utilizat',
        'numărul de utilizatori din rețea',
        'tipurile de parole utilizate pe servere'
      ],
      correctIndices: [0, 3]
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, calculatorul PC este conectat la portul consolă al switch-ului. Toate celelalte conexiuni sunt realizate prin link-uri FastEthernet. Ce tipuri de cabluri UTP pot fi utilizate pentru a conecta dispozitivele?',
      image: 'subiecte_acad/images/judeteana_2023_1_910/q27.png',
      options: [
        '1 - crossover, 2 - straight-through, 3 - rollover',
        '1 - straight-through, 2 - rollover, 3 - crossover',
        '1 - rollover, 2 - crossover, 3 - straight-through',
        '1 - rollover, 2 - straight-through, 3 - crossover',
        '1 - crossover, 2 - rollover, 3 - straight-through',
        '1 - straight-through, 2 - crossover, 3 - rollover'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Un client web primește un răspuns de la un server web. Din perspectiva clientului, care este ordinea corectă a stivei de protocoale utilizate pentru a decoda transmisia primită?',
      options: [
        'Ethernet, HTTP, IP, TCP',
        'Ethernet, TCP, IP, HTTP',
        'HTTP, TCP, IP, Ethernet',
        'Ethernet, IP, TCP, HTTP',
        'IP, Ethernet, TCP, HTTP',
        'HTTP, Ethernet, IP, TCP'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Care este o caracteristică de bază a protocolului IP?',
      options: [
        'dependent de mediu',
        'segmentarea datelor utilizatorului',
        'numai transmisie wireless',
        'connectionless',
        'criptare',
        'livrare fiabilă end-to-end'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Ce parametru ar trebui ajustat pentru a influența selectarea unei rute statice ca rută de rezervă, când se utilizează și un protocol dinamic?',
      options: [
        'întârzierea legăturii',
        'distanța administrativă',
        'numărul de hopuri',
        'costul legăturii',
        'lățimea de bandă a legăturii'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice-multi',
      text: 'Un administrator de rețea a configurat un switch cu trei VLAN-uri: VLAN1, VLAN2 și VLAN3. Portul 10 urmează să fie atribuit VLAN3. Care comenzi sunt necesare pentru a atribui portul 10 la VLAN3? (Alegeți 3)',
      options: [
        'Switch_1(config-if)# switchport access',
        'Switch_1(config-if)# switchport mode access',
        'Switch_1(config-if)# switchport access vlan 3',
        'Switch_1# vlan database',
        'Switch_1(config-if)# switchport access vlan 10',
        'Switch_1(config)# switchport interface fastethernet 0/10'
      ],
      correctIndices: [1, 2, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Un administrator de rețea măsoară transferul de biți prin backbone-ul companiei pentru o aplicație financiară critică. Administratorul observă că débitul rețelei pare mai mic decât lățimea de bandă așteptată. Care trei factori ar putea influența diferențele de throughput? (Alegeți 3)',
      options: [
        'latența creată de numărul de dispozitive de rețea prin care trec datele',
        'tipul de trafic care traversează rețeaua',
        'cantitatea de trafic care traversează în prezent rețea',
        'sofisticarea metodei de încapsulare aplicată datelor',
        'lățimea de bandă a conexiunii WAN la Internet',
        'fiabilitatea infrastructurii Gigabit Ethernet a backbone-ului'
      ],
      correctIndices: [0, 1, 2]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce trei elemente sunt conținute în antetul și trailerul unui cadru Ethernet? (Alegeți 3)',
      options: [
        'adresa MAC sursă',
        'adresa IP sursă',
        'informații de verificare a erorilor',
        'cheie de criptare RSA 2048 biți',
        'adresa IP destinație',
        'adresa MAC destinație'
      ],
      correctIndices: [0, 2, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Ce tip de regulă de comunicare descrie cel mai bine CSMA/CD?',
      options: [
        'transmisie de date',
        'codificarea mesajelor',
        'obstrucționarea traficului',
        'metodă de acces',
        'controlul fluxului',
        'încapsularea mesajelor'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Pentru a asigura că pachetele care intră în rețea sunt răspunsuri legitime la cereri inițiate de hosturile interne, ce funcție de firewall este utilizată?',
      options: [
        'filtrare URL',
        'filtrare aplicații',
        'inspecție stateful a pachetelor',
        'protecție optică',
        'filtrare pachete',
        'filtrare biți'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Hub-urile lucrează cu ce tip de PDU?',
      options: [
        'biți',
        'cadre',
        'datagrame',
        'pachete'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce protocol automatizează atribuirea adreselor IP într-o rețea și ce număr de port folosește? (Alegeți 2)',
      options: [
        '80',
        'SMB',
        '67',
        '53',
        'DNS',
        'DHCP'
      ],
      correctIndices: [2, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Pe un switch au fost configurate VLAN1 și VLAN2. Ce trebuie făcut pentru ca hosturile din VLAN1 să comunice cu hosturile din VLAN2?',
      options: [
        'Comunicarea între VLAN-uri este activată automat pe switch-uri.',
        'Suprapunerea VLAN-urilor trebuie activată pe switch.',
        'Un router trebuie configurat pentru a permite rutarea între VLAN-uri.',
        'O intrare în tabela de comutare trebuie configurată pentru fiecare VLAN.',
        'Adresa MAC trebuie adăugată în tabela ARP a switch-ului.'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Un administrator dorește să conecteze zece stații de lucru într-o rețea 192.168.0.0/24. Dispozitivul selectat trebuie să permită conectivitatea între hosturi fără a împărți lățimea de bandă. Ce dispozitiv ar fi potrivit?',
      options: [
        'hub',
        'switch',
        'router',
        'repetor'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Conform schemei, luând în considerare adresele deja utilizate și rămânând în intervalul rețelei 10.16.10.0/24, care adresă de subrețea ar putea fi atribuită rețelei care conține 25 de hosturi?',
      image: 'subiecte_acad/images/judeteana_2023_1_910/q40.png',
      options: [
        '10.16.10.240/27',
        '10.16.10.160/26',
        '10.16.10.64/27',
        '10.16.10.128/28',
        '10.16.10.240/28',
        '10.16.10.224/26'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Conform configurației de mai jos, un administrator de rețea conectează un nou host la rețeaua LAN Medical. Hostul trebuie să comunice cu rețelele îndepărtate. Ce adresă IP ar fi configurată ca default gateway pe noul host?\nBldgA(config)# interface gi0/1\nBldgA(config-if)# description Connects to the Medical LAN\nBldgA(config-if)# ip address 192.168.201.200 255.255.255.0\nBldgA(config-if)# no shutdown\nBldgA(config-if)# interface gi0/0\nBldgA(config-if)# description Connects to the Client LAN\nBldgA(config-if)# ip address 192.168.200.80 255.255.255.0\nBldgA(config-if)# no shutdown\nBldgA(config-if)# interface s0/0/0\nBldgA(config-if)# description Connects to the ISP\nBldgA(config-if)# ip address 10.200.201.254 255.255.255.0\nBldgA(config-if)# no shutdown\nBldgA(config-if)# interface s0/0/1\nBldgA(config-if)# description Connects to the Head Office WAN\nBldgA(config-if)# ip address 203.0.113.222 255.255.255.0\nBldgA(config-if)# no shutdown',
      options: [
        '192.168.201.200',
        '182.178.200.70',
        '10.200.201.254',
        '192.168.200.80',
        '203.0.113.222',
        '192.168.201.1'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care este prefixul pentru adresa de host 2001:DB8:BC15:A:12AB::1/64?',
      options: [
        '2002:DB8:BC15:A:12AB',
        '2001:DB8:BC15:A:12',
        '2001:DB8:BC15',
        '2001:DB8:BC15:A:1',
        '2001:DB8:BC15:A',
        '2001:DB8:BC15:A:12AB'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Un tehnician trebuie să documenteze configurațiile curente ale tuturor dispozitivelor de rețea dintr-un colegiu, inclusiv cele din clădirile exterioare. Ce protocol ar fi cel mai bun pentru a accesa în mod securizat dispozitivele de rețea?',
      options: [
        'HTTPs',
        'HTTP',
        'Telnet',
        'FTP',
        'SSH',
        'VoIP'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice-multi',
      text: 'Mai multe calculatoare din companie necesită NIC-uri noi. Un tehnician a găsit un preț bun pe Internet. Înainte de a achiziționa și instala aceste NIC-uri, ce detalii trebuie verificate? (Alegeți 3)',
      options: [
        'lățimea de bandă suportată de NIC',
        'adresa MAC a NIC-ului',
        'dimensiunea RAM-ului NIC-ului',
        'tipul de arhitectură de rețea suportat de NIC',
        'tipul de mediu suportat de NIC'
      ],
      correctIndices: [0, 3, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Un administrator de rețea trebuie să configureze port security pe un switch. Care două afirmații sunt adevărate? (Alegeți 2)',
      options: [
        'Administratorul poate configura adrese MAC secure statice sau sticky în VLAN-ul de voce.',
        'Funcția sticky learning permite adăugarea adreselor învățate dinamic în configurația running.',
        'Când învățarea dinamică a adreselor MAC este activată pe o interfață, switch-ul poate învăța adrese noi, până la maximul definit.',
        'Administratorul poate aplica port security pe porturile de acces dinamice.',
        'Administratorul poate aplica port security pe EtherChannel-uri.'
      ],
      correctIndices: [1, 2]
    },
    {
      type: 'multiple-choice',
      text: 'Ce acțiune va avea loc dacă un switch primește un cadru cu adresa MAC destinație FF:FF:FF:FF:FF:FF?',
      options: [
        'Switch-ul nu transmite cadrul.',
        'Switch-ul trimite cadrul către un router conectat, deoarece adresa MAC destinație nu este locală.',
        'Switch-ul îl trimite pe toate porturile fără excepție.',
        'Switch-ul îl transmite pe toate porturile, cu excepția portului de intrare.',
        'Switch-ul îl transmite numai pe portul de intrare.',
        'Switch-ul reîmprospătează timer-ul pentru acea intrare.'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice-multi',
      text: 'Un administrator de rețea conectează două switch-uri moderne folosind un cablu straight-through. Switch-urile sunt noi și nu au fost niciodată configurate. Care trei afirmații sunt corecte despre rezultatul final al conexiunii? (Alegeți 3)',
      options: [
        'Funcția auto-MDIX va configura interfețele eliminând nevoia de cablu crossover.',
        'Conexiunea nu va fi posibilă decât dacă administratorul înlocuiește cablul cu unul crossover.',
        'Legătura dintre switch-uri va funcționa în full-duplex.',
        'Dacă ambele switch-uri suportă viteze diferite, fiecare va funcționa la propria sa viteză maximă.',
        'Capacitatea duplex trebuie configurată manual, deoarece nu poate fi negociată.',
        'Legătura dintre switch-uri va funcționa la cea mai mare viteză suportată de ambele switch-uri.'
      ],
      correctIndices: [0, 2, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Pool-ul de adrese al unui server DHCP este configurat cu 172.23.143.0/26. Administratorul de rețea rezervă 14 adrese IP pentru servere de fișiere. Câte adrese IP rămân în pool pentru a fi atribuite altor hosturi?',
      options: [
        '40',
        '47',
        '61',
        '48',
        '58',
        '50'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Care este echivalentul hexazecimal al numărului binar 10001110?',
      options: [
        '22',
        '142',
        '8E',
        '67',
        'AE'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care este o caracteristică a subsublevelului LLC?',
      options: [
        'Asigură delimitarea datelor conform cerințelor de semnalizare fizică a mediului.',
        'Definește procesele software care furnizează servicii nivelului fizic.',
        'Furnizează adresarea logică necesară pentru identificarea dispozitivului.',
        'Transformă informațiile de la nivelul de mai jos într-un segment.',
        'Transformă datagrama de la nivelul de deasupra în semnale specifice mediului.',
        'Plasează informații în cadru, permițând mai multor protocoale de nivel 3 să utilizeze aceeași interfață de rețea și același mediu.'
      ],
      correctIndex: 5
    }
  ]
});
