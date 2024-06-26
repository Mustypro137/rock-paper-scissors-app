const game = ["Rock", "Paper", "Scissors"];

const random = () => {
  return Math.trunc(Math.random() * game.length);
};

const getComputerChoice = () => {
  return game[random()];
};

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase().trim();
  const computer = computerSelection.toLowerCase().trim();

  if (player === computer) {
    console.log("tied");
  } else if (player === "rock") {
    if (computer === "paper") {
      console.log("You lose, paper wraps the rock");
    } else if (computer === "scissors") {
      console.log("You win, rock break the scissors");
    }
  } else if (player === "paper") {
    if (computer === "scissors") {
      console.log("You lose, scissors cut the paper");
    } else if (computer === "rock") {
      console.log("You win, paper wraps the rock");
    }
  } else if (player === "scissors") {
    if (computer === "rock") {
      console.log("You lose, rock break the scissors");
    } else if (computer === "paper") {
      console.log("You win, scissors cut the paper");
    }
  }
}
let playerSelection;
const computerSelection = getComputerChoice();

function playGame() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Do you want rock, paper or scissors: ");
    if (
      playerSelection == "rock" ||
      playerSelection === "paper" ||
      playerSelection == "scissors"
    ) {
      playRound(playerSelection, computerSelection);
    } else {
      i--;
      continue;
    }
  }
}
playGame(playerSelection);
