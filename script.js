const rockButton = document.getElementById("btnI");

const paperButton = document.getElementById("btnII");

const scissorButton = document.getElementById("btnIII");

rockButton.addEventListener("click", () => {
  getHumanChoice("rock");
});

paperButton.addEventListener("click", () => {
  getHumanChoice("paper");
});

scissorButton.addEventListener("click", () => {
  getHumanChoice("scissor");
});

function getHumanChoice(humanChoice) {
  return humanChoice;
}

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
