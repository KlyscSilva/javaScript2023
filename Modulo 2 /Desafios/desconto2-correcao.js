function calculateDiscount(name, value, isFirstPurchase, isCashPayment) {

  if (isFirstPurchase && isCashPayment) {
    if (value > 1000) {
      let desconto = value * (30 / 100);
      let novoPreco = value - desconto;

      console.log(

            `${name},obrigado pela compra!
             Valor Total da Compra: ${value.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             30% valor recebido pela compra`

      );
    }

    else if(value < 500){

        let desconto = value * (20 / 100);
        let novoPreco = value - desconto;

      console.log(

            `${name},obrigado pela compra!
             Valor Total da Compra: ${value.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             20% valor recebido pela compra`

      );

    }

    else{

        let desconto = value * (25 / 100);
        let novoPreco = value - desconto;

      console.log(

            `${name},obrigado pela compra!
             Valor Total da Compra: ${value.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             25% valor recebido pela compra`

      );

    }

  }

  if (isFirstPurchase && !isCashPayment){

    if(value > 1000){

        let desconto = value * (20 / 100);
        let novoPreco = value - desconto;

      console.log(

            `${name},obrigado pela compra!
             Valor Total da Compra: ${value.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             20% valor recebido pela compra`

      );

    }

    else if( value < 500){


        let desconto = value * (10 / 100);
        let novoPreco = value - desconto;

      console.log(

            `${name},obrigado pela compra!
             Valor Total da Compra: ${value.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             10% valor recebido pela compra`

      );


    }

    else {

        let desconto = value * (15 / 100);
        let novoPreco = value - desconto;

      console.log(

            `${name},obrigado pela compra!
             Valor Total da Compra: ${value.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             15% valor recebido pela compra`

      );


    }



  }

  if (!isFirstPurchase && isCashPayment) {

    if (value > 1000) {
        
        let desconto = value * (20 / 100);
        let novoPreco = value - desconto;

      console.log(

            `${name},obrigado pela compra!
             Valor Total da Compra: ${value.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             20% valor recebido pela compra`

      );

    }

    else if (value < 500){


        let desconto = value * (10 / 100);
        let novoPreco = value - desconto;

      console.log(

            `${name},obrigado pela compra!
             Valor Total da Compra: ${value.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             10% valor recebido pela compra`

      );


    }

    else{

        let desconto = value * (15 / 100);
        let novoPreco = value - desconto;

      console.log(

            `${name},obrigado pela compra!
             Valor Total da Compra: ${value.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             15% valor recebido pela compra`

      );


    }

  }

  if(!isFirstPurchase && !isCashPayment) {

    if(value > 1000){

        let desconto = value * (10 / 100);
        let novoPreco = value - desconto;

      console.log(

            `${name},obrigado pela compra!
             Valor Total da Compra: ${value.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             10% valor recebido pela compra`

      );


    }

    else if(value <1000 && value > 500){

        let desconto = value * (5 / 100);
        let novoPreco = value - desconto;

      console.log(

            `${name},obrigado pela compra!
             Valor Total da Compra: ${value.toFixed(2)}, 
             Valor Total com Desconto: ${novoPreco.toFixed(2)}, 
             5% valor recebido pela compra`

      );



    }
    else
        {

        let desconto = value * (0/100)
        let novoPreco = value - desconto
        let letWinDesconto = Math.floor(Math.random() * 10) + 10;
        

            console.log( 

                `${name},obrigado pela compra!
                 Valor Total da Compra: ${value.toFixed(2)}, 
                 Valor Total sem Desconto: ${novoPreco.toFixed(2)}, 
                 0% valor recebido pela compra,
                 ${letWinDesconto}% de desconto recebido para a nova compra`
    
    
            );
    
            
            console.log(`${letWinDesconto}, numero sorteado,`);
            
        
    }     


    }

    return 
  }
 

calculateDiscount("Matheus",400,false,false)