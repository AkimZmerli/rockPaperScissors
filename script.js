let humanScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("btnI");
const paperButton = document.getElementById("btnII");
const scissorButton = document.getElementById("btnIII");
const choiceDisplay = document.getElementById("choiceDisplay");
const roundNumberDisplay = document.getElementById("roundNumber");
const humanScoreDisplay = document.getElementById("humanScore");
const computerScoreDisplay = document.getElementById("computerScore");

let roundNumber = 1;

rockButton.addEventListener("click", () => {
  playGame("rock");
});

paperButton.addEventListener("click", () => {
  playGame("paper");
});

scissorButton.addEventListener("click", () => {
  playGame("scissors");
});

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();

  displayHumanChoice(humanChoice);

  setTimeout(() => {
    displayComputerChoice(computerChoice);

    const winner = determineWinner(humanChoice, computerChoice);
    updateScore(winner);
    updateDisplays();

    roundNumberDisplay.textContent = roundNumber;
    console.log("after update round");
    if (roundNumber >= 5) {
      endGame();
    } else {
      roundNumber++;
    }
  }, 1000); // Delay to display computer choice
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "human";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    return "computer";
  } else {
    return "tie";
  }
}

function displayHumanChoice(humanChoice) {
  choiceDisplay.textContent = `You chose ${humanChoice}`;
}

function displayComputerChoice(computerChoice) {
  choiceDisplay.textContent += `, Computer chose ${computerChoice}`;
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  } else if (winner === "tie") {
  }
}

function updateDisplays() {
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  humanScoreDisplay.style = "color: red;";
}

function endGame() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorButton.disabled = true;

  if (humanScore > computerScore) {
    choiceDisplay.textContent = "You win!";
  } else if (humanScore < computerScore) {
    choiceDisplay.textContent = "Computer wins!";
  } else {
    choiceDisplay.textContent = "It's a tie!";
  }
}

playGame();
// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;
//   let roundScore = 0;}

// function getComputerChoice() {
//   const randomNumber = Math.floor(Math.random() * 3); // generate random number between 0 and 2

//   switch (randomNumber) {
//     case 0:
//       return "rock";
//     case 1:
//       return "paper";
//     case 2:
//       return "scissors";
//     default:
//       throw new Error("Unexpected random number");
//   }
// }

// const computerChoice = getComputerChoice();

// console.log(`The machines have chosen ${computerChoice}`);

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice === "rock" && computerChoice === "rock") {
//     console.log("Draw!");
//   } else if (humanChoice === "rock" && computerChoice === "scissors") {
//     console.log("Rock beats Scissors! You win :)");
//     humanScore++;
//   } else if (humanChoice === "rock" && computerChoice === "paper") {
//     console.log("Paper beats Rock...You lose!");
//     computerScore++;
//   } else if (humanChoice === "paper" && computerChoice === "paper") {
//     console.log("Draw!");
//   } else if (humanChoice === "paper" && computerChoice === "scissors") {
//     console.log("Scissors beat Paper...You lose!");
//     computerScore++;
//   } else if (humanChoice === "paper" && computerChoice === "rock") {
//     console.log("Paper beats Rock! You win :)");
//     humanScore++;
//   } else if (humanChoice === "scissors" && computerChoice === "rock") {
//     console.log("Rock beats Scissors! You lose :(");
//     computerScore++;
//   } else if (humanChoice === "scissors" && computerChoice === "scissors") {
//     console.log("Draw!");
//   } else if (humanChoice === "scissors" && computerChoice === "paper") {
//     console.log("Scissors beat Paper! You win :)");
//     humanScore++;
//   } else {
//     console.log("Invalid input!!!!");
//   }

//   roundScore++;
//   console.log(
//     `This has been round # ${roundScore}! Our scoreboard tells us: ${humanScore} for you and ${computerScore} for the machines!`
//   );
// }
// playRound(humanChoice, computerChoice);

// if (humanScore > computerScore) {
//   console.log("You made the machines suffer! Nice one by winning the game :)");
// } else if (computerScore > humanScore) {
//   console.log(
//     "The machines have won. We shall submit and let them take over. Thank you, fool.."
//   );
// } else {
//   console.log("It's a tie!!! KEEP fighting!");
// }

// playGame();

/*

// get html elements

function resetGame(){
  removeChildren(element1)
  removeChildren(element2)
  etc...
}

function renderGame(){
  renderRoundCounter()
  renderScoreBoard()
  etc...
}

let gameStarted = false;
let gamePaused = false;

function update() {
  if(gameStarted){
    // game logic here
  }

  resetGame()
  renderGame()
}

// start game
update()

*/