/*

ARROW FUNCTION = FUNÇÃO FLECHA

serve pra economizar linhas de codigo
obrigatorio criar uma variavel pra declarar uma arrow function
não preciso escrever o function eu utilizo uma seta => significa que é um arrow function
após eu repetir os parametros no codigo, não preciso declarar uma linha de return ou seja após a seta
se o codigo for grande e eu colocar as {} é de obrigatorio após isso inserir o valor de return

na duvida use arrow function




*/

// Estrutura abaixo de uma arrow function
const sum = (number1,number2) => number1 * number2


// Estrutura de uma arrow function com return

const mul = (numberOne,numberTwo) => {

    return numberOne + numberTwo
    

}




let n1 = 20
let n2 = 30


console.log(mul(n1,n2));
console.log(sum(n1,n2));


//arrow function com um parametro fica assim

const tes = number1 => {
    
}