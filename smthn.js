//rock, paper, scissors!
let rounds = 1;
let humanScore = 0;
let computerScore = 0;

const rockButton = document.createElement("button"); rockButton.textContent = "Rock";
const paperButton = document.createElement("button"); paperButton.textContent = "Paper";
const scissorsButton = document.createElement("button"); scissorsButton.textContent = "Scissors";

console.log(rockButton);

const res = document.querySelector("#result");
const details = document.querySelector("#details");
const middleSection = document.querySelector(".middleSection");

const startGameButton = document.querySelector("#startGame"); 

startGameButton.addEventListener("click", () => {
    initializeGame();
});


function initializeGame () {
    startGameButton.remove();
    document.querySelector("#instructions").remove();
    rounds = 1;
    humanScore = 0;
    computerScore = 0;

    
    rockButton.addEventListener("click", () => {
        playRound("rock");
    });

    paperButton.addEventListener("click", () => {
        playRound("paper");
    });

    scissorsButton.addEventListener("click", () => {
        playRound("scissors");
    });

    middleSection.appendChild(rockButton);
    middleSection.appendChild(paperButton);
    middleSection.appendChild(scissorsButton);
    
    
    res.textContent = "Choose rock, paper or scissors to start the first round!";
    details.textContent = "";
}


function displayResDiv() {
    res.textContent = `Scores after round ${rounds}:- Human (you): ${humanScore} Computer: ${computerScore}`;
}

//function to calculate computer's choice 
function calcComputerChoice() {
    let choice = Math.floor(Math.random() * 3 ) + 1;

    switch (choice) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}


//function to calculate the winner of the round, returns 1 for human, 2 for computer, 3 for tie
//there's probably a better way to do this, but this is the first thing that came to my mind.
function calcRoundWinner(humanChoice, computerChoice) {
    if(humanChoice === "rock" && computerChoice === "scissors")
        return 1;
    else if(humanChoice === "rock" && computerChoice === "paper")
        return 2;
    else if(humanChoice === "scissors" && computerChoice === "paper")
        return 1;
    else if(humanChoice === "scissors" && computerChoice === "rock")
        return 2;
    else if(humanChoice === "paper" && computerChoice === "rock")
        return 1;
    else if(humanChoice === "paper" && computerChoice === "scissors")
        return 2;
    else if(humanChoice === computerChoice) 
        return 3;
    else 
        console.error("something wrong happend while calculating round winner"); //this should never happen, but just in case.
}


//function to play a single round of the game
function playRound (humanChoice) {

    let computerChoice = calcComputerChoice();

    let roundWinner = calcRoundWinner(humanChoice, computerChoice);
    details.textContent = `You choose ${humanChoice} and the computer choose ${computerChoice}.\n`;

    if(roundWinner == 1){
        humanScore++;
         details.textContent += "Congrats! You won this round.\n";
    }
    else if(roundWinner == 2){
        computerScore++;
         details.textContent += "noo! computer won this round, get it next time!\n";
    }
    else {
         details.textContent += "It's a Tie!, choose again.\n"      ;
    }
    displayResDiv();
    rounds++;

    if(humanScore == 5) {
        console.log("stop game");
        stopGame(1);
    }
    else if(computerScore == 5) {
        stopGame(2);
    }
}

function stopGame(whoWon) {
    rockButton.remove();
    paperButton.remove();
    scissorsButton.remove();
    res.textContent = ``;
    details.remove();
    const restartGame = document.createElement("button");
    restartGame.addEventListener("click", () => {
        window.location.reload();
    });
    restartGame.textContent = "Click to restart the game";
    middleSection.appendChild(restartGame);
    
    whoWon == 1 ? res.textContent = `You Won the Game!` : res.textContent = `You Lost the Game!`;
}


//function to play the game, first to reach 5 points wins
// function playGame() {
//     playRound();
    
//     while(humanScore < 5 && computerScore < 5) {
    //        console.log(`Scores after round ${rounds} are, Human: ${humanScore} and computer: ${computerScore} get ready for the next round!`);
//        playRound();
//     }
//     console.log(`%cScores after round ${rounds} are, Human: ${humanScore} and computer: ${computerScore}, meaning..`, "font-size: large;");
//     humanScore === 5 ? console.log("%c\ncongrats! You won the game!", "color: green; font-size: large") : console.log("%c\nYou lost the game!", "color: red; font-size: large");
// }

// //function to get human's choice
// function getHumanChoice() {

//     //first prompt, dont want to bother user with waring if they choose a valid input.
//     let choice = prompt("Choose ur next move!, rock, paper or scissors?");

//     //converting to lowercase to make it case insensitive
//     choice = choice.toLowerCase();
    
//     while(choice != "rock" && choice != "paper" && choice != "scissors"){
//         console.warn("You must choose rock, paper or scissors");
//         choice = prompt("Choose ur next move!, rock, paper or scissors?");
//         choice = choice.toLowerCase();
//     }

//     return choice;
// }