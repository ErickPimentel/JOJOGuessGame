var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector('.guesses');
var finalResult = document.querySelector('.finalResult');
var lowOrHigh = document.querySelector('.lowOrHigh');
var sendGuess = document.querySelector('.sendGuess');
var guessField = document.querySelector('.guessField');
var resetDiv = document.querySelector('.resetDiv');
var imageDiv = document.querySelector('.imageDiv');
var countGuesses = 1;
var resetButton;
guessField.focus();


function checkGuess() {
  var userGuess = Number(guessField.value);
  if(countGuesses === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';
  if(userGuess === randomNumber) {
    finalResult.textContent = 'Congratulations! You win!';
    finalResult.style.backgroundColor = 'green';
    guessField.style.border = '10px solid green';
    lowOrHigh.textContent = '';

    beCarefulImage.parentNode.removeChild(beCarefulImage);
    winImage = document.createElement('img')
    winImage.src="youWin.gif"
    imageDiv.appendChild(winImage)

    endGameConfig();
  } else if(countGuesses === 10) {
    finalResult.textContent = '!!!END OF THE GAME!!!';
    finalResult.style.backgroundColor = 'red';
    guessField.style.border = '10px solid red';
    lowOrHigh.textContent = '';
    
    beCarefulImage.parentNode.removeChild(beCarefulImage);
    resetImage = document.createElement('img')
    resetImage.src="youLose.gif"
    imageDiv.appendChild(resetImage)

    endGameConfig();
  } else {
    finalResult.textContent = 'Wrong!';
    finalResult.style.backgroundColor = '#d4d101';
    guessField.style.border = '10px solid #d4d101';
    if(userGuess < randomNumber) {
      lowOrHigh.textContent = 'Your guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHigh.textContent = 'Your guess was too high!';
    }

    if (countGuesses === 1){
      beCarefulImage = document.createElement('img')
      beCarefulImage.src="beCareful.gif"
      imageDiv.appendChild(beCarefulImage)
    }

    if (countGuesses === 3){
      beCarefulImage.parentNode.removeChild(beCarefulImage);
      beCarefulImage = document.createElement('img')
      beCarefulImage.src="ohMyGod.gif"
      imageDiv.appendChild(beCarefulImage)
    }

    if (countGuesses === 5){
      beCarefulImage.parentNode.removeChild(beCarefulImage);
      beCarefulImage = document.createElement('img')
      beCarefulImage.src="ohNo.gif"
      imageDiv.appendChild(beCarefulImage)
    }

    if (countGuesses === 7){
      beCarefulImage.parentNode.removeChild(beCarefulImage);
      beCarefulImage = document.createElement('img')
      beCarefulImage.src="ohMyGod1.gif"
      imageDiv.appendChild(beCarefulImage)
    }

    if (countGuesses === 9){
      beCarefulImage.parentNode.removeChild(beCarefulImage);
      beCarefulImage = document.createElement('img')
      beCarefulImage.src="polnareff.gif"
      imageDiv.appendChild(beCarefulImage)
    }

  }
  countGuesses++;
  guessField.value = '';
  guessField.focus();
}

sendGuess.addEventListener('click', checkGuess);

function endGameConfig() {
  guessField.disabled = true;
  sendGuess.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start a new game';
  resetDiv.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}
function resetGame() {
  countGuesses = 1;
  var reset = document.querySelectorAll('.result p');
  for(var i = 0 ; i < reset.length ; i++) {
    reset[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);
  resetImage.parentNode.removeChild(resetImage);
  guessField.disabled = false;
  sendGuess.disabled = false;
  imageDiv.disabled = false
  guessField.style.border = '10px solid black';
  guessField.value = '';
  guessField.focus();
  finalResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}