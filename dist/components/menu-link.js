import { select } from '../assets/js/animation';

const a = document.createElement('a');
a.classList.add('nav__link');
a.setAttribute('id', 'menu-link');
a.setAttribute('href', '#');

a.textContent = 'Menu';

const menuLink = document.createElement('li');
menuLink.classList.add('li');
menuLink.appendChild(a);

menuLink.addEventListener('click', select);

export default menuLink;
