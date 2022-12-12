const playerButton = document.getElementById("player-button");
const cpuButton = document.getElementById("cpu-button");
const maxNumber = 6;
const playerNumber = document.getElementById("player-number");

playerButton.addEventListener('click', function(){
    const random = Math.random();
    let playerResult;
    playerResult = Math.floor(random * maxNumber) + 1;
    playerNumber.innerText = `${playerResult}`;
})
