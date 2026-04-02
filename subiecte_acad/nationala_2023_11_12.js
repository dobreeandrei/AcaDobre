window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'nationala_2023_11_12',
  topic: 'Nationala 11-12 2023',
  questions: [
    {
      type: 'multiple-choice',
      text: 'Care este rolul Root Bridge în Spanning Tree Protocol (STP) și cum este determinat?',
      options: [
        'Root bridge este responsabil pentru determinarea celui mai bun traseu intre switch-uri si este switch-ul cu cel mai mic Bridge ID',
        'Root Bridge este responsabil pentru prevenirea buclelor în rețea și este switch-ul cu cea mai mare adresă MAC.',
        'Root Bridge este responsabil pentru controlul traficului de rețea și este switch-ul cu cea mai mare valoare de prioritate.',
        'Root Bridge este responsabil pentru gestionarea apartenența la VLAN și este switch-ul cu cele mai multe porturi disponibile.',
        'Root Bridge este responsabil pentru determinarea celui mai bun traseu între switch-uri și este switch-ul cu cea mai mică adresă MAC.',
        'Root Bridge este responsabil pentru rutarea traficului de rețea și este determinat automat de algoritmul STP.',
        'Root Bridge este responsabil pentru forwardarea traficului între VLAN-uri și este configurat manual de administratorul de rețea.'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Ce protocol de rutare utilizează rutarea prin Path Vector și este frecvent utilizat în rețelele de întreprindere la scară largă?',
      options: [
        'Intermediate System-to-Intermediate System (IS-IS)',
        'Open Shortest Path First (OSPF)',
        'Enhanced Interior Gateway Routing Protocol (EIGRP)',
        'Routing Table Protocol (RTP)',
        'Border Gateway Protocol (BGP)',
        'Routing Information Protocol (RIP)'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Cum puteți configura LACP pe un interval de porturi în EtherChannel astfel încât LACP să fie activat doar când portul primește pachete LACP de la un alt dispozitiv?',
      options: ['on', 'passive', 'none of the above', 'desirable', 'active', 'auto'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care două protocoale de rutare sunt considerate protocoale de rutare dinamică link-state și ar fi potrivite pentru implementare conform cererii unui CIO? (Alegeți 2)',
      options: ['IS-IS', 'EIGRP', 'RIPv2', 'niciuna din variante', 'BGP', 'OSPF'],
      correctIndices: [0, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Care afirmație descrie cu exactitate modul în care funcționează protocoalele de rutare de tip distance vector?',
      options: [
        'Trimit actualizări doar când o rețea nouă este adăugată.',
        'Utilizează doar numărul de hopuri ca metrică.',
        'Trimit tabelele de rutare vecinilor direct conectați.',
        'Au cunoaștere completă a topologiei rețelei.',
        'Inundă întreaga rețea cu actualizări de rutare.',
        'Utilizează informațiile link-state pentru a-și construi tabelele de rutare.'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele definește viteza de convergență a protocoalelor de rutare?',
      options: [
        'Timpul necesar pentru ca actualizările de rutare să se propage în întreaga rețea.',
        'Timpul necesar unui router pentru a forma o adiacență cu un vecin.',
        'Timpul necesar unui router pentru a procesa actualizările de rutare.',
        'Timpul necesar unui router dintr-o rețea pentru a transmite informații de rutare.',
        'Timpul necesar unui router pentru a afla despre legăturile direct conectate.',
        'Timpul necesar unui router pentru a calcula costul unei legături.'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Ce pachet OSPF este utilizat pentru a solicita înregistrări specifice de stare a legăturii de la routerele vecine?',
      options: ['DBD', 'Hello', 'LSU', 'LSR', 'LSAck', 'Niciuna din variante'],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'În ce două moduri poate funcționa funcția BPDU Guard în STP?',
      options: [
        'Auto și Manual',
        'Normal și Agresiv',
        'Detectare și Prevenire',
        'Shared și Isolated',
        'Errdisable și Protect',
        'Agresiv și Pasiv'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre următoarele reprezintă un avantaj al utilizării DHCP pentru atribuirea adreselor IP într-o rețea? (Alegeți 3)',
      options: [
        'Simplifică gestionarea adreselor IP prin centralizarea ei pe serverul DHCP.',
        'Oferă securitate mai bună prin prevenirea accesului neautorizat la rețea.',
        'Permite atribuirea mai rapidă a adreselor IP față de configurarea manuală.',
        'Asigură atribuirea consecventă a adreselor IP pe toate dispozitivele.',
        'Permite echilibrarea încărcării traficului de rețea pe mai multe servere.',
        'Îmbunătățește performanța rețelei prin reducerea traficului broadcast.'
      ],
      correctIndices: [0, 2, 3]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care este principalul beneficiu al utilizării instrumentelor de automatizare a rețelei într-un mediu de rețea la scară largă? (Alegeți 2)',
      options: [
        'Reduce probabilitatea erorilor umane și crește viteza modificărilor de configurare.',
        'Oferă securitate mai bună prin criptarea întregului trafic de rețea.',
        'Crește redundanța rețelei prin furnizarea mai multor căi pentru transmisia datelor.',
        'Permite rate de transfer mai rapide și reduce latența.',
        'Reduce costul operațiunilor de rețea prin minimizarea nevoii de configurare și depanare manuală.',
        'Îmbunătățește performanța rețelei prin optimizarea topologiei și rutării.'
      ],
      correctIndices: [0, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Care este un dezavantaj al utilizării OSPF în rețele mari?',
      options: [
        'OSPF necesită calcule SPF frecvente, care pot consuma mult CPU și încetini performanța rețelei.',
        'OSPF nu suportă utilizarea mai multor arii, ceea ce poate duce la tabele de rutare mai mari și calcule SPF excesive.',
        'OSPF poate deveni instabil și poate rezulta în rutare suboptimală dacă nu sunt respectate practicile de proiectare corecte.',
        'OSPF nu suportă conceptul de link-uri virtuale, ceea ce poate îngreuna conectarea ariilor non-backbone.'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care sunt diferențele dintre Link Aggregation Control Protocol (LACP) și Port Aggregation Protocol (PAgP) în EtherChannel?',
      options: [
        'LACP este utilizat pentru echilibrarea încărcării pe baza adreselor IP sursă și destinație, în timp ce PAgP pe baza porturilor TCP/UDP.',
        'LACP este utilizat pentru detectarea și recuperarea automată după defecțiuni, în timp ce PAgP necesită intervenție manuală.',
        'LACP este utilizat pentru EtherChannel de nivel 2, în timp ce PAgP pentru EtherChannel de nivel 3.',
        'LACP este un protocol standard deschis suportat de mai mulți producători, în timp ce PAgP este un protocol proprietar Cisco.',
        'LACP permite negocierea dinamică a legăturilor EtherChannel, în timp ce PAgP suportă doar configurația statică.',
        'LACP este utilizat pentru echilibrarea încărcării pe baza adreselor MAC sursă și destinație, în timp ce PAgP pe baza adreselor IP.',
        'Nu există diferențe între LACP și PAgP în EtherChannel.'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care două informații sunt conținute în pachetele Hello OSPFv3 și nu se regăsesc în pachetele Hello OSPFv2? (Alegeți 2)',
      options: [
        'adresa IPv6 link-local',
        'câmpul options',
        'masca de rețea',
        'ID-ul routerului',
        'informații DR și BDR'
      ],
      correctIndices: [0, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Ce atac de securitate urmărește să intercepteze și să modifice comunicarea dintre două părți fără ca niciuna dintre ele să știe?',
      options: [
        'ascultare neautorizată (eavesdropping)',
        'inginerie socială',
        'malware',
        'DDoS',
        'phishing',
        'man-in-the-middle (MitM)'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele descrie cel mai bine un „honeypot"?',
      options: [
        'O tehnică de scanare a rețelei care indică hosturile active dintr-un interval de adrese IP',
        'Un dispozitiv de securitate al rețelei care analizează și controlează traficul pentru a preveni accesul neautorizat',
        'Un instrument utilizat pentru testarea securității rețelei prin trimiterea de trafic malițios',
        'Un dispozitiv care atrage atacatorii într-un sistem și îi blocheaza, pentru a le monitoriza și studia activitățile',
        'Un protocol care furnizează comunicații securizate pe o rețea nesecurizată',
        'Un program software care permite capturarea tuturor pachetelor de rețea transmise în LAN'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Ce este un VPN?',
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
    {
      type: 'multiple-choice',
      text: 'La configurarea NAT, care este scopul adresei locale interne (inside local)?',
      options: [
        'Maparea unei adrese locale interne la o adresă globală internă.',
        'Identificarea unică a unui host atât în rețeaua internă, cât și în cea externă.',
        'Maparea unei adrese locale interne la o adresă globală externă.',
        'Identificarea unică a unui host în rețeaua externă.',
        'Identificarea unică a unui host în rețeaua internă.',
        'Niciuna din variante.'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care este diferența dintre NAT static și NAT dinamic?',
      options: [
        'NAT static necesită utilizarea ACL, în timp ce NAT dinamic nu.',
        'NAT static creează o mapare unu-la-unu între o adresă locală internă și o adresă globală internă, în timp ce NAT dinamic utilizează un pool de adrese globale.',
        'NAT static poate fi configurat doar pe routere de granita, în timp ce NAT dinamic poate fi configurat pe orice router.',
        'NAT static este utilizat pentru traficul de ieșire, în timp ce NAT dinamic pentru traficul de intrare.',
        'NAT static este mai nesigur decât NAT dinamic.'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care este scopul comenzii ip nat outside source?',
      options: [
        'Configurarea unui pool NAT pentru NAT dinamic.',
        'Maparea unei adrese locale externe la o adresă globală internă.',
        'Maparea unei adrese locale interne la o adresă globală externă.',
        'Configurarea interfeței routerului ca interfață externă.',
        'Specificarea unei liste de adrese IP care au acces la rețeaua internă.'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Cum afectează NAT performanța rețelei?',
      options: [
        'NAT poate îmbunătăți performanța rețelei prin creșterea securității.',
        'NAT poate degrada performanța rețelei prin introducerea de latență suplimentară.',
        'NAT poate îmbunătăți performanța rețelei prin reducerea numărului de adrese IP publice necesare.',
        'NAT poate îmbunătăți performanța rețelei prin activarea echilibrării încărcării.',
        'NAT poate degrada performanța rețelei prin necesitatea unei configurații suplimentare.'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele NU este un tip valid de adresă IPv6?',
      options: [
        'Unique local',
        'Anycast',
        'Link-local',
        'Broadcast',
        'GUA',
        'Multicast'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele câmpuri din antet NU este prezent într-un pachet IPv6?',
      options: [
        'Flow label',
        'Adresă destinație',
        'Adresă sursă',
        'Hop Limit',
        'Protocol',
        'Checksum'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Care este diferența dintre EtherChannel static și dinamic și care sunt avantajele și dezavantajele fiecărei metode?',
      options: [
        'EtherChannel static este mai ușor de depanat, în timp ce cel dinamic este mai sigur.',
        'EtherChannel static necesită mai puțin overhead administrativ, în timp ce cel dinamic oferă o echilibrare mai bună a încărcării.',
        'EtherChannel static oferă mai mult control, în timp ce cel dinamic este mai ușor de implementat.',
        'EtherChannel static este configurat manual, în timp ce cel dinamic utilizează mesaje pentru a negocia legăturile.',
        'EtherChannel static este mai fiabil, în timp ce cel dinamic este mai flexibil.',
        'EtherChannel static suportă mai multe legături, în timp ce cel dinamic suportă recuperare mai rapidă după defecțiuni.'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele mesaje ICMP este utilizat de routerele IPv6 pentru a informa expeditorul că pachetul nu poate fi transmis mai departe?',
      options: [
        'Redirect',
        'Neighbor Advertisement',
        'Packet Too Big',
        'Time Exceeded',
        'Destination Unreachable',
        'Neighbor Solicitation'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele NU este un tip de concept de comutare în rețelistica computerelor?',
      options: [
        'Cell Switching',
        'Packet Switching',
        'Circuit Switching',
        'Node Switching',
        'Frame Switching',
        'Message Switching'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele metode de rutare inter-VLAN necesită utilizarea unei interfețe virtuale?',
      options: [
        'Router-on-a-stick',
        'Rutare bazată pe politici',
        'Rutare statică',
        'Rutare bazată pe NAT',
        'Rutare dinamică',
        'Switch de nivel 2'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care protocol de rutare este clasificat ca protocol de rutare distance vector și utilizează numărul de hopuri ca metrică pentru a determina cel mai bun traseu?',
      options: ['OSPF', 'BGP', 'EIGRP', 'IS-IS', 'HSRP', 'RIP'],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Care protocol de rutare este clasificat ca protocol de rutare link-state și utilizează algoritmul Dijkstra pentru a calcula cel mai scurt traseu?',
      options: ['HSRP', 'IS-IS', 'BGP', 'OSPF', 'RIP', 'EIGRP'],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Care tip de mesaj DHCPv4 este utilizat de un client DHCP pentru a solicita un lease de adresă IP de la un server DHCP?',
      options: [
        'DHCPREQUEST',
        'DHCPDECLINE',
        'DHCPACK',
        'DHCPDISCOVER',
        'DHCPNAK',
        'DHCPOFFER'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care este scopul tipului de mesaj DHCPv4 DHCPRELEASE?',
      options: [
        'Informarea serverului DHCP că dispozitivul a întâmpinat o eroare',
        'Confirmarea primirii unui lease de adresă IP de la serverul DHCP',
        'Informarea serverului DHCP că dispozitivul eliberează lease-ul de adresă IP',
        'Respingerea unui contract de adresă IP oferit de serverul DHCP',
        'Solicitarea informațiilor despre lease-urile de adresă IP disponibile de la serverul DHCP',
        'Solicitarea unui nou lease de adresă IP de la serverul DHCP'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele înregistrări de resurse DNS este utilizată pentru a mapa o adresă IP la un hostname?',
      options: ['MX', 'SOA', 'A', 'NS', 'PTR', 'CNAME'],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele este un principiu de securitate a rețelei bazat pe conceptul de privilegiu minim?',
      options: [
        'Configurarea firewall-ului',
        'Controlul accesului bazat pe roluri',
        'Sisteme de detectare a intruziunilor',
        'Segmentarea rețelei',
        'Prevenirea atacurilor de tip denial-of-service',
        'Liste de control al accesului'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care este scopul unui sistem de prevenire a intruziunilor (IPS) în securitatea rețelei?',
      options: [
        'Monitorizarea traficului de rețea și identificarea potențialelor amenințări de securitate',
        'Detectarea și blocarea traficului malițios care încearcă să exploateze vulnerabilități cunoscute',
        'Monitorizarea activității utilizatorilor și aplicarea politicilor de securitate',
        'Prevenirea accesului neautorizat la resursele rețelei',
        'Prevenirea atacurilor de tip denial-of-service prin filtrarea traficului',
        'Criptarea traficului de rețea pentru a preveni ascultarea neautorizată'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce comandă poate fi utilizată pentru a crea o rută statică pe un router Cisco?',
      options: [
        'ip route <rețea_destinație> <mască_subrețea> <adresă_next_hop> 0 0 50',
        'ip route <rețea_destinație> <mască_subrețea> <adresă_next_hop> tag <număr_tag>',
        'Niciuna din variante',
        'ip route <rețea_destinație> <mască_subrețea> <adresă_next_hop> distance <valoare_distanță>',
        'ip route <rețea_destinație> <mască_subrețea> <adresă_next_hop> <valoare_distanță>',
        'ip route <rețea_destinație> <mască_subrețea> <adresă_next_hop> 1 2 3'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care mecanism de autentificare oferă cel mai înalt nivel de securitate pentru controlul accesului la rețea?',
      options: [
        'Single sign-on',
        'Autentificare biometrică',
        'Autentificare bazată pe certificate',
        'Parole',
        'Carduri inteligente',
        'Autentificare Kerberos'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care este scopul funcției BPDU Guard în STP?',
      options: [
        'Prevenirea buclelor cauzate de defecțiuni unidirecționale ale legăturii',
        'Furnizarea redundanței suplimentare rețelei',
        'Permiterea mai multor VLAN-uri să partajeze aceleași legături fizice',
        'Detectarea switch-urilor neautorizate și dezactivarea porturilor acestora',
        'Configurarea automată a porturilor de switch cu setările STP optime',
        'Limitarea cantității de trafic broadcast în rețea'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Cum diferă protocolul Rapid PVST+ față de protocolul original PVST și care două funcții îl activează?',
      options: [
        'Rapid PVST+ permite mai multor instanțe spanning tree să ruleze pe același switch; MST și RSTP',
        'Rapid PVST+ suportă un timp de convergență mai rapid și o utilizare mai mică a CPU; UplinkFast și BackboneFast',
        'Rapid PVST+ utilizează un alt algoritm pentru a calcula root bridge-ul; RootGuard și LoopGuard',
        'Rapid PVST+ reduce numărul de BPDU-uri schimbate între switch-uri; PortFast și BPDU Filter',
        'Rapid PVST+ oferă suport mai bun pentru VLAN-uri cu configurații nepotrivite; PVLAN și VLAN Trunking',
        'Rapid PVST+ permite echilibrarea încărcării pe căi de cost egal; ECMP și LACP'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Ce mod EtherChannel grupează porturile cu aceleași setări de viteză și duplex, și ce două protocoale sunt utilizate pentru a negocia agregarea legăturilor?',
      options: [
        'On; Static și Passive',
        'LACP; Passive și Aggressive',
        'On; Dynamic și Auto',
        'LACP; Dynamic și Active',
        'PAgP; Active și Passive',
        'PAgP; Desirable și Auto'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Ce tip de metodă de load balancing EtherChannel utilizează un hash al adreselor MAC sursă și destinație, și ce alte două metode pot fi combinate cu aceasta?',
      options: [
        'Round-Robin; Destination-MAC și Destination-IP',
        'Round-Robin; Source-IP și Destination-MAC',
        'Destination-MAC; Source-MAC și Round-Robin',
        'Destination-IP; Source-IP și Round-Robin',
        'Source-MAC; Source-IP și Round-Robin',
        'Source-MAC; Destination-IP și Source-IP'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care este scopul grupării mai multor interfețe fizice într-o interfață logică de tip port channel folosind EtherChannel?',
      options: [
        'Permițând utilizarea mai multor VLAN-uri pe o singură interfață',
        'Simplificarea configurației dispozitivelor de rețea',
        'Creșterea lățimii de bandă și redundanța',
        'Activarea protocoalelor de rutare de nivel 3 pe un switch',
        'Crearea unei interfețe virtuale cu propria adresă IP',
        'Creșterea vitezei fiecărei interfețe fizice'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'În terminologia FHRP, ce reprezintă un set de routere care prezintă iluzia unui singur router hosturilor?',
      options: [
        'Router virtual',
        'Cluster de routere',
        'Router în standby',
        'Grup de routere master',
        'Router de forwardare',
        'Default gateway'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care este scopul FHRP și ce două protocoale sunt frecvent utilizate în implementarea sa?',
      options: [
        'Activarea convergenței mai rapide a legăturilor în rețelele comutate; STP și RSTP',
        'Configurarea automată a VLAN-urilor pe un switch; VTP și DTP',
        'Furnizarea redundanței pentru default gateway-uri în caz de defecțiune a unui router; HSRP și VRRP',
        'Echilibrarea încărcării pe căi de cost egal; ECMP și LACP',
        'Securizarea accesului la dispozitivele de rețea prin autentificarea utilizatorilor; 802.1X și RADIUS',
        'Activarea protocoalelor de rutare dinamică între routere; OSPF și EIGRP'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care este scopul valorii de prioritate în FHRP și care doi factori determină routerul activ dintr-un grup?',
      options: [
        'Valoarea de prioritate determină routerul activ; cea mai mică prioritate și cea mai mare adresă IP',
        'Valoarea de prioritate determină routerul activ; ID-ul routerului și adresa IP a interfeței',
        'Valoarea de prioritate determină routerul activ; numărul de interfețe și memoria disponibilă',
        'Valoarea de prioritate determină ordinea de selectare a routerului activ; viteza legăturii și modul duplex',
        'Valoarea de prioritate determină ordinea de selectare a routerului activ; ID-ul routerului și hostname-ul',
        'Valoarea de prioritate determină routerul activ; cea mai mare prioritate și cea mai mare adresă MAC',
        'Valoarea de prioritate determina ordinea de selectare a routerului activ; cea mai mare prioritate si cea mai mare adresa IP'
      ],
      correctIndex: 6
    },
    {
      type: 'multiple-choice',
      text: 'Ce protocol VLAN este utilizat pentru a propaga automat informațiile despre VLAN-uri între switch-uri?',
      options: [
        'Niciuna din variante',
        'VLAN Trunking Protocol (VTP)',
        'Spanning Tree Protocol (STP)',
        'Port Aggregation Protocol (PAgP)',
        'Link Aggregation Control Protocol (LACP)',
        'Layer 2 Tunneling Protocol (L2TP)'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care este scopul principal al unei liste de control al accesului (ACL) pe un dispozitiv de rețea?',
      options: [
        'Permiterea sau refuzarea traficului pe baza unor criterii specificate',
        'Filtrarea și redirecționarea traficului pe baza adreselor MAC',
        'Aplicarea politicilor de Calitate a Serviciului (QoS) pentru diferite tipuri de trafic',
        'Echilibrarea încărcării traficului pe mai multe legături',
        'Criptarea și decriptarea datelor în timp ce traversează rețeaua',
        'Furnizarea redundanței și failover pentru conexiunile de rețea'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele protocoale de nivel transport furnizează un serviciu de transfer de date fiabil, orientat pe conexiune?',
      options: [
        'Niciuna din variante',
        'User Datagram Protocol (UDP)',
        'Internet Control Message Protocol (ICMP)',
        'Transmission Control Protocol (TCP)',
        'File Transfer Protocol (FTP)',
        'Simple Mail Transfer Protocol (SMTP)'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Ce nivel OSI este responsabil pentru rutarea pachetelor între rețele diferite?',
      options: [
        'Nivelul 3: Rețea',
        'Nivelul 4: Transport',
        'Nivelul 5: Sesiune',
        'Nivelul 2: Legătură de date',
        'Nivelul 6: Prezentare',
        'Nivelul 1: Fizic'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care interval de adrese IPv4 este rezervat pentru traficul multicast?',
      options: [
        '240.0.0.0/4',
        '10.0.0.0/8',
        '172.16.0.0/12',
        '0.0.0.0/8',
        '224.0.0.0/4',
        '127.0.0.0/8'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care tip de adresă IPv6 este utilizat pentru a identifica o interfață specifică a unui dispozitiv de rețea care nu poate fi rutata prin internet?',
      options: [
        'Adresă Multicast',
        'Adresă Anycast',
        'Adresă Loopback',
        'Adresă Globală',
        'Adresă Unicast',
        'Adresă Link-local'
      ],
      correctIndex: 5
    }
  ]
});
