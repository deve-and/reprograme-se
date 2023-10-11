// # Métodos de um Array

// push() - Adiciona um ou mais elemntos ao final do array.
const pushNumeros = [1, 2, 3];
pushNumeros.push(4);
console.log("Método push()")
console.log(pushNumeros);
console.log()

// pop() - Remove o último elemento do array e retorna esse elemento.
const popNumeros = [1, 2, 3];
const ultimoElemento = popNumeros.pop();
console.log("Método pop()")
console.log(popNumeros);
console.log(ultimoElemento);
console.log()

// shift() - Remove o primeiro elemento do array e retorna esse elemento.
const shiftNumeros = [1, 2, 3];
const primeiroElemento = shiftNumeros.shift();
console.log("Método shift()");
console.log(shiftNumeros);
console.log(primeiroElemento);
console.log();

// unshift() - Adiciona um ou mais elementos ao início do Array
const unshiftNumeros = [2, 3];
unshiftNumeros.unshift(1);
console.log("Método unshift");
console.log(unshiftNumeros);
console.log()

// splice() - Permite adicionar, remover ou substituir elementos em qualquer posição do array;
const spliceNumeros = [1, 2, 3, 4, 5];
spliceNumeros.splice(2, 1, 10); // Remove 1 elemento apartir do índice 2 e insere o valor 10 no mesmo índice.
console.log("Método splice()");
console.log(spliceNumeros);
console.log();

// sort() - Ordena os elementos do array em ordem crescente
const sortNumeros = [3, 1, 4, 2, 5];
sortNumeros.sort();
console.log("Método sort()");
console.log(sortNumeros);
console.log()

// indexOf() - Retorna o primeiro índice em que um elemento específico é encontrado no array.
const indexOfNumeros = [10, 20, 30, 40, 50];
const indice = indexOfNumeros.indexOf(30);
console.log("Método indexOf()");
console.log(indice);