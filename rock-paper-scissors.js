//global variables
let winCount = 0;
let loseCount = 0;
let gameOver = false;

// displays # of wins
const winCountElement = document.querySelector("#wins");
winCountElement.textContent = 0;

// displays # of computer wins
const loseCountElement = document.querySelector("#losses");
loseCountElement.textContent = 0;

// displays message on DOM after every round
const roundMessageElement = document.createElement("p");
roundMessageElement.textContent = "Best of five wins!";
document.querySelector("#message-container").appendChild(roundMessageElement);

//displays final message
const endMessageElement = document.createElement("p");
document.querySelector("#end-message-container").appendChild(endMessageElement);

// game logic
function game(result) {
  let endMessage = "";
  console.log("Lets play Rock, Paper, Scissors!");

  let resultNumber = result.slice(0, 1);

  // starts over when new game starts
  if (gameOver) {
    winCount = 0;
    winCountElement.textContent = winCount;

    loseCount = 0;
    loseCountElement.textContent = loseCount;

    endMessageElement.textContent = "";
    gameOver = false;
  }

  if (resultNumber == 2) {
    winCount++;
    winCountElement.textContent = winCount;
  } else if (resultNumber == 1) {
    loseCount++;
    loseCountElement.textContent = loseCount;
  }

  // game over logic
  if (winCount + loseCount == 5) {
    gameOver = true;
    if (winCount > loseCount) {
      endMessage = "Very nice, very nice! You won ";
    } else if (winCount < loseCount) {
      endMessage = "Very bad, be better. You lost ";
    } else {
      endMessage = "Very strange indeed...you tied ";
    }
    endMessage = endMessage + winCount + " to " + loseCount + ".";
    endMessage = endMessage + " Make a move to play again!";
    endMessageElement.textContent = endMessage;
    return endMessage;
  }
  return;
}

// computer AI
// picks rock, paper, or scissors randomly
function computerPlay() {
  let decision = "";
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) {
    decision = "rock";
  } else if (randomNum == 1) {
    decision = "paper";
  } else {
    decision = "scissors";
  }

  return decision;
}

// round logic
function playRound(playerSelection, computerSelection) {
  let message = "";
  let tie = "Tie!",
    win = "You win!",
    lose = "You lose!";

  // makes input
  playerSelection = playerSelection.toLowerCase();

  // game logic
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      message = 0 + tie; // 0 indicates tie
    } else if (computerSelection == "paper") {
      message = 1 + lose; // 1 indicates loss
    } else {
      message = 2 + win; // 2 indicates win
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      message = 2 + win;
    } else if (computerSelection == "paper") {
      message = 0 + tie;
    } else {
      message = 1 + lose;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      message = 1 + lose;
    } else if (computerSelection == "paper") {
      message = 2 + win;
    } else {
      message = 0 + tie;
    }
  } else {
    return (
      " " +
      "ERROR: Invalid input. Please input rock, paper, or scissors, simpleton!"
    );
  }

  //capitalized first letter
  computerSelection =
    computerSelection.slice(0, 1).toUpperCase() + computerSelection.slice(1);
  playerSelection =
    playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1);

  //determines end message
  if (message.slice(1) == win) {
    message =
      message + " " + playerSelection + " beats " + computerSelection + "!";
  } else if (message.slice(1) == lose) {
    message =
      message + " " + computerSelection + " beats " + playerSelection + "!";
  }

  roundMessageElement.textContent = message.slice(1);

  return message;
}

// when button is clicked, triggers round and game logic
function triggerRound(move) {
  let result = playRound(move, computerPlay());
  game(result);
}

// Event listeners for Rock / Paper / Scissor buttons
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => triggerRound("rock"));

const paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", () => triggerRound("paper"));

const scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", () => triggerRound("scissors"));
