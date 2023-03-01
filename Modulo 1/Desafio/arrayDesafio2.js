/*

Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. 
Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true.


*/


let personArray = ["Joao", "Maria"]
const result = personArray[0] !== personArray[1]

console.log(result);