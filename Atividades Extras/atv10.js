/*

10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
sabendo que cada 1 litro de tinta pinta uma área de 2metros quadrados.

1 Litro = 2 metros
2l = 4m
3l = 6

*/


let wallWidth = 5.3
let wallHeight = 2.7

let valorArea = wallHeight * wallWidth
console.log(valorArea);

let quantidadeTinta = valorArea / 2

console.log(Math.floor(quantidadeTinta));