/* 
    Comandos de Repetição: Exercício 01. Desenvolva um programa que imprima na tela os números entre 7 e 1000 que tem resto 3 quando divididos por 7.
*/ 


for (let i = 7; i <= 1000; i++){
    if (i % 7 == 3) {
        console.log(i);
    }
}