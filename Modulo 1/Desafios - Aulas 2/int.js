//[ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

let numberOne = 500
let numberTwo = 1
let numberTree = 13



// Verificando o maior número
if (numberOne > numberTwo && numberOne > numberTree) {
    console.log(`${numberOne} é o maior número`);
} 

else if(numberTwo > numberTree && numberTwo > numberOne){
    console.log(`${numberTwo} é o maior número`);

} 

else{
    console.log(`${numberTree} é o maior número`);
}

// Verificando o menor número //
if (numberOne < numberTwo && numberOne < numberTree) {
    console.log(`${numberOne} é o menor número`);
} 
else if(numberTwo < numberTree && numberTwo < numberOne){
    console.log(`${numberTwo} é o menor número`);
} 

else{
    console.log(`${numberTree} é o menor número`);
}
