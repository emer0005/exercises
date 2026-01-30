"use strict";
const buttons = document.querySelector(".buttons");
const start_btn = document.querySelector("#start_btn");
const lav_btn = document.querySelector("#lav_btn");
const høj_btn = document.querySelector("#høj_btn");
const gættet_btn = document.querySelector("#gættet_btn");
const computer = document.querySelector(".computer");
let computer_gæt = 50;

document.addEventListener("DOMContentLoaded", init);

function init() {
  start_btn.addEventListener("click", startSpillet);
}

function startSpillet(evt) {
  buttons.classList.add("active");
  start_btn.classList.add("hidden");
  computer.textContent = computer_gæt;
  if (evt.target.classList.contains("btn")
}
