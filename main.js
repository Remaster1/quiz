let start = document.getElementById("start");
let main = document.getElementById("main");
let result = document.getElementById("result");

let currentQuestion = 0;
let correctCounter = 0;

const questions = [
  {
    question: "2+2=?",
    correct: 4,
    answers: [1, 2, 3, 4],
  },
  {
    question: "10+2=?",
    correct: 12,
    answers: [11, 12, 13, 41],
  },
  {
    question: "5+6=?",
    correct: 11,
    answers: [11, 20, 93, 42],
  },
];

start.addEventListener("click", startProgram);

function startProgram() {
  start.classList.add("none");
  main.classList.remove("none");
  result.classList.add("none")
  generateQuestion()
}

function generateQuestion() {
  let question = questions[currentQuestion].question;
  main.innerHTML = `<h1 id="question">${question}</h1>`;
  let answers = questions[currentQuestion].answers;
  let btn_block = "";
  for (let i of answers) {
    btn_block += `<button class="btn" onclick="checkQuestion(${i})">${i}</button>`;
  }
  main.innerHTML += `<nav class="btn-box">${btn_block}</nav>`;
}
