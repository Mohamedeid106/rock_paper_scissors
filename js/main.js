function getComputerChoice() {
    return Math.floor(Math.random() * 3) == 0? "Rock": Math.floor(Math.random() * 3) == 1? "Paper": "Scissors";
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll("button");

    let humanSelection = document.querySelector(".usertext");
    const divUser = document.querySelector(".user");
    const userimg = document.createElement("img");

    let computerSelection = document.querySelector(".computertext");
    const divComp = document.querySelector(".computer");
    const compimg = document.createElement("img");

    let scoreboard = document.querySelector(".scoreboard");
    let humanscore = document.querySelector(".userscore");
    let computerscore = document.querySelector(".computerscore");
    let result = document.createElement("p");

    let humanScore = 0;
    let computerScore = 0;

    scoreboard.appendChild(result);

    let section = document.querySelector(".choice");
    let x = document.createElement("div");
    x.textContent = "X";

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            divUser.insertBefore(userimg, humanSelection);
            userimg.src = button.id + ".png";
            humanSelection.innerHTML = "Your Choice";

            section.insertBefore(x, divComp);
            let computerChoice = getComputerChoice();

            divComp.insertBefore(compimg, computerSelection);
            compimg.src = computerChoice + ".png";
            computerSelection.innerHTML = "Computer choice";
            
            scoreboard.style.height = "150px";

            if (button.id == "Rock") {
                if(computerChoice == "Paper") {
                    computerScore += 1;
                    result.textContent = "You lose! Paper beats Rock";
                    result.style.color = "red";
                } else if (computerChoice == "Scissors") {
                    humanScore += 1;
                    result.textContent = "You won! Rock beats scissors";
                    result.style.color = "rgb(41, 63, 255)";
                } else if (computerChoice == button.id) {
                    result.textContent = "This is a tie";
                    result.style.color = "white";
                }

            } else if (button.id == "Paper") {
                if(computerChoice == "Rock") {
                    humanScore += 1;
                    result.textContent = "You won! Paper beats Rock";
                    result.style.color = "rgb(41, 63, 255)";
                } else if (computerChoice == "Scissors") {
                    computerScore += 1;
                    result.textContent = "You lose! scissors beats paper";
                    result.style.color = "red";
                } else if (computerChoice == button.id) {
                    result.textContent = "This is a tie";
                    result.style.color = "white";
                }

            } else if (button.id == "Scissors") {
                if(computerChoice == "Paper") {
                    humanScore += 1;
                    result.textContent = "You won! scissors beats paper";
                    result.style.color = "rgb(41, 63, 255)";
                } else if (computerChoice == "Rock") {
                    computerScore += 1;
                    result.textContent = "You lose! Rock beats scissors";
                    result.style.color = "red";
                } else if (computerChoice == button.id) {
                    result.textContent = "This is a tie";
                    result.style.color = "white";
                }
            }

            humanscore.innerHTML = humanScore;
            computerscore.innerHTML = computerScore;
        });
    });
});
