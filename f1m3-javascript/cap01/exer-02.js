/*
Elabore um algoritmo para calcular o salário líquido de um determinado Funcionário. Você deve receber os seguintes valores: salário e imposto
de renda.Com base nestes valores você deverá encontrar o valor do salário líquido(salário líquido = salário – imposto de renda) e mostrar na tela o resultado.
*/

const prompt = require("prompt-sync")();

let nome = (prompt("Digite seu nome: "));
let salarioBruto = parseFloat(prompt("Digite o valor do seu salário bruto: R$ "));
let impostoRenda = salarioBruto * 0.10;
let salarioLiquido = salarioBruto - impostoRenda

console.log("Olá", nome, "\nSeu salário com desconto de imposto de renda é: R$", salarioLiquido);