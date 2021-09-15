import homeLink from './home-link';
import menuLink from './menu-link';
import contactLink from './contact-link';

const nav = document.createElement('nav');
nav.classList.add('nav');
const ul = document.createElement('ul');
ul.classList.add('ul');

ul.appendChild(homeLink);
ul.appendChild(menuLink);
ul.appendChild(contactLink);

nav.appendChild(ul);

export default nav;
