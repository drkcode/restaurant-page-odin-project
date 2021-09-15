import { createInput } from '../components/input';

const main = document.querySelector('#main-content');

const contactPage = document.createElement('div');
contactPage.setAttribute('id', 'contact-page');
const title = document.createElement('h1');
title.textContent = 'Contact us';
title.classList.add('page__title');

// form title
const formTitle = document.createElement('h3');
formTitle.textContent = 'Say hello!';

// form
const contactForm = document.createElement('form');
contactForm.classList.add('contact__form__box');
const nameInput = createInput(
  'name',
  'name-input',
  ['far', 'fa-envelope'],
  'Name'
);

const emailInput = createInput(
  'email',
  'email-input',
  ['far', 'fa-user'],
  'Email'
);

const buttonForm = document.createElement('button');
buttonForm.textContent = 'Yes!';
buttonForm.classList.add('btn', 'btn__form');

// Contact Card
const contactCard = document.createElement('div');
contactCard.classList.add('contact__card');

const contactCardList = document.createElement('ul');
const cardTelIcon = document.createElement('i');
cardTelIcon.classList.add('fas', 'fa-phone-alt');
const cardTelInfo = document.createElement('li');
cardTelInfo.appendChild(cardTelIcon);
cardTelInfo.append('Tel: 527-283-687');

const cardEmailIcon = document.createElement('i');
cardEmailIcon.classList.add('far', 'fa-envelope');
const cardEmailInfo = document.createElement('li');
cardEmailInfo.appendChild(cardEmailIcon);
cardEmailInfo.append('fakeemail1@email.com');

// Mount Contact List
contactCardList.appendChild(cardTelInfo);
contactCardList.appendChild(cardEmailInfo);

// Mount Contact Card
contactCard.appendChild(contactCardList);

// Mount Form
contactForm.appendChild(formTitle);
contactForm.appendChild(nameInput);
contactForm.appendChild(emailInput);
contactForm.appendChild(buttonForm);

// Mount Page
contactPage.appendChild(title);
contactPage.appendChild(contactForm);
contactPage.appendChild(contactCard);

export default contactPage;
