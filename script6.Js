const questions = [
    {
        question: "1. Какое число является квадратом 9",
        answers: [
            { text: "81", correct: true },
            { text: "18", correct: false },
            { text: "56", correct: false },
            { text: "63", correct: false }
        ]
    },
    {
        question: "2. Какой периметр квадрата со стороной 5?",
        answers: [
            { text: "30", correct: false },
            { text: "21", correct: false },
            { text: "20", correct: true },
            { text: "15", correct: false }
        ]
    },
    {
        question: "3. Какой угол в треугольнике, если два других угла равны 45°?",
        answers: [
            { text: "90", correct: true },
            { text: "45", correct: false },
            { text: "180", correct: false },
            { text: "50", correct: false }
        ]
    },
    {
        question: "4. Сколько градусов в прямом угле?",
        answers: [
            { text: "30", correct: false },
            { text: "90", correct: true },
            { text: "45", correct: false },
            { text: "180", correct: false }
        ]
    },
    {
        question: "5. Какой периметр треугольника со сторонами 30 см, 45 см и 51 см?",
        answers: [
            { text: "124", correct: false },
            { text: "126", correct: true },
            { text: "128", correct: false },
            { text: "132", correct: false }
        ]
    },
    {
        question: "6. Какое значение имеет x в уравнении 2x + 3 = 11?",
        answers: [
            { text: "7", correct: false },
            { text: "5", correct: false },
            { text: "8", correct: false },
            { text: "4", correct: true }
        ]
    },
    {
        question: "7. Какой результат выражения (x + 3)(x - 2)?",
        answers: [
            { text: "x² + x - 6", correct: true },
            { text: "x² + x + 6", correct: false },
            { text: "x² - x - 6", correct: false },
            { text: "x² - x + 6", correct: false }
        ]
    },
    {
        question: "8. Какое значение имеет x в уравнении 3(x - 1) = 6?",
        answers: [
            { text: "8", correct: false },
            { text: "6", correct: false },
            { text: "3", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        question: "9. Какой из следующих вариантов является средним арифметическим чисел 4, 8 и 12?",
        answers: [
            { text: "24", correct: false },
            { text: "3", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        question: "10. Определи выброс из следующих ответов.",
        answers: [
            { text: "23.5", correct: false },
            { text: "26.4", correct: false },
            { text: "458", correct: true },
            { text: "27.4", correct: false }
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