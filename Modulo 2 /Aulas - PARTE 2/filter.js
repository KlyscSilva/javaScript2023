/*

Filter 

- Cria um novo array, a partir do array percorrido (array original)
- Cria um novo array APENAS com os elementos filtrados
- Aceita 3 parâmetros

    - Item do Array
    - Index
    - Array Completo

*/

// Criar um novo array com apenas pessoas que são vip's

const list = [

    {name: "Matheus", vip: true},
    {name: "Atreus", vip: false},
    {name: "Queise", vip: true},
    {name: "Bruno", vip: true},
    {name: "Carla", vip: false},
    {name: "Ana", vip: true},
    {name: "Julio", vip: false},
];


const listNew = list.filter((listnew)=>{


    let acessed = listnew.vip
    return acessed


})

console.log(listNew);


// Filtrar alunos que tiveram notas maior ou igual a 7

const students = [

    {name: "Matheus", testValue: 7},
    {name: "Atreus", testValue: 5},
    {name: "Queise", testValue: 8},
    {name: "Bruno", testValue: 9},
    {name: "Carla", testValue: 4},
    {name: "Ana", testValue: 10},
    {name: "Julio", testValue: 3},
];

const newStudents = students.filter((students)=>{

    let approved = students.testValue >= 7
    return approved


})

console.log(newStudents);