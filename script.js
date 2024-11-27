const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "New York", correct: false },
            { text: "Paris", correct: true },
            { text: "Tokyo", correct: false },
            { text: "Kathmandu", correct: false },
        ],
    },
    {
        question: "What is the capital of Nepal?",
        answers: [
            { text: "New York", correct: false },
            { text: "Paris", correct: false },
            { text: "Tokyo", correct: false },
            { text: "Kathmandu", correct: true },
        ],
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "New York", correct: false },
            { text: "Paris", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Kathmandu", correct: false },
        ],
    },
    {
        question: "What is the capital of USA?",
        answers: [
            { text: "New York", correct: false },
            { text: "Paris", correct: false },
            { text: "Washington DC", correct: true },
            { text: "Kathmandu", correct: false },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none"; // Hide Next button initially
    showQuestion();
}

function showQuestion() {
    nextButton.style.display = "none"; // Hide Next button for the current question
    answerButton.innerHTML = ""; // Clear previous answers
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButton.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++; // Increment score for correct answer
    }
    Array.from(answerButton.children).forEach((button) => {
        button.disabled = true; // Disable buttons after selection
    });
    nextButton.style.display = "block"; // Show Next button
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        endQuiz();
    }
});

function endQuiz() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    answerButton.innerHTML = "";
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);
}

startQuiz();
