const quiz = [
  {
    question: "What is the correct syntax to declare a variable in JavaScript?",
    choices: ["var name;", "variable name;", "v name;", "declare name;"],
    answer: "var name;",
  },
  {
    question: "Which function is used to print content to the console?",
    choices: ["print()", "log()", "console.log()", "write()"],
    answer: "console.log()",
  },
  {
    question:
      "What keyword is used to define a constant variable in JavaScript?",
    choices: ["let", "var", "const", "static"],
    answer: "const",
  },
  {
    question: "How do you write an arrow function in JavaScript?",
    choices: [
      "function() => {}",
      "() => {}",
      "function => () {}",
      "{} => function()",
    ],
    answer: "() => {}",
  },
  {
    question: "Which operator is used for strict equality comparison?",
    choices: ["==", "===", "!=", "!=="],
    answer: "===",
  },
];

// function RandomQuestion() {
/*
  // time complexity o(n)
    // use set for unique ele or obj
  const data = new Set();

  while (data.size != 5) {
    const index = Math.floor(Math.random() * 30);
    data.add(quiz[index]);
  }
  //   convert set into array
  return [...data];

}
  */

// Function to select 5 random questions
// time complexity o(nlogn)
// function getRandomQuestions() {
//   return quiz.sort(() => Math.random() - 0.5).slice(0, 5);
// }

// 🎯 Fisher-Yates Shuffle Algorithm (O(n))
function getRandomQuestions() {
  let shuffled = [...quiz]; // Clone the array to avoid modifying the original
  let length = shuffled.length;

  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * length);

    // Swap selected question with the last unshuffled element
    [shuffled[index], shuffled[length - 1]] = [shuffled[length - 1], shuffled[index]];

    length--; // Reduce the range for the next iteration
  }

  return shuffled; // Get last 5 elements as random selection
}



// Store correct answers
const original_answers = {};

// Select form
const form = document.querySelector("form");

// Fetch 5 random questions
const problem = getRandomQuestions();
problem.forEach((obj, index) => {
  const div = document.createElement("div");
  div.className = "question";

  // Store correct answer
  original_answers[`q${index + 1}`] = obj.answer;

  // Create question text
  const para = document.createElement("p");
  para.textContent = `${index + 1}. ${obj.question}`;
  div.appendChild(para);

  // Create radio buttons
  obj.choices.forEach((value) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index + 1}`;
    input.value = value;

    label.appendChild(input);
    label.appendChild(document.createTextNode(value));
    div.appendChild(label);
    div.appendChild(document.createElement("br"));
  });

  form.appendChild(div);
});

// Add submit button
const button = document.createElement("button");
button.type = "submit";
button.className = "submit-btn";
button.textContent = "Submit";
form.appendChild(button);

// Result display
const out = document.createElement("div");
out.className = "result";
out.id = "result";
form.appendChild(out);

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);

  let score = 0;
  for (let [key, value] of data.entries()) {
    if (value === original_answers[key]) {
      score++;
    }
  }

  out.innerText = `${score} out of 5 is correct`;
});
