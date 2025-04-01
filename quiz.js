const welcomePageEl = document.getElementById("welcome-page");
const questionsPageEl = document.getElementById("questions-page");
const resultsPageEl = document.getElementById("results-page");
const startBtnEl = document.getElementById("start-btn");
const questionTextEl = document.getElementById("question-text");
const optionsEl = document.getElementById("options");
const cyberCardEl = document.getElementById("cyber-result");
const softwareCardEl = document.getElementById("software-result");
const itCardEl = document.getElementById("it-result");
const dataCardEl = document.getElementById("data-result");
const startAgainBtnEl = document.getElementById("start-again-btn");

welcomePageEl.style.display = "block";
questionsPageEl.style.display = "none";
resultsPageEl.style.display = "none";

let currentQuestionIndex = 0;

let cyber = 0;
let data = 0;
let software = 0;
let it = 0;

// 4.
function stopQuiz() {
  questionsPageEl.style.display = "none";
  resultsPageEl.style.display = "block";

  // find sector with highest score
  let scores = { cyber, data, software, it };
  let highestScore = Math.max(cyber, data, software, it);
  let topSectors = Object.keys(scores).filter(
    (sector) => scores[sector] === highestScore
  );

  cyberCardEl.style.display = "none";
  softwareCardEl.style.display = "none";
  itCardEl.style.display = "none";
  dataCardEl.style.display = "none";

  // if theres a tie between 2 or more sectors randomly pick one
  if (topSectors.length > 1) {
    let randomIndex = Math.floor(Math.random() * topSectors.length);
    topSectors = [topSectors[randomIndex]];
  }

  // if there is no tie:
  if (topSectors[0] === "cyber") cyberCardEl.style.display = "block";
  if (topSectors[0] === "data") dataCardEl.style.display = "block";
  if (topSectors[0] === "software") softwareCardEl.style.display = "block";
  if (topSectors[0] === "it") itCardEl.style.display = "block";
}

// 1.
startBtnEl.addEventListener("click", function () {
  welcomePageEl.style.display = "none";
  questionsPageEl.style.display = "block";
  displayQuestions();
});

// 2.
function displayQuestions() {
  if (currentQuestionIndex >= questions.length) {
    stopQuiz();
    return;
  }
  // clear previous options and set question text
  optionsEl.innerHTML = "";
  questionTextEl.textContent = questions[currentQuestionIndex].question;

  // loop through the options for each question
  for (let i = 0; i < questions[currentQuestionIndex].options.length; i++) {
    const optionDiv = document.createElement("div");
    optionsEl.appendChild(optionDiv);
    const optionText = document.createElement("h2");
    optionDiv.appendChild(optionText);
    optionText.textContent = questions[currentQuestionIndex].options[i];
  }
}

// 3.
optionsEl.addEventListener("click", function (event) {
  const selectedAnswer = event.target.textContent;

  if (selectedAnswer === questions[currentQuestionIndex].cyber) {
    cyber++;
  } else if (selectedAnswer === questions[currentQuestionIndex].software) {
    software++;
  } else if (selectedAnswer === questions[currentQuestionIndex].it) {
    it++;
  } else if (selectedAnswer === questions[currentQuestionIndex].data) {
    data++;
  }
  currentQuestionIndex++;
  displayQuestions();
});

// 5.
startAgainBtnEl.addEventListener("click", function () {
  window.location.reload();
});
