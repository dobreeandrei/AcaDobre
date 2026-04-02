ACADOBRE_QUESTIONS.push({
  id: 'vlan_tag',
    topic: 'Tagul VLAN',
    questions: [
      {
        type: 'header-fill',
        text: 'Identifica campurile tagului VLAN in ordine:',
         images: [
                   'questions/images/vlan_tag/vlan_tag_blank.png',   
                   'questions/images/vlan_tag/vlan_tag_01.png',     
                   'questions/images/vlan_tag/vlan_tag_02.png',      
                   'questions/images/vlan_tag/vlan_tag_03.png',      
                   'questions/images/vlan_tag/vlan_tag_complete.png'
                ],
        fields: [
                  { names: ['Tag Protocol ID', 'TPID', 'Type'],            bits: 16 },
                  { names: ['Priority', 'Prio'],                           bits: 3 },
                  { names: ['Canonical Format Identifier', 'Flag', 'CFI'], bits: 1 },
                  { names: ['Vlan ID', 'VID'],                             bits: 12 },
                ],
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "TPID" dintr-un tag VLAN?',
      options: ['Identifica eticheta ca folosind Dot1Q', 'Indica prioritatea QoS', 'Este folosit pentru Checksum', 'Indica formatul canonical', 'Identifica numarul de VLAN'],
      correctIndex: 0,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "Priority" dintr-un tag VLAN?',
      options: ['Identifica eticheta ca folosind Dot1Q', 'Indica prioritatea QoS', 'Este folosit pentru Checksum', 'Indica formatul canonical', 'Identifica numarul de VLAN'],
      correctIndex: 1,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "CFI" dintr-un tag VLAN?',
      options: ['Identifica eticheta ca folosind Dot1Q', 'Indica prioritatea QoS', 'Este folosit pentru Checksum', 'Indica formatul canonical', 'Identifica numarul de VLAN'],
      correctIndex: 3,
      },
      {
      type: 'multiple-choice',
      text: 'Ce reprezinta campul "VID" dintr-un tag VLAN?',
      options: ['Identifica eticheta ca folosind Dot1Q', 'Indica prioritatea QoS', 'Este folosit pentru Checksum', 'Indica formatul canonical', 'Identifica numarul de VLAN'],
      correctIndex: 4,
      },
    ]
});
