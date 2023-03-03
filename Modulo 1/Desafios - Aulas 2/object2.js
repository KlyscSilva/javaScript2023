
/*
Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo
a pessoa deve ser maior de idade e brasileira para ser aprovada.F

*/



const person1 = {name:"Matheus", age:18, sexo:"M", profissao:"Progamador Jr", Country:"Brasileiro"}
const person2 = {name:"Queise", age:19, sexo:"F", profissao:"Advogada", Country:"Brasileira"}
const person3 = {name:"Kratos", age:57, sexo:"M", profissao:"Aposentado", Country:"Grecia"}
const person4 = {name:"Acer", age:17, sexo:"M", profissao:"Progamador Jr", Country:"Argentina"}
const person5 = {name:"Love", age:16, sexo:"M", profissao:"Aprendiz", Country:"Brasileira"}



if (person2.age > 18 && person2.Country == "Brasileiro" && "Brasileira") {
    console.log("Está aprovado");
} else {
    console.log("Não está aprovado");
}