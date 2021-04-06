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

const createDisc = (evt, currentPlayer) => {
  let disk = document.createElement("div");
  disk.id = `${currentPlayer.cor}`;
  disk.className = `${currentPlayer.cor}`;
  let xArray = evt.target.id
  let yArray = evt.target.lastElementChild.id
  check[xArray][yArray] = currentPlayer.valor
  evt.target.lastElementChild.appendChild(disk);
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
