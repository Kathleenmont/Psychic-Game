// declare variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesThisRound = [];
var userGuess = '';
var secretLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var secretLetterRandom = '';
var isGuessed = false;



// creating variables that connect to place in html

var winsText = document.getElementById('wins');
var lossesText = document.getElementById('losses');
var guessesLeftText = document.getElementById('guesses-left');
var guessesThisRoundText = document.getElementById('guesses-this-round');

//generate randomm number function
function genRandomLetter() {
    // makes random number
    var randomLetter = Math.floor(Math.random() * secretLetter.length);


    // pairs with secretLetter array in secretLetterRandom variable to select random letter
    secretLetterRandom = secretLetter[randomLetter];
    alert(secretLetterRandom)
}
// calls this function to choose first letter
genRandomLetter();

// when user chooses letter to guess
document.onkeyup = function (event) {
    // stores what user guessed
    userGuess = event.key;

    // calls the function below(checkIfGuessed)
    checkIfGuessed();

    // function to check if letter was already guessed this round
    function checkIfGuessed() {
        for (var i = 0; i < guessesThisRound.length; i++) {
            if (userGuess === guessesThisRound[i]) {
                isGuessed = true;
                break
            } else {
                isGuessed = false;

            }
        }
    }
    // check to see if is letter and is not already guessed before going into rest of game
    if ((event.keyCode >= 65 && event.keyCode <= 90) && (isGuessed === false)) {

        // what happens if guesses letter correctly
        if (userGuess === secretLetterRandom) {
            wins++;
            genRandomLetter();
            guessesLeft = 9;
            guessesThisRound = [];

            // if guesses letter incorrectly 
        } else {
            guessesLeft--;
            guessesThisRound += userGuess + ", "
        }

    }
    // for reset if guesses left get to 0
    if (guessesLeft === 0) {
        genRandomLetter();
        losses++;
        guessesThisRound = [];
        guessesLeft = 9;
    }



    // display info on page section
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessesThisRoundText.textContent = "Your Guesses This Round: " + guessesThisRound;

}


