// definir o preço original e a porcentagem de desconto
const precoOriginal = 1200;
const percentualDesconto = 20;

// calcular o valor do desconto
const valorDesconto = precoOriginal * (percentualDesconto / 100);

// calcular o novo preço com desconto
const novoPreco = precoOriginal - valorDesconto;

// exibir os resultados
console.log(`Preço original: R$${precoOriginal.toFixed(2)}`);
console.log(`Porcentagem de desconto: ${percentualDesconto}%`);
console.log(`Valor do desconto: R$${valorDesconto.toFixed(2)}`);
console.log(`Novo preço com desconto: R$${novoPreco.toFixed(2)}`);