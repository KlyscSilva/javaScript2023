/*

    Switch CASE


    preciso entrar com o valor na (key)
    só entra na case se o valor da variavel tiver na key
    usar sempre o break para a case terminar, caso não faça isso vai ler todas as case
    obrigado ter a case default pro código executar com sucesso

*/


const numberOne = 21

switch (numberOne) {
    case 20:
        console.log("Vc têm 20 anos");
        break;

    case 21:
        console.log("Vc têm 21 anos");
        break;

    case 22:
        console.log("Vc têm 22 anos");

        break;

    default:
        console.log("Idade não identificada");
        break;
}

///////////////////////////////// Exemplo 2 //////////////////////////////////////

const accountExist = true
const accountBalace = true
const accountNotBlocked = true

switch (accountExist && accountBalace && accountNotBlocked) {

    case true:
        console.log("Sua conta existe,têm saldo e não está bloqueada");
        break;

    case accountBalace:false
        console.log("Sua conta está sem saldo pra transferencia");
        break;

    case accountNotBlocked:false
        console.log("Está conta está bloquea, impossível de realizar transferencia");
        break;

    default:
        console.log("NaN");
        break;
}

