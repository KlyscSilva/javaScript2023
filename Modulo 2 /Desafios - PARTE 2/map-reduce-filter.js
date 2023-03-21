const list = [20,3,234,12,17,541,6,87,275,1000];



// Adicionar 10% de valor aos marketValue
// Filtrar empresas antigas <2000
// Somar o valor de mercado de todas delas

const companies = [

    {name: "Samsung", marketValue: 50, CEO: "Kim", foundeOn: 1938},
    {name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundeOn: 1975},
    {name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundeOn: 1968},
    {name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundeOn: 2004},
    {name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundeOn: 2006},
    {name: "Apple", marketValue: 845, CEO: "Tim Cook", foundeOn: 1976},
]

let add10 = company =>{

company.marketValue = company.marketValue + company.marketValue / 10

return company

}

let filter10 = company =>{

company.foundeOn <2000

return company

}


let soma10redu = (acc,current) => acc + current.marketValue

//let soma10 = ((acc,current) => 

//acc + current.marketValue)

const newCompaniesValue = companies
.map(add10)
.filter(filter10)
.reduce(soma10redu,0) // Calculdo do valor total



console.log(newCompaniesValue);







//const newValue = companies.map((companies)=>{

   // let value = companies.marketValue * 1.10
  //  return value.toFixed(2)
//})

//const newValue2 = companies.filter((companies)=> companies.foundeOn <2000)
//const newValue3 = companies.reduce((acc,current) => acc + current.marketValue,0)

//console.log(newValue);
//console.log(newValue2);
//console.log(newValue3);

