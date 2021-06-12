let btn = document.getElementById('btn1');
let answerValue = document.querySelector('#value');
let count = 0;

function add() {
  console.log('clicked');
  btn.addEventListener('click', function () {
    count++;
  });

  answerValue.textContent = count;
  console.log(count);
}

function sub() {
  alert('In progress');
}
