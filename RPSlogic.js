function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function getComputerChoice ()
{

    computerChoiceArray = new Array("Rock", "Paper" ,"Scissors");
    return computerChoiceArray [getRandomInt(3)];


}

function  playRound (playerSelection, computerSelection  )
 {

    switch(playerSelection.toLowerCase()) {
        case "rock":
                if (computerSelection.toLowerCase() == "paper")
                    return "You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase() + " beats " +  playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
                if (computerSelection.toLowerCase() == "scissors")
                    return "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " +  computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
                
                return "You tied!"
        case "paper":
            if (computerSelection.toLowerCase() == "scissors")
                return "You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase() + " beats " +  playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
            if (computerSelection.toLowerCase() == "rock")
                return "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " +  computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
           
                return "You tied!"
        case "scissors":
            if (computerSelection.toLowerCase() == "rock")
                return "You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase() + " beats " +  playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
            if (computerSelection.toLowerCase() == "paper")
                return "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " +  computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
        
            return "You tied!"
        default:
            return "You have to choose rock, papper or scissors."
          break;
      } 
  
 }


 function game(){

    let playerWins = 0;
    let computerWins = 0;
    let playerSelection = "";
    let computerSelection = "";
    let roundResult = "";
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Type rock, paper or scissors")
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.includes("Win"))
        {
            playerWins+= 1;

        }
        if (roundResult.includes("Lose"))
        {
            computerWins+= 1;

        }
        console.log(roundResult);

    }

    if (playerWins == computerWins )
    {
        console.log("The game has ended, and you tied.")
    }
    if (playerWins > computerWins )
    {
        console.log("The game has ended, and you won.")
    }
    if (playerWins < computerWins )
    {
        console.log("The game has ended, and you lost.")
    }

 }

 game();
