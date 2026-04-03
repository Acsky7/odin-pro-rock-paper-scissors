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
//Play game function
function playGame(){
//Function to play a rock-paper-scissors round
function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice ==="paper"){
        if(computerChoice ==="paper"){
            printChoices(humanChoice,computerChoice);
           return "Tie";
        }else if(computerChoice ==="rock"){
            humanScore++;
            printChoices(humanChoice,computerChoice);
            return "You win";
        }else if(computerChoice === "scissors"){
            computerScore++;
            printChoices(humanChoice,computerChoice);
           return "You lose";
        }
    } else if(humanChoice ==="scissors"){
        if(computerChoice ==="scissors"){
           printChoices(humanChoice,computerChoice);
           return "Tie";
        }else if(computerChoice ==="rock"){
             computerScore++;
            printChoices(humanChoice,computerChoice);
             return "You lose";
        }else if(computerChoice === "paper"){
            humanScore++;
            printChoices(humanChoice,computerChoice);
            return "You win";
        }
    } else if(humanChoice ==="rock"){
         if(computerChoice ==="rock"){
            printChoices(humanChoice,computerChoice);
            return "Tie";
        }else if(computerChoice ==="paper"){
            printChoices(humanChoice,computerChoice);
            computerScore++;
            return "You lose";
        }else if(computerChoice === "scissors"){
            printChoices(humanChoice,computerChoice);
            humanScore++;
            return "You win";
        }

    }
}

// console.log("You choice " + humanChoice +" Computer Choice "+ computerChoice )
// console.log("Tie " + "player score "+ humanScore + " Computer score "+ computerScore);
 let Rounds = 5;
 do{
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);
Rounds--;
    
 }while(Rounds> 0)
    if(humanScore > computerScore){
        console.log("Your score " + humanScore +" Computer score "+ computerScore + " You win" );
    }else if(humanScore < computerScore){
         console.log("Your score " + humanScore +" Computer score "+ computerScore + " You lose" ); 
    }else{
        console.log("Its a tie");
    }
}

function printChoices(playerChoice,computer){
    console.log(`Your choice ${playerChoice}  computer choice ${computer} `);
}
playGame();