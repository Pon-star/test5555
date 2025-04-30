const questions = [
    {
        question: "1. Сколько будет 25 + 47?",
        answers: [
            { text: "55", correct: false },
            { text: "72", correct: true },
            { text: "59", correct: false },
            { text: "73", correct: false }
        ]
    },
    {
        question: "2. Сколько будет 84 - 29?",
        answers: [
            { text: "52", correct: false },
            { text: "57", correct: false },
            { text: "56", correct:false },
            { text: "55", correct: true }
        ]
    },
    {
        question: "3. Сколько будет 12 * 6?",
        answers: [
            { text: "15", correct: false },
            { text: "72", correct: true },
            { text: "43", correct: false },
            { text: "90", correct: false }
        ]
    },
    {
        question: "4. Сколько будет 144 / 12?",
        answers: [
            { text: "13", correct: false },
            { text: "15", correct: false },
            { text: "11", correct: false },
            { text: "12", correct: true }
        ]
    },
    {
        question: "5. Какое число идет после 999?",
        answers: [
            { text: "0", correct: false },
            { text: "9999", correct: false },
            { text: "1000", correct: true },
            { text: "1010", correct: false }
        ]
    },
    {
        question: "6. Сколько будет 45 + 36?",
        answers: [
            { text: "67", correct: false },
            { text: "75", correct: false },
            { text: "81", correct: true },
            { text: "96", correct: false }
        ]
    },
    {
        question: "7. Сколько будет 72 - 28?",
        answers: [
            { text: "38", correct: false },
            { text: "23", correct: false },
            { text: "88", correct: false },
            { text: "44", correct: true }
        ]
    },
    {
        question: "8. Сколько будет 6 * 9?",
        answers: [
            { text: "57", correct: false },
            { text: "56", correct: false },
            { text: "54", correct: true },
            { text: "85", correct: false }
        ]
    },
    {
        question: "9. Сколько будет 100 - 37?",
        answers: [
            { text: "63", correct: true },
            { text: "35", correct: false },
            { text: "36", correct: false },
            { text: "66", correct: false }
        ]
    },
    {
        question: "10. Сколько будет 48 / 6?",
        answers: [
            { text: "14", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true }
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