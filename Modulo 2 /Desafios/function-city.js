/*

A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. 
A prefeitura deseja saber:

 - média do salário da população; 
 - média do número de filhos; 
 - maior salário;
 - O final da leitura de dados se dará com a entrada de um salário negativo. 
 
  *Faça isso usando uma função!*


*/


/*

Obs:

Possui criar um array de objetos, onde cada array é um habitante da pessoas,posso colocar o salario e numero de filhos
média salario = soma todos os salarios, divide pelo numero de habitates
média filhos = soma todos os filhos e divide pelo numero de habitantes
maior salario = ?

parar no salario negativo

obs:= > dados da cidade

salario 1 = 500
salario 2 = 700
salario 3 = 900
salario 4 = 350
salario 5 = 2000

pesquisa feita com 5 habitantes

habitantes/filho1 = 3
habitantes/filho2 = 2
habitantes/filho3 = 5
habitantes/filho4 = 1
habitantes/filho5 = 4

*/


const researchPopulation = () => {



    let population = [

        {
            name: "Everaldo",
            salario: 500,
            filhos: 3

        },

        {
            name: "Cauly",
            salario: 100,
            filhos: 2


        },

        {
            name: "Jacaré",
            salario: 900,
            filhos:3
        },

        {
            name: "Acevedo",
            salario: 450,
            filhos:1
        },

        {
            name: "Paiva",
            salario: 3500,
            filhos:4
        }


    ]


    // tamanho de habitantes
    const tamHab = population.length
    console.log(tamHab);

    // media salarial de habitantes
    const medSal= (population[0].salario + population[1].salario + population[2].salario  + population[3].salario + population[4].salario) / population.length
    console.log(`A média salarial da cidade é: R$ ${medSal},00 reais` );


    // media de filhos

    const kidHab = (population[0].filhos + population[1].filhos + population[2].filhos + population[3].filhos + population[4].filhos) / population.length
    console.log(`A média de filhos da cidade é: ${kidHab}`);


    // maior salario

        
    const highSal = population.reduce((acc,current) =>{

        return (acc.salario  > current.salario) ? acc : current;
        
    

    });

    console.log(highSal);
      


    // valor negativo

    if (population[0].salario <-0) {
        console.log("Leitura encerrada");

    }else if(population[1].salario <-0){
        console.log("Leitura encerrada");
    }
    else if(population[2].salario <-0){
        console.log("Leitura encerrada");
    } 
    else if(population[3].salario <-0){
        console.log("Leitura encerrada");
    }
    else if (population[4].salario < -0){
        console.log("Leitura encerrada");
    }


}

researchPopulation()



