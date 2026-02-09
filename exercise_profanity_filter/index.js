const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const txt = document.querySelector(".text");
const button = document.querySelector(".button");
const dialog = document.querySelector(".dialog");
let done = false;

document.addEventListener("DOMContentLoaded", init);

function init() {
  button.addEventListener("click", erstatOrd);
}
function erstatOrd() {
  if (done === true) {
    dialog.show();
  } else {
    let text = txt.textContent;
    curseWords.forEach((item) => {
      text = text.replaceAll(item.bad, item.good);
    });
    txt.textContent = text;
    done = true;
  }
}
