window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'nationala_2026_3',
  topic: 'Nationala 2026 11-12 Setul 3',
  questions: [
  {
    type: 'matching',
    text: 'Asociați fiecare tip de rețea OSPF cu comportamentul său implicit privind alegerea DR/BDR și intervalul Hello:',
    subQuestions: [
      { text: 'Se alege DR/BDR; intervalul Hello implicit este 10 secunde.', answer: 'Broadcast' },
      { text: 'Nu se alege DR/BDR; intervalul Hello implicit este 10 secunde.', answer: 'Point-to-Point' },
      { text: 'Se alege DR/BDR; intervalul Hello implicit este 30 de secunde.', answer: 'NBMA' },
      { text: 'Nu se alege DR/BDR; intervalul Hello implicit este 30 de secunde.', answer: 'Point-to-Multipoint' },
    ],
    options: ['Broadcast', 'Point-to-Point', 'NBMA', 'Point-to-Multipoint'],
  },
  {
    type: 'multiple-choice',
    text: 'Câți biți are câmpul VLAN ID (VID) dintr-un tag 802.1Q inserat într-un cadru Ethernet?',
    options: ['8 biți', '3 biți', '12 biți', '4 biți', '16 biți', '10 biți'],
    correctIndex: 2
  },
  {
    type: 'open-ended',
    text: 'Un server DHCP atribuie un lease cu durata de 8 zile. După câte ore va trimite clientul primul mesaj de reînnoire direct către server (expiră T1)? (scrieți doar numărul întreg)',
    acceptedAnswers: ['96'],
  },
  {
    type: 'multiple-choice',
    text: 'Care este costul implicit STP (standard 802.1D) pentru o legătură de tip GigabitEthernet?',
    options: ['4', '19', '100', '8', '2', '1'],
    correctIndex: 0
  },
  {
    type: 'multiple-choice',
    text: 'O rută EIGRP intră în starea Active în algoritmul DUAL. Ce condiție a declanșat această tranziție?',
    options: [
      'Ruta a expirat din tabela de topologie după depășirea timpului hold-down',
      'Ruta successor a primit o actualizare cu o metrică mai mică de la un vecin',
      'Router-ul a primit un pachet Query de la un vecin referitor la aceeași destinație',
      'Ruta a fost redistribuită dintr-un protocol de rutare extern în procesul EIGRP',
      'Succesorul a căzut și nu există niciun Feasible Successor; DUAL trimite pachete Query vecinilor',
      'Adiacența EIGRP cu vecinul successor a fost întreruptă din cauza expirării timer-ului Hello'
    ],
    correctIndex: 4
  },
  {
    type: 'multiple-choice',
    text: 'În ce unități se exprimă câmpul Fragment Offset din header-ul IPv4?',
    options: [
      'octeți individuali',
      'biți individuali',
      'blocuri de 4 octeți',
      'blocuri de 8 octeți',
      'blocuri de 16 octeți',
      'blocuri de 32 octeți'
    ],
    correctIndex: 3
  },
  {
    type: 'matching',
    text: 'Asociați fiecare protocol de rețea cu portul său well-known corect:',
    subQuestions: [
      { text: 'FTP – canal de date (transfer efectiv de fișiere)', answer: 'TCP 20' },
      { text: 'SMTP – trimitere email de la client la server sau între servere', answer: 'TCP 25' },
      { text: 'IMAP – acces la mesaje stocate pe serverul de mail, fără ștergere implicită', answer: 'TCP 143' },
      { text: 'SNMP – interogare agent de management al dispozitivului', answer: 'UDP 161' },
    ],
    options: ['TCP 20', 'TCP 21', 'TCP 25', 'TCP 143', 'UDP 161', 'UDP 514'],
  },
  {
    type: 'multiple-choice',
    text: 'Care este diferența fundamentală de autentificare dintre WPA2-Personal și WPA2-Enterprise?',
    options: [
      'WPA2-Personal folosește TKIP; WPA2-Enterprise folosește CCMP/AES pentru criptarea datelor',
      'WPA2-Personal autentifică cu o cheie pre-shared (PSK); WPA2-Enterprise autentifică prin 802.1X cu server RADIUS',
      'WPA2-Personal suportă chei de până la 256 biți; WPA2-Enterprise este limitat la 128 biți',
      'WPA2-Enterprise criptează exclusiv cadrele de management; WPA2-Personal criptează toate tipurile',
      'WPA2-Personal este compatibil numai cu clienți Windows; WPA2-Enterprise acceptă orice sistem de operare',
      'WPA2-Enterprise generează chei de sesiune statice; WPA2-Personal generează chei dinamice per client'
    ],
    correctIndex: 1
  },
  {
    type: 'multiple-choice',
    text: 'Ce tipuri de LSA sunt blocate la granița unei arii OSPF de tip Totally Stubby?',
    options: [
      'Numai Type 1 (Router LSA)',
      'Numai Type 2 (Network LSA)',
      'Numai Type 5 (AS External LSA)',
      'Type 4 (ASBR Summary) și Type 5 (AS External LSA)',
      'Type 1 (Router) și Type 2 (Network LSA)',
      'Type 3 (Summary LSA) și Type 5 (AS External LSA)'
    ],
    correctIndex: 5
  },
  {
    type: 'open-ended',
    text: 'Câte adrese de host utilizabile există într-o subrețea cu prefixul /21? (scrieți doar numărul întreg)',
    acceptedAnswers: ['2046'],
  },
  {
    type: 'multiple-choice',
    text: 'Câte stări de port definește RSTP (IEEE 802.1w), față de cele 5 stări ale STP clasic?',
    options: ['2', '4', '3', '6', '5', '1'],
    correctIndex: 2
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele afirmații despre SNMPv1/v2c față de SNMPv3 sunt corecte? (alegeți 2 variante)',
    options: [
      'SNMPv1 și SNMPv2c folosesc community string-uri transmise în clar pentru autentificare',
      'SNMPv3 introduce securitate bazată pe utilizatori cu autentificare și criptare opționale',
      'SNMPv2c a introdus operația GetBulk, care nu exista în SNMPv1 și nici în SNMPv3',
      'SNMPv1 suportă contoare de 64 biți pentru interfețele de mare viteză; SNMPv2c nu',
      'SNMPv3 este compatibil retroactiv cu community string-urile SNMPv1 pentru dispozitive vechi',
      'SNMPv2c folosește TCP în locul UDP pentru livrarea fiabilă a datelor de management'
    ],
    correctIndices: [0, 1]
  },
  {
    type: 'multiple-choice',
    text: 'Un router primește un pachet IPv4 cu bitul DF (Don\'t Fragment) setat, dar dimensiunea pachetului depășește MTU-ul interfeței de ieșire. Ce acțiune va întreprinde router-ul?',
    options: [
      'Fragmentează pachetul ignorând bitul DF, deoarece livrarea are prioritate față de flaguri',
      'Bufferează pachetul și așteaptă creșterea MTU-ului pe calea de ieșire',
      'Elimină câmpurile opționale din header-ul IPv4 pentru a reduce dimensiunea sub MTU',
      'Retransmite pachetul nemodificat, delegând reasamblarea destinației finale',
      'Elimină pachetul și trimite un mesaj ICMP Type 3 Code 4 (Fragmentation Needed) înapoi la sursă',
      'Tunelează pachetul supradimensionat într-un header GRE care mărește efectiv MTU-ul disponibil'
    ],
    correctIndex: 4
  },
  {
    type: 'multiple-choice',
    text: 'Care este principalul avantaj al MSTP (IEEE 802.1s) față de Cisco PVST+?',
    options: [
      'MSTP alege un Root Bridge distinct pentru fiecare VLAN, la fel ca PVST+, dar cu timere mai rapide',
      'MSTP grupează mai multe VLAN-uri într-un număr redus de instanțe STP, reducând semnificativ consumul de CPU și memorie',
      'MSTP convergează mai rapid deoarece folosește intern STP clasic, în timp ce PVST+ folosește RSTP',
      'MSTP elimină complet necesitatea unui Root Bridge folosind un algoritm de elecție distribuit',
      'MSTP suportă până la 4094 instanțe STP independente, câte una per VLAN, față de limita de 128 a PVST+',
      'MSTP este singura variantă STP compatibilă cu echipamentele non-Cisco fără configurație suplimentară'
    ],
    correctIndex: 1
  },
  {
    type: 'open-ended',
    text: 'Care este valoarea zecimală a numărului binar 10110110? (scrieți doar numărul întreg)',
    acceptedAnswers: ['182'],
  },
  {
    type: 'multiple-choice',
    text: 'Un router are un ACL cu intrările de mai jos, procesate în ordine:\n  10: permit ip 192.168.1.0 0.0.0.255 any\n  20: deny   ip 192.168.1.64 0.0.0.31 any\n  30: permit ip any any\nCe se întâmplă cu un pachet primit de la adresa sursă 192.168.1.80?',
    options: [
      'Pachetul este blocat de intrarea 20, deoarece 192.168.1.80 se află în rețeaua 192.168.1.64/27 și regula mai specifică prevalează',
      'Pachetul este blocat de deny-ul implicit de la sfârșitul ACL-ului, deoarece nicio intrare nu se potrivește cu adresa sursă',
      'Pachetul este permis de intrarea 30, deoarece intrarea 20 nu se potrivește și router-ul continuă evaluarea listei',
      'Pachetul este permis de intrarea 10, deoarece ACL-urile sunt first-match și 192.168.1.80 se potrivește cu 192.168.1.0/24 înaintea intrării 20',
      'Intrarea 20 are prioritate față de intrarea 10, deoarece prefixele mai lungi sunt mereu preferate în ACL-uri, ca în rutare',
      'Router-ul evaluează toate intrările și aplică decizia intrării cu specificitate cea mai mare, ignorând ordinea numerică'
    ],
    correctIndex: 3
  },
  {
    type: 'multiple-choice',
    text: 'Care este limitarea esențială a unui tunel GRE standard față de un tunel IPsec?',
    options: [
      'GRE nu asigură confidențialitate sau autentificare; encapsulează traficul fără nicio formă de criptare',
      'GRE nu poate transporta trafic multicast sau protocoale de rutare, spre deosebire de IPsec',
      'GRE necesită un modul hardware dedicat de criptare; IPsec poate funcționa complet în software',
      'GRE poate fi stabilit exclusiv între echipamente Cisco; IPsec este neutru față de vendor',
      'GRE nu suportă IPv6 ca protocol pasager în interiorul tunelului',
      'GRE mărește MTU-ul efectiv al legăturii, cauzând fragmentarea tuturor pachetelor IPv4'
    ],
    correctIndex: 0
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următoarele perechi prefix IPv6 – tip de adresă sunt corecte? (alegeți 2 variante)',
    options: [
      'FE80::/10 – adresă unicast link-local, utilizată exclusiv pe același segment de rețea',
      'FC00::/7 – adresă Unique Local, echivalent IPv6 al spațiului privat IPv4',
      'FF00::/8 – adresă anycast, utilizată pentru rutarea spre cel mai apropiat membru al unui grup',
      '2001:DB8::/32 – rezervat pentru uz în producție ca adrese unicast global rutabile',
      '::1/128 – rezervat ca adresă de broadcast IPv6 pentru segmentul local',
      '2000::/3 – rezervat exclusiv pentru protocoale de tunelizare IPv6-în-IPv4'
    ],
    correctIndices: [0, 1]
  },
  {
    type: 'matching',
    text: 'Asociați fiecare tip de router OSPF cu definiția sa:',
    subQuestions: [
      { text: 'Toate interfețele sale se află în aceeași arie OSPF.', answer: 'Internal Router' },
      { text: 'Are cel puțin o interfață în Aria 0 (backbone); participă la rutarea interariilor.', answer: 'Backbone Router' },
      { text: 'Conectează două sau mai multe arii OSPF; menține o bază de date separată pentru fiecare arie.', answer: 'ABR' },
      { text: 'Redistribuie rute din protocoale externe (ex: EIGRP, BGP) în domeniul OSPF.', answer: 'ASBR' },
    ],
    options: ['Internal Router', 'Backbone Router', 'ABR', 'ASBR'],
  },
  {
    type: 'multiple-choice',
    text: 'Un client TCP trimite un segment SYN cu numărul de secvență ISN=500. Ce valori vor conține câmpurile seq și ack din răspunsul SYN-ACK al serverului?',
    options: [
      'seq=0, ack=500 – serverul pornește de la 0 și confirmă ISN-ul clientului direct',
      'seq=500, ack=500 – serverul oglindește numărul de secvență al clientului',
      'seq=1, ack=501 – serverul folosește seq=1 fix și confirmă octetul următor așteptat',
      'seq=0, ack=501 – serverul pornește de la 0 și confirmă primul octet așteptat de la client',
      'seq=200, ack=500 – serverul alege un ISN arbitrar și confirmă SYN-ul fără incrementare',
      'seq=<ISN ales de server>, ack=501 – serverul alege propriul ISN și confirmă următorul octet așteptat'
    ],
    correctIndex: 5
  },
  {
    type: 'multiple-choice',
    text: 'Cum realizează PAT (Port Address Translation) diferențierea sesiunilor mai multor hosturi interne care se conectează simultan la același server extern?',
    options: [
      'Modifică exclusiv adresa IP sursă; porturile rămân neschimbate pentru compatibilitate cu aplicațiile',
      'Translatează atât adresa IP sursă cât și adresa IP destinație pentru simetria fluxurilor bidirecționale',
      'Translatează adresa IP sursă la un singur IP public și asignează un port sursă unic fiecărei sesiuni',
      'Modifică exclusiv portul destinație pentru a crea o mapare unică pentru fiecare host intern',
      'Translatează adresa MAC și IP sursă pentru a garanta unicitatea la nivelurile 2 și 3',
      'Translatează portul sursă numai dacă portul original este sub 1024; porturile efemere sunt transmise neschimbat'
    ],
    correctIndex: 2
  },
  {
    type: 'multiple-choice',
    text: 'Ce se întâmplă cu câmpul TTL al unui pachet IPv4 la fiecare salt de router, și ce acțiune se ia când TTL atinge valoarea 0?',
    options: [
      'TTL este decrementat cu 2 la fiecare salt; la 0 router-ul trimite pachetul mai departe cu un flag de avertizare',
      'TTL este resetat la 255 când scade sub 10, pentru a preveni expirarea prematură a pachetului',
      'TTL este decrementat de 1 numai la host-ul destinație; router-ele trimit pachetul nemodificat',
      'TTL este decrementat cu 1; când ajunge la 1 router-ul generează un mesaj ICMP Time Exceeded',
      'TTL este decrementat cu 1 la fiecare router; la 0 pachetul este eliminat și se trimite ICMP Type 11 înapoi la sursă',
      'TTL este decrementat cu 1; la 0 pachetul este trimis spre gateway-ul implicit pentru rezoluție'
    ],
    correctIndex: 4
  },
  {
    type: 'multiple-choice',
    text: 'Care este avantajul principal al permisiunilor NTFS față de sistemul de fișiere FAT32 pe un sistem Windows?',
    options: [
      'NTFS nu are limită de dimensiune per fișier individual, în timp ce FAT32 este limitat la fișiere de maximum 4 GB și partiții de 32 GB',
      'NTFS suportă liste de control al accesului (ACL) granulare pe fișier și director, permițând atribuiri per utilizator și per grup',
      'NTFS este compatibil nativ cu Linux și macOS fără drivere suplimentare, în timp ce FAT32 necesită pachete software terțe',
      'NTFS criptează automat toate datele stocate cu AES-256 fără intervenția utilizatorului, în timp ce FAT32 stochează datele în clar',
      'NTFS oferă operații de citire/scriere mai rapide pe SSD-uri și HDD-uri datorită structurii sale de jurnalizare a metadatelor',
      'NTFS nu necesită defragmentare periodică, în timp ce FAT32 se degradează semnificativ în performanță pe măsura utilizării'
    ],
    correctIndex: 1
  },
  {
    type: 'open-ended',
    text: 'Care este primul IP asignabil unui host din subrețeaua în care se află adresa 192.168.50.130/26? Scrieți IP-ul cu mască fără spații. Exemplu: "192.168.0.1/24" (fără ghilimele).',
    acceptedAnswers: ['192.168.50.129/26'],
  },
  {
    type: 'multiple-choice',
    text: 'Ce nivel de privilegiu pe un router Cisco oferă acces complet la toate comenzile IOS, inclusiv la modul de configurare globală?',
    options: [
      'Nivelul 0 – acordă acces la comenzi de bază precum ping și traceroute',
      'Nivelul 7 – nivelul standard de administrare pe toate echipamentele Cisco',
      'Nivelul 14 – nivel intermediar folosit frecvent de sistemele de monitorizare',
      'Nivelul 15 – acordă acces nerestricționat la toate comenzile IOS, echivalent modului enable',
      'Nivelul 1 – modul EXEC neprivilegiat implicit disponibil după autentificarea pe consolă',
      'Nivelul 10 – folosit de provideri pentru acces de management read-only la distanță'
    ],
    correctIndex: 3
  },
  {
    type: 'multiple-choice-multi',
    text: 'Care dintre următorii parametri trebuie să fie identici între două routere OSPF pentru a stabili o adiacență completă? (alegeți 3 variante)',
    options: [
      'Intervalele Hello și Dead',
      'ID-ul ariei (Area ID)',
      'Router ID-urile celor două routere',
      'Tipul și cheia de autentificare OSPF',
      'Process ID-ul OSPF (pid)',
      'Reference bandwidth configurat cu auto-cost'
    ],
    correctIndices: [0, 1, 3]
  },
  {
    type: 'multiple-choice',
    text: 'Ce algoritm este utilizat pentru calculul câmpului FCS (Frame Check Sequence) la finalul unui cadru Ethernet?',
    options: [
      'CRC-32 (Cyclic Redundancy Check cu un polinom pe 32 de biți)',
      'Hash MD5 aplicat întregului payload al cadrului, trunchiat la 32 de biți',
      'Hash SHA-1 aplicat exclusiv câmpurilor header-ului Ethernet, excluzând payload-ul',
      'XOR pe toți octeții cadrului, cu rezultatul stocat ca întreg big-endian pe 32 de biți',
      'Verificare de integritate bazată pe AES-128, folosit pentru a detecta atât erori cât și manipulări',
      'Paritate calculată pe toți biții cadrului, cu rezultatul umplut la 32 biți'
    ],
    correctIndex: 0
  },
  {
    type: 'multiple-choice',
    text: 'Ce înseamnă "split tunneling" în contextul unui VPN de acces la distanță?',
    options: [
      'Clientul VPN creează două tunele criptate simultan: unul dedicat traficului intern corporativ și altul pentru navigarea pe internet',
      'Gateway-ul VPN distribuie lățimea de bandă disponibilă în mod egal între toți utilizatorii autentificați și conectați simultan',
      'Firewall-ul organizației aplică politici de securitate complet diferite pentru traficul care intră și cel care iese din tunel',
      'Conexiunea VPN este distribuită automat pe mai multe legături ISP redundante pentru disponibilitate ridicată și debit crescut',
      'Clientul VPN criptează numai traficul destinat porturilor de aplicații (nivelul 4+), lăsând managementul de rețea necriptat',
      'Traficul spre resursele corporative trece prin tunelul criptat, iar traficul spre internet iese direct prin ISP-ul local, ocolind tunelul'
    ],
    correctIndex: 5
  },
  {
    type: 'matching',
    text: 'Asociați fiecare standard de securitate wireless cu caracteristica sa principală:',
    subQuestions: [
      { text: 'Folosește cifrul RC4 cu chei statice de 40 sau 104 biți; vulnerabil și abandonat complet.', answer: 'WEP' },
      { text: 'Standard tranzitoriu bazat pe draft IEEE 802.11i; introduce TKIP ca înlocuitor temporar al RC4.', answer: 'WPA' },
      { text: 'Standard complet bazat pe IEEE 802.11i; folosește CCMP/AES și suportă 802.1X pentru Enterprise.', answer: 'WPA2' },
      { text: 'Înlocuiește PSK cu SAE (Simultaneous Authentication of Equals); oferă forward secrecy per sesiune.', answer: 'WPA3' },
    ],
    options: ['WEP', 'WPA', 'WPA2', 'WPA3'],
  },
  {
    type: 'multiple-choice',
    text: 'R1 are interfața Gi0/0 cu Hello interval 10s și Dead interval 40s. R2 are aceeași interfață cu Hello interval 30s și Dead interval 120s. Ambele routere sunt în aceeași arie OSPF. Ce se va întâmpla?',
    options: [
      'Routerele formează adiacența și folosesc valorile mai mari (30s Hello, 120s Dead) prin negociere',
      'Routerele formează adiacența, dar numai dacă folosesc același Process ID și aceeași referință de cost',
      'Routerele nu vor forma adiacență OSPF, deoarece intervalele Hello și Dead trebuie să fie identice',
      'Routerele formează adiacența folosind valorile mai mici (10s Hello, 40s Dead) pentru convergență rapidă',
      'Routerele fac schimb de pachete DBD dar eșuează în starea Loading din cauza nepotrivirii timerelor',
      'Routerele formează adiacența numai dacă ambele timere sunt setate la valorile implicite pentru tipul interfeței'
    ],
    correctIndex: 2
  }
]
});
