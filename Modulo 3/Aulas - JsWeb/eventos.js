const element = document.querySelector("button")

// evento de onclick=nameDaFuncao() <--> eu consigo chamar uma function dentro do htmtl

const myFunction = () => {

    alert("fui pressionado")
}


// posso criar diretamente dentro da funçao onclick um evento
/*

element.onclick = () => {
    alert("vem com jacaré")
    alert("vou ficar  bom nisso")
    alert("mova se e pense")
    prompt("digite seu nome")
    prompt("digite sua idade")
}


*/

// propriedade de eventos me tras toda informações de uma determinada
//acao


element.onclick = (event) => {
    console.log(event);
    
    
}

// Event lisening ouvir evento() name.addEventListener

const input = document.querySelector("input")
const select = document.querySelector("select")
const button = document.querySelector("button")



button.addEventListener("click",() =>{

    alert("botão foi clicado")
})

input.addEventListener("change", () => {

    console.log(input.value);
})

input.addEventListener("focus", () =>{
    console.log("dei um foco");
})