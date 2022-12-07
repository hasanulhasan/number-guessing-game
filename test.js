let count = document.getElementById('number-show');
let displayWin = document.getElementById('displayWin');
let displayCount = document.getElementById('displayCount');
let inputField = document.getElementById('inputField');
let reset = document.getElementById('reset');
let displayLose = document.getElementById('displayLose');

function disable() {
  document.getElementById('inputField').disabled = true;
}
let counter = 3;
let randNumber = parseInt(Math.random() * 10);
let tryCount = 0;
console.log(randNumber);

const showNumber = () => {
  counter--;
  tryCount++;

  displayCount.innerText = `${counter}`
  let inputValue = parseInt(inputField.value);

  if (inputValue > 9 || inputValue < 0) {
    count.innerText = 'Please guess between 1-9 and Input Correctly'
  }
  else if (inputValue === randNumber) {
    displayWin.style.display = 'block'
    displayWin.innerText = `Congratulations!! You win after ${tryCount} times!`;
    reset.innerText = 'Reset Game';
    disable();
    counter = 0;
  }
  else if (counter === 0) {
    displayLose.style.display = 'block'
    displayLose.innerText = `Opps! You have losen! Try again.`;
    disable();
    counter = 3;
  }
  else if (inputValue > randNumber) {
    count.innerText = 'You Guessed too high'
  }
  else {
    count.innerText = 'You Guessed too low';
  }
}