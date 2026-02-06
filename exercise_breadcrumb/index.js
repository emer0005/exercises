const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", klik);
const ulElement = document.querySelector("ul");

function klik() {
  console.log("klik");
  ulElement.innerHTML = "";
  bc.forEach((breadCrumb, index) => {
    const listItem = document.createElement("li");
    if (index === bc.length - 1) {
      listItem.textContent = breadCrumb.name;
    } else {
      const linkitem = document.createElement("a");
      linkitem.href = breadCrumb.link;
      linkitem.textContent = breadCrumb.name;
      listItem.appendChild(linkitem);
    }
    ulElement.appendChild(listItem);
  });
}
