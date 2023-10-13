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



 let buttonsDiv = document.querySelector("#buttonsDiv");

 let buttonRock = document.querySelector("#Rock");
 let buttonPaper = document.querySelector("#Paper");
 let buttonScissors = document.querySelector("#Scissors");
 

var resultsDiv = document.querySelector("#resultsDiv");

var resultsTextNode = document.createTextNode("");
resultsDiv.appendChild(resultsTextNode);

let playerWins = 0;
let computerWins = 0;
let winnerAnnouncement = "";

 buttonsDiv.addEventListener('click', (event) => {
   
    let target = event.target;
    if (target.type == "button")
    {

    let playerSelection = "";
    let computerSelection = "";
    let roundResult = "";

        computerSelection = getComputerChoice();
        playerSelection = target.value;
        
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.includes("Win"))
        {
            playerWins+= 1;

        }
        if (roundResult.includes("Lose"))
        {
            computerWins+= 1;

        }

        if (playerWins == 5)
        {
            winnerAnnouncement = "\n Player won with 5 wins!";

        }

        else if (playerWins == 5)
        {
            computerWins = "\n Computer won with 5 wins!";

        }

        resultsTextNode.textContent = roundResult + "\n \n Player wins: " + playerWins + "\n Computer wins: " + computerWins + winnerAnnouncement;

      }


});




