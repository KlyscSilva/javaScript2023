const button = document.getElementById("convert-button"); // chamei a varievel button pelo id do html
const select = document.getElementById("select-value");

const convertValues = () => {
  // criei uma função para ser chamada no addevent

const dolar = 5.25 // variavel que informa a cotação do dolar
const euro = 5.66
const libra = 6.42


  const inputReais = document.getElementById("input-real").value; // solicitei onde quero que a funcao extraia as informacoes no input, quando usuário digitar
  const realValueText = document.getElementById("real-value");
  const dolarValue = document.getElementById("value");

  // Criando uma função na qual formata o valor para o pais estabelecido

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);


if(select.value === "US$ Dólar Americano")

  dolarValue.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(inputReais / dolar);


  if(select.value === "€ Euro")

  dolarValue.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(inputReais / euro);

  if(select.value === "€ Libra")

  dolarValue.innerHTML = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(inputReais / libra);

  
};



changeCurrency = () => {
  const textChange = document.getElementById("text-value");
  const imgChange = document.getElementById("img-change");

  if (select.value === "€ Euro") {
    textChange.innerHTML = "Euro";
    imgChange.src = "./img/euro.svg";
  }

  if(select.value === "US$ Dólar Americano") {
    textChange.innerHTML = "Dólar Americano"
    imgChange.src = "./img/eua.svg"
  }

  if(select.value === "€ Libra") {
    textChange.innerHTML = "Libra"
    imgChange.src = "./img/libra.png"
  }

 
    
    


  convertValues()
};

// criando uma cadeia de evento, onde a cada click a função nos trás o valor convertido.
button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency) // evento de troca de dolar para euro
