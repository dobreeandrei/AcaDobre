window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'simulare_dobre',
  topic: 'Simulare Dobre',
  questions: [
    {
      type: 'multiple-choice',
      text: 'Avem trei routere într-o rețea IPv6, fiecare configurat cu aceeași adresă anycast pe interfața lor fa0/0:\nR1: fe80::1\nR2: fe80::1\nR3: fe80::1\nUn client trimite un pachet IPv6 către această adresă anycast. Care router va răspunde la pachet?',
      options: [
        'R1, pentru că a fost primul configurat',
        'R2, pentru că are cea mai mică adresă MAC',
        'Routerul cel mai apropiat din punct de vedere al metricii de rutare',
        'Toate routerele vor răspunde în același timp',
        'Niciun router nu va răspunde, deoarece adresa este anycast'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Este adevărat că un EtherChannel este văzut de STP ca o singură legătură logică?',
      options: ['Fals', 'Adevărat'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care va fi conținutul tabelei CAM a SW4 în urma trimiterii următoarelor mesaje:\nLaptop0 -> Router1\nLaptop1 -> Laptop0\nLaptop2 -> Router1',
      image: 'subiecte_acad/images/simulare_dobre/q3.png',
      options: [
        'Fa0/1 - MAC Laptop1, MAC Router, MAC Laptop2\nFa0/2 - MAC Laptop0',
        'Fa0/1 - MAC Laptop1, MAC Router\nFa0/2 - MAC Router, MAC Laptop2',
        'Fa0/1 - MAC Router, MAC Laptop1\nFa0/2 - MAC Laptop0',
        'Fa0/1 - MAC Laptop1'
      ],
      correctIndex: 2
    },
    {
      type: 'open-ended',
      text: 'Câte domenii de broadcast sunt în această imagine?',
      image: 'subiecte_acad/images/simulare_dobre/q4.png',
      acceptedAnswers: ['7']
    },
    {
      type: 'multiple-choice-multi',
      text: 'Considerăm că în rețeaua cu Sw0 avem OSPF broadcast, iar RID R1<R3<R4<R6. R2 și R5 au OSPF dezactivat. Care router va deveni DR și care va deveni BDR?',
      image: 'subiecte_acad/images/simulare_dobre/q5.png',
      options: [
        'R1 DR',
        'R2 BDR',
        'R4 DR',
        'R4 BDR',
        'R6 DR',
        'R6 BDR'
      ],
      correctIndices: [3, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Cât timp îi va lua unei interfețe care funcționează în CST să ajungă în modul Forwarding?',
      options: ['15s', '20s', '30s', '45s', '50s'],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care este adresa MAC multicast pentru IPv6?',
      options: [
        '3333.xxxx.xxxx',
        '3333.33xx.xxxx',
        '0100.5exx.xxxx',
        '0100.5e33.xxxx',
        '0133.5exx.xxxx'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care este codul pentru mesajele de eroare ICMPv6 "Beyond the scope of this Address"?',
      options: ['0', '1', '2', '3', '4'],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care este valoarea implicită pentru un grup HSRP?',
      options: ['1', '100', '101', '10', '11', '0'],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Ce tip de adresă este fe80::1?',
      options: ['Link-local', 'Anycast', 'Fanecast', 'Multicast', 'Unicast', 'Dobrecast'],
      correctIndex: 0
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre următoarele combinații în DTP ar rezulta o funcționalitate access? Selectați 2 variante corecte.',
      options: [
        'Dynamic auto -> Dynamic auto',
        'Trunk -> Access',
        'Trunk -> Dynamic auto',
        'Dynamic desirable -> Dynamic auto',
        'Dynamic desirable -> Trunk',
        'Access -> Dynamic Desirable'
      ],
      correctIndices: [0, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele combinații EtherChannel ar rezulta un portchannel funcțional?',
      options: [
        'On - Active',
        'Active - Auto',
        'Desirable - Passive',
        'Passive - Auto',
        'Desirable - Auto'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care protocol FHRP are preemption activat implicit?',
      options: ['VRRP', 'FHRP', 'GLBP', 'AVG', 'HSRP'],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Dintr-un grup GLBP, care router răspunde la mesajele de tip ARP request?',
      options: [
        'Doar AVG',
        'Doar AVF',
        'Atât AVG cât și AVF',
        'Doar routerul activ',
        'Doar routerele standby'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Selectați ordinea corectă a etapelor de funcționare DHCPv6 Stateful:',
      options: [
        'RS RA Solicit Advertise Information-Request Reply',
        'RS RA Solicit Advertise Request Reply',
        'RS RA Discover Offer Request Advertise',
        'RS RA Discover Offer Request Acknowledgement',
        'Solicit Advertise Information-Request Reply',
        'Discover Offer Request Acknowledgement'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice-multi',
      text: 'Din ce este alcătuită o adresă GUA IPv6?',
      options: [
        'Global routing prefix',
        'Subnet ID',
        'Interface ID',
        'Prefix Length',
        'Subnet Mask',
        'Local Routing Prefix'
      ],
      correctIndices: [0, 1, 2, 3]
    },
    {
      type: 'multiple-choice',
      text: 'Pe care VLAN în mod implicit mesajele nu vor avea tag 802.1Q pe un dispozitiv Cisco?',
      options: ['1', '0', '10', '1002', '1003', '1004'],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele metode pot fi folosite pentru ca adresele MAC învățate dinamic să fie introduse în running-config pe un port cu Port-Security?',
      options: ['Static', 'Dynamic', 'Sticky', 'Secure dynamic', 'Learned'],
      correctIndex: 2
    },
    {
      type: 'multiple-choice-multi',
      text: 'Într-un proces EIGRP, ce metrici sunt folosite implicit în calculul rutei?',
      options: ['Bandwidth', 'Delay', 'Load', 'Reliability', 'MTU'],
      correctIndices: [0, 1]
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre următoarele situații pot determina alegerea unui Root Bridge diferit într-o rețea STP?',
      options: [
        'Cost STP mai mic',
        'Adresa IP mai mică',
        'Cost port mai mic',
        'Bridge ID mai mic',
        'Port ID mai mic'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Ce funcție au toate porturile pe un switch Root Bridge?',
      options: [
        'Root port',
        'Designated port',
        'Alternate port',
        'Backup port',
        'Blocked port'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care situație poate împiedica formarea unui EtherChannel?',
      options: [
        'Bandwidth diferit',
        'Protocol EtherChannel diferit',
        'VLAN list diferit pe trunk',
        'Porturi diferite pe switch-uri',
        'Viteze diferite'
      ],
      correctIndices: [1, 2, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Ce tip de rute se adaugă în tabela de rutare automat la conectarea unei rețele?',
      options: [
        'OSPF route',
        'Floating route',
        'Directly connected route',
        'Local route',
        'Static route'
      ],
      correctIndices: [2, 3]
    },
    {
      type: 'multiple-choice',
      text: 'Cum se numește o rută statică introdusă prin next hop?',
      options: [
        'Default route',
        'Floating static route',
        'Recursive Static route',
        'Fully specified static route',
        'Directly attached static route'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Selectați afirmația adevărată:',
      options: [
        'UDP retrimite mesajele pierdute',
        'TCP are codul IP Protocol 7',
        'UDP este un protocol connection-oriented',
        'TCP stabilește o sesiune înainte de a trimite datele efective',
        'UDP folosește mai multe adrese IP decât TCP'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre următoarele sunt metode pentru a prelungi folosirea adreselor IPv4, in ciuda epuizarii?',
      options: ['NAT67', 'NAT', 'Tunneling', 'Triple-stack', 'NAT64'],
      correctIndices: [1, 2, 4]
    },
    {
      type: 'multiple-choice-multi',
      text: 'Selectați dimensiunea și numărul de câmpuri al headerului Ethernet al unui cadru care circulă cu tag 802.1Q (fără trailer!)',
      options: [
        '7 câmpuri',
        '25 octeți',
        '6 câmpuri',
        '8 câmpuri',
        '26 octeți',
        '32 octeți'
      ],
      correctIndices: [2, 4]
    },
    {
      type: 'multiple-choice',
      text: 'În ce structură de date sunt organizate informațiile despre rețele în OSPF înainte ca acestea să fie adăugate în tabela de rutare?',
      options: [
        'Routing table',
        'Neighbour table',
        'LSA Table',
        'Network Database',
        'LSDB'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care mod de încălcare port-security blochează mesajele de la adrese MAC necunoscute, trimite mesaje syslog, crește numărul de încălcări, dar nu închide portul?',
      options: ['Shutdown', 'Restrict', 'Protect', 'Respect', 'Err-disable'],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Subnetați eficient spațiul dat de adresa 153.36.72.45/18 pentru următoarele cerințe de hosturi: 1000, 500, 320, 86, 32, 12.\nCare va fi adresa de broadcast pentru rețeaua cu 32 de hosturi?',
      options: [
        '153.36.72.63',
        '153.36.72.191',
        '153.36.70.127',
        '153.36.71.255',
        '153.36.70.255'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Câte adrese de host sunt într-o rețea cu subnetul /17?',
      options: ['32766', '65534', '4094', '8190', '16382', '2046'],
      correctIndex: 0
    },

    {
      type: 'multiple-choice',
      text: 'Câte adrese erau per rețea în clasa B?',
      options: ['2^14', '2^12', '2^10', '2^16', '2^8'],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Care este adresa de rețea pentru adresa 83.29.101.29/22?',
      options: [
        '83.29.101.0',
        '83.29.96.0',
        '83.29.100.0',
        '83.29.98.0',
        '83.29.100.64'
      ],
      correctIndex: 2
    },
    {
      type: 'open-ended',
      text: 'Calculați a 67-a rețea cu /28 din spațiul dat de adresa 212.45.128.45/20. Scrieți adresa de rețea rezultată în formatul: "a.a.a.a/b"',
      acceptedAnswers: ['212.45.132.32/28']
    },
    {
      type: 'multiple-choice-multi',
      text: 'Cum putem afișa tabela ARP pe un dispozitiv Cisco?',
      options: [
        'show ip arp',
        'show arp',
        'show arp-address-table',
        'show address resolution protocol',
        'show ip route'
      ],
      correctIndices: [0,1]
    },
    {
      type: 'multiple-choice',
      text: 'Care comandă va propaga o rută default prin OSPF?',
      options: [
        'default information originate',
        'default route show',
        'default information spread',
        'ip route 0.0.0.0 0.0.0.0 g0/0',
        'ip route default g0/0/0'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Pe router există următorul ACL:\naccess-list 100 deny ip 192.168.10.0 0.0.0.255 any\naccess-list 100 permit ip any any\nACL-ul este aplicat astfel:\ninterface GigabitEthernet0/0\nip access-group 100 in\nUn pachet cu sursa 192.168.10.25 și destinația 8.8.8.8 intră pe interfața GigabitEthernet0/0.\nCe se va întâmpla cu pachetul?',
      options: [
        'Va face match pe regula permit ip any any și va fi permis',
        'Va face match pe regula deny ip 192.168.10.0 0.0.0.255 any și va fi blocat',
        'Nu va face match pe nicio regulă și va fi permis implicit',
        'Va fi blocat de regula implicită deny any',
        'ACL-ul nu se aplică deoarece destinația nu este în aceeași rețea'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Pe router există următorul ACL:\naccess-list 110 permit tcp any host 10.0.0.10 eq 80\naccess-list 110 deny ip any any\nACL-ul este aplicat astfel:\ninterface GigabitEthernet0/1\nip access-group 110 out\nUn pachet TCP cu sursa 192.168.1.5 și destinația 10.0.0.10, port destinație 80, trebuie să iasă prin GigabitEthernet0/1.\nCe se va întâmpla cu pachetul?',
      options: [
        'Va face match pe regula deny ip any any și va fi blocat',
        'Nu va face match pe nicio regulă și va fi permis implicit',
        'Va fi blocat deoarece ACL-ul este aplicat outbound',
        'Va face match pe prima regulă și va fi permis',
        'Va fi blocat deoarece regula permite doar trafic inbound'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Pe router există următorul ACL:\naccess-list 101 deny tcp any any eq 23\naccess-list 101 permit ip any any\nACL-ul este aplicat astfel:\ninterface GigabitEthernet0/2\nip access-group 101 in\nUn pachet TCP cu sursa 172.16.1.10 și destinația 192.168.1.20, port destinație 23, intră pe GigabitEthernet0/2.\nCe se va întâmpla cu pachetul?',
      options: [
        'Va face match pe regula permit ip any any și va fi permis',
        'Nu va face match pe nicio regulă și va fi permis implicit',
        'Va fi blocat deoarece Telnet este permis doar outbound',
        'Va face match pe regula deny tcp any any eq 23 și va fi blocat',
        'Va face match pe regula implicită permit any any'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Pe router există următorul ACL:\naccess-list 120 permit ip 192.168.1.0 0.0.0.255 any\naccess-list 120 deny ip any any\nACL-ul este aplicat astfel:\ninterface GigabitEthernet0/3\nip access-group 120 in\nUn pachet cu sursa 10.1.1.5 și destinația 172.16.0.1 intră pe GigabitEthernet0/3.\nCe se va întâmpla cu pachetul?',
      options: [
        'Va face match pe prima regulă și va fi permis',
        'Va face match pe regula deny ip any any și va fi blocat',
        'Nu va face match pe nicio regulă și va fi permis implicit',
        'Va fi redirecționat către altă interfață',
        'Va face match pe regula implicită permit ip any any'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Avem următoarele switch-uri:\nSW1: 32768, 00:1A:11:AA:10:01\nSW2: 32768, 00:1F:11:AA:10:02\nSW3: 24576, 00:1A:11:AA:10:03\nSW4: 32768, 00:1A:11:CC:10:04\nSW5: 28672, 00:1A:11:AA:10:05\nSW6: 24576, 00:1D:11:AA:10:06\nSW7: 32768, 00:1A:11:AB:10:07\nSW8: 32768, 00:1A:11:EF:10:08\nCare va deveni Root Bridge?',
      options: ['SW1', 'SW2', 'SW3', 'SW4', 'SW5', 'SW6', 'SW7', 'SW8'],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Avem următoarele switch-uri:\nSW1: 32768, 00:1C:22:BB:20:11\nSW2: 32768, 00:1C:22:FB:20:12\nSW3: 32768, 00:1C:22:BC:20:13\nSW4: 32768, 00:1C:22:DB:20:14\nSW5: 32768, 00:1C:22:BD:20:15\nSW6: 32768, 00:1C:22:BB:20:10\nCare va deveni Root Bridge?',
      options: ['SW1', 'SW2', 'SW3', 'SW4', 'SW5', 'SW6'],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Avem următoarele routere configurate în același grup HSRP:\nR1: prioritate 110, 192.168.1.1\nR2: prioritate 100, 192.168.1.2\nR3: prioritate 110, 192.168.1.3\nR4: prioritate 90, 192.168.1.4\nR5: prioritate 110, 192.168.1.5\nCare router va deveni Active Router?',
      options: ['R1', 'R2', 'R3', 'R4', 'R5'],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Care comandă afișează tabela CAM pe un switch Cisco?',
      options: [
        'show mac-address-table',
        'show ip mac-table',
        'show mac-table',
        'show address-table',
        'show switching-table'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Care comandă afișează vecinii OSPF pe un router Cisco?',
      options: [
        'show ospf database',
        'show ip ospf adjacency',
        'show ip ospf neighbor',
        'show ospf neighbors',
        'show ip route ospf'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care comandă afișează tabela NAT pe un router Cisco?',
      options: [
        'show ip nat table',
        'show nat translations',
        'show ip nat translations',
        'show ip nat statistics',
        'show nat sessions'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Pe un switch Cisco este activată funcția Port Security pe un port FastEthernet:\nswitchport port-security maximum 2\nswitchport port-security violation restrict\nswitchport port-security mac-address sticky\n\nUn utilizator conectează un al treilea dispozitiv pe port?',
      options: [
        'Portul se închide complet',
        'Pachetul este blocat, se trimite mesaj syslog și contorul de încălcări crește',
        'Pachetul este blocat, dar nu se trimite nicun mesaj syslog',
        'Portul permite automat și acest dispozitiv',
        'Switch-ul resetează întreaga interfață',
        'Toate dispozitivele rămân conectate fără restricții',
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care metodă este folosită pentru a preveni atacurile VLAN Hopping pe un switch Cisco?',
      options: [
        'Configurarea switchport mode trunk pe toate porturile',
        'Schimbarea VLAN-ului nativ pe un VLAN neutilizat',
        'Dezactivarea DTP',
        'Activarea Port Security pe toate porturile',
        'Folosirea HSRP pe VLAN-ul nativ',
        'Activarea Dynamic ARP Inspection'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care tip de atac încearcă să epuizeze tabela CAM a unui switch prin trimiterea unui număr mare de adrese MAC false?',
      options: [
        'ARP Spoofing',
        'MAC Flooding',
        'MAC Spoofing',
        'DHCP Starvation',
        'DNS Poisoning',
        'VLAN Hopping'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Care principiu de securitate presupune acordarea utilizatorilor doar a drepturilor strict necesare pentru a-și îndeplini sarcinile?',
      options: [
        'Defense in Depth',
        'Least Privilege',
        'Zero Trust',
        'Confidentiality',
        'Integrity',
        'Fail Secure',
        'Redundancy'
      ],
      correctIndex: 1
    },
  ]
});
