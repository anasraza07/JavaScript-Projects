const input = document.querySelector('input');
const form = document.querySelector('form');
const previousGuessesElem = document.querySelector('.previous-guesses');
const guessesRemaining = document.querySelector('.guesses-remaining');
const result = document.querySelector('.result');
const startNewGame = document.querySelector('.start-new-game');

let userGuess;
let userMoves = 0;
const previousGuesses = [];
displayResult('')

function generateRandomNumber() {
    return Math.floor((Math.random() * 100) + 1);
}

let randomNumber = generateRandomNumber();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    userGuess = Number(input.value);
    userMoves++;
    input.value = '';

    if (userMoves >= 10) {
        previousGuesses.push(userGuess);

        if (randomNumber === userGuess) {
            displayResult(`You won! Random number was ${randomNumber}`);

        } else {
            displayResult(`Game over! Random number was ${randomNumber}`);
            endGame();
        };

    } else {
        previousGuesses.push(userGuess);

        if (randomNumber === userGuess) {
            displayResult(`You won! Random number was ${randomNumber}`);
            endGame();

        } else if (randomNumber > userGuess) {
            displayResult('Number is TOO high!');

        } else if (randomNumber < userGuess) {
            displayResult('Number is TOO low!');
        };
    };
})

function displayResult(resultMsg) {
    guessesRemaining.innerText = `Guesses Remaining: ${10 - userMoves}`;
    previousGuessesElem.innerText = `Previous Guesses: ${previousGuesses
        .join(', ')}`;
    result.innerText = resultMsg;
};

function playAgain() {
    randomNumber = generateRandomNumber();
    startNewGame.style.cssText = 'display: block; margin: 0 auto;';

    startNewGame.addEventListener('click', startGame);
};

function startGame() {
    startNewGame.style.display = 'none';
    
    previousGuesses.length = 0;
    userMoves = 0;
    input.disabled = false;
    input.focus();
    form.getElementsByTagName('button')[0].disabled = false;

    displayResult('');
}

function endGame() {
    input.disabled = true;
    form.getElementsByTagName('button')[0].disabled = true;
    playAgain();
}