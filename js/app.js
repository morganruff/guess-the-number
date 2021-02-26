/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
// create variables, do not have to explicitly define right now 
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
        guessesEl.innerText = 'Previous Guesses:'
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
  messageEl.className = '';}

function checkGuess (guess) {
    //address three conditions too high too low or correct 
    if (guess === secretNum){
        //win scenario
        console.log("you guessed right");
    }
    else if (guess <= secretNum){
        //too low
        console.log("too low");
    }
    else {
        //guess too high 
        console.log("too high");
    }
    //clear input guess field
    guessInput.value = '';
    //idiot proof application, if enter something out of range tell user no
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        messageEl.innerText = `Whoops! Your guess of ${guess} is not in range! Please try a number between 1 and 100.`;
        // template literal
        // `Whoops! Your guess of ${guess} is not in range! Please try a number between 1 and 100.`;
    }
    //
    else if (guess === secretNum) {
        // need to change class name to winner 
        messageEl.className = 'winner';
        isWinner = true; 
        //push guess to guess list
        guessList.push(guess);
        //two sub condiitions: first try and not on first try 
        if (guessList.length === 0) {
            messageEl.innerText = `WOW! You found the number in ${guessList.length + 1} guess!`
        }
        else {
            `You found the number in ${guessList.length + 1} guess!`
        }
    }
    else if (guess <= secretNum) {
        messageEl.clasName = 'low';
        messageEl.innerText = `${guess} is too low, please try again`
        guessList.push(guest);
    }
    else {
        messageEl.clasName = 'high';
        messageEl.innerText = `${guess} is too high, please try again`
        guessList.push(guest); 
    }
        
}