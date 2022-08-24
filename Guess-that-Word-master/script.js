"use strict";
const hiddenWord = document.querySelector(".word");
const lettersContainer = document.querySelector(".letters");
const btnCheck = document.querySelector(".btn-check");
const scoreEl = document.querySelector(".score");
const btnReset = document.querySelector(".btn-reset");
const heartEl = document.querySelector(".heart");

const randomWords = [
  "quiet",
  "ocean",
  "laugh",
  "trial",
  "stall",
  "kites",
  "wires",
  "slice",
  "shout",
  "screw",
  "flaws",
  "coeds",
  "spoon",
  "spice",
  "marry",
  "hinge",
  "tenth",
  "exact",
  "waste",
  "peace",
  "reach",
  "theft",
  "break",
  "youth",
  "style",
  "wreck",
  "mania",
  "story",
  "phone",
  "tabby",
  "fight",
  "light",
  "cater",
  "pupil",
  "chaos",
  "lefty",
  "grasp",
  "plant",
  "flour",
  "quack",
  "grump",
  "crypt",
];
// Storing all changing variables here
let score = 7;
let word = randomWords[Math.floor(Math.random() * randomWords.length)];
let splitWord = word.split("");
let joinWord = splitWord.join(" ");
let heartSize = 49;
let incorrectGuesses = [];
let newWord = "";
for (let i = 0; i < word.length; i++) {
  newWord += "_ ";
}
newWord = newWord.trim();
hiddenWord.textContent = newWord;

// Creating a function to display a certain message
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

btnCheck.addEventListener("click", function () {
  let letters = /^[A-Za-z]+$/;

  // Checking for valid input
  const guess = document.querySelector(".guess").value;
  if (!guess.match(letters) || guess.length > 1)
    return displayMessage("Forbidden Value 😡");

  // Initialzing let variables
  let found = false;
  let newWordIndex;

  // Search for the index in word
  for (let i = 0; i < word.length; i++) {
    // If guess is correct, we build a new string
    if (guess === word[i]) {
      found = true;
      newWordIndex = i * 2;
      newWord =
        newWord.substring(0, newWordIndex) +
        guess +
        newWord.substring(newWordIndex + 1);
      hiddenWord.textContent = newWord;
    }
  }

  // Checking if user has successfully guessed the word
  if (found === true && newWord === joinWord) {
    document.querySelector("body").style.backgroundImage =
      "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(29,255,0,1) 0%)";
    displayMessage("Congratulations 🎉");

    // Checking for a correct guess
  } else if (found === true) {
    displayMessage("Lucky Guess 🍀");

    // If guess is incorrect and score is greater than 1
  } else if (found === false && score > 1) {
    score--;
    heartSize -= 7;
    heartEl.style.fontSize = `${heartSize}px`;
    scoreEl.textContent = score;
    incorrectGuesses.push(guess);
    lettersContainer.textContent = incorrectGuesses.join(" ");
    displayMessage("Try Again ❌");

    // User loses the game
  } else {
    heartSize = 49;
    displayMessage("Game Over 💥");
    scoreEl.textContent = 0;
    btnCheck.disabled = true;
    heartEl.textContent = "💀";
    heartEl.style.fontSize = `${heartSize}px`;
    hiddenWord.textContent = word;
  }

  document.querySelector(".guess").value = "";
});

// Initialzing all variables back to their starting state.
btnReset.addEventListener("click", function () {
  word = randomWords[Math.floor(Math.random() * randomWords.length)];
  console.log(word);
  splitWord = word.split("");
  joinWord = splitWord.join(" ");
  console.log(word);
  newWord = "";
  for (let i = 0; i < word.length; i++) {
    newWord += "_ ";
  }
  newWord = newWord.trim();
  score = 7;
  heartSize = 49;
  hiddenWord.textContent = newWord;
  displayMessage("Start Guessing...");
  heartEl.style.fontSize = `${heartSize}px`;
  heartEl.textContent = "💗";
  scoreEl.textContent = score;
  incorrectGuesses = [];
  lettersContainer.textContent = [];
  document.querySelector(".guess").value = "";
  btnCheck.disabled = false;
  document.querySelector("body").style.backgroundImage =
    "radial-gradient(circle farthest-side, #fceabb, #f8b500";
});
