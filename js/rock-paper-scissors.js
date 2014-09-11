var userChoice = '';
var computerChoice = '';
var andTheWinnerIs = '';
var getChoice = function (userChoice, computerChoice) {
    userChoice = document.getElementById('userChooses').value;
    //Generate the computer choice.
    computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    document.getElementById('yourChoice').innerHTML = "<strong>Your choice: </strong>" + userChoice;
    document.getElementById('randomChoice').innerHTML = "<strong>Computer choice: </strong>" + computerChoice;
    compare(userChoice, computerChoice);
};
var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        andTheWinnerIs = "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            andTheWinnerIs = "rock";
        } else {
            andTheWinnerIs = "paper";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            andTheWinnerIs = "paper";
        } else {
            andTheWinnerIs = "scissors";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            andTheWinnerIs = "rock";
        } else {
            andTheWinnerIs = "scissors";
        }
    } else if (choice1 === "default") {
        document.getElementById('yourChoice').innerHTML = "<strong>Your choice: </strong>";
        document.getElementById('randomChoice').innerHTML = "<strong>Computer choice: </strong>";
        document.getElementById('theWinner').innerHTML = "&nbsp;";
    }
    if (choice1 === andTheWinnerIs) {
        document.getElementById('theWinner').innerHTML = "<h2>Your choice, " + andTheWinnerIs + " wins!</h2>";
    } else if (choice2 === andTheWinnerIs) {
        document.getElementById('theWinner').innerHTML = "<h2>Computer choice, " + andTheWinnerIs + " wins!</h2>";
    } else if (choice1 === choice2) {
        document.getElementById('theWinner').innerHTML = "<h2>No one wins, the result is a tie!</h2>";
    } else if (choice1 === 'default') {
        document.getElementById('theWinner').innerHTML = "&nbsp;";
    }
};
var resetChoice = function () {
    if (document.getElementById('userChooses').value !== 'default') {
        document.getElementById('userChooses').value = 'default';
        document.getElementById('yourChoice').innerHTML = "<strong>Your choice: </strong>";
        document.getElementById('randomChoice').innerHTML = "<strong>Computer choice: </strong>";
        document.getElementById('theWinner').innerHTML = "&nbsp;";
        document.getElementById('userChooses').focus();
    }
};