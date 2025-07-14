let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

const timerElement = document.getElementById("timerLeft");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const quizContainer = document.getElementById("quizContainer");
const startQuizElement = document.getElementById("startQuiz");
const startContainer = document.getElementById("startContainer");
const resultContainer = document.getElementById("resultContainer");
const scoreEl = document.getElementById("result");
const quizTitleStart = document.getElementById("quizTitleStart");
const quizTitleEnd = document.getElementById("quizTitleEnd");

const quizData = [
  {
    question: "Which language is used for web development?",
    options: ["Python", "HTML", "Java", "C++"],
    answer: "HTML",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Creative Style System",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which HTML tag is used to define an image?",
    options: ["<img>", "<image>", "<src>", "<picture>"],
    answer: "<img>",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: "<script>",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/*", "#", "<!--"],
    answer: "//",
  },
  {
    question:
      "Which method is used to add a new element at the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    question: "What is the default port for HTTP?",
    options: ["80", "443", "21", "8080"],
    answer: "80",
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["React", "Laravel", "Django", "Flask"],
    answer: "React",
  },
  {
    question: "Which tag is used for creating hyperlinks in HTML?",
    options: ["<link>", "<a>", "<href>", "<hyper>"],
    answer: "<a>",
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: ["==", "!=", "===", "="],
    answer: "===",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "id", "css"],
    answer: "style",
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Order Management",
      "Display Output Mechanism",
    ],
    answer: "Document Object Model",
  },
  {
    question: "Which HTML tag is used to create a table row?",
    options: ["<td>", "<tr>", "<table>", "<row>"],
    answer: "<tr>",
  },
  {
    question: "What is the file extension for JavaScript files?",
    options: [".java", ".js", ".jsx", ".ts"],
    answer: ".js",
  },
  {
    question: "Which method converts JSON to a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.decode()",
      "JSON.read()",
    ],
    answer: "JSON.parse()",
  },
  {
    question: "Which is a server-side JavaScript runtime?",
    options: ["Node.js", "React", "Angular", "Vue"],
    answer: "Node.js",
  },
  {
    question: "What keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which HTML tag is used to create a line break?",
    options: ["<br>", "<hr>", "<break>", "<lb>"],
    answer: "<br>",
  },
  {
    question: "What is the result of 2 + '2' in JavaScript?",
    options: ["4", "'22'", "NaN", "undefined"],
    answer: "'22'",
  },
];

const startQuiz = () => {
  if (currentQuestion >= quizData.length) {
    endQuiz();
    return;
  }
  clearInterval(timerInterval);
  timeLeft = 30;
  timerElement.innerHTML = timeLeft;
  quizContainer.classList.add("block");
  quizContainer.classList.remove("hidden");
  startQuizElement.classList.add("hidden");
  //   Time Start
  startTimer();

  const currentQuiz = quizData[currentQuestion];
  questionElement.textContent = currentQuiz.question;
  optionsElement.innerHTML = ""; // Clear previous options

  currentQuiz.options.forEach((option, index) => {
    const wrapper = document.createElement("p");
    wrapper.className = "flex items-center gap-x-2 cursor-pointer";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question`; // Use same name for all to make them a group
    input.id = `${option.toLocaleLowerCase()}`;
    input.value = option;
    input.required = true;

    const label = document.createElement("label");
    label.htmlFor = `${option.toLocaleLowerCase()}`;
    label.textContent = option;

    // Optional: click handler to check answer when clicked
    input.onclick = () => checkAnswer(option);

    wrapper.appendChild(input);
    wrapper.appendChild(label);
    optionsElement.appendChild(wrapper);
  });
};

// Check Answer

const checkAnswer = (selectedOption) => {
  if (selectedOption === quizData[currentQuestion].answer) {
    score++;
  }
};

const nextQuestion = () => {
  currentQuestion++;
  startQuiz();
};
const endQuiz = () => {
  clearInterval(timerInterval);
  startContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  resultContainer.classList.add("block");
  quizTitleStart.classList.add("hidden");
  quizTitleEnd.classList.remove("hidden");
  quizTitleEnd.classList.add("block");
  scoreEl.textContent = score;
};

const restartQuiz = () => {
  clearInterval(timerInterval);
  alert("Restarting the quiz...");
  currentQuestion = 0;
  score = 0;
  startContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");
  resultContainer.classList.remove("block");
  quizTitleStart.classList.remove("hidden");
  quizTitleEnd.classList.add("hidden");
  startQuiz();
};

const startTimer = () => {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.innerHTML = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
};
