let count = document.getElementById('number-show');
let displayWin = document.getElementById('displayWin');
let displayCount = document.getElementById('displayCount');
let inputField = document.getElementById('inputField');
let reset = document.getElementById('reset');

let counter = 0;
let randNumber = parseInt(Math.random() * 10);
console.log(randNumber);

const showNumber = () => {
  counter++;
  displayCount.innerText = `${counter}`
  let inputValue = parseInt(inputField.value);
  if (inputValue === randNumber) {
    displayWin.innerText = `Congratulations!! You win after ${counter} times!`;
    reset.innerText = 'Reset Game';
    inputValue.disabled = true;
    counter = 0;
  }
  else if (inputValue > randNumber) {
    count.innerText = 'You Guessed too high'
  }
  else {
    count.innerText = 'You Guessed too low';
  }
}