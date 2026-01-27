"use strict";
const tilfældigt_tal = Math.floor(Math.random() * 101);
const confetti_container = document.querySelector(".confetti-container");
console.log(tilfældigt_tal);

document.querySelector("#submit").addEventListener("click", tjekTal);

function tjekTal() {
  const indtastede_tal = document.querySelector("#tal").value;
  console.log(indtastede_tal);
  document.querySelector("form").reset(); //Fjerner tallet fra input felt efter at have trykket submit

  if (indtastede_tal === tilfældigt_tal) {
    document.querySelector("#text").textContent = "Det er rigtig!";
    confetti_container.classList.add("active");
  } else if (indtastede_tal < tilfældigt_tal) {
    document.querySelector("#text").textContent = "Dit tal er for lavt!";
  } else {
    document.querySelector("#text").textContent = "Dit tal er for højt!";
  }
}
