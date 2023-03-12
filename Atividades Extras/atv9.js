/*

9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$5,22.

*/

const dol = (Number) => {


    let walletBalance = Number
    let buyDollar = Number / 5.22

    return console.log(`R$${walletBalance.toFixed(2)} saldo na carteira, valor que posso comprar de dolares U$${buyDollar.toFixed(2)}`)

}

dol(100)