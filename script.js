let div = document.querySelector("#div");
let humanChoiceHeading4 = document.createElement("h4");
let humanChoiceHeading3 = document.createElement("h3");
let humanChoiceHeading = document.createElement("h1");
let computerChoiceHeading = document.createElement("h1");

const choices = ["rock", "paper", "scissors"];
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      humanChoiceHeading4.textContent = `You loose! paper beats rock`;
      computerScore += 1;
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
      humanChoiceHeading4.textContent = `You win! rock beats scissors`;
      humanScore += 1;
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
      humanChoiceHeading4.textContent = `You win! paper beats rock`;
      humanScore += 1;
    }
    if (humanChoice === "paper" && computerChoice === "scissors") {
      humanChoiceHeading4.textContent = `You lose! scissors beats paper`;
      computerScore += 1;
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
      humanChoiceHeading4.textContent = `You win! scissors beats paper`;
      humanScore += 1;
    }
    if (humanChoice === "scissors" && computerChoice === "rock") {
      humanChoiceHeading4.textContent = `You loose! rock beats scissors`;
      computerScore += 1;
    }
    if (humanChoice === "rock" && computerChoice === "rock") {
      humanChoiceHeading4.textContent = `It's a draw`;
    }
    if (humanChoice === "paper" && computerChoice === "paper") {
      humanChoiceHeading4.textContent = `It's a draw`;
    }
    if (humanChoice === "scissors" && computerChoice === "scissors") {
      humanChoiceHeading4.textContent = `It's a draw`;
    }

    div.appendChild(humanChoiceHeading4);
    humanChoiceHeading3.textContent = `The Final Score is : you: ${humanScore}, computer: ${computerScore}`;
    div.appendChild(humanChoiceHeading3);
  }
  const btn = document.querySelectorAll("button");
  btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let humanChoice = () => {
        humanChoice = btn.textContent.toLowerCase();
        humanChoiceHeading.textContent = `You Choose ${humanChoice}`;
        div.appendChild(humanChoiceHeading);
        return humanChoice;
      };
      let computerChoice = () => {
        let length = Math.floor(Math.random() * choices.length);
        computerChoice = choices[length];
        computerChoiceHeading.textContent = `Computer Choose ${computerChoice}`;
        div.appendChild(computerChoiceHeading);
        return computerChoice;
      };
      playRound(humanChoice(), computerChoice());
    });
  });
}

playGame();
