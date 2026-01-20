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


let makeGuess= ()=>{
  if(!maxRange){
  showMessage("Please start the game first", false);
  return;
}
  const guess = parseInt(document.getElementById('guessInput').value);
  
  if(isNaN(guess) || guess < 1 || guess > maxRange){
  showMessage(`Enter number between 1 and ${maxRange}`, false);
    return;
  }
  attempts++
  
  if(attempts > maxAttempts){
    GameOverSound.play();
    showMessage(`Game Over ! You Lose , You 've used all ${maxAttempts} The number was ${rendomNumber}`,false);
    startGameButton.style.display = 'block';
    return;
  }
  if(guess === rendomNumber){
    winSound.play();
    showMessage(
    `🎉 You guessed it! Number was ${rendomNumber}. Attempts used: ${attempts}`,
    true
  );
  startGameButton.style.display = 'block';
maxRange = null;
  return;
  }else if(guess < rendomNumber){
    tryAgainSound.play();
    showMessage(`🔼 Too low! Attempts left: ${maxAttempts - attempts}`, false);
  }else{
    tryAgainSound.play();
    showMessage(`🔽 Too high! Attempts left: ${maxAttempts - attempts}`, false);
  }
  if(attempts >= maxAttempts && guess !== rendomNumber){
    GameOverSound.play();
    showMessage(
    `Game Over! You've used all ${maxAttempts} attempts. Number was ${rendomNumber}`,
    false
  );
  startGameButton.style.display = 'block';
  return;
  }
};