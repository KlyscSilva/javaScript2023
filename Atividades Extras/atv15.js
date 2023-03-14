/*

15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o
salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
por hora trabalhada.


*/

const salaryMen = (daysMes) =>{

    let day = daysMes
    let hour = 8

    const result = day * hour * 25

   return console.log(`O salario do funcionario é de R$${result} por mês`);

}

salaryMen(20)


    