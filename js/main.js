let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
  
    order.forEach(element => setTimeout(() => {
        lightColor(createColorElement(element), Number(element) + 1);
    }, 1000));
}

let lightColor = (element, number) => {
    setTimeout(() => {
        element.classList.add('selected');
    }, 400);
    setTimeout(() => {
        element.classList.remove('selected');
    }, 1000);
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length) {
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color ==1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

let nextLevel = () => {
    score++;
    
    setTimeout(() => {
        shuffleOrder();
    }, 250);
}

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();