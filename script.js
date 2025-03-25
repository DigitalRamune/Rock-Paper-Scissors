console.log("hello");

let number;

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

getComputerChoice();