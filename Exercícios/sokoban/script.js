
function builGameBoard(numberOfRows, numberOfcollumns, drowrule) {
    const game = document.getElementById("game");
    const board = document.createElement('div');
    board.classList.add('board');
    

    for (let k = 0; k < numberOfRows; k++) {
        const row = document.createElement('div');
        row.classList.add('row');
        board.append(row);
        for (let i = 0; i < numberOfcollumns; i++) {
            const celula = document.createElement('div');
            celula.classList.add('cell');
            row.append(celula);
            drowrule(celula, numberOfRows, numberOfcollumns, k, i);
        }
    }
    game.append(board);
}
function rule0(celula, numRows, numCols, k, i) {
    if (k <= 4) {
        celula.classList.add('flag');
    }
}
function rule1(celula, numberOfRows, numberOfcollumns, k, i) {
    if (k == 0 || i == 0 || k == numberOfRows - 1 || i == numberOfcollumns - 1)
        celula.classList.add('flag');
}
function rule2(celula, numberOfRows, numberOfcollumns, k, i) {
    if (k == 0)
        celula.classList.add('flag');
}
function rule3(celula, numberOfRows, numberOfcollumns, k, i) {
    if (i == 0) {
        celula.classList.add('flag');
    }
}
function rule4(celula, numberOfRows, numberOfcollumns, k, i) {
    if (k == 7) {
        celula.classList.add('flag');
    }
}
function rule5(celula, numberOfRows, numberOfcollumns, k, i) {
    if (i == 5) {
        celula.classList.add('flag');
    }
}
function rule6(celula, numberOfRows, numberOfcollumns, k, i) {
    if (k == 3 || i == 4) {
        celula.classList.add('flag');
    }
}
function rule7(celula, numberOfRows, numberOfcollumns, k, i) {
    if (i == 5 || k == 3) {
        celula.classList.add('flag');
    }
}
function rule8(celula, numberOfRows, numberOfcollumns, k, i) {
    if (k == 3 && i == 5) {
        celula.classList.add('flag');
    }
}
function rule9(celula, numberOfRows, numberOfcollumns, k, i) {
    if (i == k) {
        celula.classList.add('flag');
    }
}
function rule10(celula, numberOfRows, numberOfcollumns, k, i) {
    if (k + i == numberOfcollumns - 1 ) {
        celula.classList.add('flag');
    }
}
function rule11(celula, numberOfRows, numberOfcollumns, k, i) {
    if (i % 2 == 0) {
        celula.classList.add('flag');
    }
}
function rule12(celula, numberOfRows, numberOfcollumns, k, i) {
    if (i % 2 == 1) {
        celula.classList.add('flag');
    }
}
function rule13(celula, numberOfRows, numberOfcollumns, k, i) {
    if (!(k == 0 || i == 0 || k == numberOfRows - 1 || i == numberOfcollumns - 1)) {
        celula.classList.add('flag');
    }
}

builGameBoard(8, 8, rule0);
builGameBoard(8, 8, rule1);
builGameBoard(8, 8, rule2);
builGameBoard(8, 8, rule3);
builGameBoard(8, 8, rule4);
builGameBoard(8, 8, rule5);
builGameBoard(8, 8, rule6);
builGameBoard(8, 8, rule7);
builGameBoard(8, 8, rule8);
builGameBoard(8, 8, rule9);
builGameBoard(8, 8, rule10);
builGameBoard(8, 8, rule11);
builGameBoard(8, 8, rule12);
builGameBoard(8, 8, rule13);
