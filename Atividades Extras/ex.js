const cigarrosPorDia = Number(prompt("Quantos cigarros você fuma por dia?"));
const anosFumando = Number(prompt("Há quantos anos você fuma?"));

const cigarrosFumados = cigarrosPorDia * anosFumando * 365; // Quantidade total de cigarros fumados
const minutosPerdidos = cigarrosFumados * 10; // Tempo de vida perdido em minutos
const diasPerdidos = minutosPerdidos / 1440; // Tempo de vida perdido em dias (1 dia tem 1440 minutos)

console.log(`Você perdeu aproximadamente ${diasPerdidos.toFixed(0)} dias de vida fumando.`);
