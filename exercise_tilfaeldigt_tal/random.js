getRandomTal(2);

function getRandomTal(max) {
  document.querySelector("#tal").textContent = Math.floor(Math.random() * max);
}
