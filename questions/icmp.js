ACADOBRE_QUESTIONS.push({
  id: 'icmp',
    topic: 'Erori ICMP',
    questions: [
      {
        type: 'open-ended',
        text: 'Care este codul pentru mesajele de eroare ICMPv4 "Net Unreachable"?',
        acceptedAnswers: ['0'],
      },
      {
        type: 'open-ended',
        text: 'Care este codul pentru mesajele de eroare ICMPv4 "Host Unreachable"?',
        acceptedAnswers: ['1'],
      },
      {
        type: 'open-ended',
        text: 'Care este codul pentru mesajele de eroare ICMPv4 "Protocol Unreachable"?',
        acceptedAnswers: ['2'],
      },
      {
        type: 'open-ended',
        text: 'Care este codul pentru mesajele de eroare ICMPv4 "Port Unreachable"?',
        acceptedAnswers: ['3'],
      },
      {
        type: 'open-ended',
        text: 'Care este codul pentru mesajele de eroare ICMPv6 "No route for destination"?',
        acceptedAnswers: ['0'],
      },
      {
        type: 'open-ended',
        text: 'Care este codul pentru mesajele de eroare ICMPv6 "Strictly Prohibited"?',
        acceptedAnswers: ['1'],
      },
      {
        type: 'open-ended',
        text: 'Care este codul pentru mesajele de eroare ICMPv6 "Beyond the scope of this Address"?',
        acceptedAnswers: ['2'],
      },
      {
        type: 'open-ended',
        text: 'Care este codul pentru mesajele de eroare ICMPv6 "Address Unreachable"?',
        acceptedAnswers: ['3'],
      },
      {
        type: 'open-ended',
        text: 'Care este codul pentru mesajele de eroare ICMPv6 "Port Unreachable"?',
        acceptedAnswers: ['4'],
      },
      {
        type: 'open-ended',
        text: 'La ce valoare din campul TTL va fi aruncat un mesaj ping?',
        acceptedAnswers: ['0'],
      },
      {
        type: 'open-ended',
        text: 'Care este codul pentru ICMP in campul Protocol din headerul IPv4?',
        acceptedAnswers: ['1'],
      },
      {
        type: 'multiple-choice',
        text: 'Ce output are un messaj ping trimis cu succes?',
        options: [
          '!',
          'U',
          '*',
          '.'
        ],
        correctIndex: 0,
      },
      {
        type: 'multiple-choice',
        text: 'Ce output are un messaj ping al carui timp a expirat?',
        options: [
          '*',
          'U',
          '.',
          '!'
        ],
        correctIndex: 2,
      },
      {
        type: 'multiple-choice',
        text: 'Ce output are un messaj ping care nu are o ruta catre destinatie?',
        options: [
          '.',
          '!',
          '*',
          'U'
        ],
        correctIndex: 3,
      },
      {
        type: 'multiple-choice',
        text: 'Ce output are un messaj traceroute care nu functioneaza?',
        options: [
          'U',
          '*',
          '!',
          '.'
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple-choice',
        text: 'Care din urmatoarele este un utilitar care foloseste ICMP?',
        options: [
          'nslookup',
          'traceroute',
          'ssh login -l',
          'show running-config'
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple-choice',
        text: 'Care dintre urmatoarele reprezinta un mesaj ICMP trimis de un calculator pe care este executata comanda "ping"?',
        options: [
          'Echo Reply',
          'Traceroute',
          'No route to destination (0)',
          'Echo Request'
        ],
        correctIndex: 3,
      },
      {
      type: 'multiple-choice-multi',
      text: 'Care dintre urmatoarele reprezinta mesajele folosite de ICMP?\nAlegeti 2 variante.',
      options: ['Echo Reply', 'Traceroute', 'Ping', 'Echo Request', 'Established'],
      correctIndices: [0, 3],
    },
    ]
});
