/*

Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object2 = {name:"Maria"}. 
João e João, imprime true. João e Maria, imprime false.



*/


const personOne = {name:"Joao"}
const personTwo = {name:"Maria"}

const result = personOne == personTwo

console.log(result);