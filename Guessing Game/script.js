const input = document.getElementById("input");
const btn = document.getElementById("btn");
const wrng = document.querySelector(".wrng");
const guess = document.querySelector("#guesses");

const answer = Math.floor(Math.random() * 100) + 1;

let numGuesses = 0;

btn.addEventListener("click", () => {
  guessesNum();
});

function guessesNum() {
  if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
    wrng.innerHTML = "Enter number between 1 to 100";
  } else {
    numGuesses++;
    guess.innerHTML = "No. of guess: " + numGuesses;

    if (input.value > answer) {
      wrng.innerHTML = "You guess too high babe";
      input.value = "";
    } else if (input.value < answer) {
      wrng.innerHTML = "You guess too low babe";
      input.value = "";
    } else {
      wrng.innerHTML = "Congratulatin Babe ! You guessed correct";
      // btn.disabled = true;
      setTimeout(() => {
        resetGame();
      }, 5000);
    }
  }
}

function resetGame() {
  numGuesses = 0;
  answer = Math.floor(Math.random() * 100) + 1;
  input.value = "";
  guess.innerHTML = "No. of guess:0";
}
