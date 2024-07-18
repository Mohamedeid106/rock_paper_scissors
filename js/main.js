function getComputerChoice() {
    return Math.floor(Math.random() * 3) == 0? "rock": Math.floor(Math.random() * 3) == 1? "paper": "scissors";
}

function getHumanChoice() {
    return prompt("Play your turn:", "rock");
}

function playGame() {
    let humanscore = 0;
    let computerscore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            if(computerChoice == "paper") {
                computerscore += 1;
                console.log("You lose! Paper beats Rock");
            } else if (computerChoice == "scissors") {
                humanscore += 1;
                console.log("You won! Rock beats scissors");
            } else if (computerChoice == humanChoice) {
                console.log("This is a tie")
            }

        } else if (humanChoice == "paper") {
            if(computerChoice == "rock") {
                humanscore += 1;
                console.log("You won! Paper beats Rock");
            } else if (computerChoice == "scissors") {
                computerscore += 1;
                console.log("You lose! scissors beats paper");
            } else if (computerChoice == humanChoice) {
                console.log("This is a tie")
            }

        } else if (humanChoice == "scissors") {
            if(computerChoice == "paper") {
                humanscore += 1;
                console.log("You won! scissors beats paper");
            } else if (computerChoice == "rock") {
                computerscore += 1;
                console.log("You lose! Rock beats scissors");
            } else if (computerChoice == humanChoice) {
                console.log("This is a tie")
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(humanscore > computerscore? "You won this game!": humanscore < computerscore? "You lose this game.": "The game over with a tie!")
}

playGame();