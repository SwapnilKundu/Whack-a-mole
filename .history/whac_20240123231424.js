let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
        setGame();      //when the window will be on, the game will also start
}

function setGame() {
        //set the grid (not manually  in html, through general div tags)
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //each tile assigned by id
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); // 1000 miliseconds = 1 second,after 1 second setMole will be called
    setInterval(setPlant, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
}

function getRandomTile() {
//random number generator from 0 to 8 (not 9)
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //Score updated
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //score updated
        gameOver = true;
    }
}