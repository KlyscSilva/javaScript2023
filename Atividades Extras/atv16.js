/*


16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
quantos dias de vida um fumante perderá e exiba o total em dias.


*/


const life = (cigarroDays,cigarroAnos) => {

    
    let cigarroPorDay = number(prompt(cigarroDays))
    let cigarroFumadoAnos = cigarroAnos

    let cigarroMinutosLife = cigarroDays * cigarroAnos * 365 // Quantidade total de cigarros fumandos por anos
    let diasLost = cigarroMinutosLife * 10 // Tempo de vida perdido em minutos
    const result = diasLost / 1440 // Tempo de vida perdido em dias (1 dia tem 1440 minutos)

    
    console.log(`${cigarroMinutosLife} Total de cigarros fumado por anos`);
    console.log(`${diasLost} dias de vida perdido`);

    console.log(result.toFixed(0));
    

}

life(20,5)