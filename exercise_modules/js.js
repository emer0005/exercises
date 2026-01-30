import { getRandomNumber } from "../utils/utils_lib.js";
import { $ } from "../utils/utils_lib.js";
import { $$ } from "../utils/utils_lib.js";

console.log("getRandomNumber", getRandomNumber(3));

$(".mitPTag").innerHTML = "MODULES!";
$$(".MyListElement").forEach((elm, i) => {
  elm.innerHTML = "hej" + i;
});
