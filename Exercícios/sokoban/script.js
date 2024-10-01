import {buildGameBoard} from "./board.js";
import Piece from "./piece.js";
import { boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.board');

const player = createBoardPiece(pieces.player, 'jogador');
const boxes = [];

function createBoardPiece(piecePosition, className) {
   const piece = new Piece(piecePosition.x, piecePosition.y);
   piece.insertElementInto(className, board);
   return piece;
}

for (let i = 0; i < pieces.block.length; i++)  {

   let piece = createBoardPiece(pieces.block [i], 'Block');
   boxes.push(piece);
}

window.addEventListener("keydown", function (event) {
    // event.preventDefault();

    handlePieceMovement(event.code);
});


function findBoxAtPosition(position) {
    return boxes.find((caixa) => caixa.x === position.x && caixa.y === position.y);
}

console.log(findBoxAtPosition({x: 1, y: 2}));
console.log(findBoxAtPosition({x: 4, y: 4}));
console.log(findBoxAtPosition({x: 4, y: 5}));
console.log(findBoxAtPosition({x: 5, y: 5}));


function handlePieceMovement(keycode) {
    const next = player.nextPosition(keycode);
    
    const foundPiece = findBoxAtPosition(next);

    if (foundPiece) {
        const boxNextPosition = foundPiece.nextPosition(keycode);

        if (verifyPosition(boxNextPosition) && !findBoxAtPosition(boxNextPosition)) {
            foundPiece.moveTo(boxNextPosition);
            player.moveTo(next);
        }
    }
    else {
        if (verifyPosition(next)) {
            player.moveTo(next);
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
