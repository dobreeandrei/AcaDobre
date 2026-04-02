window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'locala_2023_1_9_10',
  topic: 'Locala (1) 9-10 2023',
  questions: [
    {
      type: 'multiple-choice',
      text: 'Care din următoarele configurații pe SW1 trebuie să fie realizată ca să avem conectivitate end-to-end și să rămână după ce SW1 este repornit?',
      image: 'subiecte_acad/images/locala_2023_1_910/q1.png',
      options: [
        'enable\nconfig terminal\ninterface range fa0/1-3\nswitchport mode trunk\nexit\nwrite\nexit\nexit',
        'enable\nconfig terminal\ninterface range fa0/1-3\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,40,50,60\nvlan 30\nvlan 40\nexit\nwrite\nexit\nexit',
        'enable\nconfig terminal\ninterface range fa0/1-3\nswitchport mode trunk\nvlan 30\nvlan 40\nexit\nexit\nwrite\nexit',
        'enable\nconfig terminal\ninterface fa0/1\nswitchport mode trunk\ninterface fa0/2\nswitchport mode trunk\nvlan 30\nvlan 40\nexit\nwrite\nexit\nexit',
        'config terminal\ninterface range fa0/1-3\nswitchport mode trunk\nvlan 30\nvlan 40\nexit\nwrite\nexit\nexit'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care este next-hop-ul care apare în următoarea tabelă de rutare?',
      image: 'subiecte_acad/images/locala_2023_1_910/q2.png',
      options: [
        '101.122.124.3',
        '192.111.134.1',
        '101.122.124.2',
        '192.111.102.0',
        '192.111.133.1',
        '101.122.124.0'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'PC0 și PC1 se află în vlan 66. Ce se poate spune despre comunicarea între PC-uri?\nSW1:',
      image: 'subiecte_acad/images/locala_2023_1_910/q3.png',
      options: [
        'Nu pot comunica pentru că vlan 66 nu este pe lista de allowed pe interfețele trunk',
        'Nu pot comunica deoarece porturile nu sunt trunk',
        'Nu pot comunica deoarece avem vlan native 1',
        'Pot comunica deoarece Vlan-ul 66 este creat',
        'Pot comunica pentru că vlan 66 nu este pe lista de allowed pe interfețele trunk',
        'Nu pot comunica deoarece vlan 66 nu este creat'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'De ce nu se poate realiza configurarea Router-on-a-stick după ce am dat următoarele comenzi pe un Router?\nRouter#configure terminal\nRouter(config)#interface GigabitEthernet0/0/0.10\nRouter(config-subif)#encapsulation dot1Q 15\nRouter(config-subif)#ip add 192.145.32.1 255.255.255.0\nRouter(config)#interface GigabitEthernet0/0/0.20\nRouter(config-subif)#encapsulation dot1Q 20\nRouter(config-subif)#ip add 152.135.22.1 255.255.255.0\nRouter(config-subif)#interface GigabitEthernet0/0/0.30\nRouter(config-subif)#ip add 192.145.32.10 255.255.255.0\nRouter(config)#interface GigabitEthernet0/0/0\nRouter(config-if)#no shutdown',
      image: 'subiecte_acad/images/locala_2023_1_910/q4.png',
      options: [
        'Rețeaua de pe GigabitEthernet0/0/0.20 se suprapune cu altă rețea.',
        'Nu există probleme.',
        'Dot1Q nu e configurat pe GigabitEthernet0/0/0.30.',
        'Pe fiecare subinterfață trebuie să dăm "no shutdown".',
        'Rețeaua de pe GigabitEthernet0/0/0.10 se suprapune cu altă rețea.',
        'Dot1Q e configurat greșit pe GigabitEthernet0/0/0.10.'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'În topologia dată pentru Departamentul PR avem vlan 10 și pentru Servere avem vlan 20. Pentru a realiza pe router-ul R2 Router-on-a-Stick trebuie să folosim următoarele comenzi:',
      image: 'subiecte_acad/images/locala_2023_1_910/q5.png',
      options: [
        'enable\nconfig terminal\ninterface gig0/0/0.10\nencapsulation dot1Q 10\nip address 121.112.0.129 255.255.255.192\ninterface gig0/0/0.20\nencapsulation dot1Q 20\nip address 121.112.0.97 255.255.255.224\nint gig0/0/0\nno shutdown',
        'enable\nconfig terminal\ninterface gig0/0/0.10\nencapsulation dot1Q 10\nip address 121.112.0.129 255.255.255.240\ninterface gig0/0/0.20\nencapsulation dot1Q 20\nip address 121.112.0.96 255.255.255.224\ninterface gig0/0/0\nno shutdown',
        'enable\nconfig terminal\ninterface gig0/0/0.10\nencapsulation dot1Q 10\nip address 121.112.0.128 255.255.255.240\ninterface gig0/0/0.20\nencapsulation dot1Q 20\nip address 121.112.0.97 255.255.255.224\ninterface gig0/0/0\nno shutdown',
        'enable\nconfig terminal\ninterface gig0/0/0.30\nencapsulation dot1Q 10\nip address 121.112.0.129 255.255.255.240\ninterface gig0/0/0.20\nencapsulation dot1Q 20\nip address 121.112.0.97 255.255.255.224\ninterface gig0/0/0\nno shutdown',
        'enable\nconfig terminal\ninterface gig0/0/0.30\nencapsulation dot1Q 10\nip address 121.112.0.129 255.255.255.224\ninterface gig0/0/0.20\nencapsulation dot1Q 20\nip address 121.112.0.97 255.255.255.192\ninterface gig0/0/0\nno shutdown',
        'enable\nconfig terminal\ninterface gig0/0/0.10\nencapsulation dot1Q 10\nip address 121.112.0.129 255.255.255.240\nno shutdown\ninterface gig0/0/0.20\nencapsulation dot1Q 20\nip address 121.112.0.96 255.255.255.224\nno shutdown'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Care din următoarele comenzi nu este corectă?',
      options: [
        'encapsulation dot1Q 4093',
        'switchport trunk allowed vlan 10, 20, 30',
        'encapsulation dot1Q 4094',
        'switch mode trunk',
        'encapsulation dot1Q 0',
        'switch mode access'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Ținând cont că pe Gig0/0/0 am asignat următoarea adresă ip 121.135.212.100/19. Care din următoarele adrese IPv4 poate să fie asignată pe Gig0/0/1?',
      image: 'subiecte_acad/images/locala_2023_1_910/q7.png',
      options: [
        '121.135.202.2',
        '121.135.200.222',
        '121.135.202.111',
        '121.135.223.253',
        '121.135.192.1',
        '121.135.191.0'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Care rută nu a fost configurată static către o zonă specifică?',
      image: 'subiecte_acad/images/locala_2023_1_910/q8.png',
      options: [
        '0.0.0.0/0 [1/0] via 101.122.124.2',
        '101.122.124.1/32 is directly connected, Serial0/1/1',
        '192.111.102.0/24 [1/0] via 101.122.124.2',
        '192.222.204.0/24 [1/0] via 101.122.124.2',
        '203.122.124.0/30 [1/0] via 101.122.124.2',
        '192.111.134.0/24 is directly connected, GigabitEthernet0/0/0'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'În cazul topologiei date mai jos avem nevoie de:\n40 Hosturi pentru departamentul HR\n30 Hosturi pentru departamentul IT\n25 Hosturi pentru Servere\n10 Hosturi pentru departamentul PR\nPornind de la spațiul de adrese 111.114.200.3/16, care este adresa de rețea pentru Departamentul PR? (Default-Gateway este inclus în hosturi)',
      image: 'subiecte_acad/images/locala_2023_1_910/q9.png',
      options: [
        '111.114.0.64/27',
        '111.114.0.0/26',
        '111.114.0.256/28',
        '111.114.0.128/28',
        '111.114.0.96/29',
        '111.114.0.96/28'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Câte rute statice trebuie să folosim ca să avem conectivitate end-to-end? (Nu putem folosi rute default sau rute sumarizate)',
      image: 'subiecte_acad/images/locala_2023_1_910/q10.png',
      options: [
        '8',
        '5',
        '6',
        '9',
        '10',
        '7'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care este rezultatul în urma rulării următoarelor 2 comenzi pe un router? (Alegeți 2 variante)\ncopy running-config tftp\ncopy tftp running-config',
      options: [
        'A doua comandă redă configurația salvată pe router.',
        'Prima comandă e incorectă.',
        'A doua comandă redă configurația de pe TFTP server.',
        'Prima comandă salvează configurația pe un TFTP server.',
        'A doua comandă e incorectă.',
        'Prima comandă salvează configurația curentă pe acel router.'
      ],
      correctIndices: [2, 3]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care din următoarele comenzi reprezintă ruta host? (Alegeți 2 variante)',
      options: [
        'ip route 144.145.121.1 255.255.255.255 202.50.32.55',
        'ip route 111.121.192.1 255.255.255.0 191.222.111.21',
        'ip route 133.145.111.1 255.255.255.255 101.10.22.45',
        'ip route 0.0.0.0 0.0.0.0 131.154.123.43',
        'ip route 0.0.0.0 0.0.0.0 192.111.142.22',
        'ip route 111.141.192.3 255.255.255.0 191.222.131.51'
      ],
      correctIndices: [0, 2]
    },
    {
      type: 'multiple-choice',
      text: 'Ce cale va urma pachetul care are ca ip destinație 192.172.0.5?',
      options: [
        '192.132.0.0/16',
        '192.152.0.0/16',
        '192.172.0.0/20',
        '192.172.0.0/22',
        '192.162.1.0/22',
        '192.172.0.0/26'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Care va fi problema în următoarea topologie cu următoarea configurație?',
      image: 'subiecte_acad/images/locala_2023_1_910/q14.png',
      options: [
        'Vlanurile au fost configurate greșit',
        'SW0 nu are porturile trunk',
        'Router-on-a-Stick este configurat pe portul greșit',
        'SW1 nu are creat vlan 20',
        'Nu sunt excluse din pool-urile de adrese IP-urile pentru Default Gateway',
        'Porturile către calculatoare nu sunt în mode access'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care configurație trebuie realizată pe MSW3? (Nu au fost realizate configurații pe MSW3 înainte)',
      image: 'subiecte_acad/images/locala_2023_1_910/q15.png',
      options: [
        'enable\nconfig terminal\nvlan 10\ninterface vlan 10\nip add 100.100.100.1 255.255.255.0\nno sh\nvlan 20\ninterface vlan 20\nip add 200.200.200.1 255.255.255.0\nno sh\nint fa0/1\nsw mode acc\nsw acc vlan 10\nint fa0/2\nsw mode acc\nsw acc vlan 20\nexit\ninterface fa0/4\nno switchport\nip add 20.20.20.1 255.255.255.0\nno sh',
        'enable\nconfig terminal\nvlan 10\ninterface vlan 10\nip add 100.100.100.1 255.255.255.0\nno sh\nvlan 20\ninterface vlan 20\nip add 200.200.200.1 255.255.255.0\nno sh\nexit\nip routing\ninterface fa0/4\nno switchport\nip add 20.20.20.1 255.255.255.0\nno sh',
        'enable\nconfig terminal\nvlan 10\ninterface vlan 10\nip add 100.100.100.1 255.255.255.0\nno sh\nvlan 20\ninterface vlan 20\nip add 200.200.200.1 255.255.255.0\nno sh\nint fa0/1\nsw mode acc\nsw acc vlan 10\nint fa0/2\nsw mode acc\nsw acc vlan 20\nexit\nip routing\ninterface fa0/4\nno switchport\nip add 20.20.20.1 255.255.255.0\nno sh',
        'enable\nconfig terminal\nvlan 10\nvlan 20\ninterface fa0/1\nip add 100.100.100.1 255.255.255.0\nno sh\ninterface fa0/2\nip add 200.200.200.1 255.255.255.0\nno sh\nint fa0/1\nsw mode acc\nsw acc vlan 10\nint fa0/2\nsw mode acc\nsw acc vlan 20\nexit\nip routing\ninterface fa0/4\nno switchport\nip add 20.20.20.1 255.255.255.0\nno sh',
        'enable\nconfig terminal\ninterface vlan 10\nip add 100.100.100.1 255.255.255.0\nno sh\ninterface vlan 20\nip add 200.200.200.1 255.255.255.0\nno sh\nint fa0/1\nsw mode acc\nsw acc vlan 10\nint fa0/2\nsw mode acc\nsw acc vlan 20\nexit\ninterface fa0/4\nno switchport\nip add 20.20.20.1 255.255.255.0\nno sh',
        'enable\nconfig terminal\nvlan 10\ninterface vlan 10\nip add 100.100.100.1 255.255.255.0\nno sh\nvlan 20\ninterface vlan 20\nip add 200.200.200.1 255.255.255.0\nno sh\nint fa0/1\nsw mode acc\nsw acc vlan 10\nint fa0/2\nsw mode acc\nsw acc vlan 20\nexit\nip routing\ninterface fa0/4\nno switchport\nip add 20.20.20.1 255.255.255.0\nno sh'
      ],
      correctIndices: [2, 5]
    },
    {
      type: 'multiple-choice',
      text: 'În topologia de mai jos se pot trimite pachete între PC0 și PC1. Care este motivul pentru care nu putem trimite pachete de la Server0 la PC1?',
      image: 'subiecte_acad/images/locala_2023_1_910/q16.png',
      options: [
        'SW2 are portul FastEthernet0/2 pe mode trunk.',
        'R0 nu are configurat dot1q pe subinterfața GigabitEthernet0/0/0.20.',
        'SW0 nu are creat vlan 20.',
        'SW0 are modurile pe porturi configurate greșit.',
        'Nu au fost create rutele statice.',
        'SW2 nu are create toate vlan-urile.'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'În următoarea topologie nu se pot trimite pachete între PC2 și PC0, care este cauza?',
      image: 'subiecte_acad/images/locala_2023_1_910/q17.png',
      options: [
        'Switch0 nu cunoaște vlan 20',
        'Switch3 nu cunoaște celelalte vlan-uri, doar pe vlan 20.',
        'Între Switch3 și Switch0 nu este permis vlan 20.',
        'Switch3 nu are portul Fa0/2 în mode access',
        'Switch0 nu are toate porturile în mode trunk.',
        'Nu a fost realizat Router-on-a-Stick'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'PC0 trimite un packet către Server1, dar nu ajunge la destinație. Care este motivul?',
      image: 'subiecte_acad/images/locala_2023_1_910/q18.png',
      options: [
        'R1 are rutele statice configurate greșit.',
        'Portul FastEthernet0/3 e pe mode trunk',
        'Portul FastEthernet0/1 e pe mode trunk',
        'R1 nu are setat Default-Gateway corect.',
        'Portul FastEthernet0/2 e pe mode trunk',
        'R0 are rutele statice configurate greșit.'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice-multi',
      text: 'Fie următoarea topologie. Ca să realizăm conectivitatea end-to-end trebuie să setăm următoarele rute statice: (Alegeți 3 variante)\nVlan 10 - 192.111.131.0/24 (primul IP din rețea este Default-Gateway)\nVlan 20 - 192.121.130.0/24 (primul IP din rețea este Default-Gateway)\nVlan 11 - 170.168.120.0/24 (primul IP din rețea este Default-Gateway)\nVlan 22 - 170.165.140.0/24 (primul IP din rețea este Default-Gateway)\nR0-R1 - 10.10.10.0/30 (R0 are primul IP din rețea, R1 are al doilea IP din rețea)\nR1-R2 - 20.20.20.0/30 (R1 are primul IP din rețea, R2 are al doilea IP din rețea)',
      image: 'subiecte_acad/images/locala_2023_1_910/q19.png',
      options: [
        'Router0:\nip route 0.0.0.0 0.0.0.0 10.10.10.2\nRouter1:\nip route 192.96.0.0 255.224.0.0 20.20.20.2\nip route 170.160.0.0 255.240.0.0 10.10.10.1\nRouter2:\nip route 0.0.0.0 0.0.0.0 20.20.20.1',
        'Router0:\nip route 20.20.20.0 255.224.255.252 10.10.10.2\nip route 192.96.0.0 255.224.0.0 10.10.10.2\nRouter1:\nip route 192.96.0.0 255.224.0.0 20.20.20.2\nip route 170.130.0.0 255.240.0.0 10.10.10.1\nRouter2:\nip route 170.130.0.0 255.240.0.0 20.20.20.1\nip route 10.10.10.0 255.255.255.252 20.20.20.1',
        'Router0:\nip route 20.20.20.0 255.255.255.252 10.10.10.2\nip route 192.111.131.0 255.255.255.0 10.10.10.2\nip route 192.121.130.0 255.255.255.0 10.10.10.2\nRouter1:\nip route 192.111.131.0 255.255.255.0 20.20.20.2\nip route 192.121.130.0 255.255.255.0 20.20.20.2\nip route 170.168.120.0 255.255.255.0 10.10.10.1\nip route 170.165.140.0 255.255.255.0 10.10.10.1\nRouter2:\nip route 170.168.120.0 255.255.255.0 20.20.20.1\nip route 170.165.140.0 255.255.255.0 20.20.20.1',
        'Router0:\nip route 20.20.20.0 255.255.255.252 10.10.10.2\nip route 192.110.131.0 255.255.255.0 10.10.10.2\nip route 192.121.131.0 255.255.255.0 10.10.10.2\nRouter1:\nip route 192.110.131.0 255.255.255.0 20.20.20.2\nip route 192.121.131.0 255.255.255.0 20.20.20.2\nip route 170.168.120.0 255.255.255.0 10.10.10.1\nip route 170.165.140.0 255.255.255.0 10.10.10.1\nRouter2:\nip route 170.168.120.0 255.255.255.0 20.20.20.1\nip route 170.165.140.0 255.255.255.0 20.20.20.1',
        'Router0:\nip route 20.20.20.0 255.255.255.252 10.10.10.2\nip route 192.96.0.0 255.224.0.0 10.10.10.2\nRouter1:\nip route 192.96.0.0 255.224.0.0 20.20.20.2\nip route 170.160.0.0 255.240.0.0 10.10.10.1\nRouter2:\nip route 170.160.0.0 255.240.0.0 20.20.20.1\nip route 10.10.10.0 255.255.255.252 20.20.20.1',
        'Router0:\nip route 0.0.0.0 0.0.0.0 10.10.10.2\nRouter1:\nip route 192.95.0.0 255.224.0.0 20.20.20.2\nip route 170.161.0.0 255.240.0.0 10.10.10.1\nRouter2:\nip route 0.0.0.0 0.0.0.0 20.20.20.1'
      ],
      correctIndices: [0, 2, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Care din următoarele moduri de încălcare a securității pentru SW1 forwardează traficul necunoscut?',
      options: [
        'shutdown și restrict',
        'shutdown și protect',
        'Nicio variantă nu e corectă',
        'shutdown',
        'restrict',
        'protect'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice-multi',
      text: 'În topologia dată ca să realizăm conectivitatea între Departament IT și Departament PR trebuie să realizăm 2 rute statice. Care sunt aceste rute? (Alegeți 2 răspunsuri)',
      image: 'subiecte_acad/images/locala_2023_1_910/q21.png',
      options: [
        'R1: ip route 121.112.0.128 255.255.255.240 121.112.0.146',
        'R1: ip route 121.112.0.129 255.255.255.240 121.112.0.146',
        'R2: ip route 121.112.0.128 255.255.255.240 121.112.0.146',
        'R1: ip route 121.112.0.138 255.255.255.240 121.112.0.146',
        'R2: ip route 121.112.0.64 255.255.255.224 121.112.0.145',
        'R2: ip route 121.112.0.64 255.255.255.252 121.112.0.145'
      ],
      correctIndices: [0, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Fie următoarea configurație de Router-on-a-Stick. De ce nu pot comunica cele 2 calculatoare? (Alegeți 2 răspunsuri)',
      image: 'subiecte_acad/images/locala_2023_1_910/q22.png',
      options: [
        'Interfețele de fa0/2 și fa0/3 nu sunt configurate pe mode access',
        'Interfața FastEthernet0/1 nu este pe mode trunk',
        'GigabitEthernet0/0/0 nu e pe mode trunk',
        'Trebuie dat no shutdown pe fiecare subinterfață',
        'Vlan-urile nu sunt create pe switch',
        'Comanda de encapsulation dot1Q conține vlan-ul greșit'
      ],
      correctIndices: [1, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Pentru următoarele ip-uri calculați ruta sumarizată:\n192.121.134.1/24\n192.121.122.1/24\n192.121.125.2/24\n192.121.127.5/24',
      options: [
        '192.121.128.0/18',
        '192.121.122.0/24',
        '192.121.122.1/24',
        '192.121.0.0/16',
        '192.121.0.0/17',
        '192.121.0.0/22'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Care este motivul pentru care legătura dintre SW1-SW3 este shutdown?',
      image: 'subiecte_acad/images/locala_2023_1_910/q24.png',
      options: [
        'Portul FastEthernet0/3 nu are aceeași viteză cu FastEthernet0/1',
        'Portul FastEthernet0/1 e pe mode trunk și portul FastEthernet0/3 e pe mode access',
        'Portul FastEthernet0/3 e pe mode trunk și portul FastEthernet0/1 e pe mode access',
        'Portul FastEthernet0/3 are costul mai mare decât FastEthernet0/1',
        'Portul FastEthernet0/3 are vlan native diferit față de FastEthernet0/1',
        'Portul FastEthernet0/1 are costul mai mare decât FastEthernet0/3'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'În topologia dată avem câte un vlan pentru fiecare departament (inclusiv Servere). Câte spații de adrese avem nevoie ca să realizăm conectivitatea end-to-end ținând cont că PR și Servere fac parte din același vlan?',
      image: 'subiecte_acad/images/locala_2023_1_910/q25.png',
      options: [
        '2',
        '5',
        '4',
        '1',
        '3',
        '6'
      ],
      correctIndex: 2
    }
  ]
});
