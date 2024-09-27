const boardMap = [
   [ "#", "#", "#", "#", "#", "#", "#", "#" ],
   [ "#", ".", ".", ".", ".", ".", ".", "#" ],
   [ "#", ".", ".", ".", "#", ".", ".", "#" ],
   [ "#", ".", "#", "G", ".", ".", ".", "#" ],
   [ "#", ".", ".", "G", "B", "#", ".", "#" ],
   [ "#", ".", ".", "#", ".", "B", ".", "#" ],
   [ "#", ".", ".", "P", ".", ".", ".", "#" ],
   [ "#", "#", "#", "#", "#", "#", "#", "#" ]
];


const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;

const DIST_SALTO = 66;
const MARGIN_FIX = 4;


const pieces = buildGameBoard(NUM_ROWS, NUM_COLS);

const player = new Player(pieces.player.x, pieces.player.y);
const playerElement = document.querySelector('.jogador');

playerElement.style.top = calculaPosicao(player.x);
playerElement.style.left = calculaPosicao(player.y);

window.addEventListener("keydown", function (event) {
   const next = player.nextPosition(event.code);
   if (verifyPosition(next)) {
      player.moveTo(next, playerElement);
   }
})

function Player(x, y) {
   this.x = x;
   this.y = y;

   this.nextPosition = function (keycode) {
      let { x, y } = this;
      if (keycode === "ArrowUp") x--;
      if (keycode === "ArrowDown") x++;
      if (keycode === "ArrowLeft") y--;
      if (keycode === "ArrowRight") y++;
      return { x, y };
      
   }

   this.moveTo = function (position, element) {
      this.x = position.x;
      this.y = position.y;
      element.style.top = calculaPosicao(this.x);
      element.style.left = calculaPosicao(this.y);
   }
}

function verifyPosition(position) {
   let { x, y } = position;

   return boardMap[x][y] !== '#';
}

function calculaPosicao(qtd) {

   return `${qtd * DIST_SALTO + MARGIN_FIX}px`;
}

function createGameElement(elementName, className, parentNode) {
   const playerElement = document.createElement(elementName);
   playerElement.classList.add(className);
   parentNode.append(playerElement);

   return playerElement;
}

function buildGameBoard(numRows, numCols) {
   const game = document.getElementById("game");
   const board = createGameElement('div', 'board', game);
   const pieces = createGameElement('div','Block',board);

   for (let x = 0; x < numRows; x++) {
      const row = createGameElement('div', 'row', board);
     
      for (let y = 0; y < numCols; y++) {
         const cell = createGameElement('div', 'cell', row);
         const char = boardMap[x][y];

         if (char === '#')cell.classList.add('wall');
         if (char === 'G')cell.classList.add('goal');
         if (char === 'B')cell.classList.add('box');
         if (char === 'P')pieces.player = {x: x, y: y};
      }
   }
   return pieces;
}