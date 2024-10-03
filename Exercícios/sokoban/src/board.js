import Piece from "./piece.js";
import { lvl0, lvl1} from "./level.js";

function strig2BoadMap(level){
  const lines = level.trim().esplit('\n');
  console.log(lines);

}
strig2BoadMap

export const boardMap = [
  ["", "", "#", "#", "#", "#", "#", ],
  ["#", "#", ".", ".", ".", ".", "#", ],
  ["#", ".", ".", ".", "#", ".", ".", "#"],
  ["#", ".", "#", "G", ".", ".", ".", "#"],
  ["#", ".", ".", "G", "B", "#", ".", "#"],
  ["#", ".", ".", "#", ".", "B", ".", "#"],
  ["", "#", ".", "P", ".", ".", "#", "#"],
  ["", "#", "#", "#", "#", "#", "", ]
];

const NUM_ROWS = boardMap.length;

export function buildGameBoard() {
  const game = document.getElementById("game");
  const board = createGameElement('div', 'board', game);
  const pieces = {
    block: []
  };
  
  let numberOfGoals = 0;
  
  for (let x = 0; x < NUM_ROWS; x++) {
    const row = createGameElement('div', 'row', board);
    const NUM_COLS = boardMap[x].length;
    
    
    for (let y = 0; y < NUM_COLS; y++) {
      const cell = createGameElement('div', 'cell', row);
      const char = boardMap[x][y];
      const position = { x: x, y: y }


      if (char === '#') cell.classList.add('wall');
      if (char === 'P') pieces.player = position;
      if (char === 'B') pieces.block.push(position);
      if (char === 'G') {
        cell.classList.add('goal')
        numberOfGoals++;
      };
      if (char === '') cell.classList.add('empty');
    }
  }
  return {boardMap, pieces, numberOfGoals };
}


export function createGameElement(elementName, className, parentNode) {
  const element = document.createElement(elementName);
  element.classList.add(className);
  parentNode.append(element);

  return element;
}
