// Business Logic:

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function accumulateTurnScore(totalScore, number){
  if(number!== 1){
    totalScore += number;
  } else {
    totalScore = 0;
  }
  return totalScore;
}

// End Business Logic

// UI Logic:

$(document).ready(function() {

  let totalScore = 0;
  $("button#number-button").click(function(event) {
    event.preventDefault();
    let number = randomNumber(1, 7);
    totalScore = accumulateTurnScore(totalScore, number);
    $("p#number").text(number + " " + totalScore);
  });
});

// End UI Logic