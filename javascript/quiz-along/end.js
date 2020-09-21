const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');

const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

//console.log(highScores)

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
  //  console.log(username.value);
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
// console.log("clicked the save button");
e.preventDefault();

const score = {
    score: mostRecentScore,
    name: username.value
};
// add score to the array
highScores.push(score);
// sort the array = if the b score is higher than the a score then put b before a in the array
// highScores.sort((a,b) => {return b.score - a.score;})
highScores.sort( (a,b) => b.score - a.score)
// cuts off any score that doesn't make the top 5
highScores.splice(5);

localStorage.setItem("highScores", JSON.stringify(highScores))
// console.log(highScores);
};

