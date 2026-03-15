window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'simulare_cristi',
  topic: 'Simulare Cristi',
  questions: [
    {
      type: 'multiple-choice',
      text: 'Ce valoare are partea de host a adresei broadcast într-un subnet IP?',
      options: [
        'Toți biții de host sunt 0',
        'Toți biții de host sunt 1',
        'Primii și ultimii biți de host sunt 0',
        'Nu contează valorile'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care este adresa de rețea pentru IP-ul 10.7.99.133/18?',
      options: ['10.7.96.0', '10.7.0.0', '10.7.64.0', '10.7.99.0'],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Ce format CIDR este echivalent cu masca 255.255.254.0?',
      options: ['/19', '/20', '/23', '/24'],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Ce comandă pe un switch arată ce porturi funcționează în mod trunk?',
      options: [
        'show interfaces',
        'show interfaces switchport',
        'show interfaces trunk',
        'show vlan brief'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Într-o configurație 802.1Q, ce face switch-ul înainte de a trimite un frame printr-un trunk?',
      options: [
        'Adaugă un header de 4 octeți fără să modifice adresele MAC',
        'Schimbă adresele MAC și adaugă un header',
        'Re-encapsulează frame-ul cu un nou header Ethernet',
        'Nu face nicio modificare'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Ce configurație de trunking va permite stabilirea unui trunk pe un port configurat cu „dynamic auto"?',
      options: ['dynamic auto', 'dynamic desirable', 'access', 'on'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Comanda pentru a limita VLAN-urile permise pe un trunk?',
      options: [
        'shutdown vlan <number>',
        'switchport trunk allowed vlan <number>',
        'no vlan <number>',
        'spanning-tree vlan <number> disable'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce afirmare este adevărată despre STP și porturile trunk?',
      options: [
        'STP blochează automat toate trunk-urile pentru VLAN 1',
        'STP poate bloca trunk-uri diferite in VLAN-uri diferite',
        'STP blochează doar porturile access nu și trunk',
        'Trunk-urile nu sunt influențate de STP'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce definește un interval „Hello" mai mic în OSPF?',
      options: [
        'Scade traficul Hello',
        'Crește detectarea rapidă a căderilor de legătură',
        'Reduce overhead-ul OSPF',
        'Previne formarea de DR/BDR'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce face un switch când primește un BPDU cu un cost STP mai mic?',
      options: [
        'Ignoră BPDU-ul',
        'Își resetează timer-ul',
        'Schimbă root port-ul',
        'Închide portul respectiv'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care este layer 2 dintre următoarele protocoale?',
      options: ['IP', 'PPP', 'TCP', 'HTTP'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'La ce este folosit câmpul „Type" dintr-un header Ethernet?',
      options: [
        'Identificarea protocolului de layer 3',
        'Identificarea VLAN-ului',
        'Calcularea FCS',
        'Alegerea MTU-ului'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Ce face comanda ip helper-address pe un router?',
      options: [
        'Redirecționează broadcast-uri DHCP către un server de la distanță',
        'Previne flood-ul DHCP în rețea',
        'Oprește relay-ul ICMP',
        'Schimbă adresele MAC din broadcast-uri'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Ce timer STP determină durata stării Listening + Learning?',
      options: ['Hello Timer', 'Max Age', 'Forward Delay', 'Aging Timer'],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Ce este VLAN hopping?',
      options: [
        'Tehnică de rutare între VLAN-uri',
        'Tip de atac ce permite traversarea VLAN-urilor neautorizat',
        'Mecanism NAT pentru VLAN-uri',
        'Protocol de securitate VLAN'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce definește MTU-ul pe un link Layer 2?',
      options: [
        'Dimensiunea maximă a frame-ului acceptat de interfață',
        'Numărul maxim de VLAN-uri pe trunk',
        'Dimensiunea header-ului Ethernet',
        'Numărul maxim de MAC-uri per port'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Ce este inside global address în NAT?',
      options: [
        'Adresa IP privată atribuită în rețeaua LAN',
        'Adresa IP publică asociată unui dispozitiv intern',
        'Adresa IP alocată routerului de ISP',
        'Adresa IP locală a serverului DNS'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce face comanda „switchport port-security maximum 2"?',
      options: [
        'Permite 2 MAC-uri dinamice și blochează restul',
        'Permite doar un MAC și drop-uiește altele',
        'Permite 2 MAC-uri dar portul devine automat trunk',
        'Permite oricâte MAC-uri dar doar pentru VLAN nativ'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care este scopul unui floating static route?',
      options: [
        'Crearea unei rute de backup cu distanță administrativă mai mare',
        'O rută statică cu prioritate maximă',
        'O rută pentru comunicare wireless',
        'O rută utilizată exclusiv de NAT'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Ce afirmare este adevărată despre EtherChannel?',
      options: [
        'Poate combina porturi cu viteze diferite',
        'Porturile trebuie să aibă aceleași setări de speed și duplex',
        'Poate agrega porturi trunk cu porturi access',
        'Funcționează doar pe switch-uri'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Într-o ACL standard, ce este implicit la final?',
      options: [
        'Permit all traffic',
        'Deny all traffic',
        'Permit only TCP',
        'Deny all you want'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care este adresa IP de broadcast pentru rețeaua 192.168.1.0/25?',
      options: ['192.168.1.127', '192.168.1.255', '192.168.1.0', '192.168.1.1'],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Ce se întâmplă cu pachetele ICMP într-un router care are o ACL inbound ce permite doar TCP?',
      options: [
        'ICMP este permis',
        'ICMP este blocat la interfața de intrare',
        'ICMP este tratat ca TCP',
        'ICMP este permis doar pentru VLAN 1'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce port TCP este utilizat standard de protocolul SMTP?',
      options: ['23', '25', '53', '110'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care este rolul opțiunii „spanning-tree bpduguard enable"?',
      options: [
        'Oprește portul dacă primește BPDU-uri',
        'Permite trunk automat',
        'Blochează VLAN-urile native',
        'Activează STP rapid'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Pe baza ieșirii unui router OSPF funcțional, câte routere vecine există?',
      image: 'subiecte_acad/images/simulare_cristi/q26.png',
      options: ['0', '1', '2', '3', 'Mai mult de 3'],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Conform ieșirii comenzii, cu câți routere este routerul R9 complet adiacent pe interfața Gi0/0?\nR9# show ip ospf interface brief\nInterface    PID   Area    IP Address/Mask     Cost    State Nbrs F/C\nGi0/0          1      0     10.1.1.1/24           1     DROTH 2/5',
      options: ['7', '10', '5', '2'],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Care este rezultatul comenzii „no service password-encryption" pe un router Cisco IOS?',
      options: [
        'Toate parolele viitoare vor fi stocate în clar în configurația curentă',
        'Toate parolele criptate actuale și viitoare vor fi criptate în configurația curentă',
        'Toate parolele criptate actuale și viitoare vor fi stocate în clar în configurația curentă',
        'Toate parolele viitoare vor fi criptate în configurația curentă'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Ce comandă este folosită pentru a activa port-security pe o interfață?',
      options: [
        'switchport port-security mac-address sticky',
        'show port-security interface',
        'switchport port-security',
        'switchport port-security violation shutdown'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Ce tipuri de interfețe sunt necesare pentru implementarea Router-on-a-Stick inter-VLAN?',
      options: [
        'Porturi rutate',
        'Interfețe virtuale comutate',
        'Șablon virtual',
        'Tunel',
        'Subinterfețe'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Ce comandă pe R3 afișează toate LSA-urile cunoscute de R3 în OSPF area 0?',
      options: [
        'show running-config',
        'show ip ospf interface',
        'show ip ospf neighbors',
        'show ip route ospf',
        'show ip ospf database'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Doriți să actualizați IOS-ul pe un switch Catalyst. Ce comandă puteți folosi pentru a identifica modelul switch-ului?',
      options: [
        'show running-config',
        'show flash',
        'show startup-config',
        'show platform nvram',
        'show version',
        'show processes'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Într-un atac reflection, adresa IP sursă din pachetele de atac este falsificată cu care dintre următoarele entități?',
      options: [
        'Adresa atacatorului',
        'Adresa reflectorului',
        'Adresa victimei',
        'Adresa routerului'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Aveți adresa IP 172.16.2.0/23. Care este intervalul de adrese utilizabil?',
      options: [
        '172.16.0.0 până la 172.16.4.254',
        '172.16.1.0 până la 172.16.3.254',
        '172.16.3.1 până la 172.16.4.254',
        '172.16.2.1 până la 172.16.3.254'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice-multi',
      text: 'Identificați protocoalele care pot negocia crearea și menținerea unui EtherChannel. (Alegeți două răspunsuri)',
      options: ['VTP', 'LACP', 'ON', 'PAgP', 'PPTP', 'PAP'],
      correctIndices: [1, 3]
    },
    {
      type: 'multiple-choice',
      text: 'Ce mască de rețea ar trebui folosită cu o rețea de Clasa B pentru a crea 40 de subrețele?',
      options: [
        '255.255.248.0',
        '255.255.224.0',
        '255.255.252.0',
        '255.255.192.0',
        '255.255.128.0'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care afirmație este corectă despre măștile /12, /20 și /28?',
      options: [
        'Toate au același increment',
        'Toate au același increment în octeți diferiți',
        'Toate creează doar 16 subrețele',
        'Toate au același număr de biți de host'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele descrie corect protocolul PVST+?',
      options: [
        'Presupune un singur spanning tree 802.1D pentru întreaga rețea',
        'Oferă un spanning tree separat 802.1D pentru fiecare VLAN configurat',
        'Furnizează conversie rapidă cu o singură instanță de STP',
        'Furnizează conversie rapidă cu o instanță de spanning tree per VLAN'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce metode sunt utilizate pentru alocarea adreselor IPv6? (Alegeți două răspunsuri)',
      options: [
        'Folosind un server DHCPv6 pentru a aloca adrese și parametri',
        'Folosind descoperirea vecinilor pentru a crea adrese',
        'Folosind metoda EUI-64 pentru alocare manuală',
        'Folosind DNS dinamic pentru traduceri de adrese'
      ],
      correctIndices: [0, 2]
    },
    {
      type: 'multiple-choice',
      text: 'Care este cea mai bună definiție pentru un WAN?',
      options: [
        'Acces la distanță la resurse printr-o conexiune de mare viteză',
        'Acces local la resurse',
        'Acces local la Internet',
        'Resurse de rețea centrale'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care este adresa de destinație a unui pachet de tip Router Solicitation?',
      options: [
        'FF02::2',
        'FF02::A',
        'FF02::9',
        'FF02::6',
        'FF02::1',
        'FF02::5'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care afirmație despre funcționarea VLAN-urilor pe switch-urile Cisco Catalyst este adevărată?',
      options: [
        'Când un pachet este primit de pe un trunk 802.1Q, VLAN-ul este determinat din MAC-ul sursă',
        'Frame-urile unicast necunoscute sunt retransmise doar către porturile din același VLAN',
        'Frame-urile broadcast și multicast sunt retransmise către porturi din VLAN-uri diferite',
        'Porturile dintre switch-uri trebuie să fie în modul access pentru ca VLAN-urile să se extindă între ele'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Dezvoltați un plan de adresare IP pentru rețeaua 10.188.31.0/23 astfel încât să creați maximum de subrețele cu câte 30 de hosturi fiecare. Ce interval IP satisface cerința?',
      options: [
        '10.188.31.0/26',
        '10.188.31.0/25',
        '10.188.31.0/28',
        '10.188.31.0/27',
        '10.188.31.0/29'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'În ce mod trebuie să fiți pentru a activa agentul de relay DHCP?',
      options: [
        'Global configuration mode',
        'User EXEC mode',
        'Privileged EXEC mode',
        'Interface configuration mode'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Inginerul execută comanda show ip ospf neighbor pe routerul R1. Vecinul 2.2.2.2 apare ca FULL/BDR. Ce înseamnă BDR?',
      options: [
        'R1 este un Area Border Router',
        'R1 este un Backup Designated Router',
        'Routerul 2.2.2.2 este un Area Border Router',
        'Routerul 2.2.2.2 este un Backup Designated Router'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Ce număr de protocol reprezintă ICMPv4?',
      options: ['89', '88', '17', '1', '58', '6'],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Care combinație de adresă și wildcard mask poate fi reprezentată cu cuvântul cheie „any"?',
      options: [
        '255.255.255.255 0.0.0.0',
        '255.255.255.255 255.255.255.255',
        '0.0.0.0 0.0.0.0',
        '0.0.0.0 255.255.255.255',
        '10.0.0.0 0.0.0.0'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce afirmații sunt corecte în legătură cu adresarea de layer 3? (Alegeți două răspunsuri)',
      options: [
        'Stiva OSI folosește IP',
        'Ethernet folosește layer 3',
        'Adresele Layer 3 sunt alocate doar dispozitivelor care fac rutare',
        'Dispozitivele de rețea mențin tabele de rutare folosind layer 3',
        'Fiecărui PC și router i se atribuie o adresă MAC unică'
      ],
      correctIndices: [0, 3]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Identificați comenzile necesare pentru a verifica IP-urile unui switch și ale unui host. (Alegeți două răspunsuri)',
      options: [
        'show interface status',
        'show ip interface brief',
        'ipconfig /renew',
        'ipconfig /release',
        'ipconfig /all'
      ],
      correctIndices: [1, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Când realizați o traducere între inside local și inside global folosind PAT, ce cuvânt cheie trebuie utilizat cu comanda „ip nat inside source" pentru a activa PAT?',
      options: ['overload', 'pool', 'permit', 'inside'],
      correctIndex: 0
    }
  ]
});
