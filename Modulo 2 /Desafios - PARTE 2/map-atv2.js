/*

Utilizando o MAP define o seguinte

se o estudante tirou nota >= 7 -> aprovado
caso o estudante tirou a nota < 7 -> reprovado


//const approvedStudents = students.map((students) => {

    //let passedTest = students.testValue >= 7  ? "Aprovado(a)" : "Reprovado(a)"

   // const approvedStudents = {

        //name: students.name,
        //testValue: students.testValue,
        //finalResult: students = passedTest
    //}

    //return approvedStudents
//}
//)

//console.log(approvedStudents);

*/


const students = [

    {name: "Matheus", testValue: 7},
    {name: "Atreus", testValue: 5},
    {name: "Queise", testValue: 8},
    {name: "Bruno", testValue: 9},
    {name: "Carla", testValue: 4},
    {name: "Ana", testValue: 10},
    {name: "Julio", testValue: 3},
];


const approvedStudents = students.map((students) => {

    let passedTest = students.testValue >= 7  ? "Aprovado(a)" : "Reprovado(a)"

   const approvedStudents = {

        name: students.name,
        testValue: students.testValue,
        finalResult: students = passedTest
    }

    return approvedStudents
}
)
        



console.log(approvedStudents);