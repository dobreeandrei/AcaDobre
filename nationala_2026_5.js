window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'nationala_2026_5',
  topic: 'Nationala 2026 11-12 Setul 5',
  questions: [
  {
    type: 'label-order',
    text: 'Puneți în ordine corectă pașii din mecanismul CSMA/CA (Collision Avoidance) utilizat de rețelele wireless 802.11, de la verificarea inițială a canalului până la confirmarea livrării.',
    labels: [
      'Ascultare canal; dacă este ocupat, se așteaptă până devine liber',
      'Așteptare interval DIFS după ce canalul devine liber',
      'Generare și decrementare interval Backoff aleatoriu',
      'Transmitere cadru de date dacă Backoff a ajuns la 0',
      'Recepție ACK de la stația destinație'
    ],
    correctOrder: [0, 1, 2, 3, 4],
  },
  {
    type: 'multiple-choice',
    text: 'Care este dimensiunea minimă a unui cadru Ethernet (fără preambul și SFD) și care este motivul tehnic al acestei limitări?',
    options: [
      '32 de octeți – limita impusă de viteza de 10 Mbps pentru detectarea coliziunilor pe distanțe lungi',
      '46 de octeți – dimensiunea minimă a câmpului de date, excluzând header-ul și trailer-ul Ethernet',
      '72 de octeți – dimensiunea totală incluzând preambulul de 8 octeți adăugat înaintea cadrului',
      '64 de octeți – necesari pentru ca emițătorul să detecteze o coliziune înainte de a termina transmisia',
      '60 de octeți – dimensiunea minimă a cadrului fără câmpul FCS, adăugat ulterior de controlerul NIC',
      '128 de octeți – dimensiunea minimă impusă de standardul IEEE 802.3ab pentru Gigabit Ethernet'
    ],
    correctIndex: 3
  },
  {
    type: 'multiple-choice',
    text: 'Alegeți dacă afirmația următoare este adevărată sau falsă:\nVTP Pruning nu poate elimina (prune) traficul VLAN-ului 1 și nici al VLAN-urilor 1002–1005, deoarece acestea sunt VLAN-uri rezervate și excluse implicit din domeniul de pruning VTP.',
    options: ['Adevărat', 'Fals'],
    correctIndex: 0
  },
  {
    type: 'open-ended',
    text: 'Câte subrețele /28 se pot obține prin subnetarea uniformă a blocului 10.0.0.0/24? (Scrieți doar numărul întreg.)',
    acceptedAnswers: ['16'],
  },
  {
    type: 'multiple-choice',
    text: 'Ce efect produce configurarea comenzii „spanning-tree guard loop" pe un port de switch și în ce scenariu este utilă?',
    options: [
      'Dezactivează portul (err-disabled) la recepția primului BPDU, protejând porturile PortFast de switch-uri neașteptate',
      'Respinge BPDU-urile superioare primite pe port, prevenind înlocuirea Root Bridge-ului curent din topologie',
      'Blochează trecerea portului în starea Designated dacă acesta nu mai primește BPDU-uri de la Root Bridge',
      'Limitează numărul de adrese MAC admise pe port, blocând portul la depășirea pragului maxim configurat',
      'Previne tranziția portului non-designated în starea Forwarding dacă BPDU-urile de pe acel segment dispar',
      'Forțează portul să rămână în starea Blocking permanent, indiferent de topologia STP din rețea'
    ],
    correctIndex: 4
  },
  {
    type: 'matching',
    text: 'Asociați fiecare tip de amenințare (malware) cu caracteristica sa definitorie:',
    subQuestions: [
      { text: 'Se atașează la fișiere executabile legitime și se propagă numai când utilizatorul rulează fișierul infectat.', answer: 'Virus' },
      { text: 'Se replică și se propagă autonom în rețea, fără intervenția utilizatorului, exploatând vulnerabilități.', answer: 'Worm' },
      { text: 'Se deghizează ca software legitim și util, dar conține funcționalitate malițioasă ascunsă; nu se auto-replică.', answer: 'Trojan' },
      { text: 'Colectează date despre activitatea utilizatorului (parole, istoricul navigării) fără consimțământul acestuia.', answer: 'Spyware' },
    ],
    options: ['Virus', 'Worm', 'Trojan', 'Spyware', 'Rootkit'],
  },
  {
    type: 'multiple-choice',
    text: 'Un router are interfețele active: Lo0 cu 10.0.0.1/32, Lo1 cu 10.255.255.255/32 și Gi0/0 cu 192.168.100.1/24. Nu există router-id configurat manual. Care va fi Router ID-ul ales de OSPF?',
    options: [
      '192.168.100.1 – cea mai mare adresă IP activă de pe orice interfață, indiferent de tipul său',
      '10.0.0.1 – prima interfață loopback configurată este preferată implicit de algoritmul Cisco OSPF',
      '10.255.255.255 – cea mai mare adresă loopback activă; OSPF preferă loopback față de interfețele fizice',
      '0.0.0.0 – OSPF nu pornește fără un router-id manual; procesul rămâne inactiv până la configurare',
      '10.128.0.0 – media adreselor loopback, calculată intern de IOS pentru stabilirea router-id-ului',
      '192.168.0.1 – adresa implicită a router-id-ului pe echipamentele Cisco IOS fără configurație manuală'
    ],
    correctIndex: 2
  },
  {
    type: 'multiple-choice',
    text: 'Alegeți dacă afirmația următoare este adevărată sau falsă:\nRețelele wireless 802.11 (Wi-Fi) utilizează CSMA/CA în locul CSMA/CD, deoarece coliziunile nu pot fi detectate fiabil în mediul wireless în timp real, spre deosebire de Ethernet care detectează coliziunile electric pe fir.',
    options: ['Adevărat', 'Fals'],
    correctIndex: 0
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele sunt caracteristici ale protocolului UDP față de TCP? (alegeți 3 variante)',
    options: [
      'Nu stabilește o conexiune prealabilă; datele sunt trimise imediat, fără three-way handshake',
      'Segmentele transmise sunt confirmate individual prin mesaje ACK trimise de destinație',
      'Nu există mecanism de retransmisie; datele pierdute nu sunt recuperate automat de protocol',
      'Reordonează segmentele la destinație folosind câmpul de număr de secvență din antet',
      'Antetul UDP are lungime fixă de 8 octeți, considerabil mai redusă față de antetul TCP',
      'Inițierea transmisiei este condiționată de negocierea mărimii ferestrei de recepție cu destinatarul'
    ],
    correctIndices: [0, 2, 4]
  },
  {
    type: 'open-ended',
    text: 'Care este valoarea zecimală a numărului binar 11001101? (Scrieți doar numărul întreg.)',
    acceptedAnswers: ['205'],
  },
  {
    type: 'multiple-choice',
    text: 'Un server NTP este sincronizat direct cu un receptor GPS (sursă de referință de tip stratum 0). Ce nivel stratum va raporta serverul NTP clienților săi?',
    options: [
      'Stratum 0 – serverul preia nivelul sursei GPS, deoarece conexiunea directă elimină orice salt intermediar',
      'Stratum 1 – un server sincronizat direct cu o sursă stratum 0 raportează propriul nivel ca stratum 1',
      'Stratum 2 – receptorul GPS introduce un salt suplimentar față de semnalul satelit, majorând stratum-ul',
      'Stratum 3 – nivelul implicit acordat serverelor NTP conectate la receptoare GPS prin interfețe seriale',
      'Stratum 15 – nivelul maxim util al ierarhiei NTP, alocat surselor de timp de precizie ridicată',
      'Stratum 16 – nivel raportat implicit înainte de prima sincronizare completă a serverului NTP'
    ],
    correctIndex: 1
  },
  {
    type: 'multiple-choice',
    text: 'Ce efect produce comanda „switchport nonegotiate" configurată pe un port de switch Cisco?',
    options: [
      'Portul intră imediat în modul trunk și dezactivează renegocierea VLAN-urilor prin protocolul VTP',
      'Portul trimite pachete DTP periodic, dar ignoră complet răspunsurile primite de la switch-ul vecin',
      'Comanda setează portul în modul access și blochează procesarea oricărui pachet DTP recepționat',
      'Comanda este echivalentă cu dezactivarea STP; nu are niciun efect asupra protocolului DTP în sine',
      'Portul este suspendat logic până când administratorul specifică explicit modul de operare dorit',
      'Portul nu mai trimite pachete DTP; modul trunk sau access trebuie setat manual de administrator'
    ],
    correctIndex: 5
  },
  {
    type: 'label-order',
    text: 'Puneți în ordine corectă pașii procesului CSMA/CD de gestionare a coliziunilor în Ethernet, de la detectarea unui canal liber până la retransmiterea cu succes a cadrului.',
    labels: [
      'Verificare inactivitate mediu; așteptare IFS dacă mediul este ocupat',
      'Transmitere cadru de date pe mediu',
      'Detectare coliziune în timpul transmisiei',
      'Trimitere semnal JAM pentru alertarea tuturor stațiilor',
      'Așteptare interval aleatoriu (Binary Exponential Backoff)',
      'Retransmitere cadru după expirarea intervalului de Backoff'
    ],
    correctOrder: [0, 1, 2, 3, 4, 5],
  },
  {
    type: 'multiple-choice',
    text: 'Alegeți dacă afirmația următoare este adevărată sau falsă:\nSpre deosebire de ACL-urile numerice standard, ACL-urile cu nume (named ACL) permit ștergerea selectivă a unei intrări individuale prin comanda „no" urmată de numărul de secvență, fără a sterge întreaga listă.',
    options: ['Adevărat', 'Fals'],
    correctIndex: 0
  },
  {
    type: 'matching',
    text: 'Asociați fiecare descriere cu intervalul de numere corespunzător tipului de ACL IPv4:',
    subQuestions: [
      { text: 'ACL standard IPv4 numerotat; filtrează exclusiv pe baza adresei IP sursă (interval primar).', answer: '1–99' },
      { text: 'ACL extins IPv4 numerotat; filtrează pe baza adresei sursă, destinație, protocol și port (interval primar).', answer: '100–199' },
      { text: 'ACL standard IPv4 numerotat; interval alternativ (extins) adăugat ulterior în IOS.', answer: '1300–1999' },
      { text: 'ACL extins IPv4 numerotat; interval alternativ (extins) adăugat ulterior în IOS.', answer: '2000–2699' },
    ],
    options: ['1–99', '100–199', '1300–1999', '2000–2699', '200–299'],
  },
  {
    type: 'multiple-choice',
    text: 'Atacul VLAN Hopping prin dublu-tagging 802.1Q reușește datorită unei condiții specifice de configurare a rețelei. Care este această condiție necesară pentru ca atacul să funcționeze?',
    options: [
      'Portul atacatorului trebuie să aibă VLAN-ul nativ identic cu VLAN-ul nativ configurat pe legătura trunk',
      'Atacatorul trebuie să dețină acces fizic direct la portul trunk pentru a insera manual taguri 802.1Q',
      'VLAN-ul țintă trebuie să aibă DTP activat pe porturi pentru a accepta negocierea unui trunk rogue',
      'Switch-ul atacat trebuie să fie configurat în modul VTP Server cu revision number mai mare decât vecinii',
      'Atacul funcționează exclusiv pe VLAN-ul 1, deoarece acesta nu poate fi eliminat din legăturile trunk',
      'Switch-ul victimă trebuie să ruleze PVST+ în locul RSTP pentru ca al doilea tag interior să fie procesat'
    ],
    correctIndex: 0
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele câmpuri există în antetul IPv4 dar au fost ELIMINATE în antetul IPv6? (alegeți 2 variante)',
    options: [
      'IHL (Internet Header Length) – eliminat deoarece antetul IPv6 are lungime fixă de 40 de octeți',
      'Flow Label – câmp nou introdus în IPv6 pentru identificarea fluxurilor de date la nivelul 3',
      'Header Checksum – eliminat în IPv6; verificarea integrității este delegată nivelurilor 2 și 4',
      'Hop Limit – câmp nou introdus în IPv6 ca înlocuitor direct și funcțional al câmpului TTL din IPv4',
      'Traffic Class – câmp nou adăugat în IPv6 pentru marcarea priorității traficului (similar cu DSCP)',
      'Next Header – câmp introdus în IPv6 pentru identificarea tipului de header următor sau a protocolului'
    ],
    correctIndices: [0, 2]
  },
  {
    type: 'multiple-choice',
    text: 'Care dintre termenii de mai jos descrie o rețea wireless în care stațiile comunică direct între ele fără niciun Access Point intermediar?',
    options: [
      'BSS (Basic Service Set) – rețea cu infrastructură formată dintr-un singur AP și clienții asociați',
      'ESS (Extended Service Set) – mai multe BSS-uri interconectate prin Sistemul de Distribuție (DS)',
      'BSSID – adresa MAC a AP-ului care identifică în mod unic un Basic Service Set dintr-o celulă',
      'IBSS (Independent Basic Service Set) – rețea ad-hoc fără AP; stațiile comunică direct între ele',
      'SSID (Service Set Identifier) – numele de rețea utilizat de clienți pentru a identifica un AP',
      'MBSS (Mesh Basic Service Set) – rețea mesh în care AP-urile rutează traficul autonom fără cablu'
    ],
    correctIndex: 3
  },
  {
    type: 'open-ended',
    text: 'Convertiți numărul hexazecimal 0xB4 în reprezentare zecimală. (Scrieți doar numărul întreg, fără prefixe.)',
    acceptedAnswers: ['180'],
  },
  {
    type: 'multiple-choice',
    text: 'Ce reprezintă o adresă anycast în contextul adresării IPv6?',
    options: [
      'O adresă unicast atribuită unui singur dispozitiv; pachetele sunt livrate exclusiv acelui destinatar unic',
      'O adresă atribuită mai multor interfețe simultan; fiecare pachet este livrat celei mai apropiate ca rutare',
      'O adresă din intervalul FF00::/8; pachetele sunt livrate tuturor membrilor grupului multicast configurat',
      'O adresă link-local generată prin EUI-64, valabilă exclusiv pe segmentul local fără rutare externă',
      'O adresă de broadcast specifică IPv6, prin care pachetele ajung la toate nodurile din subnet',
      'O adresă rezervată administrativ pentru testarea intra-domeniu între routerele dintr-o arie OSPF'
    ],
    correctIndex: 1
  },
  {
    type: 'multiple-choice',
    text: 'Alegeți dacă afirmația următoare este adevărată sau falsă:\nEIGRP utilizează adresa multicast 224.0.0.90 pentru a trimite pachete Hello și Update vecinilor direct conectați, în loc să folosească adrese unicast individuale pentru fiecare vecin.',
    options: ['Adevărat', 'Fals'],
    correctIndex: 1
  },
  {
    type: 'multiple-choice',
    text: 'Pe ce tip de port de switch trebuie activat Root Guard și de ce?',
    options: [
      'Pe Root Port-ul fiecărui switch non-root, pentru a stabiliza calea existentă spre Root Bridge',
      'Pe porturile trunk dintre switch-urile Core și Distribution, protejând calea principală de backbone',
      'Pe porturile de acces cu PortFast activat, prevenind conectarea accidentală a altor switch-uri',
      'Pe toate porturile Root Bridge-ului curent, împiedicând pierderea rolului de root la repornire',
      'Pe porturile Designated ale switch-urilor non-root, unde un switch vecin nu ar trebui să devină Root',
      'Pe porturile Alternate ale switch-urilor non-root, pentru a preveni tranziția prematură în Forwarding'
    ],
    correctIndex: 4
  },
  {
    type: 'matching',
    text: 'Asociați fiecare tip de pachet OSPF cu rolul său în procesul de schimb de informații:',
    subQuestions: [
      { text: 'Trimis periodic pentru descoperirea vecinilor și menținerea adiacențelor OSPF active.', answer: 'Hello' },
      { text: 'Conține un rezumat (antete LSA) al propriei baze de date LSDB; schimbat în fazele ExStart și Exchange.', answer: 'DBD' },
      { text: 'Solicită explicit LSA-uri specifice de la un vecin, identificate prin tip, LS ID și Advertising Router.', answer: 'LSR' },
      { text: 'Confirmă recepția unui pachet LSU, garantând livrarea fiabilă a informațiilor de stare a legăturii.', answer: 'LSAck' },
    ],
    options: ['Hello', 'DBD', 'LSR', 'LSU', 'LSAck'],
  },
  {
    type: 'multiple-choice',
    text: 'Ce efect produce comanda „variance 3" configurată sub procesul EIGRP al unui router?',
    options: [
      'Stabilește 3 ca număr maxim de hop-uri acceptate de EIGRP în calculul metricii compuse pentru o rută',
      'Definește ponderea coeficienților K3 din formula metricii EIGRP, ignorând lățimea de bandă și delay-ul',
      'Permite load balancing inegal pe rute Feasible Successor cu metrica ≤ 3 ori Feasible Distance a rutei successor',
      'Modifică intervalul Hello al vecinilor EIGRP prin înmulțirea valorii implicite cu factorul 3 configurat',
      'Stabilește după câte periodic updates consecutive fără răspuns EIGRP declară un vecin ca inactiv',
      'Ajustează distanța administrativă a rutelor EIGRP externe, multiplicând valoarea implicită 170 cu 3'
    ],
    correctIndex: 2
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele afirmații despre portul Designated în STP sunt corecte? (alegeți 2 variante)',
    options: [
      'Portul Designated este ales exclusiv pe baza adresei MAC a switch-ului, ignorând complet costul spre root',
      'Pe orice segment Ethernet, poate exista un singur port Designated, ales prin cost cumulat și BID',
      'Un port Designated se află întotdeauna în starea Blocking pentru a preveni buclele la nivel Layer 2',
      'Toate porturile Root Bridge-ului sunt automat porturi Designated pe segmentele la care sunt conectate',
      'Un switch poate avea maximum un singur port Designated; toate celelalte porturi devin Root Port',
      'Portul Designated rămâne în starea Listening timp de 45 de secunde înainte de a trece în Forwarding'
    ],
    correctIndices: [1, 3]
  },
  {
    type: 'label-order',
    text: 'Puneți în ordine corectă pașii necesari pentru a configura un firewall Zone-Based Policy (ZPF) pe un router Cisco, de la crearea structurii de securitate până la aplicarea politicii.',
    labels: [
      'Creare zone de securitate (zone security)',
      'Atribuire interfețe fizice la zonele create',
      'Definire class-map pentru clasificarea traficului inspectat',
      'Definire policy-map cu acțiunile aplicate per clasă',
      'Creare zone-pair și aplicarea policy-map-ului pe pereche'
    ],
    correctOrder: [0, 1, 2, 3, 4],
  },
  {
    type: 'multiple-choice',
    text: 'Care este rolul principal al unui CA (Certificate Authority) în infrastructura PKI?',
    options: [
      'Stochează și distribuie cheile private ale utilizatorilor pentru accesul securizat la resurse protejate',
      'Realizează schimbul de chei simetrice de sesiune între client și server prin protocolul Diffie-Hellman',
      'Verifică autenticitatea mesajelor prin compararea hash-urilor calculate cu o bază de date centralizată',
      'Emite jetoane de autentificare cu durată limitată pentru accesul prin protocolul Kerberos la resurse',
      'Gestionează distribuția cheilor de sesiune temporare negociate în procesul de SSL/TLS Handshake',
      'Emite și semnează digital certificate care leagă identitatea unui subiect de cheia sa publică'
    ],
    correctIndex: 5
  },
  {
    type: 'multiple-choice',
    text: 'Alegeți dacă afirmația următoare este adevărată sau falsă:\nÎn modul de violare „protect" al Port Security, switch-ul elimină silențios cadrele care depășesc limita de adrese MAC și generează totodată un mesaj de log Syslog pentru a alerta administratorul.',
    options: ['Adevărat', 'Fals'],
    correctIndex: 1
  },
  {
    type: 'open-ended',
    text: 'Câte subrețele /30 se pot obține prin subnetarea uniformă a blocului 192.168.10.0/24? (Scrieți doar numărul întreg.)',
    acceptedAnswers: ['64'],
  },
  {
    type: 'multiple-choice',
    text: 'Ce protocol de transport utilizează NETCONF (Network Configuration Protocol) pentru comunicarea securizată cu dispozitivele de rețea gestionate, conform RFC 6242?',
    options: [
      'HTTPS pe portul TCP 443, asigurând securitate prin TLS și compatibilitate cu infrastructura web',
      'SNMP pe portul UDP 161, oferind compatibilitate cu platformele de management NMS existente',
      'Telnet pe portul TCP 23, deoarece NETCONF necesită un canal interactiv cu sesiuni persistente',
      'SSH pe portul TCP 830, oferind autentificare și criptare pentru schimbul de date de configurare',
      'TLS pe portul TCP 8443, ca alternativă dedicată la HTTPS pentru echipamentele Cisco IOS-XE',
      'REST/HTTP pe portul TCP 80, asigurând o interfață stateless compatibilă cu modelul de date YANG'
    ],
    correctIndex: 3
  }
]
});
