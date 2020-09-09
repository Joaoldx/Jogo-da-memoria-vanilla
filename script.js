const cards = [
  {
    name: "Lorem Ipsum",
    color: "#FF5733",
  },
  {
    name: "Lorem Ipsum",
    color: "#FFC300 ",
  },
  {
    name: "Lorem Ipsum",
    color: "#335BFF",
  },
  {
    name: "Lorem Ipsum",
    color: "#FFE333",
  },
  {
    name: "Lorem Ipsum",
    color: "#E933FF",
  },
  {
    name: "Lorem Ipsum",
    color: "#5BFF33",
  },
  {
    name: "Lorem Ipsum",
    color: "#F3FF33",
  },
  {
    name: "Lorem Ipsum",
    color: "#3399FF",
  },
  {
    name: "Lorem Ipsum",
    color: "#9033FF",
  },
  {
    name: "Lorem Ipsum",
    color: "#FF9333",
  },
  {
    name: "Lorem Ipsum",
    color: "#33FF9F",
  },
  {
    name: "Lorem Ipsum",
    color: "#cacfd2 ",
  },
];

window.onload = function () {
  cards.map((card, index) => {
    newDiv = document.createElement("div");
    newDiv.classList.add("card");
    newDiv.id = `card-${index}`;
    newDiv.innerText = card.name;
    newDiv.style.backgroundColor = card.color;

    const container = document.querySelector(".container");
    return container.appendChild(newDiv);
  });
};
