/*
    Comandos de Repetição: Exercício 04. Faça um algoritmo que determine o maior entre N números inteiros positivos. A condição de parada é a entrada de um valor 0, ou seja, o algoritmo deve ficar calculando o maior até que a entrada seja igual a 0 (ZERO).
*/

const prompt = require("prompt-sync")();

var maior = 0; 
do {
    var num = parseInt(prompt("Digite um valor: "))
    if (num > maior){
        maior = num;
    } 
} while (num != 0);

console.log("O maior número foi:", maior);