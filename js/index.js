var opts = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
let round = 0;
let wnnrPnts = 5;

function playRound(playerSelection, computerSelection) {
    if (computerScore < wnnrPnts && playerScore < wnnrPnts) {
        if (playerSelection.toLowerCase() === computerSelection) {
            let str = 'Its a Tie';
            computerScore++;
            playerScore++;
            round++;
            output(str, playerScore, computerScore, round);
        } else if (playerSelection.toLowerCase() === opts[0] && computerSelection === opts[2]) {
            let str = 'You win! Rock beats scissors';
            playerScore++;
            round++;
            output(str, playerScore, computerScore, round);
        } else if (playerSelection.toLowerCase() === opts[0] && computerSelection === opts[1]) {
            let str = 'You Loose! Paper beats Rock';
            computerScore++;
            round++;
            output(str, playerScore, computerScore, round);
        } else if (playerSelection.toLowerCase() === opts[1] && computerSelection === opts[2]) {
            let str = 'You Loose! Scissors beat paper';
            computerScore++;
            round++;
            output(str, playerScore, computerScore, round);
        } else if (playerSelection.toLowerCase() === opts[1] && computerSelection === opts[0]) {
            let str = 'You win! Paper beats Rock';
            playerScore++;
            round++;
            output(str, playerScore, computerScore, round);
        } else if (playerSelection.toLowerCase() === opts[2] && computerSelection === opts[0]) {
            let str = 'You Loose! Rock beats scissors';
            computerScore++;
            round++;
            output(str, playerScore, computerScore, round);
        } else if (playerSelection.toLowerCase() === opts[2] && computerSelection === opts[1]) {
            let str = 'You win! Scissors beats Paper';
            playerScore++;
            round++;
            output(str, playerScore, computerScore, round);
        }
    } else {
        if (computerScore === wnnrPnts ){
            let str = '***** You Loose! The Computer is the winner of this session *****';
            output(str, playerScore, computerScore, round);
        } else if (playerScore === wnnrPnts) {
            let str = '***** Congratulations! You are the winner of this session *****';
            output(str, playerScore, computerScore, round);
        } else if (playerScore && computerScore === wnnrPnts) {
            let str = '***** Its a Tie! You have to ramatch *****';
            output(str, playerScore, computerScore, round);
        }
    }
};


let computerPlay = () => opts[Math.floor(Math.random() * opts.length)];


let game = () => {

    document.querySelector('#btn-rock').addEventListener('click', function() {
        let computerSelection = computerPlay();
        // let slct = "Rock"
        playRound(this.alt, computerSelection);
    });

    document.querySelector('#btn-paper').addEventListener('click', function() {
        let computerSelection = computerPlay();
        playRound(this.alt, computerSelection);
    });

    document.querySelector('#btn-scissors').addEventListener('click', function() {
        let computerSelection = computerPlay();
        playRound(this.alt, computerSelection);
    });

}

let output = (str, pScre, cScre, rnd) => {

    // document.body.appendChild(para);

    document.getElementById('round').innerHTML = rnd;
    document.getElementById('p-score').innerHTML = pScre;
    document.getElementById('c-score').innerHTML = cScre;
    document.getElementById('info').innerHTML = str;
}

game();