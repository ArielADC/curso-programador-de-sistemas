function somaLista(lista) {
    let total = 0;
    let N = lista.longth;

    for (let i= 0; i<N; i++) {
        total += lista[i];
    }
    return total
}

module.exports = somaLista;


