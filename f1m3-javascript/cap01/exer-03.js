/*
    Elabore um algoritmo para calcular o consumo de um determinado carro em um percurso qualquer. Você deve receber os seguintes valores: modelo do carro, número de quilômetros percorridos e número de litros de combustível gastos no percurso. Com base nestes valores você deverá encontrar o consumo (km/litro) do carro e mostrar na tela o resultado da seguinte forma:
        O consumo do carro <modelo do carro> é de <consumo> km/litro.
 */


const prompt = require("prompt-sync");

const modelo = prompt("Modelo do veículo: ");
const km = parseInt(prompt("Km rodados: "));
const combustivel = parseFloat(prompt("Combustível consumido : "));

let consumo = km / combustivel;

console.log("O consumo do carro:", modelo,"é de:", consumo,"km/litro");



