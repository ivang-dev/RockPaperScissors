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

// Function to evaluate if someone wins
function determineWinner(humanScore, computerScore) {
    if (humanScore === 5) {
        console.log("You got 5 points! You win!");
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else if (computerScore === 5) {
        console.log("The computer got 5 points! You lose!");
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

// Function to keep track of score and declare winner at 5 points
function playGame() {
    // Declare variables to keep track of score
    let humanScore = 0;
    let computerScore = 0;

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        // Get message out for choices
        console.log(`You chose ${humanChoice}!`);
        console.log(`The computer chose ${computerChoice}!`);

        // Logic to determine the winner
        if (humanChoice === "rock" && computerChoice === "rock") {
            console.log(`You both made the same choice! It's a tie!`);
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log(`You lose! Paper beats rock!`);
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log(`You win! Rock beats scissors!`);
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(`You win! Paper beats rock!`);
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log(`You both made the same choice! It's a tie!`);
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log(`You lose! Scissors beats papers!`);
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log(`You lose! Rock beats scissors!`);
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`You win! Scissors beats paper!`);
            humanScore++;
        } else if (
            humanChoice === "scissors" &&
            computerChoice === "scissors"
        ) {
            console.log(`You both made the same choice! It's a tie!`);
        }
    }

    // Add event listeners to the buttons that call playRound function
    rockBtn.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
        console.log(computerScore);
        console.log(humanScore);
        determineWinner(humanScore, computerScore);
    });
    paperBtn.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        console.log(computerScore);
        console.log(humanScore);
        determineWinner(humanScore, computerScore);
    });
    scissorsBtn.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
        console.log(computerScore);
        console.log(humanScore);
        determineWinner(humanScore, computerScore);
    });
}

// Declare human and computer scores for the DOM
const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");

// Declare buttons
const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors')

// Call playGame function
playGame()