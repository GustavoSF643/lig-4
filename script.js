// Tabuleiro - João
const board = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

const createBoard = (n) => {
  for (let i = 1; i <= n; i++) {
    const column = document.createElement("div");
    column.id = "column" + i;
    column.className = "columns";
    game.appendChild(column);
  }
};

const game = document.getElementById("game");
createBoard(7);

let check = board;
let green = { valor: 1, cor: "green" };
let blue = { valor: 2, cor: "blue" };
let currentPlayer = green;

const createDisc = (column, currentPlayer) => {
  let columnBoard = document.getElementById(column);
  let disk = document.createElement("div");
  disk.id = `${currentPlayer.cor}`;
  disk.className = `${currentPlayer.cor}`;
  columnBoard.appendchild(disk);
};

const alternatePlayer = () => {
  if (currentPlayer === green) {
    currentPlayer = blue;
    const player = getElementById("player");
    player.style.background = "blue";
  }
  if (currentPlayer === blue) {
    currentPlayer = green;
    const player = getElementById("player");
    player.style.background = "green";
  }
};

const horizontalVictory = (indexCheck) => { //indexCheck = board[i][j]
    
    if (check[i-3][j] === indexCheck && check[i-2][j] === indexCheck && check[i-1][j] === indexCheck) {
        return true;
    }
    if (check[i-2][j] === indexCheck && check[i-1][j] === indexCheck && check[i+1][j] === indexCheck) {
        return true;
    }
    if (check[i-1][j] === indexCheck && check[i+1][j] === indexCheck && check[i+2][j] === indexCheck) {
        return true;
    }
    if (check[i+1][j] === indexCheck && check[i+2][j] === indexCheck && check[i+3][j] === indexCheck) {
        return true;
    }
    return false;
};

const verticallVictory = (indexCheck) => {};

    if (check[i][j-1] === indexCheck && check[i][j-2] === indexCheck && check[i][j-3] === indexCheck) {
        return true;
    }
    return false;

const diagonalVictory = () => {};

const victory = () => {
  const win = document.getElementById("win");
  if (horizontalVictory() || verticallVictory() || diagonalVictory()) {
    win.style.visibility = "visible";
  }
};

const play = () => {};

/*columnOne.addEventListener("click", play);
columnTwo.addEventListener("click", play);
columnThree.addEventListener("click", play);
columnFour.addEventListener("click", play);
columnFive.addEventListener("click", play);
columnSix.addEventListener("click", play);
columnSeven.addEventListener("click", play);
*/
