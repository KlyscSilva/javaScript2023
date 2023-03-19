
/*

For Each


O for each não é uma construção padrão da linguagem JavaScript, mas é possível usar a função forEach() de arrays para iterar sobre os elementos de um array.

A função forEach() é um método que pertence a objetos do tipo array e pode ser utilizado para executar uma determinada função para cada elemento do array. 
A sintaxe básica da função é a seguinte:

array.forEach(function(elemento) {
  // código a ser executado para cada elemento
});

Dentro da função que é passada como parâmetro, é possível acessar o elemento atual do array através da variável elemento. 
Além disso, é possível passar dois outros parâmetros para a função que são o índice do elemento atual e o próprio array.

obs: preferencia as arrow function
for each - aceita 3 argumentos

primeira posicao do paraentese(name variavel) = ele assume o nome que eu determina para interar ou seja defino o novo nome da variavel
segunda posição(index) = mostra nosso index, mostra qual posição do array estou
terceira posição(array) = aceita o array completo

Da acesso aos valores maior utilidade do ForEach

*/

const students = [

    {name: "Atreus", age: 25},
    {name: "Matheus", age: 35},
    {name: "Pom", age: 15},
    {name: "Jaca", age: 27},
    {name: "Manga", age: 42},
    {name: "Lofi", age: 58},
    {name: "Fast", age: 23},

]


students.forEach((student,index) => {
    console.log(student,index);
})

// Situação real para o uso do forEach
// Preciso saber idade média dos alunos, para isso basta somar todas as idades e dividir pela quantidade de alunos


let idade = 0 // defino uma variavel let fora da funcao for each

students.forEach((student) => {

    idade += student.age // chamei a variavel cujo padrão é 0, ela vai interar com todos os student.age = idade do array dentro da função foreach

    
})

const averageAge = idade / students.length // seguida definir a varivel na qual faz a divisão da idade pela quantiade de alunos e me retorna a média


console.log(averageAge.toFixed(0));

