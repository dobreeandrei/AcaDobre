ACADOBRE_QUESTIONS.push({
  id: 'ipsec',
    topic: 'IPsec',
    questions: [
      {
      type: 'multiple-choice',
      text: 'Care este range-ul lungimilor pe care le pot avea cheile folosite de IPsec pentru criptare?',
      options: [
        '40-256',
        '56-256',
        '40-128',
        '128-256',
        '40-192',
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Pentru ce tip de trafic pot fi create tunelele de IPsec?',
      options: [
        'Unicast',
        'Multicast',
        'Broadcast',
        'Anycast',
        'Fanecast',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Cum se numeste procesul prin care se garanteaza integritatea mesajelor IPsec?',
      options: [
        'Hash Message Authentication Codes (HMAC)',
        'Diffie-Hellman (DH)',
        'Encryption',
        'Authentication',
        'Reliability',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Cum se numeste procesul prin care se realizeaza schimbul secret de chei IPsec?',
      options: [
        'Hash Message Authentication Codes (HMAC)',
        'Diffie-Hellman (DH)',
        'Encryption',
        'Authentication',
        'Reliability',
      ],
      correctIndex: 1,
      }, 
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca IPsec nu poate fi folosit in toate aplicatiile bazate pe IP?',
      options: [
        'Adevarat',
        'Fals',
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca IPsec necesita o configurare superioara fata de SSL?',
      options: [
        'Adevarat',
        'Fals',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca IPsec adauga un nou header dupa ce cripteaza pachetul original?',
      options: [
        'Adevarat',
        'Fals',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca encapsularea IPsec prin Authentication Header nu cripteaza traficul?',
      options: [
        'Adevarat',
        'Fals',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca criptarea IPsec foloseste atat algoritmi simetrici cat si asimetrici?',
      options: [
        'Adevarat',
        'Fals',
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca tunelurile GRE nu ofera encriptie?',
      options: [
        'Adevarat',
        'Fals',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca atunci cand este folosit Dynamic Multipoint VPN (DMVPN) este necesara folosirea IPsec pentru securizare?',
      options: [
        'Adevarat',
        'Fals',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice-multi',
      text: 'Cum se pot trimite mesaje de rutare dinamica prin IPsec? (Selectaţi 2 variante)',
      options: [
        'GRE over IPsec',
        'IPsec Virtual Tunnel Interfaces (VTI)',
        'Multicast IPsec',
        'Dynamic Multipoint VPN (DMVPN)',
        'Routed IPsec',
        'OSPF over IPsec',
      ],
      correctIndices: [0, 1],
      },
      {
      type: 'multiple-choice-multi',
      text: 'Cum se poate realiza encapsularea prin IPsec? (Selectaţi 3 variante)',
      options: [
        'Encapsulation Security Payload (ESP)',
        'Authentication Header (AH)',
        'ESP + AH',
        'Secure Hash Algorithm (SHA)',
        'Pre-Shared Key (PSK)',
        'Diffie-Hellman (DH)',
      ],
      correctIndices: [0, 1, 2],
      },
      {
      type: 'multiple-choice-multi',
      text: 'Care sunt beneficiile oferite de IPsec? (Selectaţi 4 variante)',
      options: [
        'Confidentialitate',
        'Integritate',
        'Autentificare',
        'Schimb secret de chei',
        'Redundanta',
        'Calitatea Serviciilor (QoS)',
        'Scalabilitate'
      ],
      correctIndices: [0, 1, 2, 3],
      },
      {
      type: 'multiple-choice-multi',
      text: 'Ce algoritmi pot fi folositi pentru indeplinirea functiei de confidentialitate a standardului IPsec? (Selectaţi 4 variante)',
      options: [
        'DES',
        '3DES',
        'AES',
        'SEAL',
        'MD5',
        'SHA',
        'RSA',
        'DH',
        'ECC',
        'El gamal'
      ],
      correctIndices: [0, 1, 2, 3],
      },
      {
      type: 'multiple-choice-multi',
      text: 'Ce algoritmi pot fi folosit pentru indeplinirea functiei de integritate a standardului IPsec? (Selectaţi 2 variante)',
      options: [
        'DES',
        '3DES',
        'AES',
        'SEAL',
        'MD5',
        'SHA',
        'RSA',
        'DH',
        'ECC',
        'El gamal'
      ],
      correctIndices: [4, 5],
      },
      {
      type: 'multiple-choice-multi',
      text: 'Cum se poate realiza autentificarea prin IPsec? (Selectaţi 3 variante)',
      options: [
        'Pre-Shared Key (PSK)',
        'RSA Certificates',
        'Internet Key Exchange (IKE)',
        'AES encryption',
        'MD5 hashing',
        'Diffie-Hellman exchange',
      ],
      correctIndices: [0, 1, 2],
      },
      {
      type: 'matching',
      text: 'Asociati algoritmul de encriptie cu valorile pentru chei:',
      subQuestions: [
        { text: 'DES', answer: '56' },
        { text: '3DES', answer: '112/168' },
        { text: 'AES', answer: '128,192,256' },
        { text: 'SEAL', answer: '160' },
      ],
      options: ['56', '112/168', '64', '128,192,256', '160' , '128'],
      },
      {
      type: 'matching',
      text: 'Asociati algoritmul de hashing cu valorile pentru chei:',
      subQuestions: [
        { text: 'MD5', answer: '128' },
        { text: 'SHA', answer: '160' },
      ],
      options: ['56', '1024+', '160' , '128'],
      },
      {
      type: 'multiple-choice',
      text: 'Ce componentă a protocolului IPsec asigură confidențialitatea datelor transmise între două dispozitive? (Acadnet)',
      options: [
        'Authentication Header (AH)',
        'Encapsulation Security Payload (ESP)',
        'Simple Network Management Protocol (SNMP)',
        'Internet Control Message Protocol (ICMP)',
        'Datagram Transport Layer Security (DTLS)',
        'Secure Shell (SSH)',
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Care protocol poate fi utilizat de IPsec pentru autentificarea sursei și destinației? (Acadnet)',
      options: ['MPLS', 'Kerberos', 'MK7', 'IKE', 'SSH', 'IP-TLS'],
      correctIndex: 3
    },
    ]
});
