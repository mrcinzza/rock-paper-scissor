var opts = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
let round = 0;
let wnnrPnts = 5;

function playRound(playerSelection, computerSelection) {
    if (computerScore < wnnrPnts && playerScore < wnnrPnts) {
        if (playerSelection.toLowerCase() === computerSelection) {
            let str = 'Its a Tie';
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
        if (computerScore === wnnrPnts) {
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

function imgSelection(pSelection, cSelection) {
    switch (pSelection) {
        case "rock":
            document.getElementById("player-select").innerHTML="<img class=\'selection-img\' src=\'./assets/rock.png\'>"
            break;
        case "paper":
            document.getElementById("player-select").innerHTML="<img class=\'selection-img\' src=\'./assets/paper.png\'>"
            break;
        case "scissors":
            document.getElementById("player-select").innerHTML="<img class=\'selection-img\' src=\'./assets/scissors.png\'>"
            break;
    }

    switch (cSelection) {
        case "rock":
            document.getElementById("computer-select").innerHTML="<img class=\'selection-img\' src=\'./assets/rock.png\'>"
            break;
        case "paper":
            document.getElementById("computer-select").innerHTML="<img class=\'selection-img\' src=\'./assets/paper.png\'>"
            break;
        case "scissors":
            document.getElementById("computer-select").innerHTML="<img class=\'selection-img\' src=\'./assets/scissors.png\'>"
            break;
    }
}

let game = () => {

    document.querySelector('#btn-rock').addEventListener('click', function () {
        let computerSelection = computerPlay();
        let playerSelection = this.alt;
        imgSelection(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
    });

    document.querySelector('#btn-paper').addEventListener('click', function () {
        let computerSelection = computerPlay();
        let playerSelection = this.alt;
        imgSelection(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
    });

    document.querySelector('#btn-scissors').addEventListener('click', function () {
        let computerSelection = computerPlay();
        let playerSelection = this.alt;
        imgSelection(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
    });

}

let output = (str, pScre, cScre, rnd) => {
    document.getElementById('round').innerHTML = rnd;
    document.getElementById('p-score').innerHTML = pScre;
    document.getElementById('c-score').innerHTML = cScre;
    document.getElementById('info').innerHTML = str;

}


game();