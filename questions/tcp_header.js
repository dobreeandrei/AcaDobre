ACADOBRE_QUESTIONS.push({
  id: 'tcp_header',
    topic: 'Headerul TCP',
    questions: [
      {
        type: 'header-fill',
        text: 'Identifica campurile antetului TCP in ordine:',
         images: [
                   'questions/images/tcp_header/tcp_blank.png',
                   'questions/images/tcp_header/tcp_01.png',
                   'questions/images/tcp_header/tcp_02.png',
                   'questions/images/tcp_header/tcp_03.png',
                   'questions/images/tcp_header/tcp_04.png',
                   'questions/images/tcp_header/tcp_05.png',
                   'questions/images/tcp_header/tcp_06.png',
                   'questions/images/tcp_header/tcp_07.png',
                   'questions/images/tcp_header/tcp_08.png',
                   'questions/images/tcp_header/tcp_09.png',
                   'questions/images/tcp_header/tcp_10.png',
                   'questions/images/tcp_header/tcp_complete.png',
                ],

        fields: [
                  { names: ['Source Port','Src port'],              bits: 16 },
                  { names: ['Destination Port','Dest Port'],        bits: 16 },
                  { names: ['Sequence Number', 'Seq Number', 'seq'],       bits: 32 },
                  { names: ['Acknowledgement Number','Ack Number', 'ack'], bits: 32 },
                  { names: ['Header Length','HL'],                  bits: 4  },
                  { names: ['Reserved','Res'],                      bits: 6  },
                  { names: ['Control Bits','Ctrl Bits'],            bits: 6  },
                  { name:  'Window',                                bits: 16 },
                  { name:  'Checksum',                              bits: 16 },
                  { name:  'Urgent',                                bits: 16 },
                  { name:  'Options',                               bits: 32 },
                ],
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Source Port" din headerul TCP?',
      options: ['Portul de origine al mesajului', 'Portul de control al mesajului', 'Portul de destinatie al mesajului', 'Identificator unic al datagramei', 'Portul pentru retransmisie', 'Portul pentru lungimea erorilor'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Destination Port" din headerul TCP?',
      options: ['Portul de origine al mesajului', 'Portul de control al mesajului', 'Portul de destinatie al mesajului', 'Identificator unic al datagramei', 'Portul pentru retransmisie', 'Portul pentru lungimea erorilor'],
      correctIndex: 2,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Sequence Number" din headerul TCP?',
      options: ['Numarul de ordine al segmentului', 'Suma de control pentru integritate', 'Numarul de secventa three-way-handshake', 'Suma de control pentru verificarea erorilor', 'Portul pentru retransmisia mesajelor'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Acknowledgement Number" din headerul TCP?',
      options: ['Numar de confirmare pentru fiabilitate', 'Flag pentru SYN/FIN', 'Lungimea ferestrei de receptie', 'Valoare pentru a identifica sursa mesajului', 'Numarul de ordine al segmentului'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Header Length" din headerul TCP?',
      options: ['Lungimea antetului', 'Lungimea porturilor folosite', 'Lungimea ferestrei de receptie', 'Lungimea intregului segment', 'Lungimea payload-ului fara header'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce functie are campul "Reserved" din headerul TCP?',
      options: ['Camp setat pe 0 pentru update-uri la protocol', 'Flag-uri rezervate', 'Chei pentru criptarea mesjaului', 'Numar pentru QoS', 'Lungimea payload-ului'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Control Bits" din headerul TCP?',
      options: ['Informatii folosite pentru ACK,FIN,SYN,etc.', 'Numar de confirmare pentru ACK', 'Numarul de pasi din three-way-handshake', 'Suma de control pentru integritate', 'Biti pentru fiabilitate'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Window" din headerul TCP?',
      options: ['Numarul de octeti pe care sursa ii trimite fara un ACK', 'Numarul de octeti pe care destinatia ii poate primi fara a primi un ACK', 'Numarul de biti ai porturilor folosite', 'Numarul de flag-uri folosite', 'Numarul sumei de control pentru integritate'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Checksum" din headerul TCP?',
      options: ['Numarul de octeti pe care sursa ii trimite fara un ACK', 'Numarul de octeti pe care destinatia ii poate primi fara a primi un ACK', 'Numarul de biti ai porturilor folosite', 'Numarul de flag-uri folosite', 'Numarul sumei de control pentru integritate'],
      correctIndex: 4,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Urgent" din headerul TCP?',
      options: ['Numarul de octeti pe care sursa ii trimite fara un ACK', 'Numar folosit pentru a deosebi datele cu prioritate de datele normale', 'Numarul de biti ai porturilor folosite', 'Numarul de flag-uri folosite', 'Numarul sumei de control pentru integritate'],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Care este numarul maxim de biti ai campului Options din headerul TCP?',
      options: ['320', '32', '240', '160', '40'],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezintă o confirmare de tip "ACK X" trimisă de către un destnatar?',
      options: [
        'Receptorul a primit segmentul cu numărul de secvență X și confirmă doar acest segment.',
        'Receptorul a primit toate datele până la octetul X-1 și se așteaptă să primească octetul X.',
        'Receptorul semnalează o eroare de sumă de control (checksum) la octetul X.',
        'Receptorul solicită ca fereastra de recepție (window size) să fie setată la valoarea X.',
        'Protocolul TCP forțează închiderea conexiunii începând cu octetul X.'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce indică un mesaj de tip "SACK X-Y" trimis de un host în cadrul unei sesiuni TCP?',
      
      options: [
        'Toate datele între X și Y au fost pierdute și trebuie retransmise imediat.',
        'Transmițătorul trebuie să ajusteze rata de transfer (throughput) în intervalul de biți X-Y.',
        'Receptorul a primit un bloc specific de date cuprins între numerele de secvență X și Y.',
        'Mesajul reprezintă o cerere de stabilire a unei conexiuni noi cu un port în intervalul X-Y.',
        'Confirmă primirea cumulativă a tuturor datelor până la valoarea Y, ignorând orice date primite la X.'
      ],
      correctIndex: 2
    },
      {
      type: 'label-order',
      text: 'PCA vrea sa initieze o conexiune TCP cu PCB.\nPuneti mesajele initierii acestei conexiuni in ordine:',
      labels: ['PCA:SYN', 'PCB:SYN,ACK', 'PCA:ACK'],
      correctOrder: [0, 1, 2],
      },
      {
      type: 'label-order',
      text: 'PCA vrea sa opreasca o conexiune TCP cu PCB.\nPuneti mesajele opririi acestei conexiuni in ordine:',
      labels: ['PCA:FIN', 'PCB:ACK', 'PCB:FIN', 'PCA:ACK'],
      correctOrder: [0, 1, 2, 3],
      },
    ]
});
