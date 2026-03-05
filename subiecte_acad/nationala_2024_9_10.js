window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'nationala_2024_9_10',
    topic: 'Nationala 9-10 2024',
    questions: [
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele metode/configurații sunt recomandate pentru a preveni atacurile de tip STP? (alegeți 2 variante)',
    options: [
      'dezactivare porturi blocare',
      'dezactivare VLAN nativ',
      'activare BPDU Guard',
      'activare PortFast',
      'activare STP Snooping',
      'activare BPDU Snooping'
    ],
    correctIndices: [2, 3]
  },
  {
    type: 'open-ended',
    text: 'Care va fi rezultatul operației EUI-64 pe un host care are adresa MAC 1F:FE:FA:BB:88:CD? Scrieți partea de host a adresei IPv6 respectând notația "ABCD:ABCD:ABCD:ABCD" (fără ghilimele).',
    acceptedAnswers: ['1DFE:FAFF:FEBB:88CD'],
  },
  {
    type: 'multiple-choice',
    text: 'Câte tabele CAM are un 2960 cu 40 porturi FastEthernet și conectat la 2 routere?',
    options: ['32', '0', '40', '1', '2', '64'],
    correctIndex: 3
  },
  {
    type: 'multiple-choice',
    text: 'Care va fi numărul de secunde setat pentru timeout dacă executăm comanda exec-timeout 1 45 pe un router Cisco?',
    options: ['15', '145', '44', '105', '45', '60'],
    correctIndex: 3
  },
  {
    type: 'multiple-choice',
    text: 'Un administrator de rețea configurează port security pe porturile unor switch-uri pentru a spori securitatea în rețea. Acesta dorește să configureze un violation mode eficient, dar nu foarte restrictiv: să se trimită mesaje de syslog, dar să nu se închidă portul în cazul declanșării unui port violation. Care este modul pe care acesta îl va configura pentru port-security?',
    options: ['protect', 'permissive', 'shutdown', 'secure-static', 'restrict', 'inactive'],
    correctIndex: 4
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următoarele antene wireless oferă acoperire de 360 de grade?',
    options: ['Omnidirectional', 'Wireless NIC', 'MIMO', 'Ranger', 'FIMO', 'Directional'],
    correctIndex: 0
  },
  {
    type: 'multiple-choice',
    text: 'Care sunt MAC-urile pe care le vom găsi în tabela CAM a Switch-ului Etaj 3 în urma trimiterii pachetelor ICMP:\nElev 1 -> Elev 4\nElev 4 -> Arena\nSubiecte -> Arena\nVom considera tabelele ARP complet populate și tabelele CAM complet reinițializate (nepopulate/goale) înaintea trimiterii pachetelor.',
    image: 'subiecte_acad/images/nationala_2024_910/q7.png',
    options: [
      'MAC Elev 1\nMAC Elev 4\nMAC Arena\nMAC Subiecte',
      'MAC Elev 1\nMAC Subiecte',
      'MAC Elev 1\nMAC Elev 4\nMAC Router Gig0/1',
      'MAC Elev 4\nMAC Arena',
      'MAC Elev 1\nMAC Elev 4',
      'MAC Elev 1\nMAC Elev 4\nMAC Subiecte'
    ],
    correctIndex: 2
  },
  {
    type: 'multiple-choice',
    text: 'Un atacator reușește să captureze cadre necriptate ale unui protocol dintr-o rețea locală cu informații sensibile despre alte dispozitive din aceeași rețea (hostname, IP, capabilități etc.). Cum se numește tipul de atac realizat?',
    options: ['DHCP Starvation', 'CDP reconnaissance', 'niciunul dintre răspunsuri', 'Smurf attack', 'Man in the Middle', 'NTP attack'],
    correctIndex: 1
  },
  {
    type: 'multiple-choice',
    text: 'De la ce vine prescurtarea MITM, referindu-se la atacurile cibernetice?',
    options: [
      'Malicious Interception of Trusted Messaging',
      'Multiple Infiltrations Through Middleware',
      'Man-in-the-middle',
      'Masterful Intrusion and Targeted Misdirection',
      'Mainframe Internet Traffic Manipulation',
      'Monitored Information Transmission Method'
    ],
    correctIndex: 2
  },
  {
    type: 'multiple-choice',
    text: 'Fie următoarele switch-uri într-o rețea de calculatoare. Care este prioritatea maximă pe care o poate avea Switch-ul A pentru a fi ales Root Bridge?',
    image: 'subiecte_acad/images/nationala_2024_910/q10.png',
    options: ['4096', '512', '1', '32768', 'nu poate fi ales niciodată root bridge', 'orice prioritate, deoarece are cel mai mic MAC', '0'],
    correctIndex: 6
  },
  {
    type: 'open-ended',
    text: 'Studiați cu atenție topologia. Pornind de la spațiul 91.26.180.0/22, subnetați eficient pentru fiecare subrețea din topologie în funcție de necesități. Care va fi adresa de broadcast pentru departamentul Marketing știind că va fi subnetat înaintea VLAN-ului 20? Fiecare interfață de rețea are nevoie de un IP. Scrieți IP-ul cu mască fără spații. Exemplu "192.168.0.2/23" (fără ghilimele).',
    image: 'subiecte_acad/images/nationala_2024_910/q11.png',
    acceptedAnswers: ['91.26.180.11/30'],
  },
  {
    type: 'open-ended',
    text: 'Un administrator de rețea dorește să subneteze în mod egal spațiul 167.213.0.0/18 pentru cât mai multe subrețele a câte 14 host-uri. Care va fi al doilea IP asignabil pentru a treia subrețea? Scrieți IP-ul cu mască fără spații. Exemplu "192.168.0.2/23" (fără ghilimele).',
    acceptedAnswers: ['167.213.0.34/28'],
  },
  {
    type: 'multiple-choice',
    text: 'Două switch-uri sunt conectate printr-o legătură de tip FastEthernet. Unul dintre switch-uri are activat DTP pe port cu configurația "dynamic auto", iar celălalt switch are portul configurat în modul "acces". Cum va fi configurată legătura dintre cele 2?',
    options: [
      'trunk',
      'native',
      'niciunul dintre răspunsuri',
      'access',
      'nu va funcționa, deoarece protocolul DTP așteaptă răspunsuri la pachetele trimise'
    ],
    correctIndex: 3
  },
  {
    type: 'multiple-choice',
    text: 'Cum putem modifica costul unei legături în cadrul STPului?',
    options: [
      'spanning-put cost <cost>',
      'cost spanning <cost>',
      'spanning cost <cost>',
      'spanning-set cost <cost>',
      'cost spanning-set <cost>',
      'spanning-tree cost <cost>'
    ],
    correctIndex: 5
  },
  {
    type: 'multiple-choice',
    text: 'Un utilizator se conectează pe email pentru a citi ultimele mesaje primite de la colegii lui. Mail-urile se încarcă în clientul lui de mail, dar apoi acestea sunt șterse de pe server-ul de mailing. Ce protocol de mailing este folosit?',
    options: ['TFTP', 'HTTPS', 'IMAP', 'POST', 'SMTP', 'POP'],
    correctIndex: 5
  },
  {
    type: 'multiple-choice',
    text: 'În topologia de mai jos, cei 3 senzori nu rulează o stivă TCP/IP completă. Astfel ei se bazează pe funcționarea Proxy ARP. Cum va arăta tabela ARP a senzorului de temperatură în urma trimiterii pachetelor:\nTemperature Sensor -> Admin\nHumidity Sensor -> Temperature Sensor\nTemperature Sensor -> Web-App',
    image: 'subiecte_acad/images/nationala_2024_910/q16.png',
    options: [
      'IP-Admin -> MAC-Device\nIP-Humidity -> MAC-Device\nIP-Web-App -> MAC-Device',
      'nu va putea comunica în afara rețelei',
      'IP-Admin -> MAC-Device\nIP-Humidity -> MAC-Humidity\nIP-Web-App -> MAC-Device',
      'IP-Humidity -> MAC-Humidity\nIP-Device -> MAC-Device',
      'IP-Humidity -> MAC-Humidity\nIP-Device -> MAC-Device',
      'IP-Admin -> MAC-Admin\nIP-Humidity -> MAC-Humidity\nIP-Web-App -> MAC-Web-App'
    ],
    correctIndex: 2
  },
  {
    type: 'open-ended',
    text: 'Câte subrețele a câte 31 de host-uri pot fi realizate din 102.19.20.0/23? (scrieți doar numărul din cifre, nu litere)',
    acceptedAnswers: ['8'],
  },
  {
    type: 'multiple-choice',
    text: 'La câte secunde sunt trimise pachetele PAgP în contextul Etherchannel?',
    options: ['niciunul din răspunsuri', '20', '10', '60', '15', '120'],
    correctIndex: 0
  },
  {
    type: 'multiple-choice-multi',
    text: 'Atunci când un server nu se află în aceeași rețea cu un host, dar acesta are nevoie de serviciile server-ului, router-ul poate fi configurat ca "relay". Care dintre următoarele servicii poate fi configurat cu comanda ip helper-address pe un router relay?',
    options: ['FTP', 'SSH', 'DNS', 'DHCP', 'TFTP', 'telnet'],
    correctIndices: [2, 3, 4]
  },
  {
    type: 'multiple-choice',
    text: 'Studiați cu atenție topologia și output-urile comenzilor date. Ce tag .dot1q va avea un cadru între switch-ul Etaj2 și Etaj1 care circulă de la Elev-RL la Elev-IS? Router AcadNet are configurație corectă de Router-on-a-Stick.',
    image: 'subiecte_acad/images/nationala_2024_910/q20.png',
    hint: 'Apasati click-dreapta si "open image in new tab" pentru a vedea mai bine.',
    options: [
      'nu va funcționa, deoarece vom avea eroarea "native VLAN mismatch"',
      'niciun tag',
      '1',
      'niciunul dintre răspunsuri',
      '10',
      '20'
    ],
    correctIndex: 1
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele caracteristici trebuie să fie identice pentru ca 2 switch-uri să formeze un Etherchannel? (alegeți 4 variante)',
    options: ['duplex', 'VLAN', 'viteză', 'banner', 'line console', 'protocolul de trunking'],
    correctIndices: [0, 1, 2, 5]
  },
  {
    type: 'open-ended',
    text: 'Care este comanda prin care putem dezactiva căutarea numelui de domeniu atunci când dăm o comandă greșită în CLI-ul unui router Cisco?',
    acceptedAnswers: ['no ip domain-lookup'],
  },
  {
    type: 'multiple-choice',
    text: 'Ce este "DNS Amplification Attack"?',
    options: [
      'Un atac în care un atacator preia controlul asupra unui server DNS și modifică datele de traducere a numelor de domeniu',
      'Un atac în care un atacator trimite cereri DNS false cu o adresă IP sursă falsă, astfel încât serverele DNS să răspundă la cereri cu o cantitate mult mai mare de date decât cererea inițială',
      'Un atac în care un atacator obține acces la datele de pe un server DNS vulnerabil',
      'Un atac în care un atacator falsifică adrese IP pentru a redirecționa traficul către un server DNS specific',
      'Un atac în care atacatorul se dă drept server DNS într-o rețea',
      'niciunul din răspunsuri'
    ],
    correctIndex: 1
  },
  {
    type: 'multiple-choice',
    text: 'Știind că BID-E < A < B < C < D < F < G < H < I. Care vor fi porturile blocate în urma rulării STP? Toate legăturile au același cost.',
    image: 'subiecte_acad/images/nationala_2024_910/q24.png',
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
      type: 'matching',
      text: 'Asociati starea potrivita pentru HSRP in functie de descrierea acesteia:',
      subQuestions: [
        { text: 'Router-ul nu a decis încă adresa IP virtuală și nu a primit un mesaj de hello de la un router active.', answer: 'Learn' },
        { text: 'Router-ul este posibil să devină următorul router active și trimite mesaje hello periodic.', answer: 'Standby' },
        { text: 'Router-ul cunoaște adresa IP virtuală, dar router-ul nu este nici cel active nici cel standby. Așteaptă mesaje de hello de la acele routere.', answer: 'Listen' },
        { text: 'În această stare se intră printr-o schimbare de configurație sau când o interfață este pornită pentru prima dată.', answer: 'Initial' },
        { text: 'Router-ul trimite mesaje hello periodic și participă activ în alegerea router-ului active și/sau standby.', answer: 'Speak' },
      ],
      options: ['Learn', 'Standby', 'Listen', 'Initial', 'Speak'],
    },
  {
    type: 'multiple-choice',
    text: 'Cu ce distanță administrativă va fi învățată rețeaua Departament Admin pe Router 1?',
    image: 'subiecte_acad/images/nationala_2024_910/q26.png',
    options: ['110', '0', '120', 'nu va avea distanță administrativă, deoarece este direct conectată', '1', 'niciunul din răspunsuri'],
    correctIndex: 1
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre următoarele nu este o funcție a mesajelor SMB (Server Message Block)?',
    options: [
      'Autentificarea sesiunilor',
      'Controlul accesului la fișiere și imprimante',
      'Permite unei aplicații să trimită sau să primească mesaje către sau de la un alt dispozitiv',
      'Implementarea rezoluției de nume folosind un protocol non-TCP/IP',
      'Inițierea și terminarea sesiunilor'
    ],
    correctIndex: 3
  },
  {
    type: 'multiple-choice',
    text: 'Cum se generează o pereche de chei pentru SSH?',
    options: [
      'Folosind comanda "ssh-genkey" în CLI',
      'Apelând un server specializat care generează chei pentru utilizatori',
      'Folosind comanda "ssh-keygen" în CLI',
      'Prin deschiderea unui fișier text și scrierea manuală a cheilor',
      'Folosind comanda "ssh-key" în CLI',
      'Prin accesarea unei opțiuni în meniul de setări al browser-ului web'
    ],
    correctIndex: 2
  },
  {
    type: 'multiple-choice',
    text: 'Câte tabele ARP va avea un Router 4331 care este conectat la o rețea publică și 2 rețele private, având în total 4 intefețe GigabitEthernet?',
    options: ['1', 'routerele nu au tabelă ARP', '2', '4', '0', '3'],
    correctIndex: 0
  },
  {
    type: 'multiple-choice',
    text: 'Un host care dorește să ruleze IPv6 are nevoie să-și configureze adresa. Acesta trimite un Router Solicitation pentru a primi un Router Advertisment. Către ce adresă se trimite Router Advertisment-ul?',
    options: ['FF02::1', 'FF80::1', 'FE80::2', 'FE80::1', 'FF02::2', '2001::1'],
    correctIndex: 0
  }
]
});