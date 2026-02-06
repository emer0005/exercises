const fullName = "Emilie Skovgaard Erikson";

// Undersøger hvor der er mellemrum henne
const firstSpace = fullName.indexOf(" ");
console.log("firstspace", firstSpace);

const lastSpace = fullName.lastIndexOf(" ");
console.log("lastspace", lastSpace);

// splitter streng ud fra intervaller
const firstName = fullName.substring(0, firstSpace);
console.log("firstname: ", firstName);

const MiddleName = fullName.substring(firstSpace + 1, lastSpace);
console.log("MiddleName: ", MiddleName);

const LastName = fullName.substring(lastSpace + 1);
console.log("LastName: ", LastName);
