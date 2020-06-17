// Business Logic:

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// End Business Logic

// UI Logic:

$(document).ready(function() {
  $("button#number-button").click(function(event) {
    event.preventDefault();
    let number = randomNumber(1, 7);

    $("p#number").text(number);
  });
});

// End UI Logic