// constants for elements and event listeners
const startButton = document.getElementById("start-btn");
const gameBox = document.getElementById("game");
const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answers");


let questionsRandom, currentQuestion;

startButton.addEventListener("click", startGame);

// This Array contains the questions and answers for the game.
const questions = [
    {
        question: "What is the Capital of Indonesia?",
        answers: [
            {text: "Jakarta", correct: true},
            {text: "Beijing", correct: false},
            {text: "Beirut", correct: false},
            {text: "Baku", correct: false}
        ]},
    {    
        question: "What is the Capital of Mongolia?",
        answers: [
            {text: "Seoul", correct: false},
            {text: "Tehran", correct: false},
            {text: "Ulaanbaatar", correct: true},
            {text: "Malé", correct: false}
        ]},
    {    
        question: "What is the Capital of Australia?",
        answers: [
            {text: "Sydney", correct: false},
            {text: "Canberra", correct: true},
            {text: "Melbourne", correct: false},
            {text: "Bisbane", correct: false}
        ]},
    {    
        question: "What is the Capital of Japan?",
        answers: [
            {text: "Sapporo", correct: false},
            {text: "Kyoto", correct: false},
            {text: "Osaka", correct: false},
            {text: "Tokyo", correct: true}
        ]},
    {    
        question: "What is the Capital of Slovakia?",
        answers: [
            {text: "Bratislava", correct: true},
            {text: "Wien", correct: false},
            {text: "München", correct: false},
            {text: "Prag", correct: false}
        ]},
    {    
        question: "What is the Capital of Egypt?",
        answers: [
            {text: "Luxor", correct: false},
            {text: "Aswan", correct: false},
            {text: "Cairo", correct: true},
            {text: "Alexandria", correct: false}
        ]},
    {    
        question: "What is the Capital of Kenya?",
        answers: [
            {text: "Nairobi", correct: true},
            {text: "Mombasa", correct: false},
            {text: "Kisumu", correct: false},
            {text: "Nakuru", correct: false}
        ]},
    {    
        question: "What is the Capital of Peru?",
        answers: [
            {text: "Piura", correct: false},
            {text: "Lima", correct: true},
            {text: "Arequipa", correct: false},
            {text: "Santiago", correct: false}
        ]},
    {    
        question: "What is the Capital of Colombia?",
        answers: [
            {text: "Cusco", correct: false},
            {text: "Iquitos", correct: false},
            {text: "Buenos Aires", correct: false},
            {text: "Bogota", correct: true}
        ]},
    {   
        question: "What is the Capital of Bulgaria?",
        answers: [
            {text: "Sofia", correct: true},
            {text: "Bukarest", correct: false},
            {text: "Budapest", correct: false},
            {text: "Kiev", correct: false}
        ]} 
]

/**
 * Starts the game when the start button is clicked. 
 * hides the start button and starts showing the quiz
 */
function startGame() {
    startButton.classList.add('hide');
    gameBox.classList.remove('hide');

    //I had to look up how to randomize a string which I found here: (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
    questionsRandom = questions.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    
    setQuestion();
}



function setQuestion() {
    newQuestion(questionsRandom[currentQuestion]);
}

function newQuestion(question) {
    questionEl.innerText = question.question;
}

function checkAnswer() {
    
}

function incrementScore() {
    
}

function incrementWrongScore() {
    
}


