/*
    Crie um algoritmo, utilizando a linguagem JavaScript, que receba pelo teclado os valores dos três ângulos internos de um triângulo. Depois verifique se é triângulo, de acordo com a propriedade. Caso não seja triângulo mostre uma mensagem "Não é triângulo!". Caso seja triângulo, mostre a classificação do triângulo quanto aos ângulos:
        - Acutângulo (três ângulos agudos);
        - Retângulo (um ângulo reto);
        - Obtusângulo (um ângulo abtuso).
    
    Propriedades:
        - A soma dos ângulos de um triângulo deve ser igual a 180 graus;
        - Ângulo agudo: menor do que 90 graus;
        - Ângulo reto: exatamente 90 graus;
        - Ângulo obtuso: maior que 90 graus e menor que 180 graus.
*/

const prompt = require("prompt-sync")();

let a1 = parseInt(prompt("Digite o valor do primeiro ângulo: "));
let a2 = parseInt(prompt("Digite o valor do segundo ângulo: "));
let a3 = parseInt(prompt("Digite o valor do terceiro ângulo: "));

if (a1 + a2 + a3 == 180){
    if (a1 < 90 && a2 < 90 && a3 < 90){
        console.log("Triângulo Acutângulo");
    } else if (a1 == 90 || a2 == 90 || a3 == 90){
        console.log("Triângulo Retângulo");
    } else {
        console.log("Triângulo Obtusângulo")
    }
} else {
    console.log("Não é um triângulo!")
}