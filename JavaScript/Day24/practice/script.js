const webDevQuestions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Transfer Markup Language",
        "Hyper Text Markup Language",
        "High Tech Markup Language",
        "Hyperlink and Text Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which HTML tag is used to define an internal stylesheet?",
      options: ["<css>", "<style>", "<script>", "<link>"],
      answer: "<style>"
    },
    {
      question: "Which property is used to change the background color in CSS?",
      options: ["background-color", "color", "bgcolor", "background"],
      answer: "background-color"
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "text-size", "size", "text-style"],
      answer: "font-size"
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets"
      ],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which JavaScript keyword is used to declare a variable?",
      options: ["var", "let", "const", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which of the following is not a JavaScript data type?",
      options: ["Number", "Boolean", "String", "Float"],
      answer: "Float"
    },
    {
      question: "What is the correct way to write an array in JavaScript?",
      options: [
        "var colors = [red, green, blue]",
        "var colors = (1:red, 2:green, 3:blue)",
        "var colors = {\"red\", \"green\", \"blue\"}",
        "var colors = [\"red\", \"green\", \"blue\"]"
      ],
      answer: "var colors = [\"red\", \"green\", \"blue\"]"
    },
    {
      question: "Which method is used to find an element in an array in JavaScript?",
      options: ["find()", "search()", "locate()", "filter()"],
      answer: "find()"
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<link>", "<a>", "<href>", "<hyper>"],
      answer: "<a>"
    },
    {
      question: "What is the default display value of a <div> element?",
      options: ["inline", "block", "inline-block", "flex"],
      answer: "block"
    },
    {
      question: "Which CSS property is used to make text bold?",
      options: ["bold", "font-weight", "text-bold", "font-style"],
      answer: "font-weight"
    },
    {
      question: "Which JavaScript function is used to print something to the console?",
      options: ["print()", "console.print()", "log()", "console.log()"],
      answer: "console.log()"
    },
    {
      question: "Which tag is used to define a table row in HTML?",
      options: ["<td>", "<tr>", "<th>", "<table>"],
      answer: "<tr>"
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "<!-- -->", "/* */", "Both // and /* */"],
      answer: "Both // and /* */"
    },
    {
      question: "What does the 'alt' attribute in an <img> tag specify?",
      options: ["Image source", "Alternate text", "Image title", "Image width"],
      answer: "Alternate text"
    },
    {
      question: "Which JavaScript method removes the last element from an array?",
      options: ["pop()", "push()", "shift()", "splice()"],
      answer: "pop()"
    },
    {
      question: "Which CSS property is used to create space inside an element?",
      options: ["margin", "padding", "spacing", "border"],
      answer: "padding"
    },
    {
      question: "Which HTML tag is used to insert a line break?",
      options: ["<lb>", "<br>", "<break>", "<newline>"],
      answer: "<br>"
    },
    {
      question: "What is the purpose of the <head> element in HTML?",
      options: ["To store metadata and links to external resources", "To display the main content", "To define the page footer", "To create navigation menus"],
      answer: "To store metadata and links to external resources"
    },
    {
      question: "Which event is triggered when a user clicks on an HTML element?",
      options: ["onhover", "onmouseclick", "onclick", "onpress"],
      answer: "onclick"
    }
  ];
  

  
  
  function getRandomQuestions() {
    let arr = [...webDevQuestions];
    let length = arr.length;
    
    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * length);
      // Swap selected question with last unselected question
      [arr[index], arr[length - 1]] = [arr[length - 1], arr[index]];
      length--;
    }
  
    return arr.slice(-5);
  }
  
  const ori_ans = {};
  const form = document.querySelector("form");
  const problem = getRandomQuestions();
  
  problem.forEach((obj, index) => {
    const div = document.createElement("div");
    div.className = "question";
  
    // Store correct answer
    ori_ans[`q${index + 1}`] = obj.answer;
  
    // Create question text
    const para = document.createElement("p");
    para.textContent = `${index + 1}. ${obj.question}`;
    div.appendChild(para);
  
    // Create radio buttons
    obj.options.forEach((value) => {
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
      if (value === ori_ans[key]) {
        score++;
      }
    }
  
    out.innerText = `${score} out of 5 is correct`;
  });
  