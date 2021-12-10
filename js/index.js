var opts = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        let str = 'Its a Tie';
        computerScore++;
        playerScore++;
        output(str, playerScore);
    } else if (playerSelection.toLowerCase() === opts[0] && computerSelection === opts[2]) {
        let str = 'You win! Rock beats scissors';
        playerScore++;
        output(str, playerScore);
    } else if (playerSelection.toLowerCase() === opts[0] && computerSelection === opts[1]) {
        let str = 'You Loose! Paper beats Rock';
        computerScore++;
        output(str, playerScore);
    } else if (playerSelection.toLowerCase() === opts[1] && computerSelection === opts[2]) {
        let str = 'You Loose! Scissors beat paper';
        computerScore++;
        output(str, playerScore);
    } else if (playerSelection.toLowerCase() === opts[1] && computerSelection === opts[0]) {
        let str = 'You win! Paper beats Rock';
        playerScore++;
        output(str, playerScore);
    } else if (playerSelection.toLowerCase() === opts[2] && computerSelection === opts[0]) {
        let str = 'You Loose! Rock beats scissors';
        computerScore++;
        output(str, playerScore);
    } else if (playerSelection.toLowerCase() === opts[2] && computerSelection === opts[1]) {
        let str = 'You win! Scissors beats Paper';
        playerScore++;
        output(str, playerScore);
    }
};


let computerPlay = () => opts[Math.floor(Math.random() * opts.length)];


var round = 0;

let game = () => {
    const btnRock = document.querySelector('#btn-rock');
    btnRock.onclick = () => {
        let computerSelection = computerPlay();
        let slct = "Rock"
        playRound(slct, computerSelection);
    }

    const btnPaper = document.querySelector('#btn-paper');
    btnPaper.onclick = () => alert("you choose paper");

    const btnScissor = document.querySelector('#btn-scissor');
    btnScissor.onclick = () => alert("you choose scissor");
}




let output = (str, scre) => {
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = str + ', Score: ' + scre;
}

game();