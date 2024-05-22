function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      throw new Error("Unexpected random number");
  }
}

const computerChoice = getComputerChoice();

console.log(`The mashines have chosen ${computerChoice}`);



function getHumanChoice() {
  return humanChoice;
}

getHumanChoice(humanChoice);

// Converting humanChoice to lowercase to ensure case-insensitivity
const humanChoiceLower = humanChoice.toLowerCase();

console.log(`You go with ${humanChoiceLower}`);

let humanScore = 0; 
    let computerScore = 0;
let roundScore = 1;

function playRound(humanChoiceLower, computerChoice, roundScore) {
  // add round parameter
  
}

function  playRound(humanChoice, computerChoice, roundScore)
  
  if (humanChoice === "rock" && computerChoice === "rock") {
  console.log("Unentschieden!");
  roundScore++;
} else if (humanChoiceLower === "rock" && computerChoice === "scissors") {
  console.log("Rock beats Scissors! You win :)");
  humanScore++;
  roundScore++;
} else if (humanChoiceLower === "rock" && computerChoice === "paper") {
  console.log("Paper beats Rock...You lose!");
  computerScore++;
  roundScore++;
} else if (humanChoiceLower === "paper" && computerChoice === "paper") {
  console.log("Unentschieden!");
  roundScore++;
} else if (humanChoiceLower === "paper" && computerChoice === "scissors") {
  console.log("Scissors beat Paper...You lose!");
  computerScore++;
  roundScore++;
} else if (humanChoiceLower === "paper" && computerChoice === "rock") {
  console.log("Paper beats Rock! You win :)");
  humanScore++;
  roundScore++;
} else if (humanChoiceLower === "scissors" && computerChoice === "rock") {
  console.log("Rock beats Scissors! You lose :(");
  computerScore++;
  roundScore++;
} else if (humanChoiceLower === "scissors" && computerChoice === "scissors") {
  console.log("Unentschieden!");
  roundScore++;
} else if (humanChoiceLower === "scissors" && computerChoice === "paper") {
  console.log("Scissors beat Paper! You win :)");
  humanScore++;
  roundScore++;
} else {
  console.log("Invalid input!!!!");
}

playRound(humanChoiceLower, computerChoice, roundScore);

console.log(
  `This has been round # ${roundScore}! Our scoreboard tells us: ${humanScore} for you and ${computerScore} for the mashines!`
);


function playGame(humanScore, computerScore, roundScore) {
  for (let roundScore = 1; roundScore <= 5; roundScore++) {
    const result = playRound(humanChoice, computerChoice, roundScore);
    const humanChoice = prompt(
      "Choose between `Rock`, `Paper` or `Scissors` now: "
    );
    const computerChoice = getComputerChoice();
    
  }
  if (humanScore >= 3) {
    return console.log("You made the mashines suffer! Nice one by winning the game :)");
    
  }
  else if (computerScore >= 3) {
    return console.log("The mashines have won. We shall submit and let them take over. Thanks you fool..");
  }
  else {
    return console.log("Its a tie!!! KEEEP fighting!")
  }
}

playGame();