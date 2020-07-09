const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

function computerChoice() {
    let choice = Math.random();
    if (choice <= 0.34) {
        return 'paper';
    } else if (choice > 0.34 && choice <= 0.67) {
        return 'rock';
    } else {
        return 'scissors';
    }
}

function compareChoices(user) {

    let computer = computerChoice();
    console.log('Your choice is: ' + user.toUpperCase());
    console.log('Computer\'s choice is: ' + computer.toUpperCase());
            
    if (user === 'paper' && computer === 'scissors') {
        console.log('You lose.');
        
    } else if (user === 'scissors' && computer === 'paper') {
        console.log('You win');
        
    } else if (user === 'rock' && computer === 'paper') {
        console.log('You lose.');
        
    } else if (user === 'paper' && computer === 'rock') {
        console.log('You win.');
        
    } else if (user === 'scissors' && computer ==='rock') {
        console.log('You lose.');
        
    } else if (user === 'rock' && computer === 'scissors') {
        console.log('You win.');
    } else {
        console.log('Is\'s a draft!');
    }
}

