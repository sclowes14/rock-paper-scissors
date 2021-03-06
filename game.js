// Rock Paper Scissors Game

// Function to randomly select the computers choice
function computerPlay() {
    // Define game options
    var options = ['ROCK', 'PAPER', 'SCISSORS'];
    // Select random option from the array
    var selection = options[Math.floor(Math.random() * options.length)];
    return selection;
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    // Make user selection case insenstive
    var user = playerSelection.toUpperCase();
    // Compare the player and computer
    if (user === computerSelection) {
        return 'You tied! Play again.';
    } else if (user === 'ROCK' && computerSelection === 'SCISSORS') {
        return 'You win! Rock beats scissors';
    } else if (user === 'PAPER' && computerSelection === 'ROCK') {
        return 'You win! Paper covers rock.';
    } else if (user === 'SCISSORS' && computerSelection === 'PAPER') {
        return 'You win! Scissors cut paper.';
    } else {
        return 'You lose. Try again.';
    }
}

// Function to play 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, paper, scissors, shoot!');
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();