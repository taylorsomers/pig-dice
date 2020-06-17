// Business Logic:

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function accumulateTurnScore(number){
  let totalScore = 0;
  totalScore += number;
  return totalScore;
}
// End Business Logic

// UI Logic:

$(document).ready(function() {

  let totalScore = 0;
  $("button#number-button").click(function(event) {
    event.preventDefault();
    let number = randomNumber(1, 7);
    totalScore += number;
    $("p#number").text(number + " " + totalScore);
  });
});

// End UI Logic