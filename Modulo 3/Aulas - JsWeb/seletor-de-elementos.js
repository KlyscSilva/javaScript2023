
const element = document.getElementsByClassName("paragraph") //busco a class do elemento
const element = document.getElementsByTagName("h1") //busco a tag do elemento
const element = document.querySelector("#paragraph") //tras o primeiro elemento
const element = document.querySelectorAll("p") //tras todos os elementos de uma tag,class,id
const element = document.getElementsByName("miinput") //traga um elemento pelo nome
// exemplo acima : <input type="text" name="miinput" autofocus>

const element = document.getElementById("main-text") //busco o id do elemento




// selecionandoAtributos do input e retornando um value
// que posso armanzenar numa variavel
// Resumindo posso pegar os atributos e não apenas o elemento

const element = document.querySelector("input")

console.log(element.value); // posso verificar o que está dentro do value ou de qualquer outro atributo