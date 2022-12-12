const playerButton = document.getElementById("player-button");
const cpuButton = document.getElementById("cpu-button");
const maxNumber = 6;
const playerNumber = document.getElementById("player-number");
const cpuNumber = document.getElementById("cpu-number");

playerButton.addEventListener('click', function(){
    const random = Math.random();
    let playerResult;
    playerResult = Math.floor(random * maxNumber) + 1;
    playerNumber.innerText = `${playerResult}`;
})

cpuButton.addEventListener('click', function(){
    const random = Math.random();
    let cpuResult;
    cpuResult = Math.floor(random * maxNumber) + 1;
    cpuNumber.innerText = `${cpuResult}`;
})
