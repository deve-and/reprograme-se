const prompt = require("prompt-sync")();

var lista1 = [];
var lista2 = [];
var valoresEmComum = [];

console.log("Lista 1");
for (let i = 0; i < 5; i++) {
    lista1.push(parseInt(prompt("Digite um número: ")));
}

console.log("Lista 2");
for (let i = 0; i < 5; i++) {
    lista2.push(parseInt(prompt("Digite um número: ")))
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (lista1[i] == lista2[j]) {
            valoresEmComum.push(lista1[i]);
        }
    }
}

console.log(valoresEmComum);