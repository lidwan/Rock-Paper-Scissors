//rock, paper, scissors!

//initializing global variables
let rounds = 0;
let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click", () => {
    playRound("rock");
});

const paperButton = document.querySelector("#paperButton");
paperButton.addEventListener("click", () => {
    playRound("paper");
});

const scissorsButton = document.querySelector("#scissorsButton");
scissorsButton.addEventListener("click", () => {
    playRound("scissors");
});


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
    console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}.`);

    if(roundWinner == 1){
        humanScore++;
        console.log("Congrats! You won this round.");
        tie = false;
    }
    else if(roundWinner == 2){
        computerScore++;
        console.log("noo! computer won this round, get it next time!");
        tie = false;
    }
    else {
        console.log("It's a Tie!, try again.");
    }
    rounds++;
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