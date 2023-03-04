/*
Faça um programa onde ele leia 4 números. 
Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - 
Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 

Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

*/


numberOne = 1
numberTwo = 3
numberTree = 5
numberFour = 1


if (numberOne % 2 === 0 && numberTwo % 2 === 0 && numberTree % 2 === 0 && numberFour % 2 === 0) {
    console.log("TODOS NÚMEROS SÃO PARES");
}
else if(numberOne % 2 === 1 && numberTwo % 2 === 1 && numberTree % 2 === 1 && numberFour % 2 === 1) {
    console.log("TODOS NÚMEROS SÃO IMPARES");
}
else if (!numberOne % 2 === 0 && !numberTwo % 2 === 0 && !numberTree % 2 === 0 && !numberFour % 2 === 0){
    console.log("PARES E IMPARES");
}

console.log("Code executed sucess");