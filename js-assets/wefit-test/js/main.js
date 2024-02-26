function makeMenuHorizontal() {
  const menu = document.getElementById("menu");
  menu.classList.remove("btn-group-vertical");
  menu.classList.add("horizontal-menu");
}

function changeColors() {
  const jumbotron = document.getElementById("jumbotron");
  const textElements = jumbotron.querySelectorAll("h1, p");

  jumbotron.style.backgroundColor = "#6c757d";

  textElements.forEach((element) => {
    element.style.color = "#fff";
  });

  const button = jumbotron.querySelector("a.btn");
  button.style.backgroundColor = "#039B00";
}

function reorderCards() {
  const cardsRow = document.getElementById("cardsRow");
  const cards = [
    document.getElementById("natureCard"),
    document.getElementById("animalsCard"),
    document.getElementById("peopleCard"),
    document.getElementById("technologyCard"),
  ];

  cardsRow.innerHTML = "";
  cards.forEach((card) => {
    cardsRow.appendChild(card);
  });
}

function addItems() {
  const list = document.getElementById("list");
  const items = ["Quarto item", "Quinto item"];

  items.forEach((text) => {
    const item = document.createElement("li");
    item.className = "list-group-item";
    item.textContent = text;
    list.appendChild(item);
  });
}

function initPage() {
  makeMenuHorizontal();
  changeColors();
  reorderCards();
  addItems();
}

window.onload = initPage;
