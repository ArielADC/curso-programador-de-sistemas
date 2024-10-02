export const boardMap = [
    [ "#", "#", "#", "#", "#", "#", "#", "#" ],
    [ "#", ".", ".", ".", ".", ".", ".", "#" ],
    [ "#", ".", ".", ".", "#", ".", ".", "#" ],
    [ "#", ".", "#", ".", "G", ".", ".", "#" ],
    [ "#", ".", ".", ".", "B", "#", ".", "#" ],
    [ "#", ".", "G", "B", "P", "B", "G", "#" ],
    [ "#", ".", ".", ".", ".", ".", ".", "#" ],
    [ "#", "#", "#", "#", "#", "#", "#", "#" ]
];
 
 const NUM_ROWS = boardMap.length;
 const NUM_COLS = boardMap[0].length;

export function buildGameBoard() {
    const game = document.getElementById("game");
    const board = createGameElement('div', 'board', game);
    const pieces = {
      block: []
    };
 
    let numberOfGoals = 0;
    
    for (let x = 0; x < NUM_ROWS; x++) {
       const row = createGameElement('div', 'row', board);
      
       for (let y = 0; y < NUM_COLS; y++) {
          const cell = createGameElement('div', 'cell', row);
          const char = boardMap[x][y];
          const position = {x: x, y: y}
 
          if (char === '#')cell.classList.add('wall');
          if (char === 'P')pieces.player = position;
          if (char === 'B')pieces.block.push(position);
          if (char === 'G'){
            cell.classList.add('goal')
            numberOfGoals ++;
          };
        }
    }
    return {pieces,numberOfGoals};
 }

 
export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);
 
    return element;
 }
