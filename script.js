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



  // Function to play a single round
  function playRound(humanChoice) {
    // Make the human choice case insensitive and trim any possible whitespace
    let humanChoice = humanChoice

    // Get message out for choices
    console.log(`You chose ${lowerCaseChoice}!`);
    console.log(`The computer chose ${computerChoice}!`);

    // Logic to determine the winner
    if (lowerCaseChoice === "rock" && computerChoice === "rock") {
      console.log(`You both made the same choice! It's a tie!`);
    } else if (lowerCaseChoice === "rock" && computerChoice === "paper") {
      console.log(`You lose! Paper beats rock!`);
      computerScore++;
    } else if (lowerCaseChoice === "rock" && computerChoice === "scissors") {
      console.log(`You win! Rock beats scissors!`);
      humanScore++;
    } else if (lowerCaseChoice === "paper" && computerChoice === "rock") {
      console.log(`You win! Paper beats rock!`);
      humanScore++;
    } else if (lowerCaseChoice === "paper" && computerChoice === "paper") {
      console.log(`You both made the same choice! It's a tie!`);
    } else if (lowerCaseChoice === "paper" && computerChoice === "scissors") {
      console.log(`You lose! Scissors beats papers!`);
      computerScore++;
    } else if (lowerCaseChoice === "scissors" && computerChoice === "rock") {
      console.log(`You lose! Rock beats scissors!`);
      computerScore++;
    } else if (lowerCaseChoice === "scissors" && computerChoice === "paper") {
      console.log(`You win! Scissors beats paper!`);
      humanScore++;
    } else if (
      lowerCaseChoice === "scissors" &&
      computerChoice === "scissors"
    ) {
      console.log(`You both made the same choice! It's a tie!`);
    }
  }

  // Calculate and declare the winner of the game and display the scores
  if (humanScore === computerScore) {
    console.log(`You had the same score! It's a tie!`);
    console.log(`You: ${humanScore}! Computer: ${computerScore}!`);
  } else if (humanScore < computerScore) {
    console.log(`You scored less that the computer! You lose!`);
    console.log(`You: ${humanScore}! Computer: ${computerScore}!`);
  } else if (humanScore > computerScore) {
    console.log(`You scored more than the computer! You win!`);
    console.log(`You: ${humanScore}! Computer: ${computerScore}!`);
  }


// Declare buttons
const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors')

// Add event listeners to the buttons that call playRound function
rockBtn.addEventListener('click', playRound('rock'))


playGame();
