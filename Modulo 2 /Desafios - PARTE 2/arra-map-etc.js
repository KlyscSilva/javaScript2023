/*
  01

  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.

  Dica: pesquise por remainder operator (%).
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const newArray1 = randomNumbers.filter((numbers)=>{


  let result = numbers %2 == 1
  return result
}

)

console.log(newArray1);
/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]


const newArray2 = crazyNumbers.filter((crazyNumbers)=>{

  let result2 = crazyNumbers < 501
  return result2
})

console.log(newArray2);


/*
  03

  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.
  
  Dica: pesquise por exponentiation operator (**).
*/

const numbers = [5, 7, 3]

newArray3 = numbers.map((numbers)=>{


let result3 = numbers ** 2
return result3.toFixed(2)

})

console.log(newArray3);


/*
  04

  - Utilizando o array abaixo, gere um novo array com apenas os filmes 
    lançados antes do ano 2000;
  - Exiba o novo array no console.
*/

const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]


const newOldMovie = tarantinoMovies.filter((movie) => {

  let old = movie.release < 2000

  return old

}
)
console.log(newOldMovie);



/*
  05

  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.    
*/

const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]


const newArray5 = tvShows.map((serie)=>{

  

  let newArray5 = {

    name: serie.name,
    
  }

  return newArray5
})

console.log(newArray5);

/*
  06

  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.
  
  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/

const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 }
]

newArray6 = cart.map((games)=>{

const newArray6 = {

  name: games.name,
  price: games.price.toFixed(2)

}

return newArray6

})

console.log(newArray6);

/*
- Nome 1
- Nome 2
- Nome 3

Obs: 👆🏻 o objetivo do exercício é gerar a string acima. 

A string deve ter exatamente a formatação acima (com traço, quebra de linha, 
e cada item em uma linha). 

console.log é apenas uma forma de você visualizar a string que você está 
gerando. Não é o objetivo final do exercício.

O objetivo final NÃO É executar um console.log para cada nome. Mas sim gerar 
uma única string que contém uma lista exatamente como o exemplo acima. 
*/


let newString = ` 
- Nome 1
- Nome 2
- Nome 3`

console.log(newString);