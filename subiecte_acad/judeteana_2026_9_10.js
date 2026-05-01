window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'judeteana_2026_9_10',
  topic: 'Judeteana 9-10 2026',
  questions: [
    {
      type: 'multiple-choice',
      text: 'Care este scopul principal al protocolului STP într-o rețea?',
      options: [
        'Monitorizarea stărilor fizice ale cablurilor.',
        'Permite comunicarea între VLAN-uri.',
        'Asigură load balancing între mai multe rute.',
        'Asigurarea criptarea traficului.',
        'Prevenirea buclelor de la nivelul 2 prin blocarea căilor redundante.',
        'Realizarea agregărilor link-urilor.'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care din variantele de mai jos reprezintă o caracteristică primară a metodei de switching „store-and-forward"? (Alegeți 2 variante)',
      options: [
        'Buffering automat',
        'Ignorarea verificării FCS (Frame Check Sequence)',
        'Verificarea erorilor',
        'Transmisie rapidă',
        'Analiza doar a primilor 64 bytes',
        'Latență redusă'
      ],
      correctIndices: [0, 2]
    },
    {
      type: 'multiple-choice',
      text: 'Care este protocolul de transport utilizat de Domain Name System (DNS), în cazul în care cererea sau răspunsul DNS are o dimensiune mai mică de 512 octeți?',
      options: [
        'User Datagram Protocol (UDP)',
        'Stream Control Transmission Protocol (SCTP)',
        'Open Shortest Path First (OSPF)',
        'Quick UDP Internet Connections (QUIC)',
        'HyperText Transfer Protocol (HTTP)',
        'Transmission Control Protocol (TCP)'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care sunt responsabilitățile nivelului 2 al stivei OSI? (Alegeți 2 variante)',
      options: [
        'Primește segmente de la nivelul 3 și le încapsulează în cadre.',
        'Prezintă interfața dintre utilizator și dispozitiv.',
        'Menține conexiunea dintre aplicații pe dispozitive diferite.',
        'Detectează erori și elimină cadrele corupte.',
        'Permite comunicarea între nivelul Internet și Acces la Rețea.',
        'Primește pachete de la nivelul 3 și le încapsulează în cadre.'
      ],
      correctIndices: [3, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Ce tehnologie VoIP utilizează servere dedicate pentru controlul apelurilor, oferind calitate sporită, dar costuri mai mari?',
      options: [
        'WebEx non-enterprise',
        'Telefonie IP',
        'ICMPv6',
        'QoS',
        'RTP',
        'Skype'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce tip de topologie de rețea locală (LAN) conectează toate dispozitivele la un nod central care gestionează traficul?',
      options: ['Bus', 'Fully connected', 'Ring', 'Mesh', 'Star', 'Hybrid'],
      correctIndex: 4
    },
    {
      type: 'open-ended',
      text: 'Care este comanda ce trebuie introdusă pentru a seta viteza unui port FastEthernet la 100 Mbps?\nComanda trebuie introdusă în mod integral, fără abrevieri.',
      acceptedAnswers: ['speed 100']
    },
    {
      type: 'multiple-choice',
      text: 'Ce mesaje apar în procesul prin care un client își reînnoiește adresa IP deja alocată de serverul DHCPv4?',
      options: [
        '(DHCPRENEW, DHCPACK)',
        '(DHCPREQUEST, DHCPRENEW)',
        '(DHCPREQUEST, DHCPOFFER, DHCPACK)',
        '(DHCPREQUEST, DHCPACK)',
        '(DHCPDISCOVER, DHCPOFFER, DHCPREQUEST, DHCPACK)',
        '(DHCPREQUEST, DHCPOFFER)'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Având blocul 192.168.50.0/24 și cerințele: Vânzări-55 hosturi, Marketing-28 hosturi, IT-12 hosturi. Care este subrețeaua corectă pentru Marketing folosind VLSM?',
      options: [
        '192.168.50.112/30',
        '192.168.50.64/27',
        '192.168.50.96/28',
        '192.168.50.128/27',
        '192.168.50.64/26',
        '192.168.50.0/27'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele tipuri de înregistrări DNS identifică un dispozitiv final (end device) printr-o adresă IPv6?',
      options: ['AAAAAA', 'MX', 'Four-A', 'AAAA', 'NS', 'Six-A'],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Alegeți dacă afirmația următoare este adevărată sau falsă:\nTopologia dual stack permite configurarea simultană a interfețelor IPv4 și IPv6 pe switch-uri Layer 2.',
      options: ['Adevărat', 'Fals'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre exemplele de protocoale de mai jos sunt protocoale de securitate a rețelei? (Alegeți 3 variante)',
      options: ['DHCP', 'TCP', 'SSL', 'DNS', 'TLS', 'SSH'],
      correctIndices: [2, 4, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Cum influențează PAgP procesul de selecție a portului în STP atunci când un EtherChannel este format?',
      options: [
        'Prioritatea PAgP a sistemului este folosită ca Port ID STP.',
        'PAgP folosește cea mai mică prioritate de port dintre link-urile fizice pentru întreaga interfață Port-channel.',
        'PAgP forțează interfața Port-channel să devină întotdeauna un port desemnat.',
        'PAgP adună costurile STP ale link-urilor fizice pentru a calcula costul final al canalului.',
        'PAgP nu are nicio influență. STP tratează interfața Port-channel ca o singură interfață cu propriul său Port ID și cost.',
        'PAgP dezactivează STP pe link-urile fizice individuale.'
      ],
      correctIndex: 4
    },
    {
      type: 'open-ended',
      text: 'Conform informațiilor din topologia de mai sus, configurați pe Router0 o rută statică sumarizată care duce către VLAN 10 și VLAN 20, folosind adresa de next-hop.\nComanda trebuie introdusă integral, fără abrevieri.',
      image: 'subiecte_acad/images/judeteana_2026_910/q14.png',
      acceptedAnswers: ['ip route 49.111.32.0 255.255.255.0 1.1.1.3']
    },
    {
      type: 'multiple-choice',
      text: 'Care este portul implicit pentru HTTPS?',
      options: ['22', '21', '53', '80', '25', '443'],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Alegeți dacă afirmația următoare este adevărată sau falsă:\nO subrețea cu prefixul /27 permite alocarea a maximum 30 de adrese IP utilizabile pentru hosturi.',
      options: ['Adevărat', 'Fals'],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Ce protocol este folosit pentru a traduce un nume de domeniu (ex: google.com) într-o adresă IP?',
      options: ['SNMP', 'ARP', 'SMTP', 'DNS', 'FTP', 'Telnet'],
      correctIndex: 3
    },
    {
      type: 'open-ended',
      text: 'Câte domenii de coliziune sunt în topologia din imagine? (Scrieți doar numărul în format decimal fără alte caractere)',
      image: 'subiecte_acad/images/judeteana_2026_910/q18.png',
      acceptedAnswers: ['8']
    },
    {
      type: 'multiple-choice',
      text: 'Care este principalul motiv pentru care mesajele ICMP sunt blocate într-o rețea?',
      options: [
        'Ocupă prea multă lățime de bandă.',
        'Provoacă conflicte cu protocoale de rutare.',
        'Încetinesc depanarea rețelelor.',
        'Majoritatea routerelor nu le procesează.',
        'Reprezintă un risc de securitate.',
        'Sunt compatibile doar cu echipamente vechi.'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Ce secvență de biți este reprezentată de semnalul de mai sus? Semnalul este de tip Manchester.',
      image: 'subiecte_acad/images/judeteana_2026_910/q20.png',
      options: [
        '01010101010',
        '01100110',
        '0110011010010110',
        '10100110',
        '1001100101101001',
        'Metoda Manchester nu există.'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care sunt valorile celor 3 flag-uri dintr-un Router Advertisement în cazul în care se dorește folosirea unui server stateless DHCP împreună cu SLAAC?',
      options: [
        '(A=0, O=1, M=1)',
        '(A=1, O=1, M=0)',
        '(A=1, O=0, M=1)',
        '(SYN=1, ACK=1)',
        'Niciuna dintre variante nu este corectă.',
        '(A=1, O=0, M=0)'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care este rolul principal al unui switch de layer 2 într-o rețea LAN?',
      options: [
        'Traduce adrese IP în adrese MAC',
        'Oferă automat adrese IP dispozitivelor din rețea',
        'Redirecționează cadrele pe baza adreselor MAC',
        'Criptează traficul dintre dispozitive',
        'Conectează rețele diferite și face rutare între ele',
        'Blochează automat toate atacurile din rețea'
      ],
      correctIndex: 2
    },
    {
      type: 'matching',
      text: 'Asociați următorii termeni cu definițiile corespunzătoare lor:',
      subQuestions: [
        { text: 'Modul dynamic desirable', answer: 'Interfața încearcă activ să transforme legătura într-una de tip trunk.' },
        { text: 'Modul dynamic auto', answer: 'Interfața poate deveni trunk dacă vecinul suportă trunking, dar nu inițiază negocierea.' },
        { text: 'Modul trunk', answer: 'Interfața negociază permanent pentru a activa modul trunk pe ambele capete.' },
        { text: 'Modul access', answer: 'Pune interfața în modul permanent nontrunking și negociază convertirea legăturii într-o legătură nontrunk.' }
      ],
      options: [
        'Interfața încearcă activ să transforme legătura într-una de tip trunk.',
        'Interfața poate deveni trunk dacă vecinul suportă trunking, dar nu inițiază negocierea.',
        'Interfața negociază permanent pentru a activa modul trunk pe ambele capete.',
        'Pune interfața în modul permanent nontrunking și negociază convertirea legăturii într-o legătură nontrunk.'
      ]
    },
    {
      type: 'multiple-choice',
      text: 'Un ping de la PC0 (192.168.1.10) la Server0 (172.16.1.10) eșuează. Un „tracert" de pe PC0 se oprește la gateway-ul său, R1 (192.168.1.1). Tabela de rutare a lui Router0 este afișată mai jos. Alege comanda completă necesară pe Router0 pentru a rezolva problema de conectivitate.',
      image: 'subiecte_acad/images/judeteana_2026_910/q24.png',
      options: [
        'router rip',
        'router ospf 3',
        'int g0/0/0\nno shutdown',
        'tunnel source 192.0.2.1\ntunnel destination 203.0.113.2',
        'ip route 172.16.1.0 255.255.255.0 10.0.0.2',
        'ip route 192.168.1.10 172.16.1.1'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre stările OSPF ale unui router este responsabilă cu citirea Router ID-urilor din pachetele Hello primite?',
      options: [
        'Loading State',
        'Two-Way State',
        'Down State',
        'Ex Start',
        'Init State',
        'Exchange State'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care este versiunea de OSPF folosită pentru rutarea dinamică IPv6?',
      options: ['OSPFv1', 'OSPFv4', 'OSPFv2', 'Nu există o versiune specială de OSPF pentru IPv6.', 'OSPFv3', 'OSPFv5'],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'În situația în care un ping către adresa IP 8.8.8.8 are succes, iar un ping către google.com eșuează, care ar putea fi cauza?',
      options: [
        'Firewall-ul blochează traficul ICMP',
        'Adresa IP a utilizatorului este duplicată în rețea',
        'Serverul DNS este configurat incorect sau nu răspunde',
        'Switch-ul a plasat portul în starea err-disabled',
        'Cablul de rețea al utilizatorului este deconectat',
        'Gateway-ul implicit este configurat incorect'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice-multi',
      text: 'Alegeți din variantele de mai jos afirmațiile care sunt adevărate despre stările porturilor. (Alegeți 3 variante)',
      options: [
        'Starea „Disable" – când un port este în această stare, acesta nu participă la STP și nici nu transmite cadre. În plus, portul poate ajunge în această stare doar dacă portul este setat administrativ în acest fel.',
        'Starea „Forwarding" – este starea în care portul este considerat o parte activă a topologiei. El redirecționează traficul utilizatorului, însă nu primește pachete BPDU.',
        'Starea „Listening" – este prima stare în care se poate afla portul, iar acesta primește pachete BPDU și este pregătit pentru a începe trimiterea datelor.',
        'Starea „Learning" – portul ajunge în această stare după ce a fost în starea „Listening" și primește pachete BPDU pentru a învăța despre celelalte bridge-uri, dar acesta trimite și el mai departe date cu informații despre el.',
        'Starea „Blocking" – când portul este în această stare, el nu participă la trimiterea de date, în schimb primește pachete BPDU pentru a ști mereu informațiile necesare despre root bridge.',
        'Starea „Available" – este starea în care portul este gata să ia parte la procesul STP.'
      ],
      correctIndices: [0, 3, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre următoarele reprezintă caracteristici esențiale ale protocolului IP la nivelul rețea în modelul OSI? (Alegeți 3 variante corecte)',
      options: [
        'Model de livrare „best effort" (fără garanție de livrare)',
        'Protocol orientat pe conexiune',
        'Independență față de mediul fizic de transmisie',
        'Asigură garantarea livrării pachetelor',
        'Recuperarea automată a pachetelor pierdute',
        'Protocol fără conexiune (connectionless)'
      ],
      correctIndices: [0, 2, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Care din variantele de mai jos reprezintă ordinea corectă de trimitere a pachetelor pentru terminarea unei sesiuni stabilite prin protocolul TCP?',
      options: [
        '(1)Client:SYN, (2)Server:SYN+ACK, (3)Client:ACK',
        '(1)Client:FIN, (2)Server:ACK, (3)Client:ACK, (4)Server:FIN',
        '(1)Client:FIN, (2)Server:SYN+ACK, (3)Client:ACK',
        '(1)Client:SYN, (2)Server:FIN, (3)Client:FIN, (4)Server:ACK',
        '(1)Client:FIN, (2)Server:ACK, (3)Server:FIN, (4)Client:ACK',
        '(1)Client:SYN, (2)Server:SYN, (3)Client:ACK, (4)Server:ACK'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Ce protocol este folosit pentru a transfera pagini web între un browser și un server web?',
      options: ['NTP', 'SNMP', 'HTTP', 'SMTP', 'ARP', 'FTP'],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Stabiliți dacă următoarea afirmație este adevărată sau falsă: Un avantaj al protocolului IPv6 îl constituie faptul că pachetele ce au ca sursă o adresă Link-local sunt trimise de router mai departe în afara rețelei fără a fi folosit un protocol de rutare.',
      options: ['Adevărat', 'Fals'],
      correctIndex: 1
    },
    {
      type: 'open-ended',
      text: 'Ce comandă exactă configurează o rută statică default pe un router, cu un next-hop la ISP de 203.0.113.1?\n(Răspunsul trebuie să fie scris exact, respectând majusculele și literele mici – case sensitive)',
      acceptedAnswers: ['ip route 0.0.0.0 0.0.0.0 203.0.113.1']
    },
    {
      type: 'multiple-choice',
      text: 'Conform tabelului de rutare, care port al routerului va fi ales pentru a trimite un pachet la adresa destinație 213.121.16.17?',
      image: 'subiecte_acad/images/judeteana_2026_910/q34.png',
      options: [
        'GigabitEthernet0/0/5',
        'GigabitEthernet0/0/0',
        'GigabitEthernet0/0/1',
        'GigabitEthernet0/0/3',
        'GigabitEthernet0/0/2',
        'GigabitEthernet0/0/4'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Ce protocol este folosit pentru trimiterea emailurilor între servere?',
      options: ['POP3', 'SMTP', 'IMAP', 'HTTP', 'DNS', 'SNMP'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice-multi',
      text: 'Alegeți din variantele de mai jos afirmațiile adevărate despre câmpurile din header-ul de IPv4. (Alegeți 2 variante)',
      options: [
        'TTL indică timpul în milisecunde în care un pachet trebuie să ajungă la destinație.',
        'Câmpul „adresa IPv4 sursă" conține o adresă IPv4 pe 32 de biți, care este întotdeauna o adresă unicast.',
        'Câmpul „version" este un câmp care conține 4 biți și ajută la identificarea pachetelor de tipul IPv4.',
        'Câmpul „protocol" este un câmp de 6 biți care ne ajută la identificarea protocolului de nivel următor.',
        'Câmpul „Checksum" ne ajută la identificarea erorilor, ducând și la rezolvarea acestora.',
        'TTL este prescurtarea de la câmpul „Time to Live".'
      ],
      correctIndices: [2, 5]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre afirmațiile de mai jos sunt adevărate, având în vedere adresa IPv4? (Alegeți 3 variante)',
      options: [
        'Adresa IPv4 are dimensiunea de 32 de biți, fiind alcătuită dintr-o parte de rețea și o parte de host.',
        'Partea de rețea a adresei IPv4 este mereu aceeași (în aceeași rețea), pe când partea de host trebuie să fie unică în rețea.',
        'În IPv4, când un host trimite un pachet către o destinație, acesta, de fapt, trimite pachetul către default gateway-ul setat (nu trimite direct către destinație).',
        'Pentru a vedea dacă o adresă IPv4 se află într-o anumită rețea, se face SAU cu masca de subrețea.',
        'Adresele private IPv4 pot fi rutate direct către internet, fără nicio conversie, deoarece sunt considerate unice globale.',
        'În lume există 4.294.966.296 de adrese IPv4.'
      ],
      correctIndices: [0, 1, 2]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Selectează riscurile de securitate ale unei rețele în care mesajele ICMP nu sunt oprite. (Alegeți 2 variante)',
      options: [
        'MAC Flood Attack',
        'ARP Spoofing',
        'Denial of Service',
        'Phishing',
        'Reconnaissance',
        'DNS Spoofing'
      ],
      correctIndices: [2, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care sunt două caracteristici cheie ale modelului de rețea peer-to-peer? (Alegeți 2 variante)',
      options: [
        'Este cel mai scalabil model pentru organizațiile mari, cu mii de utilizatori',
        'Necesită întotdeauna un server centralizat pentru a funcționa',
        'Implementarea este complexă și costisitoare pentru rețele mici',
        'Fiecare dispozitiv din rețea poate îndeplini simultan rolurile de client și server',
        'Oferă viteze de transfer superioare rețelelor client-server în orice situație',
        'Resursele sunt distribuite, iar controlul nu este centralizat'
      ],
      correctIndices: [3, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Ce dispozitiv de rețea operează în principal la Layer 2 (Data Link) în modelul OSI?',
      options: ['Firewall', 'Router', 'Switch', 'Gateway', 'Load Balancer', 'Hub'],
      correctIndex: 2
    },
    {
      type: 'label-order',
      text: 'Ordonați pașii necesari pentru a mitiga un atac VLAN Hopping.',
      labels: [
        'Dezactivează negocierile DTP pe porturile care nu sunt trunk',
        'Dezactivează porturile neutilizate și plasează-le într-un VLAN neutilizat.',
        'Activează manual legătura trunk pe un port trunk.',
        'Dezactivează negocierile DTP pe porturile trunk.',
        'Setează VLAN-ul nativ la un alt VLAN decât VLAN 1.'
      ],
      correctOrder: [0, 1, 2, 3, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Selectați valoarea de adevăr a afirmației.\nÎn procesul de reînnoire a unei adrese IPv4 folosind DHCP se folosesc doar 3 mesaje: DHCP Request, DHCP Offer, DHCP Acknowledgment.',
      options: ['Adevărat', 'Fals'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Dacă PC3 trimite un pachet către PC6, cum va arăta tabela CAM a Switch-ului 3, știind că înaintea trimiterii pachetului, tabela CAM era nepopulată?',
      image: 'subiecte_acad/images/judeteana_2026_910/q43.png',
      options: [
        'PC4 - Fa0/2',
        'PC6 - Fa0/2\nPC4 - Fa0/2',
        'PC4 - Fa0/2\nPC6 - Fa0/2\nPC3 - Fa0/2',
        'PC3 - Fa0/3\nPC6 - Fa0/2',
        'PC6 - Fa0/1',
        'PC3 - Fa0/1\nPC6 - Fa0/2'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Stabiliți dacă următoarea afirmație este adevărată sau falsă: Metrica este relevantă pentru toate protocoalele de rutare la nivel global, în timp ce distanța administrativă este importantă doar în interiorul protocolului respectiv.',
      options: ['Adevărat', 'Fals'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce comenzi trebuie folosite pentru a configura VLAN-ul 10 pentru Legacy Inter-VLAN Routing?',
      options: [
        'switchport mode trunk\nswitchport trunk allowed vlan all',
        'switchport mode trunk\nswitchport trunk allowed vlan 10',
        'switchport mode access\naccess vlan 10',
        'switchport mode access vlan 10',
        'switchport mode trunk\nswitchport trunk vlan 10',
        'switchport mode access\nswitchport access vlan 10'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Conform configurărilor de mai sus, alegeți varianta corectă.',
      image: 'subiecte_acad/images/judeteana_2026_910/q46.png',
      options: [
        'Router0 este standby, deoarece are valoarea portului mai mică.',
        'Router1 este activ, deoarece are prioritatea 100.',
        'Router1 nu este standby, deoarece are adresa IP mai mare.',
        'Router0 este standby, deoarece are prioritatea 100.',
        'Router0 nu este standby, deoarece are adresa IP mai mică.',
        'Router1 nu este activ, deoarece are adresa IP mai mică.'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Ce protocol este folosit pentru a obține automat o adresă IP într-o rețea?',
      options: ['FTP', 'NTP', 'DHCP', 'ICMP', 'ARP', 'DNS'],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Ce comandă se folosește pentru configurarea unei rute default IPv4 pe un router Cisco?',
      options: [
        'route add default [next-hop]',
        'ip default gateway [next-hop]',
        'ip default-route [next-hop]',
        'set default gateway [next-hop]',
        'default route add 0.0.0.0 255.255.255.255 [next-hop]',
        'ip route 0.0.0.0 0.0.0.0 [next-hop]'
      ],
      correctIndex: 5
    },
    {
      type: 'matching',
      text: 'Asociați fiecare termen cu definiția corectă:',
      subQuestions: [
        { text: 'ARP Attacks', answer: 'Tehnică de manipulare a comunicațiilor de la nivelul legăturii de date, ce implică falsificarea mesajelor ce asociază adresele IP cu cele fizice, cu scopul de a intercepta sau redirecționa traficul.' },
        { text: 'VLAN Attacks', answer: 'Metodă prin care atacatorul manipulează segmentarea logică a rețelei, profitând de tehnici ce permit ocolirea sau combinarea VLAN-urilor pentru acces neautorizat.' },
        { text: 'DHCP Attacks', answer: 'Exploatare a protocolului responsabil cu alocarea automată a adreselor IP, prin blocarea sau falsificarea răspunsurilor, ceea ce poate conduce la lipsa accesului legitim sau redirecționarea traficului.' },
        { text: 'MAC Table Attacks', answer: 'Atac ce exploatează vulnerabilitățile din gestionarea adreselor fizice în switch-uri, umplând o structură internă a dispozitivului pentru a permite interceptarea traficului.' }
      ],
      options: [
        'Tehnică de manipulare a comunicațiilor de la nivelul legăturii de date, ce implică falsificarea mesajelor ce asociază adresele IP cu cele fizice, cu scopul de a intercepta sau redirecționa traficul.',
        'Metodă prin care atacatorul manipulează segmentarea logică a rețelei, profitând de tehnici ce permit ocolirea sau combinarea VLAN-urilor pentru acces neautorizat.',
        'Exploatare a protocolului responsabil cu alocarea automată a adreselor IP, prin blocarea sau falsificarea răspunsurilor, ceea ce poate conduce la lipsa accesului legitim sau redirecționarea traficului.',
        'Atac ce exploatează vulnerabilitățile din gestionarea adreselor fizice în switch-uri, umplând o structură internă a dispozitivului pentru a permite interceptarea traficului.'
      ]
    },
    {
      type: 'multiple-choice',
      text: 'Care este motivul pentru care PC0 din VLAN-ul 10 nu poate comunica cu PC1 din VLAN-ul 20?',
      image: 'subiecte_acad/images/judeteana_2026_910/q50.png',
      options: [
        'Portul Fa0/2 este configurat drept trunk.',
        'VLAN 10 nu există.',
        'Nu există motive pentru care nu ar trebui să comunice.',
        'Portul Fa0/1 este configurat drept access.',
        'Subinterfețele Router-ului nu sunt încapsulate.',
        'VLAN-ul 1 este oprit pe router.'
      ],
      correctIndex: 3
    }
  ]
});
