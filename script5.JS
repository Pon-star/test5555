const questions = [
    {
        question: "1. Сколько будет 5^4 (5 в четвёртой степени)?",
        answers: [
            { text: "358", correct: false },
            { text: "625", correct: true },
            { text: "596", correct: false },
            { text: "633", correct: false }
        ]
    },
    {
        question: "2. Сколько будет 23.9 - 23.5?",
        answers: [
            { text: "0.4", correct: true },
            { text: "0.5", correct: false },
            { text: "1,2", correct: false },
            { text: "6.5", correct: false }
        ]
    },
    {
        question: "3. Сколько будет 8^3 (8 в кубе)?",
        answers: [
            { text: "513", correct: false },
            { text: "512", correct: true },
            { text: "568", correct: false },
            { text: "516", correct: false }
        ]
    },
    {
        question: "4. Сколько будет 2^5 (2 в пятой степени)?",
        answers: [
            { text: "33", correct: false },
            { text: "10", correct: false },
            { text: "32", correct: true },
            { text: "15", correct: false }
        ]
    },
    {
        question: "5. Сколько будет 15% от 300?",
        answers: [
            { text: "35", correct: false },
            { text: "10", correct: false },
            { text: "45", correct: true },
            { text: "30", correct: false }
        ]
    },
    {
        question: "6. Сколько будет 100 - (25.5 + 25.5)?",
        answers: [
            { text: "67", correct: false },
            { text: "50", correct: false },
            { text: "48", correct: false },
            { text: "49", correct: true }
        ]
    },
    {
        question: "7. Сколько будет 3.5 * 4 + 5.6?",
        answers: [
            { text: "24.2", correct: false },
            { text: "16.6", correct: false },
            { text: "24,5", correct: false },
            { text: "19.6", correct: true }
        ]
    },
    {
        question: "8. Сколько будет 2.2 + 3.2 * 4.2?",
        answers: [
            { text: "8.64", correct: false },
            { text: "6.64", correct: false },
            { text: "41.36", correct: false },
            { text: "15.64", correct: true }
        ]
    },
    {
        question: "9. Сколько будет 1000 - 657?",
        answers: [
            { text: "336", correct: false },
            { text: "343", correct: true },
            { text: "348", correct: false },
            { text: "325", correct: false }
        ]
    },
    {
        question: "10. Сколько будет 432 / 48?",
        answers: [
            { text: "7", correct: false },
            { text: "8", correct: false },
            { text: "4", correct: false },
            { text: "9", correct: true }
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