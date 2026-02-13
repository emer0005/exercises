const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const txt = document.querySelector(".text");
const button = document.querySelector(".button");
const close_button = document.querySelector(".close_button");
const dialog = document.querySelector(".dialog");
let done = false;

document.addEventListener("DOMContentLoaded", init);

function init() {
  button.addEventListener("click", erstatOrd);
}
function erstatOrd() {
  if (done === true) {
    dialog.show();
    close_button.addEventListener("click", restart);
  } else {
    let text = txt.textContent;
    curseWords.forEach((word) => {
      text = text.replaceAll(word.bad, `<span>${word.good}</span>`);
    });
    txt.innerHTML = text;
    done = true;
  }
}

function restart() {
  dialog.close();
  done = false;
  text = txt.textContent;
  curseWords.forEach((word) => {
    text = text.replaceAll(word.good, word.bad);
  });
  txt.textContent = text;
}
