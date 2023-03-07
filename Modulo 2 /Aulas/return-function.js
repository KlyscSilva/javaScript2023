/*

Return - Function

*/



/*



Abaixo criei uma function, definir o parametro com 3 numeros, na qual eles geram a soma e return para retornar o valor dela
Em seguida foi criada 3 variaveis com valores e dentro do log foi atribuido um template string e invocado a function de soma e atribuido as variaveis


*/


 function sum(numberOne,numberTwo,numberTree){

    const result = numberOne + numberTwo + numberTree

    return result

    
 }



 let n1 = 50
 let n2 = 25
 let n3 = 3

 console.log(`O resultado é: ${sum(n1,n2,n3)}`);