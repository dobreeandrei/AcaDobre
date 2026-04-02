ACADOBRE_QUESTIONS.push({
  id: 'dhcpv6',
    topic: 'DHCPv6',
    questions: [
    {
      type: 'open-ended',
      text: 'Care este portul si protocolul de nivel 4 pentru DHCPv6 Client?',
      acceptedAnswers: ['546 UDP', '546 udp'],
      hint: 'Exemplu de raspuns: "12 DBR".',
    },
    {
      type: 'open-ended',
      text: 'Care este portul si protocolul de nivel 4 pentru DHCPv6 Server?',
      acceptedAnswers: ['547 UDP', '547 udp'],
      hint: 'Exemplu de raspuns: "12 DBR".',
    },
    {
      type: 'multiple-choice',
      text: 'Ce configurare permite functionarea DHCPv6 daca serverul se afla in alta retea fata de clienti?',
      options: ['Excluderea default-gatewayului', 'Schimbarea portului DHCPv6', 'DHCPv6 Relay Agent', 'Setarea VLAN-ului nativ', 'DHCPSOLICIT', 'SARR'],
      correctIndex: 2,
    },
    {
      type: 'multiple-choice',
      text: 'Este adevarat ca prin SLAAC dispozitivele obtin doar adresare IPv6?',
      options: ['Adevarat', 'Fals'],
      correctIndex: 0,
    },
    {
      type: 'multiple-choice',
      text: 'Este adevarat ca EUI-64 poate fi folosit si daca nu avem o retea cu prefix /64?',
      options: ['Adevarat', 'Fals'],
      correctIndex: 1,
    },
    {
      type: 'multiple-choice',
      text: 'De unde isi obtin hosturile Default Gateway in DHCPv6?',
      options: ['Router Solicitation', 'Router Advertisement', 'Request', 'Information-Request', 'De la router', 'De la administrator'],
      correctIndex: 1,
    },
    {
      type: 'multiple-choice',
      text: 'Ce combinatie de flaguri este folosita pentru SLAAC?',
      options: ['A=0 O=0 M=1', 'A=1 O=0 M=1', 'A=1 O=0 M=0', 'A=0 O=1 M=0', 'A=1 O=1 M=0', 'A=0 O=1 M=1'],
      correctIndex: 2,
    },
    {
      type: 'multiple-choice',
      text: 'Ce combinatie de flaguri este folosita pentru Stateless DHCPv6?',
      options: ['A=0 O=0 M=1', 'A=1 O=0 M=1', 'A=1 O=0 M=0', 'A=0 O=1 M=0', 'A=1 O=1 M=0', 'A=0 O=1 M=1'],
      correctIndex: 4,
    },
    {
      type: 'multiple-choice',
      text: 'Ce rol are mesajul DHCPv6 Solicit?',
      options: [
        'Clientul localizează serverele DHCPv6 disponibile în rețea',
        'Serverul confirmă alocarea adresei către client',
        'Clientul eliberează adresa IPv6 curentă',
        'Serverul oferă o adresă IP temporară'
      ],
      correctIndex: 0,
    },
    {
      type: 'multiple-choice',
      text: 'Ce face mesajul DHCPv6 Advertise?',
      options: [
        'Clientul solicită reînnoirea adresei IP',
        'Serverul trimite informațiile despre o adresă IP disponibilă',
        'Clientul refuză adresa IP din cauza unui conflict detectat',
        'Serverul confirmă că procesul de alocare s-a încheiat'
      ],
      correctIndex: 1,
    },
    {
      type: 'multiple-choice',
      text: 'Ce face mesajul DHCPv6 Request?',
      options: [
        'Clientul acceptă oferta unui server și solicită utilizarea adresei IP',
        'Serverul trimite prima ofertă de adresă către toți clienții',
        'Clientul notifică serverul că renunță la adresă înainte de expirare',
        'Serverul invalidează configurația curentă a clientului'
      ],
      correctIndex: 0,
    },
    {
      type: 'multiple-choice',
      text: 'Ce face mesajul DHCPv6 Information-Request?',
      options: [
        'Clientul confirmă primirea adresei IP prin multicast',
        'Serverul forțează clientul să ceară o nouă adresă',
        'Clientul solicită doar parametri de configurare, fără o adresă IP',
        'Serverul oferă o nouă adresă IP după un conflict de rețea'
      ],
      correctIndex: 2,
    },
    {
      type: 'multiple-choice',
      text: 'Ce face mesajul DHCPv6 Reply?',
      options: [
        'Serverul retrage o adresă IP deja alocată clientului',
        'Serverul confirmă alocarea adresei sau reînnoirea lease-ului cu succes',
        'Clientul eliberează adresa IP și anunță serverul',
        'Clientul refuză oferta inițială de la server'
      ],
      correctIndex: 1,
    },
    {
      type: 'multiple-choice',
      text: 'Prin ce metodă de transmitere este trimis mesajul DHCPv6 Solicit?',
      options: [
        'Unicast',
        'Broadcast',
        'Multicast',
        'Anycast',
        'Vasicast'
      ],
      correctIndex: 2,
    },
    {
      type: 'multiple-choice',
      text: 'Ce rol are mesajul Router Solicitation?',
      options: [
        'Routerul anunță prezența sa în rețea periodic',
        'Clientul solicită routerele din retea',
        'Clientul verifică dacă adresa sa IPv6 este duplicată',
        'Routerul direcționează traficul către un gateway mai eficient'
      ],
      correctIndex: 1,
    },
    {
      type: 'multiple-choice',
      text: 'Care este adresa de destinație utilizată de un mesaj RS?',
      options: [
        'Adresa link-local a routerului',
        'Adresa GUA a routerului',
        'ff02::1',
        'ff02::2',
        'ff02::2:1',
        '::1'
      ],
      correctIndex: 3,
    },
    {
      type: 'multiple-choice',
      text: 'La cat timp se trimit automat mesajele RA in retea?',
      options: [
        '200 secunde',
        '4 ore',
        'RA se trimite doar la inceputul configurarii',
        '100 secunde',
        '50 secunde',
        '60 secunde'
      ],
      correctIndex: 0,
    },
    {
      type: 'multiple-choice',
      text: 'Care este adresa de destinație pentru un mesaj RA?',
      options: [
        'Adresa link-local a routerului',
        'Adresa GUA a routerului',
        'ff02::1',
        'ff02::2',
        'ff02::2:1',
        '::1'
      ],
      correctIndex: 2,
    },
    {
      type: 'multiple-choice',
      text: 'Care este adresa de destinație pentru un client care cauta serverele DHCPv6 in retea?',
      options: [
        'Adresa link-local a routerului',
        'Adresa GUA a routerului',
        'ff02::1',
        'ff02::2',
        'ff02::1:2',
        '::1'
      ],
      correctIndex: 4,
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre urmatoarele moduri de functionare DHCPv6 pastreaza evidenta de adresele oferite?',
      options: ['SLAAC', 'Stateless', 'Stateful', 'Spoofing', 'EUI-64', 'Managed'],
      correctIndex: 2
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce combinatie de flaguri este folosita pentru Stateful DHCPv6?\nAlegeti 2 variante.',
      options: ['A=0 O=0 M=1', 'A=0 O=1 M=1', 'A=1 O=0 M=1', 'A=1 O=0 M=1', 'A=1 O=0 M=0', 'A=0 O=1 M=0', 'A=1 O=1 M=0'],
      correctIndices: [0, 1]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Cu ce mesaje incepe procesul DHCPv6?\nAlegeti 2 variante.',
      options: ['ARP Router Advertisement', 'ARP Router Solicit', 'ND Router Advertisement', 'ND Router Solicit', 'SLAAC', 'Stateful'],
      correctIndices: [2, 3]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce informatii poate primi un client de la server folosind Stateless?\nAlegeti 4 variante.',
      options: ['Prefix IPv6', 'Adresa unui server DNS', 'MTU', 'Default Gateway', 'Adresa IPv6', 'Adresa MAC', 'Nume de domeniu', 'Pool de IP'],
      correctIndices: [0, 1, 2, 6]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce informatii poate primi un client de la server folosind Stateful?\nAlegeti 4 variante.',
      options: ['Prefix IPv6', 'Adresa unui server DNS', 'MTU', 'Default Gateway', 'Adresa IPv6', 'Adresa MAC', 'Nume de domeniu', 'Pool de IP'],
      correctIndices: [1, 2, 4, 6]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Cum isi poate obtine un host partea de interface ID intr-o retea de lungime /64?\nAlegeti 2 variante.',
      options: ['EUI-64', 'Creata random', 'SOLICIT la router', 'Atribuita de administrator', 'DISCOVER la router', 'Stateless'],
      correctIndices: [0, 1]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre urmatoarele sunt modurile de functionare DHCPv6?\nAlegeti 3 variante.',
      options: ['SLAAC', 'Stateless', 'Stateful', 'Spoofing', 'EUI-64', 'Managed'],
      correctIndices: [0, 1, 2]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre mesajele urmatoare sunt trimise de catre client?\nAlegeti 4 variante.',
      options: ['Solicit', 'Advertise', 'Request', 'Information-Request', 'Reply', 'RS', 'RA'],
      correctIndices: [0, 2, 3, 5]
    },
    {
      type: 'label-order',
      text: 'Ordonati de la stanga la dreapta pasii de functionare DHCPv6 Stateless',
      labels: ['Solicit', 'Advertise', 'Information-request', 'Reply'],
      correctOrder: [0, 1, 2, 3],
    },
    {
      type: 'label-order',
      text: 'Ordonati de la stanga la dreapta pasii de functionare DHCPv6 Stateful',
      labels: ['Solicit', 'Advertise', 'Request', 'Reply'],
      correctOrder: [0, 1, 2, 3],
    },
    ]
});
