// script.js

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");
const questionContainer = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const scoreDisplay = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Paris", "Madrid", "Rome"],
        correct: 1
    },
    {
        question: "Who wrote 'Harry Potter'?",
        answers: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Suzanne Collins"],
        correct: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Jupiter", "Mars", "Saturn"],
        correct: 1
    },
    {
        question: "What is the square root of 64?",
        answers: ["6", "8", "10", "12"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);

function startGame() {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    answerButtons.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => checkAnswer(index));
        answerButtons.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    quizScreen.style.display = "none";
    endScreen.style.display = "block";
    scoreDisplay.textContent = score;
}

function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    endScreen.style.display = "none";
    startScreen.style.display = "block";
}
