let playerCharacter = "";
let round = 1;
let playerScore = 0;
let computerScore = 0;
let gameActive = false;

const choices = ["rock, paper, scissors"];

function setPlayerCharacter(character) {
    playerCharacter = name;
    document.getElementById("player-name").textContent = name;
    gameActive = true;
  }

  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(playerChoice, sukunaChoice) {
    if (playerChoice === sukunaChoice) {
        return "It's a tie!";
    }
    if ((playerChoice === "rock" && sukunaChoice === "scissors") ||
        (playerChoice === "paper" && sukunaChoice === "rock") ||
        (playerChoice === "scissors" && sukunaChoice === "paper")) {
        return "player";
    }
    return "sukuna";
    }
    //round 1
      function playRound(playerChoice) {

    if (gameActive === false) return;
    if (round > 5) return;

    const sukunaChoice = getSukunaChoice();
    const winner = determineWinner(playerChoice, sukunaChoice);

    if (winner === "player") {
      playerScore++;
      document.getElementById("result-text").textContent =
        playerCharacter + " wins this round!";
    } 
    else if (winner === "sukuna") {
      sukunaScore++;
      document.getElementById("result-text").textContent =
        "Sukuna wins this round!";
    } 
    else {
      document.getElementById("result-text").textContent =
        "It's a tie!";
    }

    updateUI();
    round++;

    //score
    if (round > 5) {
      endGame();
    }
  }
  function updateUI() {
    document.getElementById("round-text").textContent =
      "Round " + round + " of 5";

    document.getElementById("score-text").textContent =
      playerScore + " : " + sukunaScore;
  }

  // determine end game
  function endGame() {

    gameActive = false;

    if (playerScore > sukunaScore) {
      document.getElementById("result-text").textContent =
        playerCharacter + " defeats Sukuna!";
    } 
    else if (sukunaScore > playerScore) {
      document.getElementById("result-text").textContent =
        "Sukuna wins the battle!";
    } 
    else {
      document.getElementById("result-text").textContent =
        "The battle ends in a tie!";
    }
}

 //to make the buttons work
    document.querySelector(".rock").onclick = function () {
    playRound("rock");
  };

  document.querySelector(".paper").onclick = function () {
    playRound("paper");
  };

  document.querySelector(".scissors").onclick = function () {
    playRound("scissors");
  };
