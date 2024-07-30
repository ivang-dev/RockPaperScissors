// Function to get the randomized computer choice
function getComputerChoice() {
  // Declare/initialize variable for the computer's choice
  let computerChoice = "";

  // Switch statement for the different random cases
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      computerChoice = "Rock!";
      break;
    case 1:
      computerChoice = "Paper!";
      break;
    case 2:
      computerChoice = "Scissors!";
  }
  return computerChoice;
}

// Function to get the human player's choice
function getHumanChoice() {
  //Declare/initialize the variable to hold the player's choice
  let humanChoice = prompt("Rock, Paper, or Scissors?");
}

// Declare/initialize score tracking variables
let humanScore = 0;
let computerScore = 0;

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  // Make the human choice case insensitive and trim any possible whitespace
  let lowerCaseChoice = humanChoice.trim().toLowerCase();
}
