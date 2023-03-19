/*

    Controle de fluxo -
    Condicionais ----> else / if

    if = se
    else = se não
    else if = mais se....(cria outra possibilidades)
*/


const temperature = 40

if (temperature >= 35 && temperature <=39) {
    console.log("Pessoa está saudavel");
} else if (temperature >=40){
    console.log("A febre está alta, vá ao médico");
} else if (temperature < 35) {
    console.log("Sua temperatura está muito baixa, vá ao médico");
}

console.log("Code executed sucess");



const age = 29

if ( age >= 18 && age <= 25) {
    console.log("Vc é maior de idade");
} else if (age >=16 && age <=17) {
    console.log("Vc é menor de idade");
} else if (age <= 15){
    console.log("Vc é uma criança");
} else {
    console.log("Vc está velho");
}

console.log("Code executed sucess!!!!");