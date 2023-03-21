
// Filtra apenas os números pares e diviseis por 5
const list = [20,3,234,12,17,541,6,87,275,1000];

let newList = list.filter((number)=>{

let par = number %2 === 0 && number %5 ===0 
return par

//if(number %2 === 0 && number%5 === 0) 

//if(number %5 === 0) 

//return true

})

console.log(newList);



//2 - Criar um novo array e filtrar as empresas fundadas dps de 1975 e tenha mais de 2 milhoes de dolares de mercado

const companies = [

    {name: "Samsung", marketValue: 50, CEO: "Kim", foundeOn: 1938},
    {name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundeOn: 1975},
    {name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundeOn: 1968},
    {name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundeOn: 2004},
    {name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundeOn: 2006},
    {name: "Apple", marketValue: 845, CEO: "Tim Cook", foundeOn: 1976},
]


const newCompanies = companies.filter((companies)=>{

    //let fun = companies.foundeOn > 1975 && companies.marketValue > 200 / Metodo 1
    if(companies.foundeOn > 1975 && companies.marketValue > 200) return true
    else 
    
    return false



})

console.log(newCompanies);


// Criar um novo array com pessoas acima de 17 anos e que moram no Brasil
const pessoas = [

{name:"Matheus", age:26, sexo:"M", profissao:"Progamador Jr", nationality:"Brasileiro"},
{name:"Queise", age:27, sexo:"F", profissao:"Advogada", nationality:"Brasileira"},
{name:"Kratos", age:57, sexo:"M", profissao:"Aposentado", nationality:"Grecia"},
{name:"Acer", age:17, sexo:"M", profissao:"Progamador Jr", nationality:"Argentina"},
{name:"Love", age:15, sexo:"M", profissao:"Aprendiz", nationality:"Brasileiro"},

]

const newPeople = pessoas.filter((pessoas) =>{


if(pessoas.age > 17)
if(pessoas.nationality === "Brasileira" || pessoas.nationality === "Brasileiro" )

return true


})

console.log(newPeople);