import { select } from '../assets/js/animation';

const a = document.createElement('a');
a.classList.add('nav__link');
a.setAttribute('id', 'home-link');
a.setAttribute('href', '#');

a.textContent = 'Home';

const homeLink = document.createElement('li');
homeLink.classList.add('li');
homeLink.appendChild(a);

homeLink.addEventListener('click', select);

export default homeLink;
