// Comandos de Repetição Aninhados: Exercício 3.10.2.Escreva um programa que mostre na tela os 3 primeiros números perfeitos. Um número perfeito é aquele que é igual à soma dos seus divisores.Exemplos de núm eros perfeitos: 6 = 1 + 2 + 3; 28 = 1 + 2 + 4 + 7 + 14; etc.

var numero = 0;
var perfeitos = 0;

while (perfeitos < 3) {
    numero++
    soma_divisores = 0;
    for (let j = 1; j <= numero - 1; j++) {
        if (numero % j == 0) {
            soma_divisores = soma_divisores + j;
        }
    }

    if (soma_divisores == numero) {
        console.log(`${numero} É um número perfeito`);
        perfeitos++
    }
}
