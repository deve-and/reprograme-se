/*
    Crie um algoritmo, utilizando a linguagem JavaScript que leia dois números. Caso os dois números sejam positivos você deve testá-los para exibir as seguintes frases:
    
        - Os dois números são pares;
        - Os dois números são ímpares;
        - Um par e um ímpar.

    Se existir pelo menos um número negativo ou igual a zero, exiba a frase informando: Existe pelo menos um número 0 ou negativo!.
*/

const prompt = require("prompt-sync")();

let numero1 = parseInt(prompt("Digite o primeiro número: "));
let numero2 = parseInt(prompt("Digite o segundo número: "));

if (numero1 > 0 && numero2 > 0) {
    if(numero1 % 2 == 0 && numero2 % 2 == 0) {
        console.log("Os dois números são pares.")
    } else if (numero1 % 2 !== 0 && numero2 % 2 !== 0){
        console.log("Os dois números são ímpares.")
    } else {
        console.log("Um par e um ímpar.")
    }
} else {
    console.log("Existe pelo menos um número 0 ou negativo!")
}
