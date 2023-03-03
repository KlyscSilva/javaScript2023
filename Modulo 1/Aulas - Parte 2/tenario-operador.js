/*

    Operador tenario ou condicional


    ? ---> se
    : ---> se não

*/



/*

Realize um pequeno programa para que eu possar transferir meu dinheiro

- Preciso ter saldo em conta
- A conta não pode está bloqueada
- A conta na qual vou transferir precisa existir

*/

const balanceAccount = true
const accountIsNotBlocked = true
const accountExist = true


const TransferOk = balanceAccount && accountIsNotBlocked && accountExist ? 'Transferencia Realizada Com Sucesso' : 'Transferencia não realizada'

console.log(TransferOk);


/*

Realize um pequeno programa para desbloqueio de celular

? O que preciso fazer para desbloquear um celular?

- Preciso digitar a senha || ou
- Fazer reconhecimento digital || ou
- Fazer reconhecimento facial

*/

const passWord = false
const digitalRecognition = false
const easyRecognition = true

const unLock = passWord || digitalRecognition || easyRecognition ? 'Celular vai desbloquear' : 'Celular não desbloqueado,tente novamente'

console.log(unLock);


/*
    Realize um pequeno programa para realizar uma compra no cartão de crédito

    ? Preciso que o cartão tenha limite pra realizar compra  ?

*/

const creditOn = false

const approvedPurchase = creditOn ? 'COMPRA REALIZADA COM SUCESSO' : 'COMPRA NEGADA'

console.log(approvedPurchase);