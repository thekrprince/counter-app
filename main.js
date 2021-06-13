const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const answerValue = document.querySelector('#value');
let counter = 0;

// Add counter listener
btn1.addEventListener('click', function () {
  counter = counter + 1;
  answerValue.innerHTML = counter;
  fontColorText();
});

// Low counter listener
btn2.addEventListener('click', function () {
  counter = counter - 1;
  answerValue.innerHTML = counter;
  fontColorText();
});

// Reset count
btn3.addEventListener('click', function () {
  counter = 0;
  answerValue.innerHTML = counter;
});

// Changing answer font conditionally
function fontColorText() {
  if (counter > 0) {
    answerValue.style.color = '#c7f464';
  } else if (counter < 0) {
    answerValue.style.color = '#f23e02';
  } else {
    answerValue.style.color = '#000';
  }
}
