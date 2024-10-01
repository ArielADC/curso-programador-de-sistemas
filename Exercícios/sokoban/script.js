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
    event.preventDefault();

    handlePieceMovement(event.code);
});

/* Tarefa #1: implementar função para localizar uma caixa à partir de um
 uma dada coordenada.
*/
function findBoxAtPosition(position) {
    // modificar linha(s) de código abaixo
    return null;
}

/** Tarefa #2: modificar a função abaixo de forma a tratar tando a movimentação
 * do jogador quanto das caixas.
*/
function handlePieceMovement(keycode){
    // Variável destinada ao pré-cálculo da posição do jogador
    const next = player.nextPosition(keycode);
    // (Modificar) Variável para detectar a "presença" de outra peça
    const foundPice = null;

    // Implementar lógica caso encontre uma outra peça no caminho.
    if(foundPice) {

    }
    // E caso não encontre outra peça...
    else {
        // Faça as modificações que forem necessárias para manter o
        // funcionamento do jogo.
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
