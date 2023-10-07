
// Comandos de Repetição: Exercício 02. Faça um algoritmo que conte de 1 a 100 e a cada múltiplo de 10 emita uma mensagem: “Múltiplo de 10: <número>”. (neste caso, considerrando o intervalo de 1 até 20).


let num = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 10 == 0) {
        num = i
        console.log("Múltiplo de 10:", num);
    } else {
        console.log(i);
    }
}