ACADOBRE_QUESTIONS.push({
  id: 'ipv6_header',
    topic: 'Headerul IPv6',
    questions: [
      {
        type: 'header-fill',
        text: 'Identifica campurile antetului IPv6 in ordine:',
         images: [
                   'questions/images/ipv6_header/ipv6_blank.png',
                   'questions/images/ipv6_header/ipv6_01.png',
                   'questions/images/ipv6_header/ipv6_02.png',
                   'questions/images/ipv6_header/ipv6_03.png',
                   'questions/images/ipv6_header/ipv6_04.png',
                   'questions/images/ipv6_header/ipv6_05.png',
                   'questions/images/ipv6_header/ipv6_06.png',
                   'questions/images/ipv6_header/ipv6_07.png',
                   'questions/images/ipv6_header/ipv6_complete.png',
                ],

        fields: [
                  { names: ['Version','Ver'],                bits: 4   },
                  { names: ['Traffic Class','TC'],           bits: 8   },
                  { names: ['Flow Label','FL'],              bits: 20  },
                  { names: ['Payload Length', 'Pay Len'],    bits: 16  },
                  { names: ['Next Header','Protocol', 'NH'], bits: 8   },
                  { names: ['Hop Limit','HL'],               bits: 8   },
                  { names: ['Source IP','Src IP'],           bits: 128 },
                  { names: ['Destination IP','Dest IP'],     bits: 128 },
                ],
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Version" din headerul IPv6?',
      options: ['Indica versiunea 6 a protocolului IP', 'Indica clasa de trafic QoS', 'Lungimea payload-ului in octeti', 'Adresa sursa', 'Adresa destinatie'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Traffic Class" din headerul IPv6?',
      options: ['Indica versiunea IPv6', 'Indica clasa de trafic QoS', 'Eticheta de flux pentru sesiuni TCP', 'Limita hop', 'Adresa destinatie'],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Flow Label" din headerul IPv6?',
      options: ['Limita hop pentru pachete', 'Eticheta de flux pentru sesiuni TCP', 'Clasa de trafic QoS', 'Adresa sursa', 'Protocolul nivel superior'],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Payload Length" din headerul IPv6?',
      options: ['Indica versiunea IPv6', 'Indica lungimea in octeti a payload-ului de la nivelul superior', 'Indica urmatorul protocol', 'Indica adresa destinatie', 'Eticheta de flux pentru sesiuni TCP'],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Next Header" din headerul IPv6?',
      options: ['Indica protocolul de nivel superior', 'Indica adresa sursa', 'Indica limita hop', 'Indica versiunea IPv6', 'Indica clasa de trafic QoS'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce functie are campul "Hop Limit" din headerul IPv6?',
      options: ['Previne bucla infinita a pachetelor', 'Indica protocolul de nivel superior', 'Indica lungimea payload-ului', 'Indica adresa sursa', 'Indica clasa de trafic QoS'],
      correctIndex: 0,
      },
      { 
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Source Address" din headerul IPv6?',
      options: ['Adresa sursa IPv6 a mesajului', 'Adresa destinatie IPv6 a mesajului', 'Indica lungimea payload-ului', 'Eticheta de flux pentru sesiuni TCP', 'Limita hop'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Destination Address" din headerul IPv6?',
      options: ['Adresa destinatie IPv6 a mesajului', 'Adresa sursa IPv6 a mesajului', 'Indica urmatorul protocol', 'Indica limita hop', 'Clasa de trafic QoS'],
      correctIndex: 0,
      },
    ]
});