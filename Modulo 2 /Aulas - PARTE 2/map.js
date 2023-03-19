/*

Map


O MAP ele cria :

-> Cria um novo array, a partir do array percorrido (array original)
-> Cria um novo array, com a mesma quantidade de itens do (array original)

-> Aceita 3 parâmetros :

- item do array
- index
- array completo


*/


const numbers = [1,2,3,4]

const students = [

    {name: "Atreus", age: 25},
    {name: "Matheus", age: 35},
    {name: "Pom", age: 15},
    {name: "Jaca", age: 27},
    {name: "Manga", age: 42},
    {name: "Lofi", age: 58},
    {name: "Fast", age: 23},

];

/* EXEMPLO COM ARRAY DE NUMBERS

// Como o map retorna o novo array é obrigatorio eu guardar dentro de uma variavel:

const newArray = numbers.map((number) =>{

    return number * 2

}
)

// Como a grande cereja do map é a criação de um logo array, ele mostra o seguinte após o exemplo acima

console.log(newArray);


*/


const newStudents = students.map((student,index) => {


 const newStudents = {

    name: student.name + ' da Silva',
    age: student.age - 5,
    index
}

return newStudents // retorna minha varivel

}

)

// retornou um novo array
console.log(newStudents);

// array antigo continua sem alteração
console.log(students);

