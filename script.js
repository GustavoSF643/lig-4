const header = document.querySelector("header");
const main = document.querySelector("main");
const game = document.getElementById("game");
const circle = document.querySelectorAll(".circle");
const btnRestart = document.getElementById("btnRestart");
const win = document.getElementById("win");
const clickSound = document.getElementById("clickSound");
const fallSound = document.getElementById("fallSound");

const createBoard = () => {
  let columnId = 0;
  
  for (let coluna = 0; coluna < 7; coluna++) {
    let column = document.createElement("div");
    column.className = "columns";
    column.id = `column${columnId}`;
    game.appendChild(column);
    columnId++;
  }
};

const start = () => {
  header.style.display = "none";
  main.style.visibility = "visible";
  createBoard()
};

let check = [[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0]];
let green = { valor: 1, cor: "green" };
let blue = { valor: 2, cor: "blue" };
let currentPlayer = green;
let currentPlay = [];
let col = 0;
let line = 0;

const createDisc = (evt, currentPlayer) => {
  let disk = document.createElement("div");
  disk.id = `${currentPlayer.cor}`;
  disk.className = `${currentPlayer.cor}`;
  
  for (let i = 0; i <= 6; i++){
    if(evt.path[1].children[i].id === evt.target.id){
      col = i
    }
  };
  
  if(evt.path[2].childNodes[5].childNodes[col].childElementCount < 6){
    evt.path[2].childNodes[5].childNodes[col].appendChild(disk);
    clickSound.play();
  };
  
  const functionLine = (column) => {
    for (let i = 0; i < column.length; i++){  
      if(column[i] === 0){
        return i
      }
    }
    return false
  };

  line = functionLine(check[col]);
  check[col][line] = currentPlayer.valor;
  currentPlay = check[col][line];
  
  if (line === 0){
    setTimeout(function() {fallSound.play()}, 1000)
    disk.animate([
      {transform: "translateY(-660%)"},
      {transform: "translateY(0%)"},
    ], {
      duration: 1000,
      easing: "ease-in"
    });
  };
  if (line === 1){
    setTimeout(function() {fallSound.play()}, 900)
    disk.animate([
      {transform: "translateY(-560%)"},
      {transform: "translateY(0%)"}
    ], {
      duration: 900,
      easing: "ease-in"
    });
  };
  if (line === 2){
    setTimeout(function() {fallSound.play()}, 800)
    disk.animate([
      {transform: "translateY(-460%)"},
      {transform: "translateY(0%)"}
    ], {
      duration: 800,
      easing: "ease-in"
    });
  };
  if (line === 3){
    setTimeout(function() {fallSound.play()}, 700)
    disk.animate([
      {transform: "translateY(-360%)"},
      {transform: "translateY(0%)"}
    ], {
      duration: 700,
      easing: "ease-in"
    });
  };
  if (line === 4){
    setTimeout(function() {fallSound.play()}, 600)
    disk.animate([
      {transform: "translateY(-260%)"},
      {transform: "translateY(0%)"}
    ], {
      duration: 600,
      easing: "ease-in"
    });
  };
  if (line === 5){
    setTimeout(function() {fallSound.play()}, 500)
    disk.animate([
      {transform: "translateY(-160%)"},
      {transform: "translateY(0%)"}
    ], {
      duration: 500,
      easing: "ease-in"
    });
  };
};

const alternatePlayer = () => {
  if (currentPlayer === green) {
    currentPlayer = blue;
    const player = document.getElementById("player");
    player.style.background = "blue";
    for (let i = 0; i < 7; i++){
      circle[i].classList.add("hoverBlue");
      circle[i].classList.remove("hoverGreen");
    };

  } else if (currentPlayer === blue) {
    currentPlayer = green;
    const player = document.getElementById("player");
    player.style.background = "green";
    for (let i = 0; i < 7; i++){
      circle[i].classList.add("hoverGreen");
      circle[i].classList.remove("hoverBlue");
    };
  };
};

const horizontalVictory = (current, check) => { 
  // x é conferência de coluna para esquerda
  // z é conferência de coluna para direita
  let x = col - 1;
  let xx = col - 2;
  let xxx = col - 3;
  let z = col + 1;
  let zz = col + 2;
  let zzz = col + 3;

  if (col <= 3) {
    if (current === check[z][line] && current === check[zz][line] && current === check[zzz][line]){
      return true
    }
  };
  if (col <= 4 && col >= 1) {
    if (current === check[x][line] && current === check[z][line] && current === check[zz][line]){
      return true
    }
  };
  if (col <= 5 && col >= 2) {
    if (current === check[xx][line] && current === check[x][line] && current === check[z][line]){
      return true
    }
  };
  if (col >= 3) {
    if (current === check[xxx][line] && current === check[xx][line] && current === check[x][line]){
      return true
    }
  };
  return false;
};

const verticallVictory = (current, check, evt) => {
    // y é conferência de linha para baixo
    let y = line - 1;
    let yy = line - 2;
    let yyy = line - 3;
    let currentDOM = evt.path[2].childNodes[5].childNodes[col].childNodes[line]
    if (line >= 3) {
      if (current === check[col][y] && current === check[col][yy] && current === check[col][yyy]){
        currentDOM.style.background = "red"
        evt.path[2].childNodes[5].childNodes[col].childNodes[y].style.background = "red";
        evt.path[2].childNodes[5].childNodes[col].childNodes[yy].style.background = "red";
        evt.path[2].childNodes[5].childNodes[col].childNodes[yyy].style.background = "red";
        return true
      }
    };
  return false
};

const diagonalVictory = (current, check) => {
  // x é conferência de coluna para esquerda
  // z é conferência de coluna para direita
  // y é conferência de linha para baixo
  // w é conferência de linha para cima
  let x = col - 1;
  let xx = col - 2;
  let xxx = col - 3;
  let z = col + 1;
  let zz = col + 2;
  let zzz = col + 3;
  let y = line - 1;
  let yy = line - 2;
  let yyy = line - 3;
  let w = line + 1;
  let ww = line + 2;
  let www = line + 3;

  if (col >= 3 && line >= 3) {
    if (current === check[x][y]){
      if (current === check[xx][yy] && current === check[xxx][yyy]){
      return true
      };
    };
  };
  if (col <= 3 && line >= 3) {
    if (current === check[z][y]){
      if (current === check[zz][yy] && current === check[zzz][yyy]){
        return true
      };
    };
  };
  if (col >= 3 && line <= 2) {
    if (current === check[x][w]){
      if (current === check[xx][ww] && current === check[xxx][www]){
        return true
      };
    };
  };
  if (col <= 3 && line <= 2) {
    if (current === check[z][w]){
      if (current === check[zz][ww] && current === check[zzz][www]){
        return true
      };
    };
  };
  if (col >= 2 && line >= 2 && col <= 5 && line <= 4) {
    if (current === check[x][y] && current === check[z][w]){
      if (current === check[xx][yy])
        return true
    };
  };
  if (col >= 1 && line >= 1 && col <= 4 && line <= 3) {
    if (current === check[x][y] && current === check[z][w]){
      if (current === check[zz][ww])
        return true
    };
  };
  if (col >= 1 && line >= 2 && col <= 4 && line <= 4) {
    if (current === check[z][y] && current === check[x][w]){
      if (current === check[zz][yy]){
        return true
      };
    }
  };
  if (col >= 2 && line >= 1 && col <= 5 && line <= 3) {
    if (current === check[z][y] && current === check[x][w]){
      if (current === check[xx][ww]){
        return true
      };
    }
  };
  return false
};

const tie = (check) => {
  let sum = 0;
  for (let i = 0; i < 7; i++) {
    if (check[i][5] !== 0){
      sum++ 
    }
  }
  return sum === 7;
};

const winner = () => {
  const winnerText = document.getElementById("winner");
  if (tie(check)) {
    winnerText.innerText = "Não houve vencedor.";
    winnerText.style.color = "black";
    btnRestart.style.background = "black";
  } else {
    winnerText.innerText = `O jogador ${currentPlayer.cor} venceu!!!`;
    winnerText.style.color = currentPlayer.cor;
    btnRestart.style.background = currentPlayer.cor;
  }
};

const victory = (evt) => {
  if (verticallVictory(currentPlay, check, evt) || horizontalVictory(currentPlay, check) || diagonalVictory(currentPlay, check) || tie(check)) {
    winner();
    alternatePlayer();
    win.style.visibility = "visible";
    touch.removeEventListener("click", play);
  }
};

const play = (evt) => {
  createDisc(evt, currentPlayer);
  victory(evt);
  if(evt.path[2].childNodes[5].childNodes[col].childElementCount <= 6){
    alternatePlayer();
    if (evt.path[2].childNodes[5].childNodes[col].childElementCount === 6){
      evt.target.classList.add("bloqueio")
    };
  };
};

const reset = (evt) => {
  win.style.visibility = "hidden";
  game.innerHTML = "";
  createBoard();
  check = [[0,0,0,0,0,0],
          [0,0,0,0,0,0],
          [0,0,0,0,0,0],
          [0,0,0,0,0,0],
          [0,0,0,0,0,0],
          [0,0,0,0,0,0],
          [0,0,0,0,0,0]];
  for(let i = 0; i < 7; i++){
    circle[i].classList.remove("bloqueio");
  };
  touch.addEventListener("click", play);

};

startButton.addEventListener("click", start);

touch.addEventListener("click", play);

btnRestart.addEventListener("click", reset);
