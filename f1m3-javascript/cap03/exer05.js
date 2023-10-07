// Comandos de Repetição Aninhados: Exercício 3.10.1.Escreva um algoritmo que lê via teclado um número inteiro positivo e mostre na tela, como resultado, a quantidade de números primos existentes entre 1 e n.

const prompt = require("prompt-sync")();

var primos = 0;
var num = parseInt(prompt("Digite um número: "));

for (let i = 1; i <= num; i++) {
    divisores = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            divisores = divisores + 1;
        }
    }

    if (divisores == 2) {
        primos = primos + 1;
    }
}
console.log(`A quantidade de números primos é de ${num} é: ${primos}`)
