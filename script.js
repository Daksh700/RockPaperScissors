const choices = ["rock", "paper", "scissors"];
function getHumanChoice() {
  let humanInput = prompt("Enter your choice");
  if (!choices.includes(humanInput)) {
    alert("Enter a valid choice");
  } else {
    console.log(humanInput);
    return humanInput;
  }
}
function getComputerChoice() {
  let length = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[length];
  console.log(computerChoice);
  return computerChoice;
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log(`You lose! paper beats rock`);
      computerScore += 1;
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(`You win! rock beats scissors`);
      humanScore += 1;
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(`You win! paper beats rock`);
      humanScore += 1;
    }
    if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log(`You lose! scissors beats paper`);
      computerScore += 1;
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(`You win! scissors beats paper`);
      humanScore += 1;
    }
    if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log(`You loose! rock beats scissors`);
      computerScore += 1;
    }
    if (humanChoice === "rock" && computerChoice === "rock") {
      console.log(`It's a draw`);
    }
    if (humanChoice === "paper" && computerChoice === "paper") {
      console.log(`It's a draw`);
    }
    if (humanChoice === "scissors" && computerChoice === "scissors") {
      console.log(`It's a draw`);
    }
  }
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  console.log(
    `The Final Score is : you: ${humanScore}, computer: ${computerScore}`
  );
}
playGame();
