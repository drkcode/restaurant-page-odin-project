// Components
import header from '../dist/components/header.js';
import footer from '../dist/components/footer.js';

// Pages
import homePage from '../dist/pages/home-page.js';
import menuPage from '../dist/pages/menu-page.js';
import contactPage from '../dist/pages/contact-page.js';

// Main Component
const content = document.querySelector('#content');

// Page Content
const mainContent = document.createElement('main');
mainContent.setAttribute('id', 'main-content');
mainContent.classList.add('main');
mainContent.appendChild(homePage);

// Restaurant Page
content.appendChild(header);
content.appendChild(mainContent);
content.appendChild(footer);

// Router
const getRouter = e => {
  const child = mainContent.querySelector('div');
  switch (e.target.id) {
    case 'home-link':
      mainContent.removeChild(child);
      mainContent.appendChild(homePage);
      break;
    case 'menu-link':
      mainContent.removeChild(child);
      mainContent.appendChild(menuPage);
      break;
    case 'contact-link':
      mainContent.removeChild(child);
      mainContent.appendChild(contactPage);
      break;
    default:
      break;
  }
};

// Click Listeners
const links = document.querySelectorAll('.nav__link');

links.forEach(link => {
  link.addEventListener('click', getRouter);
});
