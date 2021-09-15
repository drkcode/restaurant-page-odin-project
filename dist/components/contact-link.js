import { select } from '../assets/js/animation';

const a = document.createElement('a');
a.classList.add('nav__link');
a.setAttribute('id', 'contact-link');
a.setAttribute('href', '#');

a.textContent = 'Contact';

const contactLink = document.createElement('li');
contactLink.classList.add('li');
contactLink.appendChild(a);

// animation
contactLink.addEventListener('click', select);

export default contactLink;
