let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); // Fixed selector

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score"); // Fixed selector

const drawGame = () => {
  msg.innerText = "Game was a Draw, play Again!";
  msg.style.backgroundColor = "#081b31";
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const showWinner = (userWin, userchoice, compChoice) => {
  if (userWin) {
    userScore++; // Increment before updating UI
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++; // Increment before updating UI
    compScorePara.innerText = compScore;
    msg.innerText = `You lost! ${compChoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  console.log("User choice =", userchoice);

  const compChoice = genCompChoice();
  console.log("Computer choice =", compChoice);

  if (userchoice === compChoice) {
    drawGame();
  } else {
    const userWin =
      (userchoice === "rock" && compChoice === "scissors") ||
      (userchoice === "paper" && compChoice === "rock") ||
      (userchoice === "scissors" && compChoice === "paper");

    showWinner(userWin, userchoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
