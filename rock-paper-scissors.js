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
    computerSelection[0].toUpperCase() + computerSelection.slice(1);
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);

  //determines end message
  if (message.slice(1) == win) {
    message =
      message + " " + playerSelection + " beats " + computerSelection + "!";
  } else if (message.slice(1) == lose) {
    message =
      message + " " + computerSelection + " beats " + playerSelection + "!";
  }

  return message;
}

function game() {
  let winCount = 0,
    loseCount = 0;
  let endMessage = "";
  console.log("Lets play Rock, Paper, Scissors!");

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Quickly! Input rock, paper, or scissors:");
    let result = playRound(playerSelection, computerPlay());
    let message = result.slice(1);
    let resultNumber = result.slice(0, 1);

    console.log(message);

    if (resultNumber == 2) {
      winCount++;
    } else if (resultNumber == 1) {
      loseCount++;
    }
  }

  if (winCount > loseCount) {
    endMessage = "Very nice, very nice! You won ";
  } else if (winCount < loseCount) {
    endMessage = "Very bad, be better. You lost ";
  } else {
    endMessage = "Very strange indeed...you tied ";
  }
  endMessage = endMessage + winCount + " to " + loseCount + ".";

  return endMessage;
}

console.log(game());
