/*

[ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata!
[ ] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!


obs:

Date.now() = retorna as horas atuais em milissegundos


*/


const hour = () => {


    let dateAtual = new Date()
    let hours = dateAtual

    return hours
}


console.log(hour());





const year = () => {

    let yearAtual = new Date()
    let years = yearAtual.getFullYear()

    return years

}

console.log(year());


const horas = () => {

    let houra = new Date().toLocaleTimeString("pt-BR") // me retorna a hora local

    console.log(houra);
}

horas()