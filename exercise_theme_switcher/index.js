const themeSelecter = document.querySelector(".theme");
document.addEventListener("DOMContentLoaded", init);

function init() {
  themeSelecter.addEventListener("change", selectTheme);
}

// Her laves den med if else sætning
//function selectTheme(evt) {
//console.log(evt.target.value);
//if (evt.target.value === "dark") {
// document.body.dataset.theme = "dark";
// } else if (evt.target.value === "light") {
//  document.body.dataset.theme = "light";
//} else if (evt.target.value === "hawii") {
// document.body.dataset.theme = "hawii";
//}
//}

function selectTheme(evt) {
  console.log(evt.target.value);
  document.body.dataset.theme = evt.target.value;
}
