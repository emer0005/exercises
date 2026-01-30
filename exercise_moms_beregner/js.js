momsBeregner(150, 25);

function momsBeregner(beløb, moms) {
  moms_decimal = moms / 100;
  const resultat = beløb * moms_decimal + beløb;
  console.log(resultat);
}
