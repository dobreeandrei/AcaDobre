window.ACADOBRE_ALT_QUESTIONS.push({
  id: 'locala_2023_1_11_12',
  topic: 'Locală (1) 11-12 2023',
  questions: [
    {
      type: 'multiple-choice',
      text: 'Administratorul rețelei a decis să securizeze rețeaua în care se află Switch2. În urma configurărilor aduse lui Switch2, după ce PC6 și PC7 au trimis pachete către Router3, portul Fa0/2 al acestuia s-a oprit. Care este cauza acestei probleme?',
      image: 'subiecte_acad/images/locala_2023_1_1112/q1.png',
      options: [
        'Router3 a comandat închiderea portului Fa0/2.',
        'S-a configurat un număr maxim de 3 adrese MAC, fapt ce a determinat închiderea portului Fa0/2.',
        'Portul Fa0/2 are configurat port-security violation level shutdown, fapt ce a determinat închiderea portului.',
        'PC8 este conectat la portul Fa0/2, fapt ce a determinat oprirea portului.',
        'Numărul maxim de adrese mac care pot fi înregistrate pe portul Fa0/2 este mai mare decât numărul de calculatoare conectate',
        'Portul Fa0/2 are configurat port-security violation level protect, fapt ce a determinat închiderea portului.'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Pe Router4 s-a configurat un server DHCP, iar pe Switch2 s-a activat funcția „DHCP snooping". PC5, PC6 și Laptop1 nu reușesc să obțină IP și Default gateway de la acesta. Dintre soluțiile propuse, care ar putea soluționa eroarea?\nPe Router4 a fost folosită comanda:\nip dhcp relay information trust-all\nConfigurație Switch2:\nSwitch2>enable\nSwitch2#configure terminal\nSwitch2(config)#ip dhcp snooping',
      image: 'subiecte_acad/images/locala_2023_1_1112/q2.png',
      options: [
        'Interfața Fa0/1 a Switch2 trebuie introdusă în DHCP snooping trust.',
        'Pe interfața Fa0/1 a Switch2, trebuie setat un IP.',
        'Pe interfața Fa0/1 a Switch2 trebuie dată comanda „shutdown"',
        'Interfețele Fa0/2, Fa0/3 și Fa0/4 trebuie introduse în DHCP snooping trust.',
        'Serverul DHCP trebuie resetat, deoarece se adresează echipamentelor conectate la interfața Gig0/0 a Router4',
        'Pe interfața Gig0/2 a Router4 trebuie setat un IP din gama 30.30.30.2 - 30.30.30.126'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice-multi',
      text: 'Interfața gigabitEthernet 0/2 a Router5 a fost configurată drept RoAS.\nRouter5(config)#interface gigabitEthernet 0/2\nRouter5(config-if)#interface gigabitEthernet 0/2.10\nRouter5(config-subif)#encapsulation dot1q 20\nRouter5(config-subif)#ip address 192.168.0.1 255.255.255.128\nRouter5(config-subif)#interface gigabitEthernet 0/2.20\nRouter5(config-subif)#encapsulation dot1q 10\nRouter5(config-subif)#ip address 192.168.100.1 255.255.255.192\nRouter5(config-subif)#interface gigabitEthernet 0/1\nRouter5(config-if)#int gigabitEthernet 0/2\nRouter5(config-if)#no shutdown\nCu toate acestea PC1 nu poate trimite pachete ICMP către PC2. Care ar putea fi cauzele acestor probleme? Selectați 2 răspunsuri.\nEchipamentele din rețeaua 192.168.0.0/25 fac parte din VLAN 10, iar cele din rețeaua 192.168.100.0/26 fac parte din VLAN 20.',
      image: 'subiecte_acad/images/locala_2023_1_1112/q3.png',
      options: [
        'IP-ul setat drept default gateway pentru PC1 este greșit',
        'Deoarece PC1 are setat un IPv6, acesta nu poate trimite pachete ICMP către adresa IPv4 a lui PC2',
        'Portul gigabitEthernet 0/2 al Router5 este administratively down.',
        'Switch0 are portul fastEthernet 0/1 setat în modul access.',
        'PC1 are setat un IP care face parte din rețeaua 192.168.100.0/26',
        'Interfața logică gigabitEthernet 0/2.10 ar fi trebuit configurată pentru VLAN 10, nu VLAN 20'
      ],
      correctIndices: [0, 5]
    },
    {
      type: 'multiple-choice',
      text: 'Ce configurații ar trebui făcute pe Switch0 și Switch1 pentru a facilita o legătură EtherChannel tip PagP?\nAmbele switch-uri folosesc interfetele fa0/1, fa0/2, fa0/3 și fa0/4 pentru legătura dintre ele.',
      image: 'subiecte_acad/images/locala_2023_1_1112/q4.png',
      options: [
        'Switch0:\nenable\nconfigure terminal\nint range fa0/1-4\nchannel-group 2 mode passive\nSwitch1:\nenable\nconfigure terminal\nint range fa0/1-4\nchannel-group 2 mode passive',
        'Switch0:\nenable\nconfigure terminal\nint range fa0/1-4\nchannel-group 2 mode on\nSwitch1:\nenable\nconfigure terminal\nint range fa0/1-4\nchannel-group 2 mode desirable',
        'Nu se poate face o legatura de tip EtherChannel deoarece nu există suficiente legături de tip FastEthernet între cele 2 switch-uri.',
        'Switch0:\nenable\nconfigure terminal\nint range fa0/1-4\nchannel-group 2 mode auto\nSwitch1:\nenable\nconfigure terminal\nint range fa0/1-4\nchannel-group 2 mode auto',
        'Switch0:\nenable\nconfigure terminal\nint range fa0/1-4\nchannel-group 2 mode on\nSwitch1:\nenable\nconfigure terminal\nint range fa0/1-4\nchannel-group 2 mode active',
        'Switch0:\nenable\nconfigure terminal\nint range fa0/1-4\nchannel-group 2 mode desirable\nSwitch1:\nenable\nconfigure terminal\nint range fa0/1-4\nchannel-group 2 mode desirable'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Router2 primește un pachet ICMP cu destinația 10.10.10.228/28. Către ce echipament se va trimite pachetul?',
      image: 'subiecte_acad/images/locala_2023_1_1112/q5.png',
      options: [
        'Router3',
        'Router1',
        'Switch0',
        'Switch1',
        'Router2',
        'Router4'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice-multi',
      text: 'Administratorul rețelei a decis că nu mai dorește să folosescă configurația RouterOnAStick de pe interfața gigabitEthernet 0/0 a lui Router1, așa că a mai adăugat un cablu între Switch0 și acesta.\nCe configurații trebuie făcute pentru a facilita rutarea legacy între VLAN 10 și VLAN 20? Alegeți 4 răspunsuri.\nLui VLAN 10 i se atribuie rețeaua 10.10.10.0/24, iar lui VLAN 20 rețeaua 20.20.20.0/24.',
      image: 'subiecte_acad/images/locala_2023_1_1112/q6.png',
      options: [
        'Nu este posibilă routarea între vlan-uri, deoarece este nevoie de 2 routere.',
        'Se sterg configuratiile pentru trunk si access vlan de pe interfetele switch-urilor.',
        'Se configurează gigabitEthernet 0/1 cu ip 20.20.20.1 255.255.255.0.',
        'Trebuie reconfigurat portul gigabitEthernet 0/0 cu ip 10.10.10.1 255.255.255.0.',
        'Trebuie ștearsă configurația de pe interfața gigabitEthernet 0/0.',
        'Se activeaza intervlan routing.'
      ],
      correctIndices: [1, 2, 3, 4]
    },
    {
      type: 'multiple-choice',
      text: 'Ce configurații mai trebuie să fie făcute pentru a finaliza setarea interfeței FastEthernet0/0 a Router3 drept RouterOnAStick?\nLui VLAN 10 i se atribuie rețeaua 10.10.10.0/24, iar lui VLAN 20 rețeaua 20.20.20.0/24.',
      image: 'subiecte_acad/images/locala_2023_1_1112/q7.png',
      options: [
        'Asignarea IP-ului 10.10.10.1/24 pe interfața FastEthernet0/0.20',
        'Configurarea pentru încapsulare dot1q 20 și asignarea IP-ului 20.20.20.1/24 pe interfața FastEthernet 0/0.10',
        'Asigurarea integrității memoriei NVRAM',
        'Asignarea IP-ului 20.20.20.270/24 pe interfața gigabitEthernet 0/0.20',
        'Configurarea Router1 drept switch',
        'Configurarea încapsulării dot1q 20 și asignarea IP-ului 20.20.20.1 pe interfața logică fastEthernet 0/0.20'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Pe Router1 s-au făcut modificări conform imaginii de mai jos. Cu toate acestea, Laptop0, Laptop1 și Laptop2 nu își pot configura adresele IPv6 automat, folosind SLAAC. Ce comandă trebuie dată pe Router1 pentru a face posibilă configurarea automată prin SLAAC?',
      image: 'subiecte_acad/images/locala_2023_1_1112/q8.png',
      options: [
        'Router1>ipv6 unicast-routing',
        'Router1(config)# ipv6 routing',
        'Router1(config-if)#ipv6 routing',
        'Router1#ipv6 routing',
        'Router1# ipv6 unicast-routing',
        'Router1(config)# ipv6 unicast-routing'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre switch-urile din topologie este root bridge pentru VLAN1?',
      image: 'subiecte_acad/images/locala_2023_1_1112/q9.png',
      options: [
        'Switch6',
        'Switch2',
        'Switch5',
        'Switch3',
        'Switch0',
        'Switch1'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Pe Switch1 se fac următoarele configurări:\nSwitch1>enable\nSwitch1#configure terminal\nSwitch1(config)#interface fastEthernet0/2\nSwitch1(config-if)#switchport port-security\nSwitch1(config-if)#switchport port-security violation shutdown\nSwitch1(config-if)#switchport port-security maximum 1\nSwitch1(config-if)#switchport port-security mac-address aaaa.bbbb.cccc\nSwitch1(config-if)#exit\nRouter3 trimite un pachet ICMP către Router4, însă portul Fa0/2 al Switch1 se închide. Selectați cauza acestui comportament.',
      image: 'subiecte_acad/images/locala_2023_1_1112/q10.png',
      options: [
        'Adresa MAC a Router3 este aaaa.bbbb.cccc',
        'Porturile care au activată funcția port-security se închid doar atunci când primesc pachete ICMP',
        'Adresa MAC a Router3 este diferită de aaaa.bbbb.cccc',
        'Switch-ul este un echipament de nivel 2, acesta nefiind capabil să transmită protocoale precum ICMP',
        'Configurarea port security a fost realizată pe modul „shutdown".',
        'Pe interfața Fa0/ a Switch1 nu s-a activat funcția de rutare a pachetelor'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice-multi',
      text: 'Care dintre soluțiile propuse pot face ca legătura port-channel dintre Switch1 și Switch0 să fie funcțională?\nAmbele switch-uri folosesc pentru această legătură interfețele FastEthernet 0/2-4. (Alegeți 2 variante)',
      image: 'subiecte_acad/images/locala_2023_1_1112/q11.png',
      options: [
        'Configurarea interfețelor din channel-group1 ale Switch1 în modul Active',
        'Configurarea interfețelor din channel-group1 ale Switch1 în modul Desirable',
        'Configurarea interfețelor din channel-group1 ale Switch0 în modul Passive',
        'Configuarrea interfețelor din channel-group1 ale Switch0 în modul On',
        'Configurarea unui banner motd pe Switch0',
        'Configurarea interfeței fa0/1 drept switchport în modul trunk'
      ],
      correctIndices: [1, 3]
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre IP-urile propuse poate fi configurat pe interfața Fa0 a PC1, astfel încât acesta să poată transmite pachete către Router2?',
      image: 'subiecte_acad/images/locala_2023_1_1112/q12.png',
      options: [
        '2002:ACAD:2::1/64',
        '2001:ACAD::1:2/32',
        '1998:ACAD:2::2/64',
        '2001::ACAD:1:1/65',
        '2001:ACAD::1:1/128',
        '2001:ACAD:1::2/64'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Pe Router0 se fac următoarele configurări:\nRouter0(config)#interface gigabitEthernet 0/1\nRouter0(config-if)#ip nat inside\nRouter0(config-if)#interface gigabitEthernet 0/0\nRouter0(config-if)#ip nat outside\nRouter0(config-if)#exit\nRouter0(config)#access-list 1 permit 192.168.0.0 0.0.0.255\nRouter0(config)#ip nat pool POOL 4.4.4.1 4.4.4.5 netmask 255.255.255.0\nRouter0(config)#ip nat inside source list 1 pool POOL\nPe PC0 se folosește comanda ping către Router2, însă este returnată eroarea „Request timed out". Care ar putea fi cauza acestei erori?',
      image: 'subiecte_acad/images/locala_2023_1_1112/q13.png',
      options: [
        'Ruta statică setată pe Router2 nu este pentru rețeaua 4.4.4.0/24',
        'Masca de rețea din comanda access-list 1 permit 192.168.0.0 0.0.0.255 este greșită.',
        'Next hop-ul setat pentru ruta statică către rețeaua 192.168.0.0/24 este greșit',
        'Interfața Gig0/0 a Router0 nu are setat un IP din gama 1.1.1.1/30',
        'PC0 nu este conectat la Router0',
        'Access list-ul setat pe Router0 interzice trecerea pachetelor ICMP.'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Pe Router3 se fac următoarele configurări ale protocolului OSPF:\nRouter3(config)#router ospf 1\nRouter3(config-router)#network 10.10.10.0 0.0.0.255 area 0\nCe rol va avea Router3 în rețeaua 10.10.10.0/24?',
      image: 'subiecte_acad/images/locala_2023_1_1112/q14.png',
      options: [
        'BDR',
        'ONR',
        'ASBR',
        'DR',
        'HDR',
        'ABR'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Administratorul de rețea a configurat access-list 10 să filtreze pachetele care intră în interfața gigabitEthernet 0/2 a Router1.\nRouter1(config)#access-list 10 deny 192.168.0.0 0.0.0.255\nRouter1(config)#access-list 10 permit any\nRouter1#show access-list 10\nStandard IP access list 10\ndeny 192.168.0.0 0.0.0.255\npermit any\nDin ce cauză Laptop0, care face parte din rețeaua 192.168.0.0/24, încă poate să trimită pachete ICMP către Server2?',
      image: 'subiecte_acad/images/locala_2023_1_1112/q15.png',
      options: [
        'Portul Gig0/2 este oprit.',
        'Acess-list 10 nu conține adresa IP a lui Laptop0.',
        'Acess-list 10 trebuie activat doar pe interfața Gig0/2 a Router1.',
        'Acess-list 10 contine regula „permit any".',
        'Server0 este conectat direct cu Laptop0.',
        'Pachetele ICMP trimise de către Laptop0 nu trec prin interfața Gig0/2 a Router1.'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Administratorul rețelei a decis să securizeze rețeaua care îl conține pe Switch5. În urma configurărilor aduse rețelei, Laptop3 și PC3 nu mai pot trimite pachete către Router4. Care este cauza acestei probleme?',
      image: 'subiecte_acad/images/locala_2023_1_1112/q16.png',
      options: [
        'Switch5 nu are setat hostname-ul corespunzător.',
        'Interfața Gig0/2 a Router4 este setată drept „administratively down".',
        'Interfața Gig0/2 a Router4 nu are setat un IP.',
        'Interfața Fa0/1 a Switch5 s-a configurat în mod greșit, fapt ce a determinat oprirea ei.',
        'Swtich5 este Rootbridge, fapt ce blochează cadrul de date din a se transmite către Router4.',
        'Portul Fa0/2 al Switch5 este de tip „designated", fapt ce blochează cadrul de date din a se transmite către Router4.'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'PC0 transmite un pachet către Laptop0. Ce IP sursă va avea acesta între Switch0 și Router1?\nNu se folosește translatare NAT.',
      image: 'subiecte_acad/images/locala_2023_1_1112/q17.png',
      options: [
        '1.1.2.4',
        '1.1.2.29',
        '1.1.2.3',
        '1.1.1.2',
        '1.1.1.1',
        '1.1.2.1'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Conform configurărilor de pe switch-uri, care dintre ele ar putea fi root bridge pentru VLAN 10, în urma rulării algoritmului STP?\nToate switch-urile fac parte din VLAN 10.\nSwitch0 prioritate 65536, MAC: FFFF:FFFF:FFFF\nSwitch1 prioritate 65536, MAC: AFFFA:BAAB:ACAD\nSwitch2 prioritate 32768, MAC: ABBA:BAAB:ACAD\nSwitch3 prioritate 4096, MAC: AB00:ACAD:ADDA\nSwitch4 prioritate 4096, MAC: FAAB:ACAB:DADA\nSwitch6 prioritate 32768, MAC: ABAB:BAAB:ACAD',
      image: 'subiecte_acad/images/locala_2023_1_1112/q18.png',
      options: [
        'Switch6',
        'Switch5',
        'Switch1',
        'Switch2',
        'Switch0',
        'Switch3'
      ],
      correctIndex: 5
    },
    {
      type: 'multiple-choice',
      text: 'Router2 primește un pachet ICMP cu destinația 10.10.10.132/26. Către ce echipament se va trimite pachetul?',
      image: 'subiecte_acad/images/locala_2023_1_1112/q19.png',
      options: [
        'Router1',
        'Router3',
        'Router2',
        'Switch1',
        'Router4',
        'Switch0'
      ],
      correctIndex: 1
    },
    {
      type: 'multiple-choice',
      text: 'Având in vedere că pe Router1 există access-list 10, ce variantă de configurare ar putea bloca Laptop0 din a accesa Server2?\nRouter1(config)#access-list 10 deny 192.168.0.0 0.0.0.255\nRouter1(config)#access-list 10 permit any\nRouter1#show access-list 10\nStandard IP access list 10\ndeny 192.168.0.0 0.0.0.255\npermit any',
      image: 'subiecte_acad/images/locala_2023_1_1112/q20.png',
      options: [
        'Router1(config)# interface gigabitEthernet 2/0\nRouter1(config-if)# ip access-group 20 out',
        'Router1(config)# interface gigabitEthernet 0/3\nRouter1(config-if)# ip access-group 10 in',
        'Router1(config)# interface gigabitEthernet 0/1\nRouter1(config-if)# ip access-group 20 out',
        'Router1(config)# interface gigabitEthernet 0/1\nRouter1(config-if)# ip access-group 10 in',
        'Router1(config)# interface gigabitEthernet 2/1\nRouter1(config-if)# ip access-group 10 out',
        'Router1(config)# interface gigabitEthernet 0/2\nRouter1(config-if)# ip access-group 10 in'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Pe Router1 se configurează un stateful DHCPv6 server.\nRouter1(config)#ipv6 dhcp pool POOL\nRouter1(config-dhcpv6)#address prefix 2001:ACAD:1::/64\nRouter1(config-dhcpv6)#dns-server 2001:ACAD:1::1\nRouter1(config-dhcpv6)#interface gigabitEthernet 0/1\nRouter1(config-if)#ipv6 dhcp server POOL\nRouter1(config-if)#exit\nRouter1(config)#ipv6 unicast-routing\nCu toate acestea, PC4 nu primește IP-ul DNS-ului configurat în serverul DHCP. Care ar putea fi problema?',
      image: 'subiecte_acad/images/locala_2023_1_1112/q21.png',
      options: [
        'PC4 obține în mod STATIC configurările de rețea.',
        'Switch1 este un echipament de nivel 2, acesta nefiind capabil să transmită către PC4 pachetele RA ale Router1.',
        'PC4 nu este direct conectat la Router1.',
        'Interfața gigabitEthernet0/1 este DOWN.',
        'Mesajul RA al Routerului nu este configurat în modul managed.',
        'Router1 are setat un IP din alt prefix, față de serverul DHCP, acesta creând eroarea.'
      ],
      correctIndex: 4
    },
    {
      type: 'multiple-choice',
      text: 'Pe Router1 se configurează următorul access list cu scopul de a filtra pachetele ICMP care vin de pe porturile Gig0/1 și Gig0/0, mai puțin cele menite lui PC5.\nRouter1(config)#ip access-list extended INTERZIS\nRouter1(config-ext-nacl)#10 deny icmp any any\nRouter1(config-ext-nacl)#5 permit icmp host 192.168.200.2 any\nRouter1(config-ext-nacl)#exit\nRouter1(config)#interface range gigabitEthernet 0/1-2\nRouter1(config-if-range)#ip access-group INTERZIS in\nÎn urma atribuirii acestuia pe interfețele Gig0/2 și Gig0/1 PC5 reușește să trimtă pachete ICMP către Router1, însă PC4 nu. Din ce cauză se întâmplă acest lucru?',
      image: 'subiecte_acad/images/locala_2023_1_1112/q22.png',
      options: [
        'PC4 este conectat la portul Gig0/1 al Router1',
        'Default Gateway-ul setat pe PC4 nu este corect',
        'PC4 are un IP din rețeaua 192.168.200.0/24',
        'Acess-list-ul a fost aplicat pe portul Gig0/2, în loc să fie aplicat pe portul Gig0/0',
        'Acess-list-ul nu filtrează pachetele ICMP',
        'Comanda „5 permit icmp host 192.168.200.2 any" trebuia aplicată înaintea comenzii „10 deny icmp any any"'
      ],
      correctIndex: 3
    },
    {
      type: 'multiple-choice',
      text: 'Pe Router3 se fac următoarele configurări:\nRouter3(config)#ip nat inside source static 192.168.0.2 3.3.3.1\nRouter3(config)#interface gigabitEthernet0/0/1\nRouter3(config-if)#ip add 192.168.0.1 255.255.255.0\nRouter3(config-if)#ip nat inside\nRouter3(config-if)#interface gigabitEthernet0/0/0\nRouter3(config-if)#ip add 2.2.2.2 255.255.255.252\nRouter3(config-if)#ip nat outside\nRouter3(config-if)#exit\nPe laptop se folosește comanda ping pe ip-ul lui Server0, dar se returnează eroarea „Request timed out". Ce rută statică setată pe Router5 ar putea rezolva această eroare?',
      image: 'subiecte_acad/images/locala_2023_1_1112/q23.png',
      options: [
        'ip route 192.168.0.2 255.255.255.0 2.2.2.2',
        'ip route 192.168.1.2 255.255.255.255 2.2.2.2',
        'ip route 3.3.3.0 255.255.255.0 2.2.2.2',
        'ip route 192.168.0.0 255.255.255.0 2.2.2.1',
        'ip route 192.168.0.2 255.255.255.255 2.2.2.2',
        'ip route 0.0.0.0 0.0.0.0 2.2.2.1'
      ],
      correctIndex: 2
    },
    {
      type: 'multiple-choice',
      text: 'Care dintre IP-urile propuse poate fi configurat pe interfața Gig0/0/0 a Router2, astfel încât acesta să aibă conectivitate cu restul ruterelor din rețea?\nToate ruterele fac parte din rețeaua în care este configurat portul Gig0/0/0 al Router1. Masca de rețea este /64',
      image: 'subiecte_acad/images/locala_2023_1_1112/q24.png',
      options: [
        '2001:ACAD:7::A/64',
        '2001:ACAD:7::1/60',
        '2000:ABAD::5:2/64',
        '2001:ACAD:1::4/64',
        '2001:ACAB:7::6/64',
        '2001:ACAD:8::2/60'
      ],
      correctIndex: 0
    },
    {
      type: 'multiple-choice',
      text: 'Administratorul rețelei, prezentată în imaginea de mai jos, a constatat că Laptop0 nu mai poate trimite pachete către Router1. Care ar putea fi cauza acestei probleme?\nPe Router1 s-au făcut următoarele configurări pe portul Gig0/0/1:\nRouter1(config)#interface gigabitEthernet 0/0/1\nRouter1(config-if)#ip address 1.1.2.129 255.255.255.128\nRouter1(config-if)#no shutdown',
      image: 'subiecte_acad/images/locala_2023_1_1112/q25.png',
      options: [
        'Router1 este un echipament de nivel 3, fapt ce face imposibilă transmiterea și recepționarea de pachete de către acesta.',
        'Laptop0 nu are setat default gateway-ul corect.',
        'IP-ul setat pe Laptop0 nu face parte din aceeași rețea cu IP-ul setat pe interfața Gig0/0/1 a Router1.',
        'Switch-ul este un echipament de nivel 2, fapt ce face imposibilă transmiterea și recepționarea de pachete de către acesta.',
        'Interfața Gig0/0/1 este oprită.',
        'Router1 nu are setat default gateway-ul corect.'
      ],
      correctIndex: 2
    }
  ]
});
