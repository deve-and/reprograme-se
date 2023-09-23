/*
    Usando o algoritmo do item 1, altere o resultado para: Média <=3, "reprovado", média < 6, "recuperação" e média >= 6, "aprovado".
*/

const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let nota1 = parseInt(prompt("Primera nota: "));
let nota2 = parseInt(prompt("Segunda nota: "));
let nota3 = parseInt(prompt("Terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 6) {
    console.log("Nome: ", nome,"\nMédia das notas: ", media,"\nAprovado!");
} else if ((media < 6) && (media >= 3)) {
    console.log("Nome: ", nome,"\nMédia das notas: ", media,"\nRecuperação!");
} else {
    console.log("Nome: ", nome,"\nMédia das notas: ", media,"\nReprovado!");
}
    