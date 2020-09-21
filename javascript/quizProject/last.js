function buildQuiz(){
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];

    for(letter in currentQuestion.answers){
        answers.push(
        `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
        </label>`
        );
    }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    quizContainer.innerHTML = output.join('');
  }
 
  function showResults(){
    // gather answer containers from our quiz
 const answerContainers = quizContainer.querySelectorAll('.answers');

 // keep track of user's answers
 let numCorrect = 0;

 // for each question...
 myQuestions.forEach( (currentQuestion, questionNumber) => {

   // find selected answer
   const answerContainer = answerContainers[questionNumber];
   const selector = `input[name=question${questionNumber}]:checked`;
   const userAnswer = (answerContainer.querySelector(selector) || {}).value;

   // if answer is correct
   if(userAnswer === currentQuestion.correctAnswer){
     // add to the number of correct answers
     numCorrect++;

     // color the answers green
     answerContainers[questionNumber].style.color = 'lightgreen';
   }
   // if answer is wrong or blank
   else{
     // color the answers red
     answerContainers[questionNumber].style.color = 'red';
   }
 });

 // show number of correct answers out of total
 resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('#quizContainer');
const resultsContainer = document.getElementById('#results');
const submitButton = document.getElementById('#submit');
const myQuestions = [
    {question: 'What does your sun sign dictate?', answers: {a: 'Zodiac personality', b: 'Whole personality', c: 'Lucky days'}, correctAnswer: 'a'},
    {question: 'What does your moon sign dictate?', answers: {a: 'Your personality', b: 'Your emotions', c: 'Unlucky days'}, correctAnswer: 'b'},
    {question: 'What does your rising sign dictate?', answers: {a: 'Love Match', b: 'Lucky Days', c: 'Social Personality'}, correctAnswer: 'c'},
    {question: 'Is Chiron placement included in a birth chart?', answers: {a: 'Yes', b: 'No', c: 'Some'}, correctAnswer: 'c'}
];

// display quiz
buildQuiz(myQuestions);

// const quizContainer = document.getElementById('#quizContainer');

// show results when submitted
submitButton.addEventListener('click', showResults);
