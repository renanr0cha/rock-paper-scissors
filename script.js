//adicionar campo para definir nome

let computerSelection = "";
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;

playerExampleNames = ['Gandalf', 'Harry Potter', 'Neo', 'John Connor', 'Luke Skywalker', 'Naruto', 'Ragnar Lothbrok', 'Jon Snow', 'Jack Bauer'];

let computerScoreboard = document.getElementById('computer-score-number');
let playerScoreboard = document.getElementById('person-score-number');
computerScoreboard.innerHTML = computerScore;
playerScoreboard.innerHTML = playerScore;
let messageAfterRound = document.getElementById("message");
let personName = document.getElementById("person-name");
let attributeChoice = document.getElementsByClassName("choice");

window.onload = () => {
  let random = Math.floor(Math.random() * playerExampleNames.length);
  personName.innerHTML = playerExampleNames[random].toUpperCase();
}


function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  if (random == 1) {
      return "rock";
  } else if (random == 2) {
      return "paper";
  } else {
      return "scissors";
  }
}

function playerChooseRock() {
  playerSelection = 'rock';
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  isOver();
}

function playerChoosePaper() {
  playerSelection = 'paper';
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  isOver();
}

function playerChooseScissors() {
  playerSelection = 'scissors';
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  setTimeout(isOver(), 5000);
}


function lose() {
  computerScore++;
  computerScoreboard.innerHTML = computerScore;
  messageAfterRound.innerHTML = "Oh no, you lose the round! The Machines are closer to wipe us from the face of the Earth!"
  
}

function win() {
  playerScore++;
  playerScoreboard.innerHTML = playerScore;
  messageAfterRound.innerHTML = "Yes baby, you win the round! We are closer to send them to the junkyard! Keep up!"
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return messageAfterRound.innerHTML = "It's a draw! The battle is toe to toe! God help us!";
    } else if (computerSelection == "paper"){
      return lose();
    } else { 
      return win();
    }
} else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return win();
    } else if (computerSelection == "paper") {
      return messageAfterRound.innerHTML = "It's a draw! The battle is toe to toe! God help us!";
    } else {
      return lose();
    }
} else {
    if (computerSelection == "rock") {
      return lose();
    } else if (computerSelection == "paper") {
      return win();
    } else {
      return messageAfterRound.innerHTML = "It's a draw! The battle is toe to toe! God help us!";
    }
  }
}

function isOver() {
  console.log(playerScore + ' X ' + computerScore)
  if (playerScore >= 5 || computerScore >= 5) {
    attributeChoice[0].removeAttribute('onclick');
    attributeChoice[1].removeAttribute('onclick');
    attributeChoice[2].removeAttribute('onclick');
    if (playerScore > computerScore) {
      messageAfterRound.innerHTML = "WE WON! Congratulations, now we have to repopulate the Earth as fast as possible, humanity triumphs!";
    } else {
      messageAfterRound.innerHTML = "WE LOST! Too bad, you are really bad at this game, now we are extinct because of your incompetence!";
    }
  } else {

    computerSelection = "";
    playerSelection = "";
  }
}