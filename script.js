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
    if (x === y) {
        console.log("The computer chooses the same as you, so it's a draw.");
    }
    else if (x === "Rock" && y === "Paper") {
        console.log("You lose the computer chose paper.");
        computerScore += 1;
    }
    else if (x === "Rock" && y === "Scissors") {
        console.log("You win the computer chose scissors.");
        humanScore += 1;
    }
    else if (x === "Scissors" && y === "Rock") {
        console.log("You lose the computer chose rock.");
        computerScore += 1;
    }
    else if (x === "Scissors" && y === "Paper") {
        console.log("You win the computer chose paper.");
        humanScore += 1;
    }
    else if (x === "Paper" && y === "Rock") {
        console.log("You win the computer chose rock.");
        humanScore += 1;
    }
    else if (x === "Paper" && y === "Scissors") {
        console.log("You lose the computer chose scissors.");
        computerScore += 1;
    }
}

function playAgain() {
    let verify = false;
    while (!verify) {
        let again = prompt("Do you want to play again ?")
        if (again.toLowerCase() === "yes" ||again.toLowerCase() === "y"  ) {
            verify = true;
            return true;
        }
        else if (again.toLowerCase() === "no" || again.toLowerCase() === "n" ) {
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
console.log(player);
player.addEventListener("click", (e) => {
    const choice = e.target;
    switch (choice.id) {
        case "rock":
            console.log("Rock");
            break;
        
        case "paper":
            console.log("Paper");
            break;
        case "scissors":
            console.log("Scissors");
            break;
        default:
            break;
    }
});