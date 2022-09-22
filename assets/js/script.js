// constants for elements and event listeners
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const gameBox = document.getElementById("game");
const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const infoText = document.getElementById('info');
// This Array contains the questions and answers for the game.
const questions = [
    {
        question: "Which is the Capital of Indonesia?",
        answers: [
            {text: "Jakarta", correct: true},
            {text: "Beijing", correct: false},
            {text: "Beirut", correct: false},
            {text: "Baku", correct: false}
        ]},
    {    
        question: "Which is the Capital of Mongolia?",
        answers: [
            {text: "Seoul", correct: false},
            {text: "Tehran", correct: false},
            {text: "Ulaanbaatar", correct: true},
            {text: "Malé", correct: false}
        ]},
    {    
        question: "Which is the Capital of Australia?",
        answers: [
            {text: "Sydney", correct: false},
            {text: "Canberra", correct: true},
            {text: "Melbourne", correct: false},
            {text: "Bisbane", correct: false}
        ]},
    {    
        question: "Which is the Capital of Japan?",
        answers: [
            {text: "Sapporo", correct: false},
            {text: "Kyoto", correct: false},
            {text: "Osaka", correct: false},
            {text: "Tokyo", correct: true}
        ]},
    {    
        question: "Which is the Capital of Slovakia?",
        answers: [
            {text: "Bratislava", correct: true},
            {text: "Wien", correct: false},
            {text: "München", correct: false},
            {text: "Prag", correct: false}
        ]},
    {    
        question: "Which is the Capital of Egypt?",
        answers: [
            {text: "Luxor", correct: false},
            {text: "Aswan", correct: false},
            {text: "Cairo", correct: true},
            {text: "Alexandria", correct: false}
        ]},
    {    
        question: "Which is the Capital of Kenya?",
        answers: [
            {text: "Nairobi", correct: true},
            {text: "Mombasa", correct: false},
            {text: "Kisumu", correct: false},
            {text: "Nakuru", correct: false}
        ]},
    {    
        question: "Which is the Capital of Peru?",
        answers: [
            {text: "Piura", correct: false},
            {text: "Lima", correct: true},
            {text: "Arequipa", correct: false},
            {text: "Santiago", correct: false}
        ]},
    {    
        question: "Which is the Capital of Colombia?",
        answers: [
            {text: "Cusco", correct: false},
            {text: "Iquitos", correct: false},
            {text: "Buenos Aires", correct: false},
            {text: "Bogota", correct: true}
        ]},
    {   
        question: "Which is the Capital of Bulgaria?",
        answers: [
            {text: "Sofia", correct: true},
            {text: "Bukarest", correct: false},
            {text: "Budapest", correct: false},
            {text: "Kiev", correct: false}
        ]} 
]
startButton.addEventListener("click", startGame);
nextButton.addEventListener('click', () => {
    currentQuestion++
    setQuestion()
    incrementQuestionCount()
});

//declaring the two variables, so I can assign them in the functions later
let questionsRandom, currentQuestion;






/**
 * Starts the game when the start button is clicked. 
 * hides the start button and starts showing the quiz
 */
function startGame() {
    startButton.classList.add('hide');
    gameBox.classList.remove('hide');
    infoText.classList.add('hide')

    //I had to look up how to randomize a string which I found here: (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
    questionsRandom = questions.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    
    setQuestion();
    document.getElementById('score').innerText = 0;
    document.getElementById('incorrect').innerText = 10;
}


/**
 * this functions sets a new randomized question ready. One that has not been used yet.
 */
function setQuestion() {
    resetState()
    newQuestion(questionsRandom[currentQuestion]);
}


/**
 * randomizes a new question to be put on display.
 */
function newQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add("button");
        if (answer.correct) {
            //Adds a data attribute to the button element.
            button.dataset.correct = answer.correct;
        };
        button.addEventListener("click", checkAnswer);
        answerButtons.appendChild(button);
    });
}

/**
 * resets the form/body to default for every new question.
 */
function resetState() {
    nextButton.classList.add('hide')
    //removes the button placeholders.
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * Checks whether your choice is correct or incorrect
 * and then increments to score or incorrect score.
 */
function checkAnswer(event) {
    const chosenAnswer = event.target;
    const correct = chosenAnswer.dataset.correct;
    Array.from(answerButtons.children).forEach(button => {
        setRevealClass(button, button.dataset.correct);
    });
    if (correct) {
        incrementScore();
    };
    //This if statement checks if there are any questions left. there is, keep clicking next. if not. show startButton and change its text to "restart".
    if (questionsRandom.length > currentQuestion + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide');  
    }
}


/**
 * Sets the correct background color to the buttons depending on if they're wrong or right.
 * this is done by adding the class "correct" and "wrong", to make them recieve the styling in
 * the css file
 */
function setRevealClass(element, correct) {
    removeRevealClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    };
}


/**
 * removes the setReveal function everytime a new question is due.
 */
function removeRevealClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


/**
 * Adds to the score count. This was borrowed from CI (https://github.com/Code-Institute-Org/love-maths)
 */
function incrementScore() {
    let defaultScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++defaultScore;
}

/**
 * counts how many questions are left.
 */
function incrementQuestionCount() {
    let defaultCount = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = --defaultCount;
}
