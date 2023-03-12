/*

3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
final uma mensagem.
Ex:
Nome do Funcionário: Maria do Carmo
Salário: 1850,45
O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.

*/

const funcSalary = {

    nome: "Matheus Silva",
    salario: 2000.50,

}

const messag = `O funcionário ${funcSalary.nome} 
têm um salario de  R$${funcSalary.salario.toFixed(2)} em junho.`

console.log(messag);