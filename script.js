//* GIOCO DEI DADI

const playerButton = document.getElementById("player-button");
const cpuButton = document.getElementById("cpu-button");
const maxNumber = 6;
const playerNumber = document.getElementById("player-number");
const cpuNumber = document.getElementById("cpu-number");
const gameResult = document.getElementById ("game-result");
const resetButton = document.getElementById ("reset");

playerButton.addEventListener('click', function(){
    const random = Math.random();
    let playerResult;
    playerResult = Math.floor(random * maxNumber) + 1;
    let playerNumberPrinted = playerNumber.innerText = `${playerResult}`;

    cpuButton.addEventListener('click', function(){
        const random = Math.random();
        let cpuResult;
        cpuResult = Math.floor(random * maxNumber) + 1;
        let cpuNumberPrinted = cpuNumber.innerText = `${cpuResult}`;

        if (playerNumberPrinted > cpuNumberPrinted) {
            gameResult.innerText = "complimenti, hai vinto!";
        } else if (playerNumberPrinted === cpuNumberPrinted) {
            gameResult.innerText = "è un pareggio! Non c'è nessun vincitore!";
        } else {
            gameResult.innerText = "mi dispiace, non hai vinto!";
        }

        resetButton.addEventListener('click', function(){
            playerNumber.innerText = cpuNumber.innerText = gameResult.innerText = '';
        })
    })
})

// -------------------------------------------------------------------------------------------------------------------

//* Finta Log In

const userEmail = document.getElementById("user-email");
const emailMessage = document.getElementById ("email-message");
const logIN = document.getElementById("log-in");
const emails = ["happyhippo@safari.net", "flyingdumbo@disney.com", "gandalf@lordofrings.org"]
// console.table(emails);


logIN.addEventListener('click', function(){
    for (let i = 0; i < emails.length; i++) {
        if (userEmail.value === emails[i]) {
         emailMessage.innerText = "email valida, puoi effettuare l'accesso."
        } else {
            emailMessage.innerText = "email non valida. Non puoi effettuare l'accesso."
        }
    }
})