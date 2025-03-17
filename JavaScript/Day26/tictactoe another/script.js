// 1
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

// 6
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// 2
let turnO = true;

// 3
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// 10
const resetGame = () => {
  turnO = true;
  enabledBoxes();
  msgContainer.classList.add("hide");
};

// 4
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

// 9
const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
// 8
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
// 7
const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner} `;
  msgContainer.classList.remove("hide");

  // Disable all boxes after winner is found
  //   boxes.forEach((box) => (box.disabled = true));
  disabledBoxes();
};

// 5
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos0val = boxes[pattern[0]].innerText;
    let pos1val = boxes[pattern[1]].innerText;
    let pos2val = boxes[pattern[2]].innerText;

    if (pos0val !== "" && pos1val !== "" && pos2val !== "") {
      if (pos0val === pos1val && pos1val === pos2val) {
        // console.log("Winner:", pos0val);
        showWinner(pos0val);
        return; // Stop checking further
      }
    }
  }
};

// 11
newGameBtn.addEventListener("click", resetGame);
// 12
resetBtn.addEventListener("click", resetGame);

