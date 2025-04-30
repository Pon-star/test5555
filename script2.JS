const questions = [
    {
        question: "1. Сколько будет 15 + 27?",
        answers: [
            { text: "35", correct: false },
            { text: "42", correct: true },
            { text: "59", correct: false },
            { text: "63", correct: false }
        ]
    },
    {
        question: "2. Сколько будет 56 - 19?",
        answers: [
            { text: "34", correct: false },
            { text: "38", correct: false },
            { text: "36", correct:false },
            { text: "37", correct: true }
        ]
    },
    {
        question: "3. Сколько будет 8 * 7?",
        answers: [
            { text: "15", correct: false },
            { text: "74", correct: false },
            { text: "56", correct: true },
            { text: "90", correct: false }
        ]
    },
    {
        question: "4. Сколько будет 81 / 9?",
        answers: [
            { text: "5", correct: false },
            { text: "9", correct: true },
            { text: "7", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "5. Какое число идет после 99?",
        answers: [
            { text: "0", correct: false },
            { text: "999", correct: false },
            { text: "100", correct: true },
            { text: "101", correct: false }
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
        question: "10. Сколько будет 54 + 46?",
        answers: [
            { text: "112", correct: false },
            { text: "90", correct: false },
            { text: "110", correct: false },
            { text: "100", correct: true }
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