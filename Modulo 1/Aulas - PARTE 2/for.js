/*

    Estrutura de Repetição - FOR

    Passo Um:
    for() = iniciar uma variavel obrigatorio e dar um valor e separar com ; -: ponto e virgula =
    i = abreviação de index
    
    Passo Dois:
    Informar até quando o for vai se repetir dentro da variavel enquanto ou igual
    i = abreviação de index durante o processo

    Passo Três :
    Informar o que vai acontecer a cada ciclo com base no operador aritmético


*/


for(let i = 0; i < 10; i++)

{
    console.log(i);
}

// i vale 0
// voltou e verificou que i vale 1
// após executado tudo ele adiciona mais um no i
// parou de executar quando i for menor que 10


const students = ["Atreus", "Kratos", "Cauly", "Nivea", "Acer"]

for( i = 0; i < students.length; i++){

    console.log(`${students[i]} está presente`);
}

/*

Criei um array com nome students com 5 posições
criei um for e declarei que a variavel i começasse da posição 0 até o menor valor do array que é 5 ou seja percorrer da posiçao 0 até 5, com o auxilio do incremento
depois criei um template string puxando o array junto com a varivel dentro do log

*/

// faça um programa que conta de 0 até 20


for( i=0; i <100; i++){
    console.log(i);
}

