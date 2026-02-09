const themeSelecter = document.querySelector(".theme");
document.addEventListener("DOMContentLoaded", init);

function init() {
  themeSelecter.addEventListener("change", selectTheme);
}

function selectTheme(evt) {
  console.log(evt.target.value);
  if (evt.target.value === "dark") {
    document.body.dataset.theme = "dark";
  } else if (evt.target.value === "light") {
    document.body.dataset.theme = "light";
  } else if (evt.target.value === "hawii") {
    document.body.dataset.theme = "hawii";
  }
}
