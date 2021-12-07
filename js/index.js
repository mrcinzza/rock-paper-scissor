var opts = ['rock', 'paper', 'scissors'];




function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Its a Tie');
    } else if (playerSelection === opts[0] && computerSelection === opts[2]) {
        console.log('You win! Rock beats scissors');
    } else if (playerSelection === opts[0] && computerSelection === opts[1]) {
        console.log('You Loose! Paper beats Rock')
    } else if (playerSelection === opts[1] && computerSelection === opts[2]) {
        console.log('You Loose! Scissors beat paper')
    } else if (playerSelection === opts[1] && computerSelection === opts[0]) {
        console.log('You win! Paper beats Rock');
    } else if (playerSelection === opts[2] && computerSelection === opts[0]) {
        console.log('You Loose! Rock beats scissors')
    } else if (playerSelection === opts[2] && computerSelection === opts[1]) {
        console.log('You win! Scissors beats Paper')
    }
};


let computerPlay = () => opts[Math.floor(Math.random() * opts.length)];
const computerSelection = computerPlay();
const playerSelection = "rock";




console.log(playRound(playerSelection, computerSelection));