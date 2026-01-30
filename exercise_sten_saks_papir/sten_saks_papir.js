"use strict";
const paper_btn = document.querySelector(".paper");
const rock_btn = document.querySelector(".rock");
const scissors_btn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const draw = document.querySelector("#draw");
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const buttons = document.querySelector("#buttons");
let userChoice;
let computerChoice;

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("hej");
  rock_btn.addEventListener("click", btnClick);
  paper_btn.addEventListener("click", btnClick);
  scissors_btn.addEventListener("click", btnClick);
}

// Her skal eventlistener have hver deres funktion

/*

function rockClick() {
  console.log("rock");
  userChoice = "rock";
  buttons.classList.add("disabled");
  computerChooses();
  resetGame();
}

function paperClick() {
  console.log("paper");
  userChoice = "paper";
  buttons.classList.add("disabled");
  computerChooses();
  resetGame();
}

function scissorsClick() {
  console.log("scissors");
  userChoice = "scissors";
  buttons.classList.add("disabled");
  computerChooses();
  resetGame();
}
  */

// funktion hvor man samler de 3 click til en funktion (der skal ændres i eventlistener til samme funktion)

function btnClick(evt) {
  console.log(evt.target.classList.contains("rock"));
  if (evt.target.classList.contains("rock")) {
    userChoice = "rock";
  } else if (evt.target.classList.contains("paper")) {
    userChoice = "paper";
  } else {
    userChoice = "scissors";
  }
  buttons.classList.add("disabled");
  computerChooses();
  resetGame();
}

function computerChooses() {
  const Selection = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 2);
  computerChoice = Selection[index];
  handShakesStart();
}

function handShakesStart() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", showChoice);
}

function showChoice() {
  console.log("choice");
  player1.classList.remove("shake");
  player2.classList.remove("shake");
  player1.classList.add(userChoice);
  player2.classList.add(computerChoice);
  buttons.classList.remove("disabled");

  if (userChoice === computerChoice) {
    draw.classList.remove("hidden");
  } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    win.classList.remove("hidden");
  } else {
    lose.classList.remove("hidden");
  }
}

function resetGame() {
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");
  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");
}
