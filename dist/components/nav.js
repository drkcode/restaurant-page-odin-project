import homeLink from './home-link';
import menuLink from './menu-link';
import contactLink from './contact-link';

import { toggleSelected } from '../assets/js/animation';

const nav = document.createElement('nav');
nav.classList.add('nav');
const ul = document.createElement('ul');
ul.classList.add('ul');

// Animation
homeLink.addEventListener('click', toggleSelected);
menuLink.addEventListener('click', toggleSelected);
contactLink.addEventListener('click', toggleSelected);

// Mount Nav
ul.appendChild(homeLink);
ul.appendChild(menuLink);
ul.appendChild(contactLink);

nav.appendChild(ul);

export default nav;
