let userScore = 0;
let compScore = 0;

let finalMsg = document.querySelector("#msg");

let user_score = document.querySelector("#user_score");
let comp_score = document.querySelector("#comp_score");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rdmIdx = Math.floor(Math.random() * 3);
    return options[rdmIdx];
}
const drawGame = (userChoice, compChoice) => {
    finalMsg.innerText = `Game was Draw, Both chose ${userChoice}`;
    finalMsg.style.backgroundColor = "grey";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin == true) {
        finalMsg.innerText = `Congrats! You won. Your ${userChoice} beats ${compChoice}`;
        finalMsg.style.backgroundColor = "green";
        userScore++;
        user_score.innerText = userScore;
    }
    else {
        finalMsg.innerText = `You Lost, Try again! Computer's ${compChoice} beats ${userChoice}`;
        finalMsg.style.backgroundColor = "red";
        compScore++;
        comp_score.innerText = compScore;
    }
}
const playGame = (userChoice) => {
    console.log("User choice : ", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Comp choice : ", compChoice);

    if (userChoice === compChoice) {
        // Draw game
        drawGame(userChoice, compChoice);
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //Paper, Scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //Rock, Scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else if (userChoice === "scissor") {
            //Rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

