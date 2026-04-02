ACADOBRE_QUESTIONS.push({
  id: 'dhcp',
    topic: 'DHCPv4',
    questions: [
    {
      type: 'open-ended',
      text: 'Care este portul si protocolul de nivel 4 pentru DHCPv4 Server?',
      acceptedAnswers: ['67 UDP', '67 udp'],
      hint: 'Exemplu de raspuns: "12 DBR".',
    },
    {
      type: 'open-ended',
      text: 'Care este portul si protocolul de nivel 4 pentru DHCPv4 Client?',
      acceptedAnswers: ['68 UDP', '68 udp'],
      hint: 'Exemplu de raspuns: "12 DBR".',
    },
    {
      type: 'multiple-choice',
      text: 'Ce trebuie facut pentru a avea DHCP functional?',
      options: ['Excluderea default-gatewayului din pool-ul de adrese', 'Schimbarea portului DHCP', 'Setarea adresei IP static pe un calculator', 'Setarea VLAN-ului nativ', 'Schimbarea hostname-ului pe Router'],
      correctIndex: 0,
    },
    {
      type: 'multiple-choice',
      text: 'Ce configurare permite functionarea DHCP daca serverul se afla in alta retea fata de clienti?',
      options: ['Excluderea default-gatewayului', 'Schimbarea portului DHCP', 'DHCP Relay Agent', 'Setarea VLAN-ului nativ', 'DHCPDISCOVER', 'DORA'],
      correctIndex: 2,
    },
    {
      type: 'multiple-choice',
      text: 'De la ce etapa incepe procesul DHCP daca clientul are deja alocata o adresa si doar vrea sa o reinnoiasca?',
      options: ['Discover', 'Offer', 'Request', 'Acknowledgement', 'NAK', 'Release', 'Decline', 'Accept'],
      correctIndex: 2,
    },
    {
      type: 'multiple-choice',
      text: 'Ce face mesajul DHCP Discover?',
      options: [
        'Clientul caută servere DHCP disponibile în rețea prin broadcast',
        'Serverul confirmă alocarea adresei IP către client',
        'Clientul eliberează adresa IP alocată',
        'Serverul refuză o solicitare invalidă'
      ],
      correctIndex: 0,
    },
    {
      type: 'multiple-choice',
      text: 'Ce face mesajul DHCP Offer?',
      options: [
        'Clientul solicită reînnoirea adresei IP',
        'Serverul trimite informațiile despre o adresă IP disponibilă',
        'Clientul refuză adresa IP din cauza unui conflict',
        'Serverul confirmă finalizarea procesului DHCP'
      ],
      correctIndex: 1,
    },
    {
      type: 'multiple-choice',
      text: 'Ce face mesajul DHCP Request?',
      options: [
        'Clientul acceptă oferta unui server și solicită utilizarea adresei IP',
        'Serverul trimite prima ofertă de adresă IP',
        'Clientul notifică serverul că renunță la adresă',
        'Serverul invalidează configurația clientului'
      ],
      correctIndex: 0,
    },
    {
      type: 'multiple-choice',
      text: 'Ce face mesajul DHCP Acknowledgement (ACK)?',
      options: [
        'Clientul confirmă primirea adresei IP',
        'Serverul confirmă că adresa IP poate fi configurată de client',
        'Clientul caută servere DHCP',
        'Serverul oferă o nouă adresă IP după un conflict'
      ],
      correctIndex: 1,
    },
    {
      type: 'multiple-choice',
      text: 'Ce face mesajul DHCP Release?',
      options: [
        'Serverul retrage o adresă IP deja alocată',
        'Clientul eliberează adresa IP și anunță serverul',
        'Clientul refuză oferta inițială',
        'Serverul confirmă reînnoirea lease-ului'
      ],
      correctIndex: 1,
    },
    {
      type: 'multiple-choice',
      text: 'Ce face mesajul DHCP NAK?',
      options: [
        'Serverul informează clientul că solicitarea sau configurația este invalidă',
        'Clientul acceptă oferta primită',
        'Clientul caută servere în rețea',
        'Serverul oferă parametri suplimentari de configurare'
      ],
      correctIndex: 0,
    },
    {
      type: 'multiple-choice',
      text: 'Ce face mesajul DHCP Decline?',
      options: [
        'Clientul refuză adresa IP oferită de server',
        'Serverul anulează lease-ul unui client',
        'Clientul solicită o nouă adresă IP după expirare',
        'Serverul confirmă finalizarea procesului'
      ],
      correctIndex: 0,
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce informatii sunt necesare pentru ca DHCP sa poata oferi IP-uri dintr-o retea?\nAlegeti 2 variante.',
      options: ['Adresa retelei pool de IP', 'Default Gateway', 'Adresa unui server DNS', 'MTU', 'Adresa IPv6', 'Adresa MAC', 'Nume de domeniu'],
      correctIndices: [0, 1]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce informatii poate primi un client folosind serviciul DHCPv4?\nAlegeti 4 variante.',
      options: ['Adresa IPv4', 'Adresa unui server DNS', 'MTU', 'Default Gateway', 'Adresa IPv6', 'Adresa MAC', 'Chei asimetrice', 'Pool de IP'],
      correctIndices: [0, 1, 2, 3]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre mesajele DHCPv4 pot fi trimise ca unicast?\nAlegeti 4 variante.',
      options: ['Discover', 'Offer', 'Request', 'Acknowledgement', 'NAK', 'Release', 'Decline', 'Accept'],
      correctIndices: [1, 3, 4, 5]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre mesajele DHCPv4 sunt trimise de catre client?\nAlegeti 4 variante.',
      options: ['Discover', 'Offer', 'Request', 'Acknowledgement', 'NAK', 'Release', 'Decline', 'Accept'],
      correctIndices: [0, 2, 5, 6]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre mesajele DHCPv4 sunt blocate automat de porturile cu dhcp snooping in modul untrusted?\nAlegeti 3 variante.',
      options: ['Discover', 'Offer', 'Request', 'Acknowledgement', 'NAK', 'Release', 'Decline', 'Accept'],
      correctIndices: [1, 3, 4]
    },
    {
      type: 'label-order',
      text: 'Ordonati de la stanga la dreapta pasii de functionare DHCPv4',
      labels: ['Discover', 'Offer', 'Request', 'Acknowledgement'],
      correctOrder: [0, 1, 2, 3],
    },
    {
      type: 'matching',
      text: 'Asociati fiecare mesaj DHCP cu tipul de mesaj in functie de destinatari:',
      subQuestions: [
        { text: 'Discover',        answer: 'Broadcast' },
        { text: 'Offer',           answer: 'Unicast/Broadcast' },
        { text: 'Request',         answer: 'Broadcast' },
        { text: 'Acknowledgement', answer: 'Unicast/Broadcast' },
        { text: 'Release',         answer: 'Unicast' },
        { text: 'Decline',         answer: 'Broadcast' },
        { text: 'NAK',             answer: 'Unicast/Broadcast' },
      ],
      options: ['Unicast', 'Broadcast', 'Unicast/Broadcast', 'Multicast', 'Vasicast'],
    },
    ]
});
