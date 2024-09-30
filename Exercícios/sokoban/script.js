import {buildGameBoard} from "./board.js";
import Piece from "./piece.js";
import { boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.board');

const playerPiece = createBoardPiece(pieces.player, 'jogador');

function createBoardPiece(piecePosition, className) {
   const piece = new Piece(piecePosition.x, piecePosition.y);
   piece.insertElementInto(className, board);
   return piece;
}

for (let i = 0; i < pieces.block.length; i++)  {

    createBoardPiece(pieces.block [i], 'Block');    
}
// function handleKedownEvent()

window.addEventListener("keydown", function (event) {
   const nextPosition = playerPiece.nextPosition(event.code);

   if (verifyPosition(nextPosition)) {
       playerPiece.moveTo(nextPosition);
   }
});

function verifyPosition(position) {
   let { x, y } = position;


   if (x < 0 || x >= boardMap.length || y < 0 || y >= boardMap[0].length) {
       return false; 
   }

   return boardMap[x][y] !== '#';
}
