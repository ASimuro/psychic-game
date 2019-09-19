var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");
var guessed = document.getElementById("guessed");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winsCount = 0;
var lossesCount = 0;
var defaultGuessesRemaining = 9;
var guessesRemainingCount = defaultGuessesRemaining;
var guesses = [];

var pickRandomLetter = function()
{
    randomLetter = letters[Math.floor(Math.random() * letters.length)]
    console.log(randomLetter);
    return randomLetter;
}

var scores = function()
{
    wins.innerHTML = "Wins: " + winsCount
    losses.innerHTML = "Losses: " + lossesCount
    guessesLeft.innerHTML = "Guesses Left: " + guessesRemainingCount
    guessed.innerHTML = "Your Guesses So Far: " + guesses
}

var reset = function()
{
    guesses = [];
    guessesRemainingCount = defaultGuessesRemaining;
    currentLetter = pickRandomLetter();
}

var userWon = function (userLetter) {
    return userLetter === currentLetter 
}
var userLost = function () {
    return guessesRemainingCount === 0;
}

var currentLetter = pickRandomLetter();
scores();

document.onkeyup = function (event) {
    var userLetter = event.key;
    guessesRemainingCount--
    guesses.push(userLetter)

    if(userWon(userLetter)){
        winsCount++;
        reset();
    }
    if(userLost()){
        lossesCount++;
        reset();
    }
    scores();
}