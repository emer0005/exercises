// Finder alle knapperne i html
document.querySelectorAll("button").forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", klik);
});

// evt.target.dataset.filter undersøge hvilken af knapperne som der er blevet trykket på
function klik(evt) {
  evt.target;
  if (evt.target.dataset.filter === "all") {
    showTheseVehicles(vehicles);
  } else if (evt.target.dataset.filter === "electricVeh") {
    showTheseVehicles(electricVeh);
  } else if (evt.target.dataset.filter === "MoreThanTwoSeats") {
    showTheseVehicles(MoreThanTwoSeats);
  } else if (evt.target.dataset.filter === "electricAndOvnByJonas") {
    showTheseVehicles(electricAndOvnByJonas);
  } else if (evt.target.dataset.filter === "ryeBreadMoreThanOne") {
    showTheseVehicles(ryeBreadMoreThanOne);
  }
}

// Selve datasættet vi kigger på
const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

// filter der finder eldrevene køretøjer
const electricVeh = vehicles.filter((veh) => veh.isElectric);
console.log("electricVeh: ", electricVeh);

// en der viser alle fartøjer med mere end 2 sæder
const MoreThanTwoSeats = vehicles.filter((veh) => veh.passengers > 2);
console.log("MoreThanTwoSeats : ", MoreThanTwoSeats);

//alle el-drevne fartøjer ejet af Jonas
const electricAndOvnByJonas = vehicles.filter((veh) => veh.isElectric && veh.ownedBy === "Jonas");
console.log("electricAndOvnByJonas : ", electricAndOvnByJonas);

// alle rugbrøds drevne fartøjer med plads til mere end en
const ryeBreadMoreThanOne = vehicles.filter((veh) => veh.passengers > 1 && veh.fuel === "Rugbrød");
console.log("ryeBreadMoreThanOne : ", ryeBreadMoreThanOne);

showTheseVehicles(vehicles);

//Laver en tabel med alle objekter og dens egenskaber
function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel ?? "-"}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops ?? "-"}</td>
  <td>${each.ownedBy ?? "-"}</td>
  <td>${each.isElectric ? "Electric" : "-"}</td>
  <td>${each.isTandem ? "Tandem" : "-"}</td>
</tr>`;
  });
}
