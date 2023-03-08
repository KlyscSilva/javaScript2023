/*

 Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior


*/


const bigger = (numberOne,numberTwo) =>{


    if (numberOne > numberTwo) {
        console.log("Este é o maior número");
    } else if(numberOne < numberTwo){
        console.log("Este é o maior número =");
    }else{
        console.log("Informe dois valores na função");
    }

    

}


bigger(50,10)