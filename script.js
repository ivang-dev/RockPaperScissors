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

// Function to evaluate if someone wins and disable the buttons
function determineWinner(humanScore, computerScore, rollResults, rollResultsLWT) {
    if (humanScore === 5) {
        console.log("You got 5 points! You win!");
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        rollResults.textContent = `You got 5 points! You win!`;
        rollResultsLWT.textContent = "";
        results.append(rollResults);
        results.append(rollResultsLWT);
    } else if (computerScore === 5) {
        console.log("The computer got 5 points! You lose!");
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        rollResults.textContent = `The computer got 5 points! You lose!`;
        rollResultsLWT.textContent = "";
        results.append(rollResults);
        results.append(rollResultsLWT);
    }
}

// Function to keep track of score and declare winner at 5 points
function playGame() {
    // Declare variables to keep track of score
    let humanScore = 0;
    let computerScore = 0;

    // Declare result variable
    let resultText = "";

    // Elements created to display the results of the roll
    const rollResults = document.createElement("div");
    const rollResultsLWT = document.createElement("div");

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        // Clears previous result
        rollResults.textContent = "";
        results.append(rollResults);

        // Get message out for choices
        console.log(`You chose ${humanChoice}!`);
        console.log(`The computer chose ${computerChoice}!`);

        // Logic to determine the winner, and set result variable
        if (humanChoice === "rock" && computerChoice === "rock") {
            resultText =`You both made the same choice! It's a tie!`;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            resultText =`You lose! Paper beats rock!`;
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            resultText =`You win! Rock beats scissors!`;
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            resultText =`You win! Paper beats rock!`;
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            resultText =`You both made the same choice! It's a tie!`;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            resultText =`You lose! Scissors beats papers!`;
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            resultText =`You lose! Rock beats scissors!`;
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            resultText =`You win! Scissors beats paper!`;
            humanScore++;
        } else if (
            humanChoice === "scissors" &&
            computerChoice === "scissors"
        ) {
            resultText =`You both made the same choice! It's a tie!`;
        }

        // Change human and computer score display
        humanScoreDisplay.textContent = humanScore.toString();
        computerScoreDisplay.textContent = computerScore.toString();

        // Display round result
        rollResults.textContent = `You chose ${humanChoice}! The computer chose ${computerChoice}!`;
        rollResultsLWT.textContent = resultText
        results.append(rollResults);
        results.append(rollResultsLWT);
    }

    // Add event listeners to the buttons that call playRound function
    rockBtn.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
        console.log(computerScore);
        console.log(humanScore);
        determineWinner(humanScore, computerScore, rollResults, rollResultsLWT);
    });
    paperBtn.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        console.log(computerScore);
        console.log(humanScore);
        determineWinner(humanScore, computerScore, rollResults, rollResultsLWT);
    });
    scissorsBtn.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
        console.log(computerScore);
        console.log(humanScore);
        determineWinner(humanScore, computerScore, rollResults, rollResultsLWT);
    });
}

// Declare human and computer scores for the DOM
const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");

// Declare buttons
const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors')

// Declare results of rolls and winners
const results = document.querySelector("#results");

// Declare reload button
const reloadBtn = document.querySelector('#reloadBtn');

// Add reload method to the reload button
reloadBtn.addEventListener("click", () => {
    location.reload();
});

// Call playGame function
playGame()