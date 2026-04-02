ACADOBRE_QUESTIONS.push({
  id: 'layer2security',
    topic: 'Securitate Layer 2',
    questions: [
      {
      type: 'open-ended',
      text: 'Care este numarul implicit de adrese MAC pe care le poate invata un port cu Port-security activat?',
      acceptedAnswers: ['1'],
      },
      {
      type: 'open-ended',
      text: 'Pentru cat timp sunt mentinute intrarile in tabela CAM? (secunde)',
      acceptedAnswers: ['300'],
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta activarea optiunii "sticky" in cadrul Port-security?',
      options: ['Adresele MAC invatate dinamic vor fi introduse in running-config',
                'Adresele MAC invatate dinamic vor fi introduse in startup-config',
                'Adresele MAC invatate static vor fi introduse in startup-config',
                'Se va modifica aging time-ul adreselor MAC de la 300 la 400 de secunde',
                'Se va sterge continutul tabelei CAM la fiecare minut'
               ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca pentru a putea folosi Port-security trebuie mai intai sa il activam global?',
      options: ['Adevarat', 'Fals'],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca Port-security nu functioneaza daca DTP este activat?',
      options: ['Adevarat', 'Fals'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca nu putem adauga manual adrese MAC in tabela CAM?',
      options: ['Adevarat', 'Fals'],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca o interfata oprita dupa primirea unui MAC neautorizat pe modul de violation Shutdown isi va reveni singura dupa un timp?',
      options: ['Adevarat', 'Fals'],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Care este modul de violation default pentru Port-security?',
      options: ['Shutdown', 'Restrict', 'Protect', 'Secure', 'Implicit', 'Default'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Dupa ce parametru verifica Port-security?',
      options: ['Protocol',
                'Destination IP',
                'Source Port',
                'Source MAC',
                'Destination MAC',
                'Source IP'],
      correctIndex: 3,
      },
      {
      type: 'multiple-choice',
      text: 'Ce actiuni vor avea loc daca modul Protect detecteaza un MAC neautorizat?',
      options: ['Se va inchide portul', 'Se va trimite mesaj Syslog', 'Va creste numarul de incalcari', 'Se va bloca traficul neautorizat in continuare', 'Va permite traficul in continuare', 'Nu se va intampla nimic'],
      correctIndex: 3, 
      },
      {
      type: 'multiple-choice-multi',
      text: 'Ce actiuni vor avea loc daca modul Shutdown detecteaza un MAC neautorizat?\nAlegeti 4 variante.',
      options: ['Se va inchide portul', 'Se va trimite mesaj Syslog', 'Va creste numarul de incalcari', 'Se va bloca traficul neautorizat in continuare', 'Va permite traficul in continuare', 'Nu se va intampla nimic'],
      correctIndices: [0, 1, 2, 3], 
      },
      {
      type: 'multiple-choice-multi',
      text: 'Ce actiuni vor avea loc daca modul Restrict detecteaza un MAC neautorizat?\nAlegeti 3 variante.',
      options: ['Se va inchide portul', 'Se va trimite mesaj Syslog', 'Va creste numarul de incalcari', 'Se va bloca traficul neautorizat in continuare', 'Va permite traficul in continuare', 'Nu se va intampla nimic'],
      correctIndices: [1, 2, 3], 
      },
      {
      type: 'multiple-choice-multi',
      text: 'Care sunt modurile de violation pentru Port-security?\nAlegeti 3 variante.',
      options: ['Shutdown', 'Restrict', 'Protect', 'Secure', 'Implicit', 'Default'],
      correctIndices: [0, 1, 2], 
      },
      {
      type: 'multiple-choice-multi',
      text: 'Ce tipuri de atac poate preveni Port-security?\nAlegeti 2 variante.',
      options: ['MAC Flooding', 'MAC Spoofing', 'IP Spoofing', 'DHCP Starvation', 'Phishing', 'ARP Poisoning'],
      correctIndices: [0, 1], 
      },
      // dhcp snooping
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca pentru a putea folosi DHCP Snooping trebuie mai intai sa il activam global?',
      options: ['Adevarat', 'Fals'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'In ce mod DHCP Snooping sunt de obicei puse porturile switchurilor care duc catre hosturi?',
      options: ['Untrusted', 'Trusted', 'Shutdown', 'Restrict', 'Err-disable'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'In ce mod DHCP Snooping sunt de obicei puse porturile switchurilor care duc catre gateway?',
      options: ['Untrusted', 'Trusted', 'Shutdown', 'Restrict', 'Err-disable'],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'In ce mod DHCP Snooping sunt puse toate porturile implicit?',
      options: ['Untrusted', 'Trusted', 'Shutdown', 'Restrict', 'Err-disable'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Dupa ce parametru verifica DHCP Snooping mesajele Discover/Request pe un port Untrusted?',
      options: ['Existenta unei intrari in DHCP Snooping Binding Table',
                'Destination IP/DHCP CHADDR',
                'Source Port/ Source MAC',
                'Source MAC/DHCP CHADDR',
                'Destination MAC/DHCP CHADDR',
                'Source IP/Destination IP'],
      correctIndex: 3,
      },
      {
      type: 'multiple-choice',
      text: 'Dupa ce parametru verifica DHCP Snooping mesajul Release pe un port Untrusted?',
      options: ['Existenta unei intrari in DHCP Snooping Binding Table',
                'Destination IP/DHCP CHADDR',
                'Source Port/ Source MAC',
                'Source MAC/DHCP CHADDR',
                'Destination MAC/DHCP CHADDR',
                'Source IP/Destination IP'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'In ce structura de date se trec lease-urile DHCP realizate cu succes pe un switch cu DHCP Snooping activat?',
      options: ['Snooping Binding Table', 'CAM Table', 'ARP Table', 'DHCP Binding Table', 'Neighbor Table'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice-multi',
      text: 'Ce tipuri de atac poate preveni DHCP Snooping?\nAlegeti 2 variante.',
      options: ['MAC Flooding', 'DHCP Poisoning', 'IP Spoofing', 'DHCP Starvation', 'DHCP Phishing', 'ARP Poisoning'],
      correctIndices: [1, 3], 
      },
      {
      type: 'multiple-choice-multi',
      text: 'Care dintre mesajele DHCPv4 sunt blocate implicit de porturile cu dhcp snooping activat?\nAlegeti 3 variante.',
      options: ['Discover', 'Offer', 'Request', 'Acknowledgement', 'NAK', 'Release', 'Decline', 'Accept'],
      correctIndices: [1, 3, 4]
      },
      {
      type: 'multiple-choice-multi',
      text: 'Care dintre mesajele DHCPv4 sunt verificate de porturile cu dhcp snooping activat?\nAlegeti 4 variante.',
      options: ['Discover', 'Offer', 'Request', 'Acknowledgement', 'NAK', 'Release', 'Decline', 'Accept'],
      correctIndices: [0, 2, 5, 6]
      },
      {
      type: 'multiple-choice',
      text: 'Ce acțiune realizează implicit un switch cu DHCP Snooping activat asupra mesajelor DHCP venite de la clienți, conform comportamentului standard?',
      options: [
        'Adaugă Information 82 doar dacă există un Relay Agent configurat în rețea',
        'Ignoră câmpul Information 82 pentru a asigura compatibilitatea de layer 2',
        'Adaugă Information 82 în mesajele DHCP ale clienților, chiar și în absența unui Relay Agent',
        'Criptează opțiunea 82 pentru a preveni atacurile de tip Man-in-the-Middle',
        'Elimină orice tag de Option 82 înainte de a trimite pachetul către server'
      ],
      correctIndex: 2
      },
      {
      type: 'multiple-choice',
      text: 'Care este motivul principal pentru care un switch cu DHCP Snooping activat va arunca un mesaj DHCP care a trecut deja print-un switch cu Snooping activat?',
      options: [
        'Mesajul nu conține nicio informație despre opțiunea 82',
        'Mesajul are deja opțiunea 82 activată',
        'Serverul DHCP nu a răspuns în intervalul de timp setat (timeout)',
        'Portul pe care a sosit mesajul este configurat explicit ca fiind trusted',
        'Pachetul are bitul de broadcast setat pe 0'
      ],
      correctIndex: 1
      },
      // dai
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca pentru a putea folosi Dynamic ARP Inspection trebuie mai intai sa il activam global?',
      options: ['Adevarat', 'Fals'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'In ce mod Dynamic ARP Inspection sunt puse toate porturile implicit?',
      options: ['Untrusted', 'Trusted', 'Shutdown', 'Restrict', 'Err-disable'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'In ce mod Dynamic ARP Inspection sunt de obicei puse porturile switchurilor care duc catre hosturi?',
      options: ['Untrusted', 'Trusted', 'Shutdown', 'Restrict', 'Err-disable'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'In ce mod Dynamic ARP Inspection sunt de obicei puse porturile switchurilor care duc catre gateway?',
      options: ['Untrusted', 'Trusted', 'Shutdown', 'Restrict', 'Err-disable'],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Dupa ce parametru se verifica mesajele Dynamic ARP Inspection pe un port Untrusted?',
      options: ['Existenta unei intrari in DHCP Snooping Binding Table',
                'Existenta unei intrari in tabela MAC',
                'Source Port/ Source MAC',
                'Existenta unei intrari in tabela ARP',
                'Destination MAC/DHCP CHADDR',
                'Source IP/Destination IP'],
      correctIndex: 0,
      },
    ]
});
