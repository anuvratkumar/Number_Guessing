let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let bestScore = Infinity;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById("output").textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;

  if (guess === targetNumber) {
    document.getElementById("output").textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
    if (attempts < bestScore) {
      bestScore = attempts;
      document.getElementById("bestScoreValue").textContent = bestScore;
    }
  } else if (guess < targetNumber) {
    document.getElementById("output").textContent = "Try a higher number.";
  } else {
    document.getElementById("output").textContent = "Try a lower number.";
  }
}

function startNewGame() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("output").textContent = "";
  document.getElementById("guessInput").value = "";
}




