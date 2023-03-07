/*

criar uma função que ao ser chamada verifica se a pessoa pode ou não entra numa festa


*/


const entrance = (age,operation) => {


    let result

    switch (operation) {
        
        case ">":

        result = age > 17
        console.log("Entrada Liberada");
        
        break;

        case "<":
        
        result = age < 18
        console.log("Não Liberado");
        break;
    
        default:
        break;
    }

return result


}

console.log(entrance(18,">"));
console.log(entrance(17,"<"));



// Criando mesmo exemplo utilizando o IF na função

const entrance2 = (age) => {

    if (age > 17) {
        console.log("Entrada Liberada");
    } else {
        console.log("Não Liberada");
    }

}

entrance2()