/*

12) Crie um programa que leia o preço de um produto, calcule e mostre o seu
PREÇO PROMOCIONAL, com 5% de desconto.

*/

const promo = (buy) => {

    let valor = buy
    let desconto = buy * (5/100)
    console.log(desconto);

    let novoPreco = buy - desconto

    return console.log(`R$${novoPreco.toFixed(2)} é o valor com desconto`);

}

promo(100)