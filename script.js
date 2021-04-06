// Tabuleiro - João
let board = [[], [], [], [], [], [], []]

const createBoard = () => {
  let squareId = 0;
  let columnId = 0;

  for (let coluna = 0; coluna < 7; coluna++) {
    let column = document.createElement("div");
    column.className = "columns";
    column.id = `${columnId}`;
    game.appendChild(column);
    
    for (let linha = 0; linha < 6; linha++) {
      board[coluna][linha] = 0;
      let square = document.createElement("div");
      square.className = "square"
      square.id = `${squareId}`
      column.appendChild(square)
      squareId++;
    }
    columnId++;
  }
}

const game = document.getElementById("game");

createBoard()

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

const horizontalVictory = () => {};

const verticallVictory = () => {};

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
