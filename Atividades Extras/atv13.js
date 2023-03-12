/*

Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
seu novo salário, com 15% de aumento.

*/


const employeeSalary = 2500
const newSalary = employeeSalary * (15/100) + employeeSalary

console.log(`Valor do novo salario do funcionairo: R$ ${newSalary.toFixed(2)}`);

