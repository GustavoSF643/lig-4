// Tabuleiro - João
const board = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
];

const createBoard = (n) => {
    for (let i = 1; i <= n; i++) {
        const column = document.createElement("div")
        column.id = "column" + i
        column.className = "columns"
        game.appendChild(column)
    }

}

let check = board;
let green = {valor: 1, cor: "green"};
let blue = {valor: 2, cor: "blue"};
let currentPlayer = green;

const createDisc = () => {

}

const alternatePlayer = () => {
    if (currentPlayer === green) {
        currentPlayer = blue;
    }
    if (currentPlayer === blue) {
        currentPlayer = green;
    }
}

const horizontalVictory = () => {

} 

const verticallVictory = () => {

} 

const diagonalVictory = () => {

} 

const victory = () => {

} 

const play = () => {

}


const game = document.getElementById('game')


createBoard(7)

/*columnOne.addEventListener("click", play);
columnTwo.addEventListener("click", play);
columnThree.addEventListener("click", play);
columnFour.addEventListener("click", play);
columnFive.addEventListener("click", play);
columnSix.addEventListener("click", play);
columnSeven.addEventListener("click", play);
*/

 

