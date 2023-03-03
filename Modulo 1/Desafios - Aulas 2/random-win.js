/*

Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.


*/


const letWin = Math.floor(Math.random() * 10) + 1;
console.log(`${letWin} numero sorteado,`);

const letWinPunter = Math.floor(Math.random() * 10) + 1;
console.log(`${letWinPunter}, número do apostador`);


const result = letWin === letWinPunter


switch (result) {         

    case true:
        
        console.log("Eba, você ganhou");
        break;

    default:
        console.log("Você perdeu, tente novamente");
        break;
}

