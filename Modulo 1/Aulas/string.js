/* String 


- Cadeia de Caracteres = String


*/


let myFirstString = " Com aspas duplas eu posso escrever tudo o que eu quiser e será declarado como Texto" // - Aspas Dulpas ""
let mySecondString = 'Com aspas simples consigo executar uma string' // - Aspas Simples ''

let myThirdString = `Com a crase também consigo escrever uma string e obter alguns poderes` // Template Literal ou Template Strings / Crase


// Se começou o programa com aspas duplas escreva até o final com aspas duplas ou mesmo vale para aspas simples

let text = "Matheus falou o seguinte: 'Vou aprender JS' " 


// Template Strings / Usando a crase na pratica


let myTextWithSuperPowers = `Com a crase consigo pular uma 
linha sem da erro de sintaxe`

// Criando uma variavel e utilizando a crase

let numberOfPeople = 50

let myTextWithSuperPowers2 = `Naquela sala de aula possui ${numberOfPeople} pessoas` // chamando uma variavel dentro da string com o uso do ${}

console.log(myTextWithSuperPowers2);

// Criando uma variavel e realizando calculo

let myTextWithSuperPowers3 = `${5 * 5} este é o resultado da conta`
console.log(myTextWithSuperPowers3);