ACADOBRE_QUESTIONS.push({
  id: 'udp_header',
    topic: 'Headerul UDP',
    questions: [
      {
        type: 'header-fill',
        text: 'Identifica campurile antetului UDP in ordine:',
         images: [
                   'questions/images/udp_header/udp_blank.png',   
                   'questions/images/udp_header/udp_01.png',      
                   'questions/images/udp_header/udp_02.png',      
                   'questions/images/udp_header/udp_03.png',      
                   'questions/images/udp_header/udp_complete.png' 
                ],
        fields: [
                  { names: ['Source Port','Src Port'],       bits: 16 },
                  { names: ['Destination Port','Dest Port'], bits: 16 },
                  { name: 'Length',                          bits: 16 },
                  { name: 'Checksum',                        bits: 16 },
                ],
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Source Port" din headerul UDP?',
      options: ['Portul de origine al mesajului', 'Portul de control al mesajului', 'Portul de destinatie al mesajului', 'Identificator unic al datagramei', 'Portul pentru retransmisie', 'Portul pentru lungimea erorilor'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Destination Port" din headerul UDP?',
      options: ['Portul de origine al mesajului', 'Portul de control al mesajului', 'Portul de destinatie al mesajului', 'Identificator unic al datagramei', 'Portul pentru retransmisie', 'Portul pentru lungimea erorilor'],
      correctIndex: 2,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Length" din headerul UDP?',
      options: ['Dimensiunea intregii datagrame in octeti', 'Lungimea portului sursa', 'Lungimea datagramei fara header', 'Identificator unic al datagramei', 'Dimensiunea bufferului de receptie', 'Portul pentru lungimea erorilor'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce functie are campul "Checksum" din headerul UDP?',
      options: ['Valoare pentru criptarea datelor', 'Valoare pentru verificarea erorilor', 'Valoare pentru identificarea datagramei', 'Valoare pentru a identifica sursa mesajului', 'Valoare pentru retransmisie'],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Care este rolul principal al funcției de "Relay Agent"?',
      options: [
        'Să stocheze local o copie a bazei de date UDP în cazul în care serverul principal devine indisponibil',
        'Să permită transmiterea cererilor UDP de tip broadcast de la clienți către un server situat într-o subrețea diferită',
        'Să blocheze mesajele UDP venite de pe porturi nesigure pentru a preveni atacurile de tip rogue server',
        'Să aloce automat adrese IP de tip APIPA atunci când serverul DHCP nu răspunde',
        'Să modifice adresa MAC a clientului pentru a ascunde identitatea acestuia față de serverul UDP'
      ],
      correctIndex: 1
      }
    ]
});

