var opts = ['rock', 'paper', 'scissors'];




function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Its a Tie');
    } else if (playerSelection === opts[0] && computerSelection === opts[2]) {
        console.log('You win!');
    } else if (playerSelection === opts[0] && computerSelection === opts[1]) {
        console.log('You Loose!')
    }
}


let computerPlay = () => opts[Math.floor(Math.random() * opts.length)];
const computerSelection = computerPlay();
const playerSelection = "rock";




console.log(playRound(playerSelection, computerSelection));