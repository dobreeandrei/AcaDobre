ACADOBRE_QUESTIONS.push({
  id: 'acl',
    topic: 'ACL-uri',
    questions: [
      {
      type: 'open-ended',
      text: 'Care sunt range-urile pentru ACL-uri standard?',
      hint: 'Scrieti in formatul "a-b c-d". Nu conteaza ordinea.',
      acceptedAnswers: ['1-99 1300-1999', '1300-1999 1-99'],
      },
      {
      type: 'open-ended',
      text: 'Care sunt range-urile pentru ACL-uri extended?',
      hint: 'Scrieti in formatul "a-b c-d". Nu conteaza ordinea.',
      acceptedAnswers: ['100-199 2000-2699', '2000-2699 100-199'],
      },
      {
      type: 'open-ended',
      text: 'Cate ACL-uri putem avea maxim pe o interfata daca routerul foloseste atat IPv4 cat si IPv6?',
      acceptedAnswers: ['4'],
      },
      {
      type: 'open-ended',
      text: 'Care este primul entry number pe care il are intrarea unui ACL?',
      acceptedAnswers: ['10'],
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca putem modifica doar anumite intrari pe un Numbered ACL fara sa stergem intreg ACL-ul?',
      options: ['Fals',
                'Adevarat',
               ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'La ce nivel OSI opereaza ACL-urile?',
      options: ['Aplicatie', 'Fizic', 'Legatura de Date', 'Prezentare', 'Transport', 'Retea', 'Sesiune'],
      correctIndex: 5,
    },
      {
      type: 'multiple-choice',
      text: 'Ce wildcard este inlocuit cuvantul "host"?',
      options: ['0.0.0.0',
                '255.255.255.255',
                '0.0.0.255',
                '1.1.1.1',
                '255.255.0.0',
                '0.0.0.1'
               ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce retea este inlocuita de cuvantul "any"?',
      options: ['0.0.0.0 255.255.255.255',
                '255.255.255.255 0.0.0.0',
                '0.0.0.0 0.0.0.0',
                '255.255.255.255 0.0.0.0',
                '255.255.0.0 0.0.255.255',
                '255.255.255.255 255.255.255.255'
               ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Pe ce interfata a unui router va fi pus un ACL care afecteaza traficul SSH/Telnet catre acel router?',
      options: ['VTY',
                'Console',
                'Cea catre reteaua LAN',
                'Cea catre reteaua WAN',
                'Aux',
               ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Cum este procesat un ACL?',
      options: ['De sus in jos',
                'De jos in sus',
                'De la stanga la dreapta',
                'De la dreapta la stanga',
                'Incepand cu primul match',
                'Plecand de la intrarea pe adresa cea mai mica'
               ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Care ACL filtreaza doar pe baza IP-ului sursa?',
      options: ['Standard',
                'Extended',
                'Implicit',
                'Explicit',
                'Named',
                'Inbound'
               ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce se intampla cand un ACL face match pe o intrare?',
      options: ['Va ignora toate intrarile ulterioare',
                'Va continua sa verifice toate intrarile',
                'Va fi blocat de implicit deny',
                'Va verifica toate intrarile cu aceeasi adresa',
                'Va permite tot traficul cu exceptia adresei cu care face match'
               ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce se intampla cu un mesaj care nu face match pe nicio intrare dintr-un ACL?',
      options: ['Va circula fara probleme in retea',
                'Va fi verificat cu toate ACL-urile de pe interfata pana cand va face match',
                'Va fi blocat de implicit deny',
                'Va ramane intr-un buffer pe router',
                'Va modifica ACL-ul astfel incat sa faca match pe o intrare'
               ],
      correctIndex: 2,
      },
      {
      type: 'multiple-choice',
      text: 'Cum trebuie aplicate ACL-urile standard?',
      options: ['Cat mai aproape de sursa',
                'Cat mai aproape de destinatie',
                'Cat mai aproape de router',
                'Cat mai departe de un firewall',
                'Cat mai departe de end-device-uri'
               ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Cum trebuie aplicate ACL-urile extended?',
      options: ['Cat mai aproape de sursa',
                'Cat mai aproape de destinatie',
                'Cat mai aproape de router',
                'Cat mai departe de un firewall',
                'Cat mai departe de end-device-uri'
               ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice-multi',
      text: 'Cum pot fi aplicate ACL-urile pe o interfata?\nAlegeti 2 variante.',
      options: ['Inbound',
                'Outbound',
                'Inside',
                'Outside',
                'Implicit',
                'Explicit'],
      correctIndices: [0, 1],
      },
      {
      type: 'multiple-choice-multi',
      text: 'Care pot reprezenta parametrii pentru ACL-uri extended?\nAlegeti 3 variante.',
      options: ['Protocol',
                'Source/Destination IP',
                'Source/Destination Port',
                'Source/Destination MAC',
                'Numar de hosturi',
                'Functionalitate Server/Client'],
      correctIndices: [0, 1, 2],
      },
      {
      type: 'multiple-choice-multi',
      text: 'Care dintre urmatoarele reprezinta tipuri de ACL deosebite prin modul de filtrare?\nAlegeti 2 variante.',
      options: ['Standard',
                'Extended',
                'Named',
                'Numbered',
                'Implicit',
                'Explicit'],
      correctIndices: [0, 1],
      },
      {
      type: 'matching',
      text: 'Asociati operatorii pentru porturi cu formatul lor in CLI:',
      subQuestions: [
        { text: 'Equal to', answer: 'eq' },
        { text: 'Not equal to', answer: 'neq' },
        { text: 'Greater than', answer: 'gt' },
        { text: 'Less than', answer: 'lt' },
        { text: 'Port range', answer: 'range' },
      ],
      options: ['lt', 'eq', 'neq', 'gt', 'range'],
      },
      {
      type: 'open-ended',
      text: 'Scrieti definitia completa, fara prescurtari, din modul de configurare globala, a unei intrari a ACL-ului 167 care sa blocheze traficul SSH din reteaua Calimanesti catre reteaua RM_Valcea:',
      image: 'questions/images/acls/test_network.png',
      acceptedAnswers: ['access-list 167 deny tcp 172.34.48.0 0.0.3.255 172.34.0.0 0.0.63.255 eq 22'],
      },
      {
      type: 'multiple-choice',
      text: 'Avem următorul ACL standard configurat:\naccess-list 10 deny 192.168.1.100 0.0.0.0\naccess-list 10 permit 192.168.1.0 0.0.0.255\naccess-list 10 deny 192.168.0.0 0.0.255.255\n\nUn pachet de la IP-ul sursă 192.168.1.50 ajunge la router. Ce se întâmplă?',
      options: [
        'Este blocat (face match pe primul ACE)',
        'Este permis (face match pe al doilea ACE)',
        'Este blocat (face match pe al treilea ACE)',
        'Este blocat de Implicit Deny'
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Evaluează acest ACL extins aplicat spre internet:\naccess-list 100 permit tcp host 10.1.1.5 any eq 443\naccess-list 100 deny tcp 10.1.1.0 0.0.0.255 any eq www\naccess-list 100 permit ip any any\n\nPC-ul cu IP-ul 10.1.1.5 încearcă să acceseze http://cisco.com (port 80). Va reuși?',
      options: [
        'Da, face match pe primul ACE',
        'Nu, face match pe al doilea ACE',
        'Da, face match pe al treilea ACE'
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Pentru a controla traficul de ping, ai configurat:\naccess-list 110 deny icmp any any echo\naccess-list 110 permit icmp any any echo-reply\naccess-list 110 permit ip any any\n\nUn pachet ICMP Echo-Reply (răspuns la ping) vine dinspre internet. Ce acțiune se ia?',
      options: [
        'Este blocat (face match pe primul ACE)',
        'Este permis (face match pe al doilea ACE)',
        'Este permis (face match pe al treilea ACE)'
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Avem acest ACL legat de routing pe interfața internă:\naccess-list 120 permit ospf host 10.0.0.1 host 224.0.0.5\naccess-list 120 deny ospf any any\naccess-list 120 permit ip 10.0.0.0 0.255.255.255 any\n\nRouterul vecin cu IP-ul 10.0.0.2 trimite un mesaj OSPF Hello (către multicast 224.0.0.5). Ce face routerul nostru cu pachetul?',
      options: [
        'Îl permite (face match pe primul ACE)',
        'Îl blochează (face match pe al doilea ACE)',
        'Îl permite (face match pe al treilea ACE)'
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Atenție la wildcard masks! Ai acest ACL:\naccess-list 130 deny tcp 172.16.0.0 0.0.3.255 host 192.168.1.1 eq 22\naccess-list 130 permit tcp 172.16.0.0 0.0.7.255 host 192.168.1.1 eq 22\naccess-list 130 deny ip any any\n\nUn administrator de la IP-ul 172.16.5.10 inițiază o sesiune SSH spre 192.168.1.1. Trece?',
      options: [
        'Nu, face match pe primul ACE și e blocat',
        'Da, face match pe al doilea ACE și e permis',
        'Nu, ajunge la Implicit Deny și e blocat'
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'ACL aplicat INBOUND pe interfața WAN (dinspre net):\naccess-list 140 deny ip 192.168.1.0 0.0.0.255 any\naccess-list 140 permit tcp any 192.168.1.0 0.0.0.255 established\naccess-list 140 permit udp any host 192.168.1.10 eq 53\n\nUn hacker din exterior face spoofing (falsifică IP-ul sursă) încercând să pară că este 192.168.1.50 și trimite un pachet TCP ACK către PC-ul 192.168.1.100. Trece pachetul malitios?',
      options: [
        'Nu, face match pe primul ACE (Anti-Spoofing)',
        'Da, face match pe al doilea ACE (are flag-ul ACK setat)',
        'Nu, pică pe Implicit Deny'
      ],
      correctIndex: 0,
      }
    ]
});
