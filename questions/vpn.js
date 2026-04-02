ACADOBRE_QUESTIONS.push({
  id: 'vpn',
    topic: 'VPNs',
    questions: [
      {
      type: 'multiple-choice',
      text: 'Pe ce metoda de acces la WAN este recomandata folosirea unui VPN pentru securitate?',
      options: [
        'WAN Privat',
        'WAN Dinamic',
        'WAN Public',
        'WAN Static',
        'WLAN',
      ],
      correctIndex: 2,
      },
      {
      type: 'multiple-choice',
      text: 'Cum se numesc legaturile formate de VPN-uri pentru comunicare?',
      options: [
        'VPN Tunnel',
        'VPN Autobahn',
        'VPN Channel',
        'VPN Link',
        'VPN Passage',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Cine administreaza VPN-urile Site-to-Site folosite de catre o companie?',
      options: [
        'Compania respectiva',
        'Furnizorul de Internet',
        'Administratia locala',
        'Consiliul Judetean',
        'Compania care ofera serviciul de VPN',
        'Cloud Service Provider'
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Cine administreaza un VPN remote access folosit de catre o companie?',
      options: [
        'Compania respectiva',
        'Furnizorul de Internet',
        'Administratia locala',
        'Consiliul Judetean',
        'Compania care ofera serviciul de VPN',
        'Cloud Service Provider'
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Cine administreaza VPN-urile prin MPLS?',
      options: [
        'Compania respectiva',
        'Furnizorul de Internet',
        'Administratia locala',
        'Consiliul Judetean',
        'Compania care ofera serviciul de VPN',
        'Cloud Service Provider'
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Ce dispozitiv cripteaza/decripteaza traficul pentru VPN-urile Site-to-Site?',
      options: [
        'VPN Gateway',
        'VPN Client',
        'Default Gateway',
        'VPN Server',
        'VPN Host',
        'Firewall'
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce protocol este cel mai des folosit pentru crearea unui VPN Site-to-Site?',
      options: [
        'IPsec',
        'SSL/TLS',
        'Secure Sound Layer',
        'Access Control List (ACL)',
        'Calitatea Serviciilor (QoS)',
        'AAA (Authentication, Authorization, Accounting)',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce protocol este folosit pentru crearea unui VPN Clientless?',
      options: [
        'IPsec',
        'SSL/TLS',
        'Secure Sound Layer',
        'Access Control List (ACL)',
        'Calitatea Serviciilor (QoS)',
        'AAA (Authentication, Authorization, Accounting)',
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'De la ce vine prescurtarea SSL si sub ce denumire mai poate fi intalnit?',
      options: [
        'Secure Sockets Layer; Transport Layer Security',
        'Secure Sockets Locker; Transport Layer Service',
        'Secure Sound Layer; Transport Layer Security',
        'Secure Sockets Layer; Transport Level Security',
        'Secure Sound Layer; Transport Layer Service',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce este necesar sa fie pe un host pentru a accesa resursele unei companii printr-un VPN Client-Based?',
      options: [
        'O aplicație software VPN dedicata', 
        'O subscriptie platita la un furnizor public',
        'Un browser web compatibil cu HTML5',       
        'Un hardware VPN Gateway local',
        'O licenta de administrator de retea',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Cum functioneaza un Layer 3 MPLS VPN?',
      options: [
        'Informatia despre rutele clientului sunt distribuite prin reteaua MPLS',
        'Reteaua MPLS functioneaza in practica drept un switch gigant',
        'Clientul trebuie sa creeze tuneluri IPsec peste reteaua providerului',
        'Traficul este directionat exclusiv pe baza adreselor MAC ale host-urilor',
        'Provider-ul nu are nicio vizibilitate asupra rutelelor interne ale clientului',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Cum functioneaza un Layer 2 MPLS VPN?',
      options: [
        'Informatia despre rutele clientului sunt distribuite prin reteaua MPLS',
        'Reteaua MPLS functioneaza in practica drept un switch gigant',
        'Clientul trebuie sa creeze tuneluri IPsec peste reteaua providerului',
        'Traficul este directionat exclusiv pe baza adreselor MAC ale host-urilor',
        'Provider-ul nu are nicio vizibilitate asupra rutelelor interne ale clientului',
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Care este range-ul lungimilor pe care le pot avea cheile folosite de SSL pentru criptare?',
      options: [
        '40-256',
        '56-256',
        '40-128',
        '128-256',
        '40-192',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Cine ofera autenticitate certificatelor digitale folosite in VPN-uri?',
      options: [
        'Certificate Authorities (CA)',
        'Administratorul de retea',
        'Furnizorul de Internet',
        'Consiliul Judetean',
        'Marius Bildescu',
        'Compania care ofera serviciul de VPN'
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Care este rolul Dynamic Multipoint VPN (DMVPN)?',
      options: [
        'Folosirea tunelurilor virtuale pentru a transforma topolgiile Hub-and-Spoke in topologii Fully Meshed',
        'Simplificarea accesului la resursele unei companii atunci cand este folosit un VPN',
        'Transmiterea informatiilor intr-un mod confidential prin VPN-uri',
        'Asigurarea fiabilitatii atunci cand sunt folosite VPN-uri',
        'Reducerea timpului necesar pentru propagarea informatiilor transmise prin VPN-uri',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'La ce nivel din stiva OSI opereaza SSL?',
      options: ['Aplicatie', 'Fizic', 'Legatura de Date', 'Prezentare', 'Transport', 'Retea', 'Sesiune'],
      correctIndex: 4, 
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca in retelele WAN bazate pe Frame Relay sau ATM nu era necesara folosirea unui VPN?',
      options: [
        'Adevarat',
        'Fals',
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca intr-un VPN Client-Based se poate folosi doar IPsec?',
      options: [
        'Adevarat',
        'Fals',
      ],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Este adevarat ca intr-un VPN Site-to-Site traficul intern nu este criptat?',
      options: [
        'Adevarat',
        'Fals',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice-multi',
      text: 'Cum se poate realiza autentificarea prin SSL? (Selectaţi 2 variante)',
      options: [
        'One Way',
        'Two Way',
        'Biometric',
        'One-time',
        'Temporary',
        'Permanent',
      ],
      correctIndices: [0, 1],
      },
      {
      type: 'multiple-choice-multi',
      text: 'Ce tip de servicii pot folosi un VPN clientless? (Selectaţi 3 variante)',
      options: [
        'Web service',
        'Email service',
        'File sharing service',
        'IP addressing service',
        'DNS service',
        'Management service',
        'Nepotu service'
      ],
      correctIndices: [0, 1, 2],
      },
      {
      type: 'multiple-choice-multi',
      text: 'Cum poate functiona un VPN remote access? (Selectaţi 2 variante)',
      options: [
        'Site-to-Site',
        'Clientless',
        'Client-Based',
        'Firewall-Based',
        'Point-to-point',
        'Distance Login'
      ],
      correctIndices: [1, 2],
      },
      {
      type: 'multiple-choice-multi',
      text: 'Care dintre urmatoarele reprezinta beneficii in folosirea VPN-urilor? (Selectaţi 4 variante)',
      options: [
        'Cost Redus',
        'Securitate',
        'Scalabilitate',
        'Acces Remote',
        'Calitatea Serviciilor (QoS)',
        'Redundanta',
        'AAA (Authentication, Authorization, Accounting)',
        'Controlul accesului'
      ],
      correctIndices: [0, 1, 2, 3],
      },
      {
      type: 'multiple-choice-multi',
      text: 'Cum poate fi creat un VPN? (Selectaţi 2 variante)',
      options: [
        'Site-to-Site',
        'Remote Access',
        'Site-to-Host',
        'Peer-to-Web',
        'Point-to-point',
        'Static Access'
      ],
      correctIndices: [0, 1],
      },
      {
      type: 'multiple-choice-multi',
      text: 'Ce protocoale sunt folosite pentru securizarea VPN-urilor? (Selectaţi 2 variante)',
      options: [
        'IPsec',
        'SSL/TLS',
        'Secure Sound Layer',
        'Access Control List (ACL)',
        'Calitatea Serviciilor (QoS)',
        'AAA (Authentication, Authorization, Accounting)',
      ],
      correctIndices: [0, 1],
      },
      {
      type: 'multiple-choice-multi',
      text: 'Ce folosesc dispozitivele pentru a se autentifica in SSL? (Selectaţi 2 variante)',
      options: [
        'IPSec',
        'Diffie Hellman',
        'Public Key Infrastructure (PKI)',
        'Access Control List (ACL)',
        'Digital Certificates',
        'AAA (Authentication, Authorization, Accounting)',
      ],
      correctIndices: [2, 4],
      },
      {
      type: 'multiple-choice',
      text: 'Cum funcționează serviciul VPN (Virtual Private Network) în cadrul unei rețele? (Acadnet)',
      options: [
        'Filtrare strictă a traficului bazat pe adrese MAC',
        'Asigură conectivitatea între dispozitive în aceeași VLAN',
        'Prioritizează traficul în funcție de cerințele utilizatorilor',
        'Criptează traficul pentru a-l proteja împotriva accesului neautorizat'
      ],
      correctIndex: 3,
      },
      {
      type: 'multiple-choice',
      text: 'Autentificarea pe tunele de VPN tip IPsec se realizează folosind Pre-shared Key sau Certificat Digital.\nGRE are nevoie de IPsec pentru a fi securizat.\nIPsec se folosește de AH, ESP și IKE pentru a functiona. (Acadnet)',
      options: [
        'Fals, Adevărat, Adevărat',
        'Fals, Adevărat, Fals',
        'Adevărat, adevărat, adevărat',
        'Adevărat, Fals, Adevărat',
        'Fals, Fals, Adevărat',
        'Fals, fals, fals'
      ],
      correctIndex: 2,
      },
      {
      type: 'multiple-choice',
      text: 'Ce înseamnă prescurtarea VPN? (Acadnet)',
      options: [
        'Virtual Private Network',
        'Virtual Public Network',
        'Variable Packet Network',
        'Verified Private Node',
        'Visual Private Network',
        'Very Protected Network',
      ],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Stabiliţi dacă următoarea propoziţie este adevărată sau falsă:\nLa SSL autentificarea este doar two-way folosind chei sau certificate digitale. (Acadnet)',
      options: ['True', 'False'],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Ce este un VPN? (Acadnet)',
      options: [
        'O conexiune de rețea securizată care permite utilizatorilor să acceseze o rețea privată prin Internet',
        'Un instrument utilizat pentru testarea securității rețelei prin trimiterea de trafic malițios',
        'O tehnică de scanare a rețelei care indică hosturile active dintr-un interval de adrese IP',
        'Un program software care permite capturarea tuturor pachetelor de rețea transmise în LAN',
        'Un tip de dispozitiv de securitate al rețelei care analizează și controlează traficul',
        'Un protocol care furnizează comunicații securizate pe o rețea nesecurizată'
      ],
      correctIndex: 0
      },
    ]
});