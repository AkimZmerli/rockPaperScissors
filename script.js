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

const humanChoice = prompt(
  "Choose between `Rock`, `Paper` or `Scissors` now: "
);

function getHumanChoice() {
  return humanChoice;
}

getHumanChoice(humanChoice);

// Converting humanChoice to lowercase to ensure case-insensitivity
const humanChoiceLower = humanChoice.toLowerCase();

console.log(`You go with ${humanChoiceLower}`);

let humanScore = 0; // Use let to allow updating the scores
let computerScore = 0;

function playRound(humanChoiceLower, computerChoice) {
  // add round parameter
  if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("Unentschieden!");
  } else if (humanChoiceLower === "rock" && computerChoice === "scissors") {
    console.log("Rock beats Scissors! You win :)");
    humanScore++;
  } else if (humanChoiceLower === "rock" && computerChoice === "paper") {
    console.log("Paper beats Rock...You lose!");
    computerScore++;
  } else if (humanChoiceLower === "paper" && computerChoice === "paper") {
    console.log("Unentschieden!");
  } else if (humanChoiceLower === "paper" && computerChoice === "scissors") {
    console.log("Scissors beat Paper...You lose!");
    computerScore++;
  } else if (humanChoiceLower === "paper" && computerChoice === "rock") {
    console.log("Paper beats Rock! You win :)");
    humanScore++;
  } else if (humanChoiceLower === "scissors" && computerChoice === "rock") {
    console.log("Rock beats Scissors! You lose :(");
    computerScore++;
  } else if (humanChoiceLower === "scissors" && computerChoice === "scissors") {
    console.log("Unentschieden!");
  } else if (humanChoiceLower === "scissors" && computerChoice === "paper") {
    console.log("Scissors beat Paper! You win :)");
    humanScore++;
  } else {
    console.log("Invalid input!!!!");
  }
}

playRound(humanChoiceLower, computerChoice);

console.log(
  `The scoreboard says: ${humanScore} for you and ${computerScore} for the mashines!`
);

// function playGame() {}  add function to play five rounds
