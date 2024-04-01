const buttons = document.querySelectorAll(".btn");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const message = document.querySelector("p");

const paperBot = document.querySelector('[data-games-bot="paper"]');
const rockBot = document.querySelector('[data-games-bot="rock"]');
const scissorsBot = document.querySelector("[data-games-bot='scissors']");

const game = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;

const random = () => {
  return Math.trunc(Math.random() * game.length);
};

const getComputerChoice = () => {
  return game[random()];
};

function updateScore() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();
  if (player === computer) {
    console.log("tied");
    message.textContent = "tied";
  } else if (player === "rock") {
    if (computer === "paper") {
      message.textContent = "You lose, paper wraps the rock";
      computerScore++;
      paperBot.classList.toggle("toggle");
    } else if (computer === "scissors") {
      message.textContent = "You win, rock break the scissors";
      playerScore++;
      scissorsBot.classList.toggle("toggle");
    }
  } else if (player === "paper") {
    if (computer === "scissors") {
      message.textContent = "You lose, scissors cut the paper";
      computerScore++;
      scissorsBot.classList.toggle("toggle");
    } else if (computer === "rock") {
      message.textContent = "You win, paper wraps the rock";
      playerScore++;
      rockBot.classList.toggle("toggle");
    }
  } else if (player === "scissors") {
    if (computer === "rock") {
      message.textContent = "You lose, rock break the scissors";
      computerScore++;
      rockBot.classList.toggle("toggle");
    } else if (computer === "paper") {
      message.textContent = "You win, scissors cut the paper";
      playerScore++;
      paperBot.classList.toggle("toggle");
    }
  }
}

buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const playerSelection = e.target.dataset.games;
    playGame(playerSelection);
    updateScore();
    console.log();
    if (playerScore === 5) {
      message.textContent = "You win";
    } else if (computerScore === 5) {
      message.textContent = "computer win";
    }
  })
);
let computerSelection;
let playerSelection;
computerSelection = getComputerChoice();

function playGame(playerSelection) {
  playRound(playerSelection, computerSelection);
}
