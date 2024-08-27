function soma(N) {
    let soma = 0;
    for (let i = 1; i <= N; i++) {
        soma += i;
    }
    return soma;
}

const numeroA = 5;
const resultado = soma(numeroA);
console.log(`A soma dos números de 1 a ${numeroA} é ${resultado}`);

const numeroB = 10;
const rusultadO = soma(numeroB);
console.log(`A soma dos números de 1 a ${numeroB} é ${rusultadO}`);

const numeroC = 1;
const rusultaDO = soma(numeroC);
console.log(`A soma dos números de 1 a ${numeroC} é ${rusultaDO}`);

const numeroD = 64;
const rusultADO = soma(numeroD);
console.log(`A soma dos números de 1 a ${numeroD} é ${rusultADO}`);