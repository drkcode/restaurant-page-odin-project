import { createCard } from '../components/card-food';

const main = document.querySelector('#main-content');

const menuPage = document.createElement('div');
menuPage.setAttribute('id', 'menu-page');

const pageTitle = document.createElement('h1');
pageTitle.classList.add('page__title');
pageTitle.textContent = 'Menu';

// Card Food
const food1 = createCard(
  'Beaf steak with Sauce',
  '../../dist/assets/img/food/beaf-steak-with-sauce.jpg'
);
const food2 = createCard(
  'Pancake with Sliced Strawberry',
  '../../dist/assets/img/food/pancake-with-sliced strawberry.jpg'
);
const food3 = createCard(
  'Pasta with Tomato and Basil',
  '../../dist/assets/img/food/pasta-with-tomato-and-basil.jpg'
);
const food4 = createCard(
  'Salmon Dish',
  '../../dist/assets/img/food/salmon-dish.jpg'
);
const food5 = createCard(
  'Tacos with Lime',
  '../../dist/assets/img/food/tacos-with-lime.jpg'
);

const foodList = document.createElement('div');
foodList.classList.add('food__list');
foodList.appendChild(food1);
foodList.appendChild(food2);
foodList.appendChild(food3);
foodList.appendChild(food4);
foodList.appendChild(food5);

menuPage.appendChild(pageTitle);
menuPage.appendChild(foodList);

export default menuPage;
