function encontrarMaiorNumero(array) {
    if (array.length === 0) return undefined; 
    let maior = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }

    return maior;
}


console.log(encontrarMaiorNumero([1, 2, 3, 4, 5])); 
console.log(encontrarMaiorNumero([-1, -2, -3, -4, -5])); 
console.log(encontrarMaiorNumero( [10, 20, 30, 40, 50])); 
console.log(encontrarMaiorNumero([]));