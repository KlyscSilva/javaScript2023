/*

 []Escreva um programa onde, você chame uma função enviando um número 
 (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

*/


/*






 const num = numberOne => {
    if (numberOne >= 1 && numberOne <= 10) {
        
        for(i=0; i < numberOne; i++){

        const result = i * numberOne
         console.log(i,numberOne, `${result}`);

        }
    } else {
        return console.log("Insira entre 1 e 10");
    }

    




  }

  num(11)



*/




const num = numberOne => {



    for(i = 0; i < numberOne; i++)
    
    {
    
        if (numberOne >= 1 && numberOne <=10) {
            
          const result =   i * (numberOne)
            console.log(i, "x",numberOne,"=",`${result}`);
    
        } else{
            return console.log("Insira entre 1 e 10, para realizar a tabuada");
        }
    
    
    
    }
    
    return
    
    
    }
    
    num(10)