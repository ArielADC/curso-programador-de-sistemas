const tabuleiro = document.getElementById('board2');

function criarLinha(Celulas, linhaIndex) {
    const linha = document.createElement('div');
    linha.classList.add('row');

    for (let i = 0; i < Celulas; i++) {
        const celula = document.createElement('div');
        celula.classList.add('cell');

        
        if (linhaIndex >= 1 && linhaIndex <= 6 && i >= 1 && i <= 6) {
            celula.classList.add('empty'); 
            celula.style.backgroundColor = 'transparent';
        }

        linha.append(celula);
    }

    return linha;
}

const numLinhas = 8; 
const numCelulasPorLinha = 8;

for (let i = 0; i < numLinhas; i++) {
    const linha = criarLinha(numCelulasPorLinha, i);
    tabuleiro.append(linha);
}




// const tabuleiro = document.getElementById('board2');


// function criarLinha(Celulas) {
//     const linha = document.createElement('div');
//     linha.classList.add('row');

//     for (let i = 0; i < Celulas; i++) {
//         const celula = document.createElement('div');
//         celula.classList.add('cell');
//         linha.append(celula);

//     }

//     return linha;
// }

// const numLinhas = 8; 
// const numCelulasPorLinha = 8;

// for (let i = 0; i < numLinhas; i++) {
//     const linha = criarLinha(numCelulasPorLinha);
//     tabuleiro.append(linha);
// }
