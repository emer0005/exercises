const fullName = "PETer";

const thirdLetter = fullName.substring(2, 3);
console.log(thirdLetter);

const firstPart = fullName.substring(0, 2);
console.log(firstPart);

const lastPart = fullName.substring(3);
console.log(lastPart);

console.log(firstPart.toLowerCase() + thirdLetter.toUpperCase() + lastPart.toLowerCase());
