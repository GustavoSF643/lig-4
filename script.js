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

let check = [[0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]]
let green = { valor: 1, cor: "green" };
let blue = { valor: 2, cor: "blue" };
let currentPlayer = green;
let indexColumn = 0;
let currentPlay = [];
let col = 0;
let line = 0;

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
  indexColumn = xArray

if(evt.path[2].childNodes[5].childNodes[xArray].childElementCount < 6){
    evt.path[2].childNodes[5].childNodes[xArray].appendChild(disk);
  };
  col = xArray
  
  const functionLine = (column) => {
    for (let i = 0; i < column.length; i++){
      if(column[i] === 0){
        return i
      }
    }
    return false
  }

  line = functionLine(check[xArray]);
  check[col][line] = currentPlayer.valor
  currentPlay = check[col][line]
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

const verticallVictory = (current, check) => {
    let x = line - 1
    let y = line - 2
    let z = line - 3
    if (current === check[col][x] && current === check[col][y] && current === check[col][z]){
      return true
    }
  return false
}

const diagonalVictory = (current, check) => {
  // let leftDown = check[col-1][line-1];
  // let rightDown = check[col+1][line-1];
  // let leftTop = check[col-1][line+1];
  // let rightTop = check[col+1][line+1];
  if (current === check[col-1][line-1]){
    if (current === check[col-2][line-2] && current === check[col-3][line-3]){
    return true
    };
  };
  if (current === check[col+1][line-1]){
    if (current === check[col+2][line-2] && current === check[col+3][line-3]){
      return true
    };
  };
  if (current === check[col-1][line+1]){
    if (current === check[col-2][line+2] && current === check[col-3][line+3]){
      return true
    };
  };
  if (current === check[col+1][line+1]){
    if (current === check[col+2][line+2] && current === check[col+3][line+3]){
      return true
    };
  };
  if (current === check[col-1][line-1] && current === check[col+1][line+1]){
    if (current === check[col-2][line-2] || current === check[col+2][line+2])
      return true
  };
  if (current === check[col+1][line-1] && current === check[col-1][line+1]){
    if (current === check[col+2][line-2] || current === check[col-2][line+2]){
      return true
    };
  }
  return false
};

const victory = () => {
  const win = document.getElementById("win");
  if (verticallVictory(currentPlay, check) || diagonalVictory(currentPlay, check)) {
    win.style.visibility = "visible";
    touch.removeEventListener("click", play);
  }
};

const play = (evt) => {
  createDisc(evt, currentPlayer);
  // console.log(verticallVictory(currentPlay, check))
  // verticallVictory(currentPlay, check);
  victory();

  if(evt.path[2].childNodes[5].childNodes[indexColumn].childElementCount < 6){
    alternatePlayer();
  };
};

const touch = document.getElementById("touch")

touch.addEventListener("click", play);
