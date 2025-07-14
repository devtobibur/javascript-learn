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
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "HTML", "Java", "C++"],
    answer: "HTML",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "India"],
    answer: "Japan",
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
    const wrapper = document.createElement("div");
    wrapper.className = "flex items-center gap-x-2 cursor-pointer";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question-${index + 1}`; // Use same name for all to make them a group
    input.id = `option-${index + 1}`;
    input.value = option;
    input.required = true;

    const label = document.createElement("label");
    label.htmlFor = `option-${index}`;
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
