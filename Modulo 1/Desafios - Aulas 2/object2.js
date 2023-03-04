
/*
Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo
a pessoa deve ser maior de idade e brasileira para ser aprovada.

*/



const person1 = {name:"Matheus", age:17, sexo:"M", profissao:"Progamador Jr", nationality:"Brasileira"}
const person2 = {name:"Queise", age:17, sexo:"F", profissao:"Advogada", nationality:"Brasileira"}
const person3 = {name:"Kratos", age:57, sexo:"M", profissao:"Aposentado", nationality:"Grecia"}
const person4 = {name:"Acer", age:17, sexo:"M", profissao:"Progamador Jr", nationality:"Argentina"}
const person5 = {name:"Love", age:25, sexo:"M", profissao:"Aprendiz", nationality:"Brasileiro"}



if (person1.age > 17 && (person1.nationality === "Brasileiro" || person1.nationality === "Brasileira")) {
    console.log("Aprovado(a)");
    
}else {
    console.log("Não aprovado(a)");
}


if (person2.age > 17 && (person2.nationality == "Brasileiro" || person2.nationality == "Brasileira")) {
    console.log("Aprovada");
} else {

    console.log("Não Aprovado(a)");
}

if (person5.age > 17 && (person5.nationality == "Brasileiro" || person5.nationality == "Brasileira")) {
    console.log("Aprovado(a)");
} else {

    console.log("Não Aprovado(a)");
}