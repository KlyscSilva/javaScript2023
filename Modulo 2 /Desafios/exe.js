function imprimirCompra(valorTotal, porcentagemDesconto) {
    // Calculando o valor do desconto em reais
    let valorDesconto = (valorTotal * porcentagemDesconto) / 100;
    console.log(valorDesconto);
  
    // Calculando o valor total com desconto
    let valorTotalComDesconto = valorTotal - valorDesconto;
  

    // Verificando se o cliente recebeu desconto
    if (valorTotalComDesconto < valorTotal) {
      // Imprimindo o agradecimento pela compra
      console.log("Obrigado por comprar conosco!");
  
      // Imprimindo o valor total sem desconto
      console.log("Valor total sem desconto: R$" + valorTotal.toFixed(2));
  
      // Imprimindo o valor total com desconto
      console.log("Valor total com desconto: R$" + valorTotalComDesconto.toFixed(2));
  
      // Imprimindo a porcentagem de desconto que o cliente recebeu
      console.log("Porcentagem de desconto: " + porcentagemDesconto + "%");
    } else {
      // Caso o cliente não tenha recebido desconto, apenas imprime o agradecimento
      console.log("Obrigado por comprar conosco!");
    }
  }
  
  // Exemplo de uso da função
  imprimirCompra(1000, 10);