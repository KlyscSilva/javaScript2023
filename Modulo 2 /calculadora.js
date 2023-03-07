/*

Criando uma calculadora - básica

*/


const calculate = (numberOne,numberTwo,operation) => {

    let result

    switch (operation) {
        
        
    case "+":

       result = numberOne + numberTwo

        break;

    case "-":
        result = numberOne - numberTwo
    break;

    case "*":

        result = numberOne * numberTwo

        break;

    case "/":

        result = numberOne / numberTwo
        break;
    
        default:

        result = numberOne + numberTwo
            break;
    }

    return result

}

console.log(calculate(10,20,""));
