const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

// was hardcoded or written out here now we are using fetch from the json file but will eventually use an api
// when using fetch, or anything that returns a promise a catch method for errors needs to be added too
let questions = [];

fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple").then(res => {
    // console.log(res);
    return res.json();
})
.then(loadedQuestions => {
    console.log(loadedQuestions.results);

    questions = loadedQuestions.results.map(loadedQuestion => {
        const formattedQuestion = {
            question: loadedQuestion.question
        }

        const answerChoices = [...loadedQuestion.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
        answerChoices.splice(formattedQuestion.answer -1, 0, loadedQuestion.correct_answer);

        answerChoices.forEach((choice, index) => {
            formattedQuestion["choice" + (index+1)] = choice;
        })
        return formattedQuestion;
    });

  //  questions = loadedQuestions;
/*     game.classList.remove("hidden")
    loader.classList.add("hidden")
 code moved to the start game function so as not to swap classes before new question has loaded*/   
startGame()
}).catch(err => {
    console.error(err);
})
//constants

const CORRECT_BONUS = 10;
// change to questions.length
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
  //  console.log(availableQuesions)
    getNewQuestion();
    game.classList.remove("hidden")
    loader.classList.add("hidden")
};

getNewQuestion = () => {
    if(availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        //go to end page when questions run out
        return window.location.assign("/end.html");
    }

        questionCounter++;
        // interpolation?:
        progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
// update the progress bar
// console.log((questionCounter / MAX_QUESTIONS)*100);
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

        const questionIndex = Math.floor(Math.random() * availableQuesions.length);
        currentQuestion = availableQuesions[questionIndex];
        question.innerText = currentQuestion.question;
    
        choices.forEach((choice) => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
        });
    
        availableQuesions.splice(questionIndex, 1);
        acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
  
        if(classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        };

      selectedChoice.parentElement.classList.add(classToApply);
  
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 1000);

       // console.log(selectedAnswer == currentQuestion.answer);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
  };

