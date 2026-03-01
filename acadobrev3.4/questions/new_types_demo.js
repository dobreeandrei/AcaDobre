/**
 * questions/new_types_demo.js
 * Demonstrates all 4 new question types.
 * Remove or comment this <script> line from index.html when not needed.
 */

ACADOBRE_QUESTIONS.push({
  id: 'new_types_demo',
  topic: 'Demo Tipuri Noi',
  questions: [

    {
      type: 'multiple-choice-multi',
      text: 'Care dintre urmatoarele sunt protocoale de Layer 4?',
      options: ['TCP', 'IP', 'UDP', 'ARP'],
      correctIndices: [0, 2], 
      explanation: 'TCP si UDP opereaza la Layer 4 (Transport). IP este Layer 3, ARP este Layer 2/3.'
    },

    {
      type: 'multiple-choice',
      text: 'La ce layer OSI opereaza un switch traditional?',
      options: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4'],
      correctIndex: 1,
      explanation: 'Un switch traditional lucreaza la Layer 2 (Data Link), folosind adrese MAC pentru comutare.'
    },

    {
      type: 'matching',
      text: 'Asociati fiecare caracteristica cu tipul de legatura VLAN corespunzator:',
      subQuestions: [
        { text: 'Mai multe VLAN-uri pot circula pe aceasta legatura', answer: 'Trunk' },
        { text: 'Folosita pentru conexiuni intre echipamente de retea', answer: 'Trunk' },
        { text: 'Legatura folosita intre switch si un nod final', answer: 'Access' },
        { text: 'Un singur VLAN poate circula pe aceasta legatura', answer: 'Access' },
      ],
      options: ['Trunk', 'Access', 'Hybrid', 'Native'],
      explanation: 'Porturile Trunk transporta trafic pentru mai multe VLAN-uri (tagged). Porturile Access sunt dedicate unui singur VLAN (untagged).'
    },

    {
      type: 'image-order',
      text: 'Ordonati de la stanga la dreapta culorile firelor pentru standardul T568B de cablare.',
      images: [
        { src: 'questions/images/RJ_45/wire_white_orange.png', label: 'Alb-Porto' },
        { src: 'questions/images/RJ_45/wire_orange.png',       label: 'Porto' },
        { src: 'questions/images/RJ_45/wire_white_green.png',  label: 'Alb-Verde' },
        { src: 'questions/images/RJ_45/wire_blue.png',         label: 'Albastru' },
        { src: 'questions/images/RJ_45/wire_white_blue.png',   label: 'Alb-Albastru' },
        { src: 'questions/images/RJ_45/wire_green.png',        label: 'Verde' },
        { src: 'questions/images/RJ_45/wire_white_brown.png',  label: 'Alb-Maro' },
        { src: 'questions/images/RJ_45/wire_brown.png',        label: 'Maro' },
      ],
  
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
      explanation: 'Standardul T568B: Alb-Portocaliu, Portocaliu, Alb-Verde, Albastru, Alb-Albastru, Verde, Alb-Maro, Maro.'
    },
  ]
});
