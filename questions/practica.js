ACADOBRE_QUESTIONS.push({
  id: 'practica',
    topic: '!!!Practica',
    questions: [
      {
        type: 'open-ended',
        text: 'Afisati adresele IPv4 de pe interfete detaliat:',
        acceptedAnswers: ['sh ip int'],
      },
      {
        type: 'open-ended',
        text: 'Afisati adresele IPv4 de pe interfete, sumarizat:',
        acceptedAnswers: ['sh ip int br'],
      },
      {
        type: 'open-ended',
        text: 'Afisati adresele IPv4 de pe interfete detaliat, filtrat:',
        acceptedAnswers: ['sh ip int | incl /'],
      },
      {
        type: 'open-ended',
        text: 'Afisati tabela de rutare IPv4:',
        acceptedAnswers: ['sh ip ro'],
      },
      {
        type: 'open-ended',
        text: 'Afisati adresele IPv6 de pe interfete detaliat:',
        acceptedAnswers: ['sh ipv int'],
      },
      {
        type: 'open-ended',
        text: 'Afisati adresele IPv6 de pe interfete, sumarizat:',
        acceptedAnswers: ['sh ipv int br'],
      },
      {
        type: 'open-ended',
        text: 'Afisati tabela de rutare IPv6:',
        acceptedAnswers: ['sh ipv ro'],
      },
      {
        type: 'open-ended',
        text: 'Aratati sectiunea pentru IPv6 din configuratia curenta:',
        acceptedAnswers: ['sh run | sect ipv'],
      },
      {
        type: 'open-ended',
        text: 'Afisati retelele direct conectate IPv4:',
        acceptedAnswers: ['sh ip ro c'],
      },
      {
        type: 'open-ended',
        text: 'Afisati configuratia curenta:',
        acceptedAnswers: ['sh run'],
      },
      {
        type: 'open-ended',
        text: 'Afisati configuratia de pornire:',
        acceptedAnswers: ['sh start'],
      },
      {
        type: 'open-ended',
        text: 'Afisati continutul memoriei flash:',
        acceptedAnswers: ['sh flash'],
      }, 
      {
        type: 'open-ended',
        text: 'Afisati ultimele comenzi introduse:',
        acceptedAnswers: ['sh hist'],
      },
      {
        type: 'open-ended',
        text: 'Testati conectivitatea strict la dispozitivul IPv4 cu adresa 10.0.0.1:',
        acceptedAnswers: ['ping 10.0.0.1'],
      },
      {
        type: 'open-ended',
        text: 'Testati conectivitatea cu toate dispozitivele dintre dispozitivul local si adresa 10.0.0.1:',
        acceptedAnswers: ['trace 10.0.0.1'],
      },
      {
        type: 'open-ended',
        text: 'Testati conectivitatea strict la dispozitivul IPv6 cu adresa fe80::1 :',
        acceptedAnswers: ['ping ipv fe80::1'],
      },
      {
        type: 'open-ended',
        text: 'Testati conectivitatea cu toate dispozitivele dintre dispozitivul local si adresa 2001::1 :',
        acceptedAnswers: ['trace ipv 2001::1'],
      },
      {
        type: 'open-ended',
        text: 'Conectati-va prin SSH la adresa 10.0.0.1 cu username-ul bogus:',
        acceptedAnswers: ['ssh -l bogus 10.0.0.1'],
      },
      {
        type: 'open-ended',
        text: 'Conectati-va prin Telnet la adresa 10.0.0.1:',
        acceptedAnswers: ['telnet 10.0.0.1'],
      },
      {
        type: 'open-ended',
        text: 'Aratati tabela ARP:',
        acceptedAnswers: ['sh arp'],
      },
      {
        type: 'open-ended',
        text: 'Aratati tabela MAC:',
        acceptedAnswers: ['sh mac'],
      },
      {
        type: 'open-ended',
        text: 'Aratati tabela MAC pentru VLAN-ul 1:',
        acceptedAnswers: ['sh mac v 1'],
      },
      {
        type: 'open-ended',
        text: 'Aratati numele VLAN-urilor configurate si porturile pe care acestea sunt asociate, sumarizat:',
        acceptedAnswers: ['sh vl br'],
      },
      {
        type: 'open-ended',
        text: 'Aratati interfetele trunk, VLAN-ul lor nativ si VLAN-urile pe care acestea le permit:',
        acceptedAnswers: ['sh int tr'],
      },
      {
        type: 'open-ended',
        text: 'Aratati capacitatile de switchport ale interfetei f0/1:',
        acceptedAnswers: ['sh int f0/1 sw'],
      },
      {
        type: 'open-ended',
        text: 'Aratati pool-urile de DHCPv4:',
        acceptedAnswers: ['sh ip dhcp pool'],
      },
      {
        type: 'open-ended',
        text: 'Aratati adresele MAC asociate adreselor obtinute prin DHCPv4:',
        acceptedAnswers: ['sh ip dhcp bind'],
      },
      {
        type: 'open-ended',
        text: 'Aratati pool-urile de DHCPv6:',
        acceptedAnswers: ['sh ipv dhcp pool'],
      },
      {
        type: 'open-ended',
        text: 'Aratati adresele MAC asociate adreselor obtinute prin DHCPv6:',
        acceptedAnswers: ['sh ipv dhcp bind'],
      },
      {
        type: 'open-ended',
        text: 'Aratati sectiunea pentru DHCPv4 din configuratia curenta:',
        acceptedAnswers: ['sh run | sect dhcp'],
      },
      {
        type: 'open-ended',
        text: 'Aratati detaliat informatii despre Etherchannel:',
        acceptedAnswers: ['sh eth'],
      },
      {
        type: 'open-ended',
        text: 'Aratati sumarizat informatii despre Etherchannel:',
        acceptedAnswers: ['sh eth sum'],
      },
      {
        type: 'open-ended',
        text: 'Aratati informatiile despre Port-Channel-uri:',
        acceptedAnswers: ['sh eth por'],
      },
      {
        type: 'open-ended',
        text: 'Aratati detaliat informatii despre HSRP:',
        acceptedAnswers: ['sh st'],
      },
      {
        type: 'open-ended',
        text: 'Aratati sumarizat informatii despre HSRP:',
        acceptedAnswers: ['sh st br'],
      },
      {
        type: 'open-ended',
        text: 'Aratati informatiile despre HSRP de pe interfata f0/1:',
        acceptedAnswers: ['sh st int f0/1'],
      },
      {
        type: 'open-ended',
        text: 'Aratati informatii despre SSH:',
        acceptedAnswers: ['sh ip ssh'],
      },
      {
        type: 'open-ended',
        text: 'Aratati informatii despre SSH din configuratia curenta:',
        acceptedAnswers: ['sh run | sect ssh'],
      },
      {
        type: 'open-ended',
        text: 'Aratati cheia publica RSA:',
        acceptedAnswers: ['sh cry key my rsa'],
      },
      {
        type: 'open-ended',
        text: 'Aratati informatii generale despre Port Security:',
        acceptedAnswers: ['sh po'],
      },
      {
        type: 'open-ended',
        text: 'Aratati informatiile despre Port Security de pe interfata f0/1:',
        acceptedAnswers: ['sh po int f0/1'],
      },
      {
        type: 'open-ended',
        text: 'Afisati translatarile NAT:',
        acceptedAnswers: ['sh ip nat tran'],
      },
      {
        type: 'open-ended',
        text: 'Afisati statisticile NAT:',
        acceptedAnswers: ['sh ip nat stat'],
      },
      {
        type: 'open-ended',
        text: 'Afisati ACL-urile configurate:',
        acceptedAnswers: ['sh ac'],
      },
      {
        type: 'open-ended',
        text: 'Afisati ACL-urile IPv6 configurate:',
        acceptedAnswers: ['sh ipv ac', 'sh ac ipv'],
      },
      {
        type: 'open-ended',
        text: 'Afisati continutul ACL-ului 10:',
        acceptedAnswers: ['sh ac 10'],
      },
      {
        type: 'open-ended',
        text: 'Afisati informatii generale despre STP:',
        acceptedAnswers: ['sh spa'],
      },
      {
        type: 'open-ended',
        text: 'Afisati informatii despre STP pentru VLAN-ul 1:',
        acceptedAnswers: ['sh spa v 1'],
      },
      {
        type: 'open-ended',
        text: 'Afisati informatii sumarizate despre STP:',
        acceptedAnswers: ['sh spa sum'],
      },
      {
        type: 'open-ended',
        text: 'Aratati informatii despre DHCP snooping:',
        acceptedAnswers: ['sh ip dhcp snoop'],
      },
      {
        type: 'open-ended',
        text: 'Afisati informatii despre asocierile pe care le realizeaza DHCP snooping:',
        acceptedAnswers: ['sh ip dhcp snoop bind'],
      },
      {
        type: 'open-ended',
        text: 'Aratati informatii sumarizate despre vecinii CDP:',
        acceptedAnswers: ['sh cdp neigh'],
      },
      {
        type: 'open-ended',
        text: 'Aratati informatii detaliate despre vecinii CDP:',
        acceptedAnswers: ['sh cdp neigh det'],
      },
      {
        type: 'open-ended',
        text: 'Aratati informatii sumarizate despre vecinii LLDP:',
        acceptedAnswers: ['sh lldp neigh'],
      },
      {
        type: 'open-ended',
        text: 'Aratati informatii detaliate despre vecinii LLDP:',
        acceptedAnswers: ['sh lldp neigh det'],
      },
      {
        type: 'open-ended',
        text: 'Aratati ora de pe dispozitiv:',
        acceptedAnswers: ['sh clock'],
      },
      {
        type: 'open-ended',
        text: 'Aratati asocierile serverul NTP:',
        acceptedAnswers: ['sh ntp ass'],
      },
      {
        type: 'open-ended',
        text: 'Afisati informatii despre protocoalele de rutare IPv4:',
        acceptedAnswers: ['sh ip prot'],
      },  
      {
        type: 'open-ended',
        text: 'Afisati rutele OSPF IPv4:',
        acceptedAnswers: ['sh ip ro o'],
      },
      {
        type: 'open-ended',
        text: 'Afisati vecinii OSPF IPv4:',
        acceptedAnswers: ['sh ip ospf neigh'],
      },
      {
        type: 'open-ended',
        text: 'Afisati LSDB-ul pentru OSPF IPv4:',
        acceptedAnswers: ['sh ip ospf data'],
      },
      {
        type: 'open-ended',
        text: 'Aratati informatii despre OSPF din configuratia curenta:',
        acceptedAnswers: ['sh run | sect ospf'],
      },
      {
        type: 'open-ended',
        text: 'Afisati informatii despre protocoalele de rutare IPv6:',
        acceptedAnswers: ['sh ipv prot'],
      },  
      {
        type: 'open-ended',
        text: 'Afisati rutele OSPF IPv6:',
        acceptedAnswers: ['sh ipv ro o'],
      },
      {
        type: 'open-ended',
        text: 'Afisati vecinii OSPF IPv6:',
        acceptedAnswers: ['sh ipv ospf neigh'],
      },
      {
        type: 'open-ended',
        text: 'Afisati LSDB-ul pentru OSPF IPv6:',
        acceptedAnswers: ['sh ipv ospf data'],
      },
      {
        type: 'open-ended',
        text: 'Afisati rutele EIGRP IPv4:',
        acceptedAnswers: ['sh ip ro e'],
      },
      {
        type: 'open-ended',
        text: 'Afisati vecinii EIGRP IPv4:',
        acceptedAnswers: ['sh ip eig neigh'],
      },
      {
        type: 'open-ended',
        text: 'Afisati tabela de topologie pentru EIGRP IPv4:',
        acceptedAnswers: ['sh ip eig top'],
      },
      {
        type: 'open-ended',
        text: 'Afisati vecinii EIGRP IPv6:',
        acceptedAnswers: ['sh ipv eig neigh'],
      },
      {
        type: 'open-ended',
        text: 'Afisati tabela de topologie pentru EIGRP IPv6:',
        acceptedAnswers: ['sh ipv eig top'],
      },
      {
        type: 'open-ended',
        text: 'Aratati informatii despre EIGRP din configuratia curenta:',
        acceptedAnswers: ['sh run | sect eig'],
      },



















      
    ]
});
