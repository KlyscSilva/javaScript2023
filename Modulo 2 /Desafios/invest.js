/*

Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.

Você deve enviar como argumentos da função :

- Valor inicial investido 
- Valor atual do investimento  
- Tempo em meses, que o valor está investido

- A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. 

Siga a formula desse vídeo para te auxiliar com o cálculo.

Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo


*/


const juros = () => {


    const newInvest = 1000;
    const atualInvest = 1200; // montante
    const newTempInvest = 10;


    const juros = (atualInvest - newInvest) / (newInvest * newTempInvest)
    

    return console.log((juros * 100).toFixed(2) + "%");


}

juros()