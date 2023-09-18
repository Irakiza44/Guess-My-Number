'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMassage = function (message){
    document.querySelector('.message').textContent = 'message';
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess ,typeof guess);
// when there is no input
    if(!guess){
        displayMassage( '⛔ No Number')
    }

 // when a player win
    else if(guess === secretNumber){
        displayMassage('🎉Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore ){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

 // when the guess is wrong
    else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too Higher' : 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMassage ('You lost the Game');
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMassage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.guess').value = ' ';

    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
})