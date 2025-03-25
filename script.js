

function getComputerChoice()
{
    let response = Math.floor(Math.random() * 3);
    console.log(response);
    if (response === 0)
    {
        response = "Rock";
    }
    else if (response === 1)
    {
        response = "Paper";
    }
    else 
    {
        response = "Scissors";
    }
    console.log(response);
}

function getHumanChoice() 
{
    let anwser;
    let right;

    while (!right) 
    {
        let humanChoice = prompt("Choose between Rock, Paper or Scissors");
        if (humanChoice.toLowerCase() === "rock")
        {
            anwser = "Rock";
            right = true;
            return anwser;
        }
        else if (humanChoice.toLowerCase() === "paper")
        {
            anwser = "Paper";
            right = true;
            return anwser;
        }
        else if (humanChoice.toLowerCase() === "scissors")
        {
            anwser = "Scissors";
            right = true;
            return anwser;
        }
        else {
            right = false;
        }    
        
    }
    
}

let human = getHumanChoice();
console.log(human);

// getComputerChoice();