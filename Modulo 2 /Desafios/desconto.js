/*

Escreva um programa onde, você cria uma função geradora de desconto.
A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
Os descontos funcionam da seguinte forma: 

Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto
Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve imprimir na tela:
Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.

Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto:
Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.



*/


/*

Para calcular desconto em JavaScript, você precisa ter em mãos o preço original do produto e a porcentagem de desconto que será aplicada. 
Com esses dados, você pode calcular o valor do desconto e o novo preço com desconto. 
let nameClient = "Silva";
const totalPurchase = 1000
let firstPurchase = true;
let buyCash = true;

//let firstPurchase = !true;
//let buyCash = !true;


arquivando trechos 

if (totalPurchase >= 1000) {

    if (firstPurchase && buyCash) {
        
        let desconto = totalPurchase * (30/100)
        let novoPreco = totalPurchase - desconto

        console.log(`R$ ${nameClient,desconto} Reais de desconto`);
        console.log("R$",novoPreco, " Reais o novo valor com desconto");
    }
    
}

return


*/

    const buy = (nameClient,totalPurchase,firstPurchase,buyCash) => {


        
    // Primeira compra do cliente e a vista recebe desconto
    if (totalPurchase >= 1000 && (buyCash && firstPurchase)) {
        
        let desconto = totalPurchase * (30/100)
        let novoPreco = totalPurchase - desconto

        console.log( 

            `${nameClient},obrigado pela compra!
             Valor Total da Compra: ${totalPurchase.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             30% valor recebido pela compra`


        );


    }
    else if(totalPurchase < 1000 && totalPurchase > 500 && (buyCash && firstPurchase)) {

        let desconto = totalPurchase * (25/100)
        let novoPreco = totalPurchase - desconto

        console.log( 

            `${nameClient},obrigado pela compra!
             Valor Total da Compra: ${totalPurchase.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             25% valor recebido pela compra`


        );



    }
    else if(totalPurchase < 500 && (buyCash && firstPurchase)) {

        let desconto = totalPurchase * (20/100)
        let novoPreco = totalPurchase - desconto

        console.log( 

            `${nameClient},obrigado pela compra!
             Valor Total da Compra: ${totalPurchase.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             20% valor recebido pela compra`


        );

    }

    // Primeira compra do cliente e pagamento não sendo a vista com desconto

    else if(totalPurchase > 1000 && (firstPurchase && !buyCash)){

        let desconto = totalPurchase * (20/100)
        let novoPreco = totalPurchase - desconto

        console.log( 

            `${nameClient},obrigado pela compra!
             Valor Total da Compra: ${totalPurchase.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             20% valor recebido pela compra`


        );


    }

    else if(totalPurchase < 1000 && totalPurchase > 500 && (firstPurchase && !buyCash)){

        let desconto = totalPurchase * (15/100)
        let novoPreco = totalPurchase - desconto

        console.log( 

            `${nameClient},obrigado pela compra!
             Valor Total da Compra: ${totalPurchase.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             15% valor recebido pela compra`


        );


    }

    else if (totalPurchase < 500 && (firstPurchase && !buyCash)) {


        let desconto = totalPurchase * (10/100)
        let novoPreco = totalPurchase - desconto

        console.log( 

            `${nameClient},obrigado pela compra!
             Valor Total da Compra: ${totalPurchase.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             10% valor recebido pela compra`


        );

        
    }

    // Não é a primeira compra e o pagamento é a vista

    else if(totalPurchase > 1000 && (!firstPurchase && buyCash)){

        let desconto = totalPurchase * (20/100)
        let novoPreco = totalPurchase - desconto

        console.log( 

            `${nameClient},obrigado pela compra!
             Valor Total da Compra: ${totalPurchase.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             20% valor recebido pela compra`


        );


    }


    else if (totalPurchase < 1000 && totalPurchase > 500 &&(!firstPurchase && buyCash)) {

            let desconto = totalPurchase * (15/100)
            let novoPreco = totalPurchase - desconto

            console.log( 

                `${nameClient},obrigado pela compra!
                 Valor Total da Compra: ${totalPurchase.toFixed(2)}, 
                 Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
                 15% valor recebido pela compra`
    
    
            );
    


    }

    else if(totalPurchase < 500 && (!firstPurchase && buyCash) ) {

            let desconto = totalPurchase * (15/100)
            let novoPreco = totalPurchase - desconto

            console.log( 

                `${nameClient},obrigado pela compra!
                 Valor Total da Compra: ${totalPurchase.toFixed(2)}, 
                 Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
                 15% valor recebido pela compra`
    
    
            );
    

    }


    // Não é primeira compra e pagamento não vai ser a vista

    else if(totalPurchase > 1000 && (!firstPurchase && !buyCash)){

        let desconto = totalPurchase * (20/100)
        let novoPreco = totalPurchase - desconto

        console.log( 

            `${nameClient},obrigado pela compra!
             Valor Total da Compra: ${totalPurchase.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             20% valor recebido pela compra`


        );


    }



    else if (totalPurchase < 1000 && totalPurchase > 500 &&(!firstPurchase && !buyCash)) {

        let desconto = totalPurchase * (15/100)
        let novoPreco = totalPurchase - desconto

        console.log( 

            `${nameClient},obrigado pela compra!
             Valor Total da Compra: ${totalPurchase.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             15% valor recebido pela compra`


        );


}
    
    else if(totalPurchase < 500 && (!firstPurchase && !buyCash)) {

        let desconto = totalPurchase * (0/100)
        let novoPreco = totalPurchase - desconto
        let letWinDesconto = Math.floor(Math.random() * 10) + 10;
        

            console.log( 

                `${nameClient},obrigado pela compra!
                 Valor Total da Compra: ${totalPurchase.toFixed(2)}, 
                 Valor Total sem Desconto: ${novoPreco.toFixed(2)}, 
                 0% valor recebido pela compra,
                 ${letWinDesconto}% de desconto recebido para a nova compra`
    
    
            );
    
            
            console.log(`${letWinDesconto}, numero sorteado,`);
            
        
    }     
   

  return
    
    }



    


// CRIAR UMA VARIAVEL EM ARRAY COM OS DESCONTOS DISPONIVEIS
    


    // Variaveis para inserir dentro da função buy()
    nameClient = "Matheus";
    const totalPurchase = 400;
    let firstPurchase = false;
    let buyCash = false;    

    // Invoke da função
    buy(nameClient,totalPurchase,firstPurchase,buyCash)
    



    /*
    

    
    Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
    Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto:
    Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra. CRIAR UM RAMDOM




    */


    