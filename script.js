//adicionar campo para definir nome

let computerSelection = "";
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;
let playerName = "";
let playerExampleNames = ['Gandalf', 'Harry Potter', 'Neo', 'John Connor', 'Luke Skywalker', 'Naruto', 'Ragnar Lothbrok', 'Jon Snow', 'Jack Bauer'];


var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);

let computerScoreboard = document.getElementById('computer-score-number');
let playerScoreboard = document.getElementById('person-score-number');
computerScoreboard.innerHTML = computerScore;
playerScoreboard.innerHTML = playerScore;
let messageAfterRound = document.getElementById("message");
let personName = document.getElementById("person-name");
let attributeChoice = document.getElementsByClassName("choice");
let hideNameInput = document.getElementById("choose-name-div");
let nameInput = document.getElementById("input-name");
let randomNameButton = document.getElementById("random-name-button");
let setNameButton = document.getElementById("set-name-button");
let intro = document.getElementById("intro-text");

function randomName () {
  let random = Math.floor(Math.random() * playerExampleNames.length);
  playerName = playerExampleNames[random].toUpperCase();
  personName.innerHTML = playerName;
  hideNameInput.removeChild(nameInput);
  hideNameInput.removeChild(randomNameButton);
  hideNameInput.removeChild(setNameButton);
  introText();
}

function nameIsSet () {
  if (playerName != "") {

  }
}

function setName () {
  playerName = nameInput.value.toUpperCase();
  personName.innerHTML = playerName;
  hideNameInput.removeChild(nameInput);
  hideNameInput.removeChild(randomNameButton);
  hideNameInput.removeChild(setNameButton);
  introText();
}


function introText () {
  intro.innerHTML = `Hello ${playerName}, the world is on the verge of collapsing to the Machines, that dominated everything. You are our last hope!`
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
  if (playerName != "") {
    playerSelection = 'rock';
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  isOver();
  } else {
    alert("You have to choose a name first!")
  }
}



function playerChoosePaper() {
  if (playerName != "") {
    playerSelection = 'paper';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    isOver();
  } else {
    alert("You have to choose a name first!")
  }
}

function playerChooseScissors() {
  if (playerName != "") {
    playerSelection = 'scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    isOver();
  } else {
    alert("You have to choose a name first!")
  }
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
      confetti.render();
    } else {
      messageAfterRound.innerHTML = "WE LOST! Too bad, you are really bad at this game, now we are extinct because of your incompetence!";
    }
  } else {

    computerSelection = "";
    playerSelection = "";
  }
}