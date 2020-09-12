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
  const ordenedCards = ramdomListCards();
  const styledCards = createCards(ordenedCards);
  renderToHTML(styledCards);
  restart();
};

function createCards(ordenedCards) {
  const cardsList = ordenedCards ?? cards;
  const styledCards = cardsList.map((card, index) => {
    newDiv = document.createElement("div");
    newDiv.classList.add("card");
    newDiv.id = `card-${index}`;
    newDiv.innerText = card.name;
    newDiv.style.backgroundColor = card.color;

    newDiv.addEventListener("click", function (e) {
      const selectedElement = document.querySelector(`#${e.target.id}`);
      selectedElement.classList.toggle("blackBackground");
    });

    return newDiv;
  });
  return styledCards;
}

function cleanBoard(styledCards) {
  styledCards.forEach((card) => {
    let element = document.querySelector(`#${card.id}`);
    element.remove();
  });
}

function renderToHTML(styledCards) {
  const container = document.querySelector(".cardContainer");
  for (card of styledCards) {
    container.appendChild(card);
  }
}

function ramdomListCards() {
  const listRandomNumbersAlreadyUsed = [];
  const ordenedCards = [];

  while (listRandomNumbersAlreadyUsed.length < cards.length) {
    let randomNumber = getUniqueNumber(listRandomNumbersAlreadyUsed, cards.length);
    ordenedCards.push(cards[randomNumber]);
    listRandomNumbersAlreadyUsed.push(randomNumber);
  }
  return ordenedCards;
}

function restart() {
  const restartBtn = document.querySelector("#restart");
  restartBtn.addEventListener("click", function () {
    const ordenedCards = ramdomListCards();
    const styledCards = createCards(ordenedCards);
    cleanBoard(styledCards);
    renderToHTML(styledCards);
  });
}

function getUniqueNumber(randomNumberAlreadyUsed, quantity) {
  let number = generateRandomNumber(quantity);
  while (isNumberUsed(number, randomNumberAlreadyUsed)) {
    number = generateRandomNumber(quantity);
  }
  return number;
}

function isNumberUsed(number, randomNumberAlreadyUsed) {
  if (randomNumberAlreadyUsed.includes(number)) return true;
  return false;
}

function generateRandomNumber(quantity) {
  const number = Math.floor(Math.random() * quantity);
  return number;
}
