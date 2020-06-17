// Business Logic:

function Player(totalScore, turnScore) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
}

Player.prototype.accumulateTurnScore = function(turnScore, roll) {
  if (roll !== 1) {
    this.turnScore += roll;
  } else {
    this.turnScore = 0;
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

Player.prototype.accumulateTotalScore = function() {
  this.totalScore += this.turnScore;
}

// End Business Logic

// UI Logic:

$(document).ready(function() {
  let player1 = new Player(0, 0);
  
  let turnScore = 0;
  let totalScore = 0;
  $("button#number-button").click(function(event) {
    event.preventDefault();
    let roll = randomNumber(1, 7);
    player1.accumulateTurnScore(turnScore, roll);
    $("p#number").text(roll + " " + player1.turnScore);
  });
  $("button#hold-button").click(function(event) {
    event.preventDefault();
    player1.accumulateTotalScore();
    $("p#total-score").text(player1.totalScore);
  });
});

// End UI Logic