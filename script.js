// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const mainHeader = document.getElementById('main-header');
    const mainContent = document.getElementById('main-content');

    // Set a timeout for the intro animation
    setTimeout(() => {
        // Fade out the intro
        intro.style.opacity = '0';

        // After the fade out, hide the intro and show the main content
        setTimeout(() => {
            intro.classList.add('hidden'); // Hide the intro
            mainHeader.classList.remove('hidden'); // Show the main header
            mainContent.classList.remove('hidden'); // Show the main content

            // Fade in the main header and content
            mainHeader.style.opacity = '1';
            mainContent.style.opacity = '1';
        }, 1000); // Match this duration with the CSS transition duration
    }, 3000); // Duration for how long the intro is displayed (3 seconds)
});

// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll behavior
        });
    });
});

// Quiz questions
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

// DOM elements
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hidden');
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

// Show a question
function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = ''; // Clear previous answers
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

// Handle answer selection
function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    nextButton.classList.remove('hidden');
}

// Show next question or results
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
});

// Show the result
function showResult() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.innerText = `${score} out of ${questions.length}`;
}

// Restart the quiz
restartButton.addEventListener('click', startQuiz);

// Start the quiz when the page loads
startQuiz();
