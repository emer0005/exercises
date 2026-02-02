const tal1 = document.querySelector("#tal1");
const tal2 = document.querySelector("#tal2");
const regneart = document.querySelector("#regneart");
const beregn_btn = document.querySelector(".beregn");
const resultat = document.querySelector("#resultat");
let number1;
let number2;
let regneart_valg;

document.addEventListener("DOMContentLoaded", init);

function init() {
  beregn_btn.addEventListener("click", beregn);
}

function beregn() {
  number1 = Number.parseInt(tal1.value);
  number2 = Number.parseInt(tal2.value);
  regneart_valg = regneart.value;
  let endelig_resultat;

  if (regneart_valg === "+") {
    endelig_resultat = number1 + number2;
  } else if (regneart_valg === "-") {
    endelig_resultat = number1 - number2;
  } else if (regneart_valg === "*") {
    endelig_resultat = number1 * number2;
  } else if (regneart_valg === "/") {
    endelig_resultat = number1 / number2;
  }
  resultat.value = endelig_resultat;
  console.log("resultat", endelig_resultat);
}
