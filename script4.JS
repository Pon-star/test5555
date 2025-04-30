const questions = [
    {
        question: "1. Сколько будет 25 + 37?",
        answers: [
            { text: "35", correct: false },
            { text: "62", correct: true },
            { text: "59", correct: false },
            { text: "63", correct: false }
        ]
    },
    {
        question: "2. Сколько будет 144 - 58?",
        answers: [
            { text: "82", correct: false },
            { text: "87", correct: false },
            { text: "86", correct: true },
            { text: "85", correct: false }
        ]
    },
    {
        question: "3. Сколько будет 5^3 (5 в кубе)?",
        answers: [
            { text: "125", correct: true },
            { text: "752", correct: false },
            { text: "423", correct: false },
            { text: "358", correct: false }
        ]
    },
    {
        question: "4. Сколько будет 15% от 200?",
        answers: [
            { text: "30", correct: true },
            { text: "50", correct: false },
            { text: "20", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        question: "5. Сколько будет 7 * (3 + 2)?",
        answers: [
            { text: "32", correct: false },
            { text: "12", correct: false },
            { text: "35", correct: true },
            { text: "36", correct: false }
        ]
    },
    {
        question: "6. Сколько будет 100 - (25 + 25)?",
        answers: [
            { text: "67", correct: false },
            { text: "50", correct: true },
            { text: "81", correct: false },
            { text: "96", correct: false }
        ]
    },
    {
        question: "7. Сколько будет 3 * 4 + 5?",
        answers: [
            { text: "24", correct: false },
            { text: "16", correct: false },
            { text: "27", correct: false },
            { text: "17", correct: true }
        ]
    },
    {
        question: "8. Сколько будет 2 + 2 * 2?",
        answers: [
            { text: "8", correct: false },
            { text: "6", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false }
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