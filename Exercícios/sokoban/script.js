import {buildGameBoard} from "./board.js";
import Piece from "./piece.js";
import { boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.board');

const player = createBoardPiece(pieces.player, 'jogador');

function createBoardPiece(piecePosition, className) {
   const piece = new Piece(piecePosition.x, piecePosition.y);
   piece.insertElementInto(className, board);
   return piece;
}

window.addEventListener("keydown", function (event) {
   const nextPosition = player.nextPosition(event.code);

   if (verifyPosition(nextPosition)) {
       player.moveTo(nextPosition);
   }
});

function verifyPosition(position) {
   let { x, y } = position;


   if (x < 0 || x >= boardMap.length || y < 0 || y >= boardMap[0].length) {
       return false; 
   }

   return boardMap[x][y] !== '#';
}
