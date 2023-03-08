/*

    Array

    Vetor ou uma lista

    Para criar uma array eu abro [] dentro da propriedade e separo cada valor por virgulas
    posso criar um array para varios objetos
    Os arrays sempre começa pela posição 0

    

*/

// Verificando o tamanho do array e selecionando a posição que desejo visualizar
const numbers = [1,2,5,10,50]
console.log(numbers.length);
console.log(numbers[4]);

// Criando um objeto e utilizando array

const people = [

{

    name: "Matheus",
    age: 27,
    height: 1.73,
    country: "Brasil"

},

{
    name: "Atreus",
    age: 17,
    height: 1.65,
    country: "Grecia"

},

{
    name: "Kratos",
    age: 50,
    height: 2.00,
    country: "Grecia"
}



]

console.log(people.length);
console.log(people[2].name);
console.log(people[2].age);

console.log(people[0].name);
console.log(people[0].country);

conso;