const tabuleiro = document.getElementById('board2');


function criarLinha(Celulas) {
    const linha = document.createElement('div');
    linha.classList.add('row');

    for (let i = 0; i < Celulas; i++) {
        const celula = document.createElement('div');
        celula.classList.add('cell');
        linha.append(celula);
    }

    return linha;
}

const numLinhas = 4; 
const numCelulasPorLinha = 4; 

for (let i = 0; i < numLinhas; i++) {
    const linha = criarLinha(numCelulasPorLinha);
    tabuleiro.append(linha);
}

