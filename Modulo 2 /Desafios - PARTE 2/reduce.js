/*

REDUCE 

- Retorna um valor (pode ser um novo array, um objeto, string, number, etc.)

- Aceita 4 parâmetros

- Acumulador
- Valor atual
- Index
- Array completo

*/

//const list = [500,100,900,450,3500]

//const big = list.reduce((acc,current)=>{

//return (acc > current) ? acc : current;
//return acc + current

//},0)

//console.log(big);

// indetificar o valor total de mercado de todas as companhias abaixo

const companies = [

    {name: "Samsung", marketValue: 50, CEO: "Kim", foundeOn: 1938},
    {name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundeOn: 1975},
    {name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundeOn: 1968},
    {name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundeOn: 2004},
    {name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundeOn: 2006},
    {name: "Apple", marketValue: 845, CEO: "Tim Cook", foundeOn: 1976},
]

//let soma = companies.reduce((acc, current) => acc + current.marketValue, 0)
//console.log(soma)

let sum = companies.reduce((acc,current)=> {

    return acc + current.marketValue,0 = marketValue


})

console.log(sum);