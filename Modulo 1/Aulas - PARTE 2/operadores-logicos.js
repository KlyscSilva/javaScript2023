/*

    Operadores Lógicos

    && ---> E --- True // Filho obediente, para ser todos verdaeiro basta combinar a logica inteira com true

    true && true = true
    true && false = false
    false && false = false

    || ---> Ou // Filho espertinho - basta ter apenas uma verdadeiro pra toda logica ser true

    true || true = true
    true || false = true
    false || false = false

    ! ---> Negação // Filho do contra / Rebelde // ele inverte toda operação

    !true = false 
    !false = true

*/

/*

    

     

*/ 

console.log((true && true) || false); // logica Ou com um true será tudo verdadeiro
console.log(!(true && true) || false); // logica OU com dois False onde está sendo invertida a operação
console.log(!(true && true) || true); // logica OU onde está sendo invertida a operação

