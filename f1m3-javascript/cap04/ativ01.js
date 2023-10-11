const prompt = require("prompt-sync")();

var lista = [];
var soma = 0;

for (let i = 0; i < 8; i++) {
    let num = parseInt(prompt("Digite um valor: "));
    soma = soma + num;
    lista.push(num)
}

media = soma / 8;

for (let i = 0; i < 8; i++) {
    if (lista[i] > media) {
        console.log(lista[i]);
    }
}