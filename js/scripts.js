// Business Logic:

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// End Business Logic

// UI Logic:

$(document).ready(function() {
  let number = randomNumber(1, 6);
});

// End UI Logic