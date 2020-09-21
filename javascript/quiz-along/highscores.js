const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

console.log(highScores);

// map takes existing/incoming array and convert it to be added to a new array
// outputted html
// join creates one combined string of everything in the array adding it to the html element
highScoresList.innerHTML = highScores
.map(score => {
    // console.log(score)
    return `<li class="high-score">${score.name} - ${score.score}</li>`
})
.join("");