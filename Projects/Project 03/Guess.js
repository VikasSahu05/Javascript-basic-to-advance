const userInput = document.getElementById('guessNumber');
const submit = document.getElementById('submit');
const guesses = document.getElementById('guessesLot');
const attempt = document.getElementById('guessAttempt');
const lowOrHigh = document.getElementById('loOrHi');
const startOver = document.getElementById('resultParas');

let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

let playGame = true;

let guessList = [];

let numberAttempt = 0;

let p = document.createElement("p");

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        console.log(guess);
        validateNumber(guess);
})
}

function validateNumber(guess){
    if(isNaN(guess)){
        alert("Enter valid Number");
    }else if(guess < 1 ){
        alert("Number should be more than 1");
    }else if(guess > 100){
        alert("Number should be less than 100");
    }else{
        guessList.push(guess);
        if(numberAttempt === 3){
            displayGuesses(guess);
            displayMessage(`Game Over ,Random Number was ${randomNumber}`);
            endGame();
        }else{
            displayGuesses(guess);
            checkGuesse(guess);
        }
    }
}

function checkGuesse(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right !`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayGuesses(guess){
        userInput.value = '';
        guesses.innerHTML +=`${guess}, `
        numberAttempt++;
        guessAttempt.innerHTML = `${10- numberAttempt}`;
}
function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    startGame();
}

function startGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        // e.preventDefault();
        randomNumber = parseInt(Math.random() * 100 + 1);
        console.log(randomNumber);
        guessList = [];
        numberAttempt = 0;

        guessAttempt.innerHTML = '';
        guessesLot.innerHTML = '';
        lowOrHigh.innerHTML = ''
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}