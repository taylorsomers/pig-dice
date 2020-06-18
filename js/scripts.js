// Business Logic:

function Player(totalScore, turnScore, turnStatus) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.turnStatus = turnStatus;
}

Player.prototype.accumulateTurnScore = function(roll) {
  if (roll !== 1) {
    this.turnScore += roll;
  } else {
    this.turnScore = 0;
    this.turnStatus = false;
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function switchTurn(currentPlayer, otherPlayer){
    currentPlayer.turnStatus = false;
    otherPlayer.turnStatus = true;
  }

Player.prototype.accumulateTotalScore = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
}

// End Business Logic

// UI Logic:

$(document).ready(function() {
  let player1 = new Player(0, 0, true);
  let player2 = new Player(0, 0, false);
  $("button#player1-roll").click(function(event) {
    event.preventDefault();
    if (player1.turnStatus) {
      let roll = randomNumber(1, 7);
      player1.accumulateTurnScore(roll);
      if (roll === 1) {
        $("p#player2-error").hide();
        player2.turnStatus = true;
      }
      $("p#player1-roll-result").text(roll + " " + player1.turnScore);
    } else {
        player2.turnStatus = true;
        $("p#player1-error").show();
    }
  });
  $("button#player1-hold").click(function(event) {
    event.preventDefault();
    player1.accumulateTotalScore();
    $("p#player1-total-score").text(player1.totalScore);
    $("p#player1-roll-result").text(player1.turnScore);
    switchTurn(player1, player2);
    $("p#player2-error").hide();
    if (player1.totalScore >= 100) {
      alert("Player 1 is the winner!");
    }
  });
  $("button#player2-roll").click(function(event) {
    event.preventDefault();
    if (player2.turnStatus) {
      let roll = randomNumber(1, 7);
      player2.accumulateTurnScore(roll);
      if (roll === 1) {
        $("p#player1-error").hide();
        player1.turnStatus = true;
      }
      $("p#player2-roll-result").text(roll + " " + player2.turnScore);
    } else {
      player1.turnStatus = true;
      $("p#player2-error").show();
    }
  });
  $("button#player2-hold").click(function(event) {
    event.preventDefault();
    player2.accumulateTotalScore();
    $("p#player2-total-score").text(player2.totalScore);
    $("p#player2-roll-result").text(player2.turnScore);
    switchTurn(player2, player1);
    $("p#player1-error").hide();
    if (player2.totalScore >= 100) {
      alert("Player 2 is the winner!");
    }
  });
});

// End UI Logic