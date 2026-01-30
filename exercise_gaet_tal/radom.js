console.log("hej");
import { getRandomNumber } from "../utils/utils_lib.js";

const tilfældigt_tal = getRandomNumber(100);
const confetti_container = document.querySelector(".confetti-container");
const text = document.querySelector("#text");
console.log(tilfældigt_tal);

document.querySelector("#submit").addEventListener("click", tjekTal);

function tjekTal() {
  const indtastede_tal = document.querySelector("#tal").value;
  console.log(indtastede_tal);
  document.querySelector("form").reset(); //Fjerner tallet fra input felt efter at have trykket submit

  if (indtastede_tal == tilfældigt_tal) {
    text.textContent = "Det er rigtig!";
    confetti_container.classList.add("active");
  } else if (indtastede_tal < tilfældigt_tal) {
    text.textContent = "Dit tal er for lavt!";
  } else {
    text.textContent = "Dit tal er for højt!";
  }
}
