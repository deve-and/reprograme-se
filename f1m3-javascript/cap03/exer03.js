/*
    Comandos de Repetição: Exercício 03. Desenvolva um algoritmo que obtêm números do usuário e os soma. A cada repetição algoritmo deve perguntar ao usuário se o mesmo deseja continuar a digitar números. Enquanto o usuário digitar "s" o algoritmo continua a receber números e somá-los. Quando o usuário digita qualquer outra coisa o algoritmo termina e apresenta o valor da soma dos números.
*/
const prompt = require("prompt-sync")()

let soma = 0;
let continua = "s";

while (continua == "s") {

    let num = parseInt(prompt("Digite um valor: "));
    soma = soma + num;

    continua = prompt("Deseja continuar? (s/n) ");
}

console.log("A soma total foi de:", soma);




