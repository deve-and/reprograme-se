/*
    Crie um algoritmo que receba pelo teclado o nome de um aluno e três notas. Ao final, deverá ser exibido o nome do aluno, sua média e o resultado (se for acima ou igual a 6, o aluno estará "aprovado"; se não for, estará "reprovado").
*/

const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let nota1 = parseInt(prompt("Primera nota: "));
let nota2 = parseInt(prompt("Segunda nota: "));
let nota3 = parseInt(prompt("Terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 6) {
    console.log("Nome: ", nome, "\nMédia das notas: ", media,"\nAprovado!");
} else {
    console.log("Nome: ", nome,"\nMédia das notas: ", media,"\nReprovado");
}