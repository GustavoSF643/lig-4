// Tabuleiro - João
let board = [[], [], [], [], [], [], []]

const createBoard = () => {
  let squareId = 0;
  let columnId = 0;

  for (let coluna = 0; coluna < 7; coluna++) {
    let column = document.createElement("div");
    column.className = "columns";
    column.id = `column${columnId}`;
    game.appendChild(column);
    
    // for (let linha = 0; linha < 6; linha++) {
    //   board[coluna][linha] = 0;
    //   let square = document.createElement("div");
    //   square.className = "square"
    //   square.id = `${squareId}`
    //   column.appendChild(square)
    //   squareId++;
    // }
    columnId++;
  }
}

const game = document.getElementById("game");

createBoard()

let check = [[], [], [], [], [], [], []]
let green = { valor: 1, cor: "green" };
let blue = { valor: 2, cor: "blue" };
let currentPlayer = green;

const createDisc = (evt, currentPlayer) => {
  let disk = document.createElement("div");
  disk.id = `${currentPlayer.cor}`;
  disk.className = `${currentPlayer.cor}`;
  let xArray = 0
  if(evt.target.id.includes(0)){
    xArray = 0
  }
  if(evt.target.id.includes(1)){
    xArray = 1
  }
  if(evt.target.id.includes(2)){
    xArray = 2
  }
  if(evt.target.id.includes(3)){
    xArray = 3
  }
  if(evt.target.id.includes(4)){
    xArray = 4
  }
  if(evt.target.id.includes(5)){
    xArray = 5
  }
  if(evt.target.id.includes(6)){
    xArray = 6
  }
if(check[xArray].length < 6){
      check[xArray].push(currentPlayer.valor)
 }
if(evt.path[2].childNodes[5].childNodes[xArray].childElementCount < 6){
    evt.path[2].childNodes[5].childNodes[xArray].appendChild(disk);
  };
};

const alternatePlayer = () => {

  if (currentPlayer === green) {
    currentPlayer = blue;
    const player = document.getElementById("player");
    player.style.background = "blue";
  } else if (currentPlayer === blue) {
    currentPlayer = green;
    const player = document.getElementById("player");
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

const play = (evt) => {
  console.log(evt)
    createDisc(evt, currentPlayer);
    if(evt.path.length < 8){
      alternatePlayer()
    };
};

const touch = document.getElementById("touch")

touch.addEventListener("click", play);
/*columnTwo.addEventListener("click", play);
columnThree.addEventListener("click", play);
columnFour.addEventListener("click", play);
columnFive.addEventListener("click", play);
columnSix.addEventListener("click", play);
columnSeven.addEventListener("click", play);
*/
