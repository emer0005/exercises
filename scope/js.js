const leveløvar = "leveløvar";

console.log(leveløvar);

level1();

function level1() {
  const level1var = "level1var";
  console.log("level1var", level1var);
  level2("jeg er text");
  function level2(txt) {
    console.log(txt);
  }
}
