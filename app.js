// ---------------------------- VARIABLES ------------------------------------
const body = document.querySelector('body');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const userScore = document.querySelector('.userScore');
const computerWeapon = document.querySelector('.computerWeapon');
const draftScore = document.querySelector('.draftScore');
const computerScore = document.querySelector('.computerScore');
const resultParagraph = document.querySelector('.resultParagraph');
const lastScoreParagraph = document.querySelector('.lastScoreParagraph');

let win = 0;
let loss = 0;
let draft = 0;

// ---------------------------- EVENT LISTENERS --------------------------------
rock.addEventListener('click', function(){ compareChoices('rock') });
paper.addEventListener('click', function(){ compareChoices('paper') });
scissors.addEventListener('click', function(){ compareChoices('scissors') });

// ---------------------------- FUNCTIONS ------------------------------------
function compareChoices(user) {
    let computer = computerChoice();
    computerWeapon.textContent = computer.toLocaleUpperCase();

    console.log('Your choice is: ' + user.toUpperCase());
    console.log('Computer\'s choice is: ' + computer.toUpperCase());
            
    if (user === 'paper' && computer === 'scissors') {
        console.log('You lose.');
        loss++;
        displayScore();
        
    } else if (user === 'scissors' && computer === 'paper') {
        console.log('You win');
        win++;
        displayScore();
        
    } else if (user === 'rock' && computer === 'paper') {
        console.log('You lose.');
        loss++;
        displayScore();
        
    } else if (user === 'paper' && computer === 'rock') {
        console.log('You win.');
        win++;
        displayScore();
        
    } else if (user === 'scissors' && computer ==='rock') {
        console.log('You lose.');
        loss++;
        displayScore();
        
    } else if (user === 'rock' && computer === 'scissors') {
        console.log('You win.');
        win++;
        displayScore();

    } else {
        console.log('Is\'s a draft!');
        draft++;
        displayScore();
    }

    //Empty the results of the last match
    if (resultParagraph.textContent != '' && lastScoreParagraph.textContent != '' ) {
        resultParagraph.textContent = '';
        lastScoreParagraph.textContent = '';
    }
    countRounds();
}

//Decide whether the user has won, lost or if it has been a draft.
function countRounds() {
    if (win + loss + draft === 5) {
        if (win > loss) {
            console.log('W I N');
            displayResult('YOU WIN');
            win = 0; loss = 0; draft = 0;
            displayScore();

        } else if (win < loss) {
            console.log('L O S E'); 
            displayResult('YOU LOSE');
            win = 0; loss = 0; draft = 0;
            displayScore();

        } else {
            console.log('D R A F T');
            displayResult('IT\'S A DRAFT');
            win = 0; loss = 0; draft = 0;
            displayScore();
        }
    }
}

//The "Your Score", "Drafts:", "My Score" dynamically updating on ongoing match.
function displayScore() {
    userScore.textContent = win;
    computerScore.textContent = loss; 
    draftScore.textContent = draft;
}

//The match's result, and the result of the last game.
function displayResult(result) {
    resultParagraph.textContent = result;
    lastScoreParagraph.textContent = 'The score was: ' + 'you: ' + win + ', drafts: ' + draft + ', me: ' + loss;
}

//Generating a pseudo-random choice of the computer. 
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