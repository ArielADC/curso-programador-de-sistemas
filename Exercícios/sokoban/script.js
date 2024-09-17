function criarLinha(Celulas, linhaIndex,linhaIndex2) {
    const linha = document.createElement('div');
    linha.classList.add('row');

    Callback (Celulas, numRows, numCols, k, i);
}
//X incompleto  
// const tabuleiro = document.getElementById('board2');

// function criarLinha(Celulas, linhaIndex,linhaIndex2) {
//     const linha = document.createElement('div');
//     linha.classList.add('row');

//     for (let i = 0; i < Celulas; i++) {
//         const celula = document.createElement('div');
//         celula.classList.add('cell');

        
//         if (i === linhaIndex || i === Celulas -  - linhaIndex) {

//             celula.style.backgroundColor = 'transparent';
//             celula.style.border = 'none';
//         } else {

//             celula.classList.add('not-x-part');
//         }

//         linha.append(celula);
//     }

    
//     return linha;
// }

// const numLinhas = 8; 
// const numCelulasPorLinha = 8;

// for (let i = 0; i < numLinhas; i++) {
//     const linha = criarLinha(numCelulasPorLinha, i);
//     tabuleiro.append(linha);
// }




// // cubo com o meio vasio 
// const tabuleiro = document.getElementById('board2');

// function criarLinha(Celulas, linhaIndex) {
//     const linha = document.createElement('div');
//     linha.classList.add('row');

//     for (let i = 0; i < Celulas; i++) {
//         const celula = document.createElement('div');
//         celula.classList.add('cell');

        
//        if (linhaIndex >= 1 && linhaIndex <= 6 && i >= 1 && i <= 6) {
//         celula.classList.add('empty'); 
//         celula.style.backgroundColor = 'transparent';
//          } 

//         linha.append(celula);
//     }

//     return linha;
// }

// const numLinhas = 8; 
// const numCelulasPorLinha = 8;

// for (let i = 0; i < numLinhas; i++) {
//     const linha = criarLinha(numCelulasPorLinha, i);
//     tabuleiro.append(linha);
// }





 //tabuleiro completo
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
