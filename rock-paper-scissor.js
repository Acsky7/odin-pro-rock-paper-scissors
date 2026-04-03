let humanScore = 0;
let computerScore =0;


function getComputerChoice(){
    let choice = Math.random();

    if(choice >= 0 && choice <= 0.3){
        return "rock";
    }else if(choice > 0.3 && choice <= 0.6){
        return "paper";
    }else if(choice > 0.6 && choice <= 1){
        return "scissor";
    }
}

console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("Rock,Paper,Scissors, Please enter your choice","");
      
    return humanChoice;
}
//Function to play a rock-paper-scissors round
function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice ==="paper"){
        if(computerChoice ==="paper"){
            console.log("You choice " + humanChoice +" Computer Choice "+ computerChoice )
            console.log("Tie " + "player score "+ humanScore + " Computer score "+ computerScore);
        }else if(computerChoice ==="rock"){
            humanScore++;
              console.log("You choice " + humanChoice +" Computer Choice "+ computerChoice )
              console.log("You win " + "player score "+ humanScore + " Computer score "+ computerScore);
        }else if(computerChoice === "scissors"){
            computerScore++;
            console.log("You choice " + humanChoice +" Computer Choice "+ computerChoice )
             console.log("You lose " + "player score "+ humanScore + " Computer score "+ computerScore);
        }
    } else if(humanChoice ==="scissors"){
        if(computerChoice ==="scissors"){
            console.log("You choice " + humanChoice +" Computer Choice "+ computerChoice )
            console.log("Tie " + "player score "+ humanScore + " Computer score "+ computerScore);
        }else if(computerChoice ==="rock"){
            computerScore++;
             
              console.log("You choice " + humanChoice +" Computer Choice "+ computerChoice )
              console.log("You lose " + "player score "+ humanScore + " Computer score "+ computerScore);
        }else if(computerChoice === "paper"){
            humanScore++;
            console.log("You choice " + humanChoice +" Computer Choice "+ computerChoice )
             console.log("You win " + "player score "+ humanScore + " Computer score "+ computerScore);
        }
    } else if(humanChoice ==="rock"){
         if(computerChoice ==="rock"){
            console.log("You choice " + humanChoice +" Computer Choice "+ computerChoice )
            console.log("Tie " + "player score "+ humanScore + " Computer score "+ computerScore);
        }else if(computerChoice ==="paper"){
            computerScore++;
             
              console.log("You choice " + humanChoice +" Computer Choice "+ computerChoice )
              console.log("You lose " + "player score "+ humanScore + " Computer score "+ computerScore);
        }else if(computerChoice === "scissors"){
            humanScore++;
            console.log("You choice " + humanChoice +" Computer Choice "+ computerChoice )
             console.log("You win " + "player score "+ humanScore + " Computer score "+ computerScore);
        }

    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);

