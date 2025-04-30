const questions = [
    {
        question: "1. Сколько будет 2 + 3?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false }
        ]
    },
    {
        question: "2. Сколько будет 7 - 4?",
        answers: [
            { text: "2", correct: false },
            { text: "1", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false }
        ]
    },
    {
        question: "3. Сколько будет 5 * 2?",
        answers: [
            { text: "15", correct: false },
            { text: "7", correct: false },
            { text: "10", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        question: "4. Сколько будет 3 * 3?",
        answers: [
            { text: "5", correct: false },
            { text: "9", correct: true },
            { text: "7", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "5. Какое число идет перед 5?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        question: "6. Сколько будет 9 - 2?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "7. Сколько будет 12 / 4?",
        answers: [
            { text: "3", correct: true },
            { text: "2", correct: false },
            { text: "8", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "8. Сколько будет 15 - 7?",
        answers: [
            { text: "11", correct: false },
            { text: "10", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        question: "9. Сколько будет 6 * 6?",
        answers: [
            { text: "65", correct: false },
            { text: "25", correct: false },
            { text: "36", correct: true },
            { text: "66", correct: false }
        ]
    },
    {
        question: "10. Сколько будет 9 + 1?",
        answers: [
            { text: "12", correct: false },
            { text: "9", correct: false },
            { text: "11", correct: false },
            { text: "10", correct: true }
        ]
    }
]
    //Напиши код для страницы с викториной с 2 вопросами в красивом оформлении. Викторина будет на тему математика за первый класс.

    
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    resultContainer.style.display = 'none';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionText.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.innerText = `Вы ответили правильно на ${score} из ${questions.length} вопросов.`;
}

startQuiz();