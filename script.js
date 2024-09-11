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
    }, 2000); // Duration for how long the intro is displayed (3 seconds)
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
        question: "Are you ready?",
        answers: [
            { text: "YES - ALWAYS!", correct: true },
            { text: "NO, NEVER!", correct: false }
        ]
    },
    {
        question: "Which of the following describes Dev Gopal?",
        answers: [
            { text: "Global hacakthon winner", correct: false },
            { text: "Stanford student", correct: false },
            { text: "Passionate developer with deep understanding across end-to-end development", correct: false },
            { text: "All of the above", correct: true },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "Which of the following can Dev NOT use?",
        answers: [
            { text: "HTML/CSS", correct: false },
            { text: "Assembly Code", correct: true },
            { text: "Python", correct: false },
            { text: "SQL", correct: false }
            { text: "Java", correct: false }
        ]
    },
    {
        question: "What MINDSET does Dev believe in and use daily?",
        answers: [
            { text: "Defeatism", correct: false },
            { text: "FIXED mindset", correct: false },
            { text: "Nihilism", correct: false },
            { text: "GROWTH mindset", correct: true }
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
const feedbackElement = document.getElementById('feedback'); // Feedback element

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hidden');
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    feedbackElement.classList.add('hidden'); // Hide feedback
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
    feedbackElement.classList.remove('hidden'); // Show feedback
    if (answer.correct) {
        score++;
        feedbackElement.innerText = "Correct!"; // Correct answer feedback
        feedbackElement.classList.add('correct'); // Add correct class
    } else {
        feedbackElement.innerText = "Incorrect!"; // Incorrect answer feedback
        feedbackElement.classList.add('incorrect'); // Add incorrect class
    }
    nextButton.classList.remove('hidden');
}

// Show next question or results
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    feedbackElement.classList.add('hidden'); // Hide feedback for the next question
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
