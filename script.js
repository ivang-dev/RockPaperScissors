// Function to get the randomized computer choice
function getComputerChoice() {
  // Declare/initialize variable for the computer's choice
  let computerChoice = "";

  // Switch statement for the different random cases
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
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

  // Get message out for choices
  console.log(`You chose ${lowerCaseChoice}!`);
  console.log(`The computer chose ${computerChoice}`);

  // Logic to determine the winner
  if (lowerCaseChoice === "rock" && computerChoice === "rock") {
    console.log(`You both made the same choice! It's a tie!`);
  } else if (lowerCaseChoice === "rock" && computerChoice === "paper") {
    console.log(`You lose! Paper beats rock!`);
  } else if (lowerCaseChoice === "rock" && computerChoice === "scissors") {
    console.log(`You win! Rock beats scissors!`);
  } else if (lowerCaseChoice === "paper" && computerChoice === "rock") {
    console.log(`You win! Paper beats rock!`);
  } else if (lowerCaseChoice === "paper" && computerChoice === "paper") {
    console.log(`You both made the same choice! It's a tie!`);
  } else if (lowerCaseChoice === "paper" && computerChoice === "scissors") {
    console.log(`You lose! Scissors beats papers!`);
  } else if (lowerCaseChoice === "scissors" && computerChoice === "rock") {
    console.log(`You lose! Rock beats scissors!`);
  } else if (lowerCaseChoice === "scissors" && computerChoice === "paper") {
    console.log(`You win! Scissors beats paper!`);
  } else if (lowerCaseChoice === "scissors" && computerChoice === "scissors") {
    console.log(`You both made the same choice! It's a tie!`);
  }
}
