
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

    // ui elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      GuessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign min and max to UI
minNum.textContent = min;
maxNum.textContent = max;
// listen for guess made
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
// validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`)

  }

});

// set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
