/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let secretNum, guessList, isWinner;

/*------------------------ Cached Element References ------------------------*/
const messageEl = document.getElementById('message');
const guessesEl = document.getElementById('prevGuesses');
const guessBtn = document.getElementById('guessButton');
const resetBtn = document.getElementById('resetButton');
const guessInput = document.getElementById('guessInput');

/*----------------------------- Event Listeners -----------------------------*/

resetBtn.addEventListener('click', function() {
  init();
});

guessBtn.addEventListener('click', function(){
    if (guessList.length === 0){
        guessesEl.innerText = 'Previouus Guesses:'
    }
    if (isWinnner === false) {
        checkGuess(parseInt(guessInput.value));
    }
})

/*-------------------------------- Functions --------------------------------*/

init();

function init() {
  guessesEl.innerText = '';
  messageEl.innerText = 'Please enter a number between 1 and 100'
  guessInput.value = '';
  guessList = [];
  isWinner = false;
  secretNum = Math.floor(Math.random()*100) + 1;
}