import { buildGameBoard } from "./board.js";
import { mapa1, mapa2 } from "./mapas.js";

const { boardMap, pieces: { boxes, player }, numberOfGoals } = buildGameBoard(mapa1);

window.addEventListener("keydown", function (event) {
    handlePieceMovement(event.code);
});

function findBoxAtPosition(pos) {
    return boxes.find((caixa) => caixa.x === pos.x && caixa.y === pos.y);
}

function handlePieceMovement(keycode){
    const nextPlayerPosition = player.nextPosition(keycode);
    const caixa = findBoxAtPosition(nextPlayerPosition);

    if(caixa) {
        const nextCaixaPosition = caixa.nextPosition(keycode);
        const outraCaixa = findBoxAtPosition(nextCaixaPosition);
        const caixaCanMove = verifyPosition(nextCaixaPosition);
       
        if(caixaCanMove && !outraCaixa) {
            caixa.moveTo(nextCaixaPosition);
            player.moveTo(nextPlayerPosition);

            if(levelCompleted()) setTimeout(() => alert("Você venceu!"), 250);
        }
    } else {
        const playerCanMove = verifyPosition(nextPlayerPosition);
       
        if (playerCanMove) player.moveTo(nextPlayerPosition);
    }
}

function verifyPosition(position) {
    let { x: j, y: i } = position;

    return boardMap[i][j] !== '#';
}


// function levantaAPlaquinha() {
//     alert("você Venceu!");
// }

// function handlePieceMovement(keycode) {
//     const nextPlayerposition = player.nextPosition(keycode);

//     const foundPiece = findBoxAtPosition(nextPlayerposition);

//     if (foundPiece) {

//         const boxNextPosition = foundPiece.nextPosition(keycode);

//         if (verifyPosition(boxNextPosition) && !findBoxAtPosition(boxNextPosition)) {

//             foundPiece.moveTo(boxNextPosition);
//             player.moveTo(nextPlayerposition);

//             const qtdCaixasCertas = contagemDeCaixaCorretas();

//             if (qtdCaixasCertas == numberOfGoals) {
//                 setTimeout(levantaAPlaquinha, 350);

//             }

//         }
//     }
//     else {
//         if (verifyPosition(nextPlayerposition)) {
//             player.moveTo(nextPlayerposition);
//         }
//     }
// }

// function verifyPosition(position) {
//     let { x, y } = position;


//     if (x < 0 || x >= boardMap.length || y < 0 || y >= boardMap[0].length) {
//         return false;
//     }

//     return boardMap[x][y] !== '#';
// }

// function contagemDeCaixaCorretas() {
//     let count = 0;

//    for (let i = 0; i < boxes.length; i++) {
//     let { x, y } = boxes[i];
    
//     if (boardMap[y][x] === 'G') count++; 


//     console.log(count);
//    }

//     return count;
// }