ACADOBRE_QUESTIONS.push({
  id: 'network_design',
    topic: 'Network Design',
    questions: [
      {
      type: 'multiple-choice',
      text: 'Care este scopul principal al stratului de distribuție intr-un design de campus pe trei niveluri?',
      options: [
        'Agregarea domeniilor de broadcast de Layer 2 cu domeniile de rutare Layer 3',
        'Oferirea accesului dispozitivelor de final',
        'Administrarea conectivitatii cu retelele externe',
        'Oferirea conectivitatii la viteze mari si izolarea erorilor',
        'Asigurarea securitatii prin folosirea mai multor legaturi intre dispozitive.',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Cum se mai numesc retelele de campus pe doua niveluri?',
      options: [
        'Consolidated Core',
        'Collapsed Core',
        'Split Core',
        'Distributed Core',
        'Access Core',
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca intr-o topologie spine/leaf toate switch-urile spine sunt conectate intre ele?',
      options: [
        'Adevarat',
        'Fals',
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice-multi',
      text: 'Cum se numesc nivelele intr- o structura Two-tier? (Selectaţi 2 variante)',
      options: [
        'Acces Layer',
        'Core/Distribution Layer',
        'Core Layer',
        'Distribution Layer',
        'Physical Layer',
        'Network Access Layer',
      ],
      correctIndices: [0, 1],
      },
      {
      type: 'multiple-choice-multi',
      text: 'Cum se numesc nivelele intr- o structura Three-tier? (Selectaţi 3 variante)',
      options: [
        'Acces Layer',
        'Core/Distribution Layer',
        'Core Layer',
        'Distribution Layer',
        'Physical Layer',
        'Network Access Layer',
      ],
      correctIndices: [0, 2, 3],
      },
      {
        type: 'multiple-choice-multi',
        text: 'Pe ce principii de funcționare este bazat modelul Cisco Borderless Network? (Selectați trei opțiuni corecte) (Acadnet)',
        options: ['Modularitate', 'Gestionarea dinamică a lățimii de bandă', 'Structură ierarhică', 'Gestionarea costului pachetelor', 'Segmentare a rețelei', 'Reziliență'],
        correctIndices: [0, 2, 5],
      },
      {
        type: 'multiple-choice',
        text: 'Stabiliți valoarea de adevăr a următoarei afirmații:\nPrincipalul scop al Core Layer-ului este de a oferi conexiune la viteze mari, cât și izolarea impedimentelor (erorilor). (Acadnet)',
        options: ['Adevărat', 'Fals'],
        correctIndex: 0,
      },
      {
        type: 'multiple-choice',
        text: 'Care este rolul principal al stratului de acces într-un design de rețea campus pe trei niveluri? (Acadnet)',
        options: [
          'Realizează agregarea traficului între clădiri și centre de date',
          'Monitorizează performanța aplicațiilor la nivel de rețea',
          'Administrează interconectarea cu rețelele externe (WAN/Internet)',
          'Coordonează redundanța între switch-urile de distribuție',
          'Oferă conectivitate directă pentru utilizatori și echipamente terminale',
          'Gestionează rutarea inter-VLAN și politica de securitate',
        ],
        correctIndex: 4,
      },
    ]
});