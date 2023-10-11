// # Iterando um Array

const numeros = [1, 2, 3, 4, 5];

// percorre o for
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i])
// }

for (let numero of numeros) {
    console.log(numero)
}

// Ambos retornam o mesmo resultado