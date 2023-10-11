/*
    Dadas duas sequências com 4 números inteiros entre 0 e 9, calcular a sequência de números que representa a soma das sequências anteriores.
*/

const prompt = require("prompt-sync")();

var lista1 = [];
var lista2 = [];
var somaIndice = [];

for (let i = 0; i < 4; i++) {
    lista1.push(parseInt(prompt("Digite um número: ")));
}

for (let i = 0; i < 4; i++) {
    lista2.push(parseInt(prompt("Digite um número: ")))
}

for (let i = 0; i < 4; i++) {
    somaIndice.push(lista1[i] + lista2[i]);
}

console.log(somaIndice)


