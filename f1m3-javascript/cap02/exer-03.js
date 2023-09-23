/*
    Crie um algoritmo em que, dada a tabela a seguir, calcula o valor de desconto a ser condedido para um determinado cliente, de acordo com o valor da compra. O algoritmo deverá recerber pelo teclado o nome do cliente e o valor total da compra:
        -------------------------------------------------------
        valor da compra                 Porcentagem de desconto
        Abaixo de R$ 1.000,00           5%
        Entre R$ 1.000,00 a 5.000,00    10%
        Acima de R$ 5.000,00            15%
        -------------------------------------------------------
*/

const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let valorCompra = parseFloat(prompt("Digite o valor da compra: "));

let desconto5 = valorCompra * 0.05;
let desconto10 = valorCompra * 0.10;
let desconto15 = valorCompra * 0.15;

if (valorCompra < 1000) {
    valorFinal = valorCompra - desconto5;
    console.log("Nome: ", nome,"\nValor com desconto: R$", valorFinal);
} else if ((valorCompra >= 1000) && (valorCompra <= 5000)) {
    valorFinal = valorCompra - desconto10;
    console.log("Nome: ", nome,"\nValor com desconto: R$", valorFinal);
} else if (valorCompra > 5000) {
    valorFinal = valorCompra - desconto15;
    console.log("Nome: ", nome,"\nValor com desconto: R$", valorFinal);
} 
    
