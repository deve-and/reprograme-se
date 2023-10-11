var quadPar = 0;
var quadImpar = 0;

for (let i = 1; i <= 20; i++) {
    quadradado = i * i;

    if (quadradado % 2 == 0) {
        quadPar = quadPar + quadradado;
    } else {
        quadImpar = quadImpar + quadradado;
    }
}

console.log(quadPar)
console.log(quadImpar)
console.log(quadradado)