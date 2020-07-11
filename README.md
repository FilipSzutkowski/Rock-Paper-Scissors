# Rock-Paper-Scissors
Simple rock, paper, scissors application made with HTML, CSS and Javascript!
The idea is to make the user face the computer in the classic game of rock, paper and scissors. There's 5 matches to play, and the winner is displayed at the end of each match!

## How does it work? 
There is 5 matches to play. After each click on one of the emojis the game function - `compareChoices()` - is ran. It takes user's choice as a parameter, which is passed to it when the eventListener is activated after each click on one of the emojis. Then a pseudo-random choice of the computer is generated with help of the `Math.random()` function inside the `computerChoice()` function.   

There are three variables declared from the start (outside the `computerChoice()`); `win`, `loss` and `draft`. Their value is 0 at the start. The purpose of these is to keep track of the score. These get incremented depending on the result of the round inside the conditional in the `compareChoices()`. This conditional compares the user's choice against the computer's choice, increments the respectable value and runs the `displayScore()` function.

The `displayScore()` displays the value of the `win`, `loss` and `draft` variables in `Your score`, `Drafts`, `Computer's score` on the website. 

Inside the `compareChoices()` there's one more conitional which empties the `YOU WIN`, `YOU LOSE` or `IT'S A DRAFT` paragraph at the bottom of the page each time the new match of 5 rounds is started. These results get displayed by the `displayResult()` function. 

At the end of the `compareChoices()` the `countRounds()` function is called. This function checks if the sum of `win`, `loss` and `draft` is 5. If it is, then it checks if the user has won, the computer has won, or if it was a draft. Then it runs the `displayResult()` with the string of e.g. `'YOU WIN'` as the argument to display the result of the 5 rounds played. It then resets the count of wins, losses and drafts to 0, and runs the `displayScore()` to reset the score on the website.