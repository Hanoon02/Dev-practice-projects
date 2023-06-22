const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
console.log("Hello World!");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function evaluate(){
    const computerChoice = getComputerChoice();
    const playerChoice = document.querySelector('input[name="choice"]:checked').value;
    const result = document.getElementById('result');
    if(playerChoice === computerChoice){
        result.textContent = 'Draw!';
    } else if(playerChoice === 'rock' && computerChoice === 'scissors'){
        result.textContent = 'You win!';
    } else if(playerChoice === 'paper' && computerChoice === 'rock'){
        result.textContent = 'You win!';
    } else if(playerChoice === 'scissors' && computerChoice === 'paper'){
        result.textContent = 'You win!';
    } else {
        result.textContent = 'You lose!';
    }
}