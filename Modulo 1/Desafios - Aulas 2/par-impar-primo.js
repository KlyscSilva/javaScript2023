/*


Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

*/

const number = 25

if (number % 2 === 0) {

    if(number % 5 === 0) console.log("é par e divisivel por 5");
    else console.log("é par e não divisivel por 5");
} else {


    for(i = 2; i < number; i++)

        if(number % i === 0) {
            console.log("ímpar,mas não é primo");
            break
        } else{
            if (i === number - 1)
            console.log("é primo");
        }
}


