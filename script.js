function getComputerChoice() {
    let response = Math.floor(Math.random() * 3);
    if (response === 0) {
        response = "Rock";
        return response;
    }
    else if (response === 1) {
        response = "Paper";
        return response;
    }
    else {
        response = "Scissors";
        return response;
    }
}

function getHumanChoice() {
    let anwser;
    let right;

    while (!right) {
        let humanChoice = prompt("Choose between rock, paper or scissors.");
        if (humanChoice.toLowerCase() === "rock") {
            anwser = "Rock";
            right = true;
            return anwser;
        }
        else if (humanChoice.toLowerCase() === "paper") {
            anwser = "Paper";
            right = true;
            return anwser;
        }
        else if (humanChoice.toLowerCase() === "scissors") {
            anwser = "Scissors";
            right = true;
            return anwser;
        }
        else {
            right = false;
        }

    }

}


function playRound(x, y) {
    let anwser;

    if (x === y) {
        anwser = "The computer chooses the same as you, so it's a draw. ";
    }
    else if (x === "Rock" && y === "Paper") {
        computerScore += 1;
        anwser = "You lose the computer chose paper. ";
    }
    else if (x === "Rock" && y === "Scissors") {
        humanScore += 1;
        anwser = "You win the computer chose scissors. ";
    }
    else if (x === "Scissors" && y === "Rock") {
        computerScore += 1;
        anwser = "You lose the computer chose rock. ";
    }
    else if (x === "Scissors" && y === "Paper") {
        humanScore += 1;
        anwser = "You win the computer chose paper. ";
    }
    else if (x === "Paper" && y === "Rock") {
        humanScore += 1;
        anwser = "You win the computer chose rock. ";
    }
    else if (x === "Paper" && y === "Scissors") {
        computerScore += 1;
        anwser = "You lose the computer chose scissors. ";
    }
    return anwser;
}

function playAgain() {
    let verify = false;
    while (!verify) {
        let again = prompt("Do you want to play again ?")
        if (again.toLowerCase() === "yes" || again.toLowerCase() === "y") {
            verify = true;
            return true;
        }
        else if (again.toLowerCase() === "no" || again.toLowerCase() === "n") {
            verify = true;
            return false;
        }
        else {
            verify = false
        }
    }
}

let humanScore = 0;
let computerScore = 0;
let playAgainResponse = true;
// while (playAgainResponse) {

//     let computerChoice = getComputerChoice();
//     let humanChoice = getHumanChoice();
//     playRound(humanChoice, computerChoice);
//     console.log("You have: " + humanScore +"pts, and the computer has: "+computerScore +"pts.")
//     playAgainResponse = playAgain();
// }

const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const playerScore = document.querySelector(".playerScore");
const ai = document.querySelector(".computerScore");

player.addEventListener("click", (e) => {
    const choice = e.target;
    let playerChoice;
    switch (choice.id) {
        case "rock":
            playerChoice = "Rock";
            break;

        case "paper":
            playerChoice = "Paper";
            break;
        case "scissors":
            playerChoice = "Scissors";
            break;
        default:
            break;
    }
    computer.textContent = playRound(playerChoice, getComputerChoice());
    
    
    if (humanScore === 5) {
        computer.textContent += "You won the game.";
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        computer.textContent += "Computer won the game.";
        humanScore = 0;
        computerScore = 0;
    }
    playerScore.textContent = "Your score is : "+humanScore;
    ai.textContent = "The computer has : "+computerScore;
});

