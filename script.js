function getComputerChoice() {
  // Declare variable for the computer's choice
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

console.log(getComputerChoice());
