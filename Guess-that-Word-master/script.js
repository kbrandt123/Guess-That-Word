"use strict";
const incorrectLetters = document.querySelector(".letters");
let hiddenWord = document.querySelector(".word");
const btnCheck = document.querySelector(".btn-check");
let word = "bread";
let incorrectGuesses = [];
let newWord = "";

for (let i = 0; i < word.length; i++) {
  newWord += "_ ";
}

newWord = newWord.trim();

hiddenWord.textContent = newWord;
console.log(newWord);

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

btnCheck.addEventListener("click", function () {
  let letters = /^[A-Za-z]+$/;
  // Checking for valid input
  const guess = document.querySelector(".guess").value;
  if (!guess.match(letters) || guess.length > 1) {
    return displayMessage("Forbidden Value");
  }
  let found = false;
  let newWordIndex;
  // Search for the index in word
  for (let i = 0; i < word.length; i++) {
    if (guess === word[i]) {
      found = true;
      newWordIndex = i * 2;
      newWord =
        newWord.substring(0, newWordIndex) +
        guess +
        newWord.substring(newWordIndex + 1);
      console.log(newWord);
      hiddenWord.textContent = newWord;
    }
  }

  if (found === true) {
    displayMessage("Good Guess");
  } else {
    incorrectGuesses.push(guess);
    console.log(incorrectGuesses);
    incorrectLetters.textContent = incorrectGuesses.join(" ");

    displayMessage("try again");
  }
});
