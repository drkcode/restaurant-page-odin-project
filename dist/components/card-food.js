const createCard = (cardTitle, srcCardImg) => {
  const card = document.createElement('div');
  const title = document.createElement('h3');
  const cardImg = document.createElement('img');

  // set Card
  card.classList.add('card__food');

  // set Card Title
  title.textContent = cardTitle;

  // set Card Image
  cardImg.classList.add('card__food__img');
  cardImg.setAttribute('src', srcCardImg);

  // Mount Card
  card.appendChild(title);
  card.appendChild(cardImg);

  return card;
};

export { createCard };
