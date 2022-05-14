// function createParagWithText(text) {
//   const p = document.createElement("p");
//   p.textContent = text;

//   return p;
// }

// let userScore = 0;
// let computerScore = 0;
// let winnerTrue = 0;
// let winner;

// while (winnerTrue === 0) {
//   const clickPlayer = document.querySelector("#click-player");
//   let userHand;
//   let computerHand = Math.floor(Math.random() * 3);

//   const rbtn = document.querySelector("#rbtn");
//   rbtn.addEventListener("click", () => {
//     console.log("Rock");
//     clickPlayer.append(createParagWithText("Rock"));
//     userHand = 0;
//   });

//   const pbtn = document.querySelector("#pbtn");
//   pbtn.addEventListener("click", () => {
//     console.log("Paper");
//     clickPlayer.append(createParagWithText("Paper"));
//     userHand = 1;
//   });

//   const sbtn = document.querySelector("#sbtn");
//   sbtn.addEventListener("click", () => {
//     console.log("Scissors");
//     clickPlayer.append(createParagWithText("Scissors"));
//     userHand = 2;
//   });

//   let roundWinner = `user ${userHand} computer ${computerHand}`;
//   console.log(roundWinner);

//   switch (roundWinner) {
//     case "user 0 computer 0":
//       roundWinner = "tie";
//       break;
//     case "user 1 computer 1":
//       roundWinner = "tie";
//       break;
//     case "user 2 computer 2":
//       roundWinner = "tie";
//       break;
//     case "user 0 computer 1":
//       roundWinner = "loose";
//       break;
//     case "user 0 computer 2":
//       roundWinner = "win";
//       break;
//     case "user 1 computer 0":
//       roundWinner = "win";
//       break;
//     case "user 1 computer 2":
//       roundWinner = "loose";
//       break;
//     case "user 2 computer 0":
//       roundWinner = "loose";
//       break;
//     case "user 2 computer 1":
//       roundWinner = "win";
//       break;
//   }

//   if (roundWinner === "win") {
//     userScore++;
//     console.log("You win!");
//   } else if (roundWinner === "loose") {
//     computerScore++;
//     console.log("You loose!");
//   } else if (roundWinner === "tie") {
//     console.log("It's a tie!");
//   }

//   console.log(`User score: ${userScore} Computer score: ${computerScore}`);

//   if (userScore >= 5) {
//     winnerTrue++;
//     winner = "user";
//   } else if (computerScore >= 5) {
//     winnerTrue++;
//     winner = "computer";
//   }
// }

// if (winner === "user") {
//   alert("You win!");
// } else if (winner === "computer") {
//   alert("You loose");
// }

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result = "";

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore += 1;
    result =
      "You win! " +
      playerSelection +
      " beats " +
      computerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;

    if (playerScore == 5) {
      result += "<br><br>You won the game! Reload the page to play again";
      disableButtons();
    }
  } else if (playerSelection == computerSelection) {
    result =
      "It's a tie. You both chose " +
      playerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;
  } else {
    computerScore += 1;
    result =
      "You lose! " +
      computerSelection +
      " beats " +
      playerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;

    if (computerScore == 5) {
      result += "<br><br>I won the game! Reload the page to play again";
      disableButtons();
    }
  }

  document.getElementById("result").innerHTML = result;
  return;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});
