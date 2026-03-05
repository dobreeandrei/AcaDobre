window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'nationala_2024_1112',
  topic: 'Nationala 11-12 2024',
  questions: [
    {
      type: 'multiple-choice',
      text: 'Fie următoarele switch-uri într-o rețea de calculatoare. Care este prioritatea maximă pe care o poate avea Switch-ul B pentru a fi ales Root Bridge?',
      image: 'subiecte_acad/images/nationala_2024_1112/q1.png',
      options: [
        '512',
        'nu poate fi ales Root Bridge niciodată',
        '4096',
        'orice prioritate, deoarece are cel mai mic MAC',
        '32768',
        '1',
        '0'
      ],
      correctIndex: 6
    },
    {
      type: 'multiple-choice',
      text: 'În topologia de mai jos, cei 3 senzori nu rulează o stivă TCP/IP completă. Astfel ei se bazează pe funcționarea Proxy ARP. Cum va arăta tabela ARP a senzorului de temperatură în urma trimiterii pachetelor:\nTemperature Sensor -> Admin\nHumidity Sensor -> Temperature Sensor\nTemperature Sensor -> Web-App',
      image: 'subiecte_acad/images/nationala_2024_1112/q2.png',
      options: [
        'nu va putea comunica în afara rețelei',
        'IP-Humidity -> MAC-Humidity\nIP-Device -> MAC-Device',
        'IP-Admin -> MAC-Admin\nIP-Humidity -> MAC-Humidity\nIP-Web-App -> MAC-Web-App',
        'IP-Admin -> MAC-Device\nIP-Humidity -> MAC-Device\nIP-Web-App -> MAC-Device',
        'IP-Device -> MAC-Device',
        'IP-Admin -> MAC-Device\nIP-Humidity -> MAC-Humidity\nIP-Web-App -> MAC-Device'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre următoarele metode/configurații sunt recomandate pentru a preveni atacurile de tip STP? (alegeți 2 variante)',
      options: [
        'activare BPDU Guard',
        'dezactivare porturi blocare',
        'activare BPDU Snooping',
        'activare PortFast',
        'activare STP Snooping',
        'dezactivare VLAN nativ'
      ],
      correctIndices: [0, 3]
    },
    {
      type: 'multiple-choice',
      text: 'Care din următoarele afirmații este corectă?',
      options: [
        'Protocolul telnet trimite datele criptate',
        'Protocolul telnet trimite datele necriptate',
        'Telnet este considerat un protocol sigur deoarece utilizează criptare end-to-end pentru toate datele transmise',
        'Telnet folosește default portul 21 pentru realizarea conexiunii',
        'Telnet folosește default portul 22 pentru realizarea conexiunii',
        'Telnet trimite datele prin ftp'
      ],
      correctIndex: 1
    },
    {
      type: 'open-ended',
      text: 'Studiați cu atenție topologia. Pornind de la spațiul 91.26.180.0/22, subnetați eficient pentru fiecare subrețea din topologie în funcție de necesități. Care va fi adresa de broadcast pentru departamentul Admin? Fiecare interfață de rețea are nevoie de un IP. Scrieți IP-ul cu mască fără spații. Exemplu "192.168.0.2/23" (fără ghilimele).',
      image: 'subiecte_acad/images/nationala_2024_1112/q5.png',
      acceptedAnswers: ['91.26.180.7/29']
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele atacuri este un atac de tip Cross-Site Scripting (XSS) în care scripturile malițioase sunt stocate permanent pe serverul infectat și sunt primite de toți vizitatorii paginii infectate?',
      options: [
        'niciunul dintre răspunsuri',
        'DNS XSS Attack',
        'Stored XSS Attack',
        'Web Page XSS Attack',
        'Reflected XSS Attack',
        'Server XSS Attack'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Ce reprezintă un "Implicit Deny" în configurația unui ACL?',
      options: [
        'Nu există regula implicit deny',
        'O declarație care interzice explicit toate conexiunile identificate',
        'O declarație care permite doar traficul specificat explicit',
        'O declarație care restricționează implicit toate conexiunile',
        'O declarație care permite implicit orice trafic neidentificat'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Care din următoarele afirmații este corectă?',
      options: [
        'Switch-ul de layer 3 are suport pentru WIC',
        'Switch-ul de layer 3 poate realiza protocoale avansate de rutare',
        'Ruta sumarizată este folosită pentru a micșora tabela de rutare',
        'Modul trunk pe o interfață nu permite trecerea pachetelor din mai multe vlan-uri',
        'Limitarea numărului de MAC-uri pe un port nu reprezintă o metodă de securitate',
        'Modul access pe o interfață permite trecerea pachetelor din mai multe vlan-uri'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care este numărul de grup implicit pentru HSRP?',
      options: ['255', '110', '1', '4096', '0', '100'],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care protocol poate fi utilizat de IPsec pentru autentificarea sursei și destinației?',
      options: ['MPLS', 'Kerberos', 'MK7', 'IKE', 'SSH', 'IP-TLS'],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Cu ce distanță administrativă va fi învățată rețeaua Departament Management pe Router 2?',
      image: 'subiecte_acad/images/nationala_2024_1112/q11.png',
      options: [
        'niciunul din răspunsuri',
        'nu va avea distanță administrativă',
        '120',
        '0',
        '1',
        '110'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Un administrator de retea configurează mai multe VLAN-uri în compania sa. Descoperă că o parte din angajați au primit o adresă a server-ului DNS greșită și mai multe stații au fost compromise. Cum putea preveni acest atac?',
      options: [
        'Dynamic ARP',
        'DHCP Starvation',
        'DHCP Snooping per VLAN',
        'niciunul dintre răspunsuri',
        'DHCP Snooping',
        'DHCP Trusted'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele nu este o caracteristică luată în calcul atunci când dorim să achiziționăm un switch la nivelul unei companii mari?',
      options: [
        'fiabilitate',
        'scalabilitate',
        'cost',
        'numărul de porturi',
        'memoria RAM',
        'viteza porturilor'
      ],
      correctIndex: 4
    },
    {
      type: 'matching',
      text: 'Selectați termenul corect pentru fiecare caracteristică, ce indică în mod corect componenta AAA.',
      subQuestions: [
        { text: 'Realizată folosind combinații de username și parolă, întrebări de tip challenge and response, tokens.', answer: 'Authentication' },
        { text: 'Colectează și raportează datele de utilizare pentru auditare sau facturare.', answer: 'Accounting' },
        { text: 'Ce resurse poate accesa un utilizator și ce operații are voie să realizeze.', answer: 'Authorization' },
        { text: 'Un fel de a controla cine are permisiunea de a accesa o rețea.', answer: 'Authentication' },
        { text: 'Utilizatorii și administratorii trebuie să demonstreze că sunt cine spun că sunt.', answer: 'Authentication' },
        { text: 'Înregistrează ce face utilizatorul, inclusiv durata de timp și schimbările făcute.', answer: 'Accounting' }
      ],
      options: ['Authentication', 'Authorization', 'Accounting']
    },
    {
      type: 'multiple-choice',
      text: 'Cum se numește atacul în care atacatorii folosesc pings pentru a descoperi sub-rețele și host-uri pe o rețea protejată?',
      options: [
        'Man in the Middle',
        'Address Spoofing Attacks',
        'niciunul dintre răspunsuri',
        'Session Hijacking',
        'ICMP Attack',
        'Amplification and Reflection Attacks'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Un host care dorește să ruleze IPv6 trimite un Router Solicitation pentru a primi un Router Advertisment. Către ce adresă trimite host-ul solicitarea?',
      options: ['2001::1', 'FF02::2', 'FF02::1', 'FE80::2', 'FF80::1', 'FE80::1'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Un atacator reușește să captureze cadre necriptate ale unui protocol dintr-o rețea locală cu informații despre hostname, IP, capabilități. Cum se numește tipul de atac?',
      options: [
        'niciunul dintre răspunsuri',
        'NTP attack',
        'CDP reconnaissance',
        'CDP enable',
        'DHCP Starvation',
        'Smurf attack'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Administratorul decide să sumarizeze cât mai optim rețelele: 66.198.21.0/26, 66.198.6.0/28, 66.198.10.128/25, 66.198.17.0/24, 66.198.14.0/27.',
      options: [
        '66.198.22.0/19',
        '66.198.0.0/16',
        '66.198.0.0/24',
        '66.198.22.0/18',
        '66.198.0.0/19',
        '66.198.0.0/23'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care sunt MAC-urile pe care le vom găsi în tabela CAM a Switch-ului Etaj 2 în urma trimiterii pachetelor ICMP: Elev 1 -> Elev 3; Elev 4 -> Arena; Subiecte -> Elev 2?',
      image: 'subiecte_acad/images/nationala_2024_1112/q19.png',
      options: [
        'MAC Elev 1, MAC Elev 3, MAC Elev 4, MAC Arena, MAC Subiecte, MAC Elev 2',
        'MAC Elev 1, MAC Elev 4, MAC Arena',
        'MAC Elev 1, MAC Elev 4, MAC Arena, MAC Subiecte, MAC AcadNet Gig0/1',
        'MAC Elev 4, MAC Arena, MAC Subiecte',
        'MAC Elev 1, MAC Elev 4, MAC AcadNet Gig 0/1',
        'MAC Elev 1, MAC Elev 4'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre următoarele sunt exemple de firewall-uri de tip host based? (alegeți 3 variante de răspuns)',
      options: [
        'Proxy Firewalls',
        'iptables',
        'DNS Firewalls',
        'Next-Generation Firewalls',
        'TCP Wrappers',
        'nftables',
        'DNS Wrappers'
      ],
      correctIndices: [1, 4, 5]
    },
    {
      type: 'open-ended',
      text: 'Un administrator de rețea dorește să subneteze în mod egal spațiul 167.213.0.0/18 pentru 7 subrețele. Care va fi al doilea IP asignabil pentru a treia subrețea? Scrieți IP-ul cu mască fără spații.',
      acceptedAnswers: ['167.213.16.2/21']
    },
    {
      type: 'multiple-choice',
      text: 'Ce reprezintă "recursive DNS resolver" în infrastructura DNS?',
      options: [
        'Un server DNS care operează doar într-o rețea privată',
        'Un server DNS care stochează toate informațiile despre toate domeniile',
        'Un client DNS care trimite cereri către un server autoritativ',
        'Un server DNS care primește cereri și efectuează căutări pe întregul internet pentru a găsi răspunsul',
        'Un server DNS care funcționează cu un singur client'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Două switch-uri sunt conectate. Unul are DTP "dynamic desirable", celălalt are portul în modul "acces". Cum va fi configurată legătura?',
      options: [
        'niciunul dintre răspunsuri',
        'dynamic',
        'nu va funcționa',
        'access',
        'native',
        'trunk'
      ],
      correctIndex: 3
    },
    {
    type: 'multiple-choice',
    text: 'Știind că BID-E < A < B < C < D < F < G < H < I. Care vor fi porturile blocate în urma rulării STP? Toate legăturile au același cost.',
    image: 'subiecte_acad/images/nationala_2024_1112/q24.png',
    options: [
      '1,7,8,13,20,23',
      '2,9,13,21,25,30',
      'niciunul din răspunsuri',
      '2,9,12,19,24,29',
      '5,10,11,14,21,28',
      '2,9,12,19,22,24,29',
      '1,7,8,14,21,26'
    ],
    correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Știind că Router-ID lui A < B < C < D < E < F, cine va fi ales DR în cazul rulării OSPF pe toate routerele?',
      image: 'subiecte_acad/images/nationala_2024_1112/q25.png',
      options: ['A', 'F', 'A,B,C,D,E,F', 'B,C,D,E,F', 'F,D,E', 'niciunul din răspunsuri'],
      correctIndex: 3
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre următoarele caracteristici trebuie să fie identice pentru ca 2 switch-uri să formeze un Etherchannel? (alegeți 4 variante)',
      options: ['line console', 'VLAN', 'banner', 'viteză', 'duplex', 'protocolul de trunking'],
      correctIndices: [1, 3, 4, 5]
    },
    {
      type: 'matching',
      text: 'Aranjați în ordinea corectă a desfășurării pașilor pentru a configura un firewall de tip Zone-Based Policy.',
      subQuestions: [
        { text: 'Identificarea unei zone perechi și potrivirea cu un policy map.', answer: 'Pasul 4' },
        { text: 'Definirea unei acțiuni cu un policy-map.', answer: 'Pasul 3' },
        { text: 'Crearea zonelor.', answer: 'Pasul 1' },
        { text: 'Asignarea zonelor interfețelor potrivite.', answer: 'Pasul 5' },
        { text: 'Identificarea traficului cu un class-map.', answer: 'Pasul 2' }
      ],
      options: ['Pasul 1', 'Pasul 2', 'Pasul 3', 'Pasul 4', 'Pasul 5']
    },
    {
      type: 'open-ended',
      text: 'Care este comanda prin care putem dezactiva căutarea numelui de domeniu atunci când dăm o comandă greșită în CLI-ul unui router Cisco?',
      acceptedAnswers: ['no ip domain-lookup']
    },
    {
      type: 'multiple-choice',
      text: 'Care vor fi Router-ID-urile pentru OSPF ale următoarelor routere în urma comenzilor date? Nicio altă comandă legată de router-id/interfețele router-ului nu mai sunt date în afara celor notate explicit mai jos.\nR1(config)# int lo0\nR1(config-if)# ip add 10.10.10.1 255.255.255.0\nR1(config-if)# exit\nR1(config)# router ospf 1\nR1(config-router)#router-id 10.10.10.10 255.255.255.0\n\nR2(config)# int lo10\nR2(config-if)# ip add 2.2.2.2\nR2(config-if)# exit\nR2(config)# int gig0/0\nR2(config-if)# ip add 20.20.20.1 255.255.255.0\nR2(config-if)# no shut\n\nR3(config)# int gig0/0\nR3(config-if)# ip add 30.30.30.1 255.255.255.0\nR3(config-if)# no shut\nR3(config)# int gig0/1\nR3(config-if)# ip add 30.30.20.1 255.255.255.0\nR3(config-if)# no shut',
      options: [
        'R1 - 10.10.10.10, R2 - 2.2.2.2, R3 - 30.30.20.1',
        'R1 - 10.10.10.1, R2 - 20.20.20.1, R3 - 30.30.20.1',
        'Nu există Router-ID pentru OSPF',
        'R1 - 10.10.10.10, R2 - 2.2.2.2, R3 - 30.30.30.1',
        'niciunul dintre răspunsuri',
        'R1 - 10.10.10.1, R2 - 2.2.2.2, R3 - 30.30.20.1'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Studiați topologia. Ce tag .dot1q va avea un cadru între switch-ul Etaj2 și Etaj1 care circulă de la Elev-RL la Elev-IS?',
      image: 'subiecte_acad/images/nationala_2024_1112/q30.png',
      hint: 'Apasati click-dreapta si "open image in new tab" pentru a vedea mai bine.',
      options: [
        'eroare "native VLAN mismatch"',
        '10',
        'niciunul dintre răspunsuri',
        'niciun tag',
        '20',
        '1'
      ],
      correctIndex: 3
    }
  ]
});