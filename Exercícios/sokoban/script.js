const DIST_SALTO = 66;
const MARGIN_FIX = 4;
const NUM_ROWS = 8;
const NUM_COLS = 8;

buildGameBoard(NUM_ROWS, NUM_COLS);

const player = new Player(0, 0);
const playerElement = document.querySelector('.jogador');

playerElement.style.top = calculaPosicao(0);
playerElement.style.left = calculaPosicao(0);

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

   return x >= 0 && x < NUM_ROWS && y >= 0 && y < NUM_COLS;
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
   for (let x = 0; x < numRows; x++) {
      const row = createGameElement('div', 'row', board);
      for (let y = 0; y < numCols; y++) {
         createGameElement('div', 'cell', row);
      }
   }
   createGameElement('div','jogador',board);
}