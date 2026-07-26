function getComputerChoice() {
    const number = Math.random() * 3;
    if (number < 1) {
        return "rock";
    } else if (number < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Introduzca su elección: ");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Empate";
    }

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            return "Gana el humano";
        } else {
            return "Gana la computadora";
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            return "Gana el humano";
        } else {
            return "Gana la computadora";
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            return "Gana el humano";
        } else {
            return "Gana la computadora";
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        console.log(`Ronda ${i + 1}: ${result}`);
        console.log(`Humano: ${humanChoice}`);
        console.log(`Computadora: ${computerChoice}`);

        if (result === "Gana el humano") {
            humanScore++;
        } else if (result === "Gana la computadora") {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log("Ganaste la partida");
    } else if (computerScore > humanScore) {
        console.log("Perdiste la partida");
    } else {
        console.log("La partida terminó en empate");
    }
}

playGame();