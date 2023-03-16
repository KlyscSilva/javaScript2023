/*
Map


O MAP ele cria :

-> Cria um novo array, a partir do array percorrido (array original)
-> Cria um novo array, com a mesma quantidade de itens do (array original)

-> Aceita 3 parâmetros :

- item do array
- index
- array completo

Obs: Map é bom para trabalhar em camadas de aplicações
*/


const numbers = [2,3,4,5,6]

const double = numbers => numbers * 4 // criei uma função com parametro numbers
const sum = numbers => numbers + 10
const min = numbers => numbers - 5
const toReais = numbers => `R$${numbers.toFixed(2)}` // criando uma função e retornando com um template string, outra habilidade do map


const newArray2 = numbers.map(double).map(sum).map(min).map(toReais)

console.log(newArray2);


// exemplo real de uso de MAP

