
let spa = "&nbsp;&nbsp;&nbsp;";
let pix = "O";
let brk = "<br>";
let lin = "||";
let lastContainer = null;
let gameInterval = null;

function NewRaceGame(){
    if(gameInterval != null){
        clearInterval(gameInterval);
        gameInterval=null;
    }    
    raceSpeed = 0;
    currentRaceRivals = [];
    spawnSpaceTime = 0;
    playerCar = null;
    currentPlayerPosition = 0;
    currentScore = 0;
    maxScore = 0;
    updtesCounter = 0;
    if(lastContainer != null){
        lastContainer.remove();
    }
    let container = document.createElement("div");
    lastContainer = container;
    container.classList = "gamePanel";
    let raceScore = document.createElement("span");
    raceScore.classList = "gameScore";
    let textNode = document.createTextNode("SCORE:");
    raceScore.appendChild(textNode);
    container.appendChild(raceScore);
    let score = document.createElement("span");
    score.classList = "gameScore";
    score.id = "raceScoreText";
    let textNode2 = document.createTextNode("");
    score.appendChild(textNode2);
    container.appendChild(score);
    let highScore = document.createElement("span");
    highScore.classList = "gameScore";
    let textNode3 = document.createTextNode("--HIGH:");
    highScore.appendChild(textNode3);
    container.appendChild(highScore);
    let hscore = document.createElement("span");
    hscore.classList = "gameScore";
    hscore.id = "highScoreText";
    let textNode4 = document.createTextNode("");
    hscore.appendChild(textNode4);
    container.appendChild(hscore);
    gamePanel = document.createElement("div");
    gamePanel.addEventListener("click", function (e) {
        currentPlayerPosition++;
        if(currentPlayerPosition > 1){
            currentPlayerPosition = 0;
        }
    });
    if(gameInterval == null){
        gameInterval = setInterval(function(){GameUpdate();}, 1);
    }
    playerCar = NewCar(1);
    currentRaceRivals.push(NewSpace());
    currentRaceRivals.push(NewSpace());
    currentRaceRivals.push(NewSpace());
    currentRaceRivals.push(NewSpace());
    currentRaceRivals.push(NewSpace());
    currentRaceRivals.push(NewSpace());
    currentRaceRivals.push(NewSpace());
    currentRaceRivals.push(NewSpace());
    container.appendChild(gamePanel);
    return container;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function GameUpdate(){
    updtesCounter++;
    if(updtesCounter < 200 - raceSpeed){
        return;
    }
    else{
        updtesCounter=0;
        raceSpeed+=2;
        if(raceSpeed > 170){
            raceSpeed=170;
        }
    }
    let gameScreenString = "";
    spawnSpaceTime++;
    if(spawnSpaceTime < 3){
        currentRaceRivals.push(NewSpace());
    }
    else{
        spawnSpaceTime=0;
        currentRaceRivals.push(NewCar(getRandomInt(2)));
    }
    currentRaceRivals.shift();
    for(let i = currentRaceRivals.length - 1; i >= 0; i--){
        gameScreenString += currentRaceRivals[i].visualCar;
    }
    playerCar = NewCar(currentPlayerPosition)
    gameScreenString += playerCar.visualCar;
    if(currentRaceRivals[0].posx == currentPlayerPosition){
        currentScore = 0;
        raceSpeed = 0;
    }
    else{
        currentScore++;
        if(currentScore > maxScore){
            maxScore = currentScore;
        }
    }
    document.getElementById("raceScoreText").innerHTML = currentScore;
    document.getElementById("highScoreText").innerHTML = maxScore;
    gamePanel.innerHTML = gameScreenString;
}

function NewCar(newPositionX){
    let visual;
    switch(newPositionX){
        case 0:
            visual = VisualLeftRivalCar();
            break;
        case 1: 
            visual = VisualRigthRivalCar();
            break;
    }
    let car = {
        posx: newPositionX,
        posY: 5,
        visualCar: visual
    }
    return car;
}

function NewSpace(){
    let space = {
        posY: 5,
        visualCar: VisualSpace()
    }
    return space;
}

function VisualLeftRivalCar(){
    let string = 
    spa + pix + spa + lin + spa + spa + spa + brk +
    pix + pix + pix + lin + spa + spa + spa + brk +
    spa + pix + spa + lin + spa + spa + spa + brk +
    pix + pix + pix + lin + spa + spa + spa + brk;
    return string;
}

function VisualRigthRivalCar(){
    let string = 
    spa + spa + spa + lin + spa + pix + spa + brk +
    spa + spa + spa + lin + pix + pix + pix + brk +
    spa + spa + spa + lin + spa + pix + spa + brk +
    spa + spa + spa + lin + pix + pix + pix + brk;
    return string;
}

function VisualSpace(){
    let string = 
    spa + spa + spa + lin + spa + spa + spa + brk +
    spa + spa + spa + lin + spa + spa + spa + brk +
    spa + spa + spa + lin + spa + spa + spa + brk +
    spa + spa + spa + lin + spa + spa + spa + brk;
    return string;
}