let rendomNumber, maxRange, attempts, maxAttempts;
let message = document.getElementById('message');
let startGameButton = document.getElementById('startGameButton');
// sound
let winSound = document.getElementById('winSound');

let tryAgainSound = document.getElementById('tryAgainSound');

let GameOverSound = document.getElementById('GameOverSound');

let showMessage= (text, success)=>{
  message.textContent = text;
};

let setRange = ()=>{
  const rangeInput = document.getElementById('range').value;
  if(rangeInput === "" || isNaN(rangeInput) || rangeInput <= 1){
  showMessage("Please enter a valid range greater than 1", false);
    return;
  }
  
  maxRange = parseInt(rangeInput);
  rendomNumber = Math.floor(Math.random()*maxRange)+1;
  maxAttempts = Math.ceil(Math.log2(maxRange))+ 3;
  attempts = 0;
  showMessage(`Guess a number between 1 and ${maxRange} You have ${maxAttempts} attempts left`,true);
  startGameButton.style.display = 'none';
};

let makeGuess = ()=>{
  if(!maxRange){
    showMessage("Please start the game first", false);
    return;
  }

  const guess = parseInt(document.getElementById('guessInput').value);

  if(isNaN(guess) || guess < 1 || guess > maxRange){
    showMessage(`Enter number between 1 and ${maxRange}`, false);
    return;
  }

  attempts++;

  if(guess === rendomNumber){
    winSound.play();
    showMessage(
      `🎉 You guessed it! Number was ${rendomNumber}. Attempts used: ${attempts}`,
      true
    );
    startGameButton.style.display = 'block';
    maxRange = null;
    return;
  }

  if(attempts >= maxAttempts){
    GameOverSound.play();
    showMessage(
      `Game Over! You've used all ${maxAttempts} attempts. Number was ${rendomNumber}`,
      false
    );
    startGameButton.style.display = 'block';
    maxRange = null;
    return;
  }

  if(guess < rendomNumber){
    tryAgainSound.play();
    showMessage(`🔼 Too low! Attempts left: ${maxAttempts - attempts}`, false);
  } else {
    tryAgainSound.play();
    showMessage(`🔽 Too high! Attempts left: ${maxAttempts - attempts}`, false);
  }
};

let startGame= ()=>{
  maxRange = null;
  setRange();
document.getElementById('guessInput').value = "";
};

document.getElementById('guessInput').addEventListener("keydown", (e)=>{
  if(e.key === 'Enter'){
    makeGuess();
  document.getElementById('guessInput').value = "";
  }
});

startGameButton.addEventListener('click',startGame);