const stringOptions = document.querySelector(".stringOptions");
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const btn = document.querySelector("#button");
document.addEventListener("DOMContentLoaded", init);

function init() {
  input.value = "";
  output.value = "";
  stringOptions.value = "firstCharacter";
  btn.addEventListener("click", stringMethodes);
}

function stringMethodes() {
  console.log(stringOptions.value);
  if (stringOptions.value === "firstCharacter") {
    output.value = input.value.substring(0, 1).toUpperCase() + input.value.substring(1).toLowerCase();
  } else if (stringOptions.value === "findFirstName") {
    output.value = input.value.substring(0, input.value.indexOf(" "));
  } else if (stringOptions.value === "lengthOfFirstName") {
    output.value = input.value.substring(0, input.value.indexOf(" ")).length;
  } else if (stringOptions.value === "middleName") {
    const firstPositions = input.value.indexOf(" ") + 1;
    const endPosiotions = input.value.lastIndexOf(" ");
    output.value = "Start position: " + firstPositions + " End position: " + endPosiotions + " Middlename: " + input.value.substring(firstPositions, endPosiotions);
  } else if (stringOptions.value === "checkFileName") {
    if (input.value.endsWith(".jpg")) {
      output.value = "This is a jpg file!";
    } else if (input.value.endsWith(".png")) {
      output.value = "This is a png file!";
    } else {
      output.value = "This is neither a jpg nor a png file";
    }
  } else if (stringOptions.value === "password") {
    output.value = "*".repeat(input.value.length);
  } else if (stringOptions.value === "thirdCharacterUpperCase") {
    output.value = input.value.substring(0, 2) + input.value.substring(2, 3).toUpperCase() + input.value.substring(3);
  } else if (stringOptions.value === "upperCase") {
  }
}
