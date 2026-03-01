ACADOBRE_QUESTIONS.push({
  id: 'ethernet_frame',
    topic: 'Header+Trailer Ethernet',
    questions: [
      {
        type: 'header-fill',
        text: 'Identifica campurile antetului si trailerului Ethernet in ordine:',
         images: [
                   'questions/images/ethernet_frame/ethernet_blank.png',
                   'questions/images/ethernet_frame/ethernet_01.png',
                   'questions/images/ethernet_frame/ethernet_02.png',
                   'questions/images/ethernet_frame/ethernet_03.png',
                   'questions/images/ethernet_frame/ethernet_04.png',
                   'questions/images/ethernet_frame/ethernet_05.png',
                   'questions/images/ethernet_frame/ethernet_complete.png',
                ],

        fields: [
                  { name: 'Preamble',                                                        bits: 56 },
                  { names: ['Start Frame Delimiter','SFD'],                                  bits: 8  },
                  { names: ['Destination MAC','Dest MAC'],                                   bits: 32 },
                  { names: ['Source MAC', 'Src MAC'],                                        bits: 32 },
                  { names: ['EtherType','Length', 'Type', 'Len'],                            bits: 16 },
                  { names: ['Frame Check Sequence','CRC', 'Cyclic Redundancy Check', 'FCS'], bits: 32 },
                ],
      },
      {
      type: 'multiple-choice',
      text: 'Ce functie are campul "Preamble" dintr-un frame Ethernet?',
      options: ['Sincronizarea receptiei cadrelor', 'Indica lungimea payload-ului', 'Verificarea erorilor', 'Identifica adresa sursa', 'Indica tipul protocolului'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Care este rolul campului "SFD" dintr-un frame Ethernet?',
      options: ['Marcheaza sfarsitul preambulului', 'Indica adresa destinatie', 'Verifica integritatea datelor', 'Indica tipul protocolului', 'Sincronizeaza receptia cadrelor'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce indica campul "Destination Address" intr-un frame Ethernet?',
      options: ['Adresa MAC a destinatiei', 'Adresa MAC a sursei mesajului', 'Tipul protocolului', 'Lungimea payload-ului', 'CRC-ul datelor'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce rol are campul "Source Address" intr-un frame Ethernet?',
      options: ['Adresa MAC a sursei', 'Adresa MAC a destinatarului', 'Tipul protocolului', 'Lungimea datelor', 'Sincronizarea receptiei'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce se poate insera optional intre campul de adrese si campul Type/Length?',
      options: ['Eticheta VLAN 802.1Q', 'CRC-ul cadruului', 'Preambulul', 'SFD-ul', 'Padding-ul datelor'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Care este scopul campului "Type/Length" dintr-un frame Ethernet?',
      options: ['Indica protocolul sau lungimea din payload', 'Indica adresa sursa', 'Verifica integritatea datelor', 'Sincronizeaza receptorul', 'Marcheaza sfarsitul preambulului'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Data" intr-un frame Ethernet?',
      options: ['Payload-ul de nivel superior', 'Eticheta VLAN', 'Preambulul', 'Adresa MAC a destinatarului', 'CRC-ul cadruului'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce rol are campul "Frame Check Sequence (FCS)" intr-un frame Ethernet?',
      options: ['Verifica erorile din cadru', 'Indica adresa destinatie', 'Marcheaza sfarsitul preambulului', 'Indica lungimea payload-ului', 'Sincronizeaza receptia cadrelor'],
      correctIndex: 0,
      },
    ]
});