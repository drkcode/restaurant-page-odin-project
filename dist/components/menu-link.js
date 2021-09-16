const a = document.createElement('a');
a.classList.add('nav__link');
a.setAttribute('id', 'menu-link');
a.setAttribute('href', '#');

a.textContent = 'Menu';

const menuLink = document.createElement('li');
menuLink.classList.add('li');
menuLink.appendChild(a);

export default menuLink;
