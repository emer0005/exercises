"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "da";

const selectElement = document.querySelector(".language");
document.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector("header").innerHTML = texts.da.texts[0].text;
  document.querySelector(".footer").innerHTML = texts.da.texts[1].text;
  selectElement.value = "dansk";
  selectElement.addEventListener("change", selectLanguage);
}

function selectLanguage(evt) {
  console.log(evt.target.value);
  if (evt.target.value === "dansk") {
    document.querySelector("header").innerHTML = texts.da.texts[0].text;
    document.querySelector(".footer").innerHTML = texts.da.texts[1].text;
  } else if (evt.target.value === "deutsch") {
    document.querySelector("header").textContent = texts.de.texts[0].text;
    document.querySelector(".footer").innerHTML = texts.de.texts[1].text;
  }
}
