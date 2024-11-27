const questions = [
    {
        question: "What is the capital of France?",
        answers:[
            {text: "New York", correct: false},
            {text: "Paris", correct: true},
            {text: "Tokyo", correct: false},
            {text: "Kathmandu", correct: false},
        ]
    },
    {
        question: "What is the capital of Nepal?",
        answers:[
            {text: "New York", correct: false},
            {text: "Paris", correct: false},
            {text: "Tokyo", correct: false},
            {text: "Kathmandu", correct: true},
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers:[
            {text: "New York", correct: false},
            {text: "Paris", correct: false},
            {text: "Tokyo", correct: true},
            {text: "Kathmandu", correct: false},
        ]
    },
    {
        question: "What is the capital of USA?",
        answers:[
            {text: "New York", correct: false},
            {text: "Paris", correct: false},
            {text: "Washington DC", correct: true},
            {text: "Kathmandu", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
// to keep track of the score//

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestion()
}
