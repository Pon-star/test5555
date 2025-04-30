const questions = [
    {
        question: "1. Сколько будет 2 + 2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "2. Сколько будет 5 - 3?",
        answers: [
            { text: "2", correct: true },
            { text: "1", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "3. Сколько будет 3 + 5?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        question: "4. Сколько будет 10 - 4?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        question: "5. Сколько будет 3 + 3?",
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
        question: "7. Сколько будет 4 + 4?",
        answers: [
            { text: "8", correct: true },
            { text: "7", correct: false },
            { text: "5", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "8. Сколько будет 8 + 4?",
        answers: [
            { text: "10", correct: false },
            { text: "8", correct: false },
            { text: "12", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        question: "9. Сколько будет 8 - 4?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        question: "10. Сколько будет 8 - 2?",
        answers: [
            { text: "2", correct: false },
            { text: "7", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: true }
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