// function playGame(humanScore, computerScore, roundScore) {

//   let humanScore = 0;
//   let computerScore = 0;
//   let roundScore = 0;

//   for (let roundScore = 0; roundScore <= 4; roundScore++) {
//     function getComputerChoice() {
//       const randomNumber = Math.floor(Math.random() * 3); // generate random number between 0 and 2

//       switch (randomNumber) {
//         case 0:
//           return "rock";
//         case 1:
//           return "paper";
//         case 2:
//           return "scissors";
//         default:
//           throw new Error("Unexpected random number");
//       }
//     }

//     const computerChoice = getComputerChoice();

//     console.log(`The mashines have chosen ${computerChoice}`);

//     function getHumanChoice() {
//       let humanChoice = prompt(
//         "Choose between `Rock`, `Paper` or `Scissors` now: "
//       );
//       return humanChoice;
//     }

//     const humanChoice = getHumanChoice();
//     const humanChoiceLower = humanChoice.toLowerCase(); // switch to lower case allows all typo variations

//     console.log(`You go with ${humanChoiceLower}`);

//     function playRound(humanChoice, computerChoice, roundScore) {
//       if (humanChoice === "rock" && computerChoice === "rock") {
//         console.log("Unentschieden!");
//         roundScore++;
//       } else if (humanChoiceLower === "rock" && computerChoice === "scissors") {
//         console.log("Rock beats Scissors! You win :)");
//         humanScore++;
//         roundScore++;
//       } else if (humanChoiceLower === "rock" && computerChoice === "paper") {
//         console.log("Paper beats Rock...You lose!");
//         computerScore++;
//         roundScore++;
//       } else if (humanChoiceLower === "paper" && computerChoice === "paper") {
//         console.log("Unentschieden!");
//         roundScore++;
//       } else if (
//         humanChoiceLower === "paper" &&
//         computerChoice === "scissors"
//       ) {
//         console.log("Scissors beat Paper...You lose!");
//         computerScore++;
//         roundScore++;
//       } else if (humanChoiceLower === "paper" && computerChoice === "rock") {
//         console.log("Paper beats Rock! You win :)");
//         humanScore++;
//         roundScore++;
//       } else if (humanChoiceLower === "scissors" && computerChoice === "rock") {
//         console.log("Rock beats Scissors! You lose :(");
//         computerScore++;
//         roundScore++;
//       } else if (
//         humanChoiceLower === "scissors" &&
//         computerChoice === "scissors"
//       ) {
//         console.log("Unentschieden!");
//         roundScore++;
//       } else if (
//         humanChoiceLower === "scissors" &&
//         computerChoice === "paper"
//       ) {
//         console.log("Scissors beat Paper! You win :)");
//         humanScore++;
//         roundScore++;
//       } else {
//         console.log("Invalid input!!!!");
//       }

//       console.log(
//         `This has been round # ${roundScore}! Our scoreboard tells us: ${humanScore} for you and ${computerScore} for the mashines!`
//       );
//     }
//     const result = playRound(humanChoiceLower, computerChoice, roundScore);

//     if (roundScore <= 4 && humanScore > computerScore) {
//       return console.log(
//         "You made the mashines suffer! Nice one by winning the game :)"
//       );
//     } else if (roundScore <= 4 && computerScore > humanScore) {
//       return console.log(
//         "The mashines have won. We shall submit and let them take over. Thanks you fool.."
//       );
//     } else {
//       return console.log("Its a tie!!! KEEEP fighting!");
//     }
//   }
// }

// for (let i = 0; i < 5; i++) {
//   playGame();
// }

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundScore = 0;

  for (let round = 0; round < 5; round++) {
    function getComputerChoice() {
      const randomNumber = Math.floor(Math.random() * 3); // generate random number between 0 and 2

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

    console.log(`The machines have chosen ${computerChoice}`);

    function getHumanChoice() {
      let humanChoice = prompt(
        "Choose between `Rock`, `Paper` or `Scissors` now: "
      );
      return humanChoice;
    }

    const humanChoice = getHumanChoice();
    const humanChoiceLower = humanChoice.toLowerCase(); // switch to lower case allows all typo variations

    console.log(`You go with ${humanChoiceLower}`);

    function playRound(humanChoice, computerChoice) {
      if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Draw!");
      } else if (humanChoiceLower === "rock" && computerChoice === "scissors") {
        console.log("Rock beats Scissors! You win :)");
        humanScore++;
      } else if (humanChoiceLower === "rock" && computerChoice === "paper") {
        console.log("Paper beats Rock...You lose!");
        computerScore++;
      } else if (humanChoiceLower === "paper" && computerChoice === "paper") {
        console.log("Draw!");
      } else if (
        humanChoiceLower === "paper" &&
        computerChoice === "scissors"
      ) {
        console.log("Scissors beat Paper...You lose!");
        computerScore++;
      } else if (humanChoiceLower === "paper" && computerChoice === "rock") {
        console.log("Paper beats Rock! You win :)");
        humanScore++;
      } else if (humanChoiceLower === "scissors" && computerChoice === "rock") {
        console.log("Rock beats Scissors! You lose :(");
        computerScore++;
      } else if (
        humanChoiceLower === "scissors" &&
        computerChoice === "scissors"
      ) {
        console.log("Draw!");
      } else if (
        humanChoiceLower === "scissors" &&
        computerChoice === "paper"
      ) {
        console.log("Scissors beat Paper! You win :)");
        humanScore++;
      } else {
        console.log("Invalid input!!!!");
      }

      roundScore++;
      console.log(
        `This has been round # ${roundScore}! Our scoreboard tells us: ${humanScore} for you and ${computerScore} for the machines!`
      );
    }
    playRound(humanChoiceLower, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(
      "You made the machines suffer! Nice one by winning the game :)"
    );
  } else if (computerScore > humanScore) {
    console.log(
      "The machines have won. We shall submit and let them take over. Thank you, fool.."
    );
  } else {
    console.log("It's a tie!!! KEEP fighting!");
  }
}

playGame();
