/*

14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

90 reais = aluguel do carro por dia
0,20 = por km rodado




*/

const locCar = (travelledDistance,days) => {


    let distance = (travelledDistance)
    let car = days

    const total = car * 90
    const total2 = distance * 0.20

    return console.log(`
    Aluguel do carro em dias: R$ ${total.toFixed(2)} valor total
    Valor do KM percorrido: R$ ${total2.toFixed(2)} valor total`);


}

locCar(3000,7) // distancia e dias