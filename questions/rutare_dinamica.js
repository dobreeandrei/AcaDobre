ACADOBRE_QUESTIONS.push({
  id: 'rutare_dinamica',
  topic: 'Rutare Dinamica',
  questions: [
    {
      type: 'open-ended',
      text: 'Care este distanta administrativa pentru o ruta direct conectata?',
      acceptedAnswers: ['0'],
    },
    {
      type: 'open-ended',
      text: 'Care este distanta administrativa pentru o ruta statica?',
      acceptedAnswers: ['1'],
    },
    {
      type: 'open-ended',
      text: 'Care este distanta administrativa pentru protocolul BGP extern?',
      acceptedAnswers: ['20'],
    },
    {
      type: 'open-ended',
      text: 'Care este distanta administrativa pentru protocolul EIGRP intern?',
      acceptedAnswers: ['90'],
    },
    {
      type: 'open-ended',
      text: 'Care este distanta administrativa pentru protocolul OSPF?',
      acceptedAnswers: ['110'],
    },
    {
      type: 'open-ended',
      text: 'Care este distanta administrativa pentru protocolul IS-IS?',
      acceptedAnswers: ['115'],
    },
    {
      type: 'open-ended',
      text: 'Care este distanta administrativa pentru protocolul RIP?',
      acceptedAnswers: ['120'],
    },
    {
      type: 'open-ended',
      text: 'Care este distanta administrativa pentru protocolul EIGRP Extern?',
      acceptedAnswers: ['170'],
    },
    {
      type: 'open-ended',
      text: 'Care este distanta administrativa pentru protocolul BGP Intern?',
      acceptedAnswers: ['200'],
    },
    {
      type: 'open-ended',
      text: 'Care este distanta administrativa pentru o ruta necunoscuta?',
      acceptedAnswers: ['255'],
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre urmatoarele protocoale de rutare dinamica folosesc algoritm de tip Link-State?',
      options: ['IS-IS', 'BGP', 'OSPF', 'RIP', 'EIGRP'],
      correctIndices: [0, 2], 
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre urmatoarele protocoale de rutare dinamica folosesc algoritm de tip Distance Vector?',
      options: ['IS-IS', 'BGP', 'OSPF', 'RIP', 'EIGRP'],
      correctIndices: [3, 4], 
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care sunt componentele unui protocol de rutare dinamica?',
      options: ['Mesaje de rutare', 'Structuri de date', 'Algoritmi de calculare a rutelor', 'Metrica', 'Distanta administrativa'],
      correctIndices: [0, 1, 2], 
    },
    {
      type: 'multiple-choice',
      text: 'Care protocol de rutare dinamica folosesc algoritm de tip Path Vector?',
      options: ['IS-IS', 'BGP', 'OSPF', 'RIP', 'EIGRP'],
      correctIndex: 1, 
    },
    {
      type: 'multiple-choice',
      text: 'Cum se numesc interfetele pe care ruterele nu mai trimit doar mesaje specifice de rutare?',
      options: ['Interfete pasive', 'Interfete auto', 'Interfete down', 'Interfete trunk', 'Interfete acces'],
      correctIndex: 0, 
    },
    {
      type: 'open-ended',
      text: 'Ce comanda putem folosi pentru a trimite o ruta default intr-un protocol de rutare dinamica?',
      hint: 'Introdu modul de configurare si comanda in full (Exemplu: (config)#hostname <nume>)',
      acceptedAnswers: ['(config-router)#default-information originate'],
    },
    {
      type: 'matching',
      text: 'Asociati fiecare protocol de rutare dimanica cu metrica sa corespunzatoare:',
      subQuestions: [
        { text: 'Care este metrica pentru protocolul OSPF?', answer: 'Cost' },
        { text: 'Care este metrica pentru protocolul IS-IS?', answer: 'Cost' },
        { text: 'Care este metrica pentru protocolul EIGRP?', answer: 'Bandwidth & Delay' },
        { text: 'Care este metrica pentru protocolul RIP?', answer: 'Hop Count' },
      ],
      options: ['Bandwidth', 'Cost', 'Bandwidth & Delay', 'Hop Count'],
      explanation: 'RIP masoara doar prin cate routere traverseaza measjele. OSPF calculeaza 10^8/bandwithul interfetei. IS-IS are un cost de 10 pentru toate interfetele.'
    },
    {
      type: 'matching',
      text: 'Asociati fiecare tip de ruta cu intrarea sa in tabela de rutare:',
      subQuestions: [
        { text: 'Ce cod are in tabela de rutare o ruta direct conectata?', answer: 'C' },
        { text: 'Ce cod are in tabela de rutare o ruta locala?', answer: 'L' },
        { text: 'Ce cod are in tabela de rutare o ruta statica?', answer: 'S' },
        { text: 'Ce cod are in tabela de rutare o ruta default?', answer: '*' },
        { text: 'Ce cod are in tabela de rutare o ruta OSPF?', answer: 'O' },
        { text: 'Ce cod are in tabela de rutare o ruta EIGRP?', answer: 'D' },
        { text: 'Ce cod are in tabela de rutare o ruta RIP?', answer: 'R' },
        { text: 'Ce cod are in tabela de rutare o ruta IS-IS?', answer: 'i' },
        { text: 'Ce cod are in tabela de rutare o ruta BGP?', answer: 'B' },
      ],
      options: ['B', 'C', '*', 'R', 'i', 'S', 'L', 'D', 'O'],
    },
    {
      type: 'label-order',
      text: 'Ordonati de la stanga la dreapta ordinea adreselor dupa care se alege router-idul',
      labels: ['Cel mai mare RID configurat manual', 'Cea mai mare adresa IP de pe o interfata Loopback', 'Cea mai mare adresa IP de pe o interfata fizica'],
      correctOrder: [0, 1, 2],
    },
  ]
});
