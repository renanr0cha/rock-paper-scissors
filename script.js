let computerSelection = "";
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;
let playerExampleNames = ['Gandalf', 'Harry Potter', 'Neo', 'John Connor', 'Luke Skywalker', 'Naruto', 'Ragnar Lothbrok', 'Jon Snow', 'Jack Bauer'];



let computerScoreboard = document.querySelector('#computer-score-number');
let playerScoreboard = document.querySelector('#person-score-number');
computerScoreboard.textContent = computerScore;
playerScoreboard.textContent = playerScore;
let personName = document.querySelector("#person-name");
let attributeChoice = document.querySelector(".choice");
let divNameInput = document.querySelector("#choose-name-div");
let nameInput = document.querySelector("#input-name");
let buttons = document.querySelector("#buttons");
let intro = document.querySelector("#intro-text");
let audio = document.querySelector("#battle-song");
let startButton = document.querySelector("#start-match")
let restartButton = document.querySelector("#restart-match")
let rockButton = document.querySelector("#rock")
let paperButton = document.querySelector("#paper")
let scissorsButton = document.querySelector("#scissors")
let headingWeapon = document.querySelector("#choose-weapon")

function restartMatch() {
  computerSelection = "";
  playerSelection = "";
  computerScore = 0;
  playerScore = 0;
  computerScoreboard.textContent = computerScore
  playerScoreboard.textContent = playerScore
  intro.textContent = "Choose your name, or press the button to get a random hero name:"
  nameInput.classList.remove("hide")
  buttons.children[0].classList.remove("hide")
  buttons.children[1].classList.remove("hide")
  restartButton.classList.add("hide")
}

function randomName () {
  let random = Math.floor(Math.random() * playerExampleNames.length);
  personName.textContent = playerExampleNames[random].toUpperCase();
  introText()
}

function beginMatch() {
  nameInput.classList.add("hide")
  buttons.children[0].classList.add("hide")
  buttons.children[1].classList.add("hide")
  headingWeapon.classList.remove("hide")
  rockButton.classList.remove("hide")
  paperButton.classList.remove("hide")
  scissorsButton.classList.remove("hide")
  startButton.classList.add("hide")
  intro.textContent = ""

}

function setName () {
  personName.textContent = nameInput.value.toUpperCase();

  if (personName.textContent == "") {
    return alert("You have to choose a name first!")
  } else {
    introText()
  }
}

function playSound() {
  //audio.play();
}


function introText () {
  nameInput.classList.add("hide")
  buttons.children[0].classList.add("hide")
  buttons.children[1].classList.add("hide")
  startButton.classList.remove("hide")

  playSound();
  intro.textContent = 
  `Hello ${personName.textContent}, the world is on the verge of collapsing to the Machines.
  They've dominated everything. 
  You are our last hope!`
}


function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  switch(random) {
    case 0:
      return "rock"
    case 1:
      return "paper"
    case 2:
      return "scissors"
    default:

  }
}

function playerPlay(choice) {
  playerSelection = choice.id
  computerSelection = computerPlay()
  playRound(playerSelection, computerSelection)
  isOver()
}


function lose() {
  computerScore++;
  computerScoreboard.textContent = computerScore;
  intro.textContent = "Oh no, you lost the round! The Machines are closer to wipe us from the face of the Earth!"
  
}

function win() {
  playerScore++;
  playerScoreboard.textContent = playerScore;
  intro.textContent = "Alright, you win the round! We are closer to send them to the junkyard! Keep up!"
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return intro.textContent = "It's a draw! The battle is toe to toe! God help us!";
    } else if (computerSelection == "paper"){
      return lose();
    } else { 
      return win();
    }
} else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return win();
    } else if (computerSelection == "paper") {
      return intro.textContent = "It's a draw! The battle is toe to toe! God help us!";
    } else {
      return lose();
    }
} else {
    if (computerSelection == "rock") {
      return lose();
    } else if (computerSelection == "paper") {
      return win();
    } else {
      return intro.textContent = "It's a draw! The battle is toe to toe! God help us!";
    }
  }
}

function isOver() {
  if (playerScore >= 5 || computerScore >= 5) {
    rockButton.classList.add("hide")
    paperButton.classList.add("hide")
    scissorsButton.classList.add("hide")
    headingWeapon.classList.add("hide")
    if (playerScore > computerScore) {
      intro.textContent = "WE WON! Congratulations, now we have to repopulate the Earth as fast as possible, humanity triumphs!";
    } else {
      intro.textContent = "WE LOST! Too bad, you are really bad at this game, now we are extinct because of your incompetence!";
    }

    restartButton.classList.remove("hide")

  } else {

    computerSelection = "";
    playerSelection = "";
    
  }
}