import { buildGameBoard } from "./board.js";
import Piece from "./piece.js";
import { boardMap } from "./board.js";

const { pieces, numberOfGoals } = buildGameBoard();
const board = document.querySelector('.board');

const player = createBoardPiece(pieces.player, 'jogador');
const boxes = [];

function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);
    return piece;
}

for (let i = 0; i < pieces.block.length; i++) {

    let piece = createBoardPiece(pieces.block[i], 'Block');
    boxes.push(piece);
}

window.addEventListener("keydown", function (event) {
    // event.preventDefault();

    handlePieceMovement(event.code);
});


function findBoxAtPosition(position) {
    return boxes.find((caixa) => caixa.x === position.x && caixa.y === position.y);
}

function levantaAPlaquinha() {
    alert("você Venceu!");
}

function handlePieceMovement(keycode) {
    const nextPlayerposition = player.nextPosition(keycode);

    const foundPiece = findBoxAtPosition(nextPlayerposition);

    if (foundPiece) {

        const boxNextPosition = foundPiece.nextPosition(keycode);

        if (verifyPosition(boxNextPosition) && !findBoxAtPosition(boxNextPosition)) {

            foundPiece.moveTo(boxNextPosition);
            player.moveTo(nextPlayerposition);

            const qtdCaixasCertas = contagemDeCaixaCorretas();
            console.log(qtdCaixasCertas);

            if (qtdCaixasCertas == numberOfGoals) {
                setTimeout(levantaAPlaquinha, 350);

            }

        }
    }
    else {
        if (verifyPosition(nextPlayerposition)) {
            player.moveTo(nextPlayerposition);
        }
    }
}

function verifyPosition(position) {
    let { x, y } = position;


    if (x < 0 || x >= boardMap.length || y < 0 || y >= boardMap[0].length) {
        return false;
    }

    return boardMap[x][y] !== '#';
}

function contagemDeCaixaCorretas() {
    let count = 0;

    for (const position of boxes) {
        let { x: j, y: i } = position;


        if (boardMap[i][j] === 'G') count++;
    }

    return count;
}
