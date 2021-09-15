const main = document.querySelector('#main-content');

const homePage = document.createElement('div');
homePage.setAttribute('id', 'home-page');

const h1 = document.createElement('h1');
h1.textContent = 'For those looking for the taste of tranquility.';
const h3 = document.createElement('h3');
h3.textContent = 'We would love to have You with us.';

const baseButton = document.createElement('a');
baseButton.textContent = 'Reserve';
baseButton.classList.add('btn');

// reserve section
const reserveSection = document.createElement('div');
reserveSection.classList.add('reserve-section');

reserveSection.appendChild(h1);
reserveSection.appendChild(h3);
reserveSection.appendChild(baseButton);

// hours section
const hoursSection = document.createElement('div');
hoursSection.classList.add('hours-section');

const hourssSectionTitle = document.createElement('h2');

const titleIcon = document.createElement('i');
titleIcon.classList.add('far', 'fa-clock');
hourssSectionTitle.textContent = 'Hours';
const hoursSectionContainer = document.createElement('div');
hoursSectionContainer.classList.add('hours-title-box');
hoursSectionContainer.appendChild(titleIcon);
hoursSectionContainer.appendChild(hourssSectionTitle);

// hours list
const hoursList = document.createElement('ul');
const hoursListItem = content => {
  const li = document.createElement('li');
  li.textContent = content;
  return li;
};
const sunday = hoursListItem('Sunday: 09:00-22:00');
const tuesday = hoursListItem('Tuesday: 09:00-22:00');
const wednesday = hoursListItem('Wednesday: 09:00-22:00');
const thursday = hoursListItem('Thursday: 09:00-22:00');
const friday = hoursListItem('Friday: 09:00-22:00');
const saturday = hoursListItem('Saturday: 09:00-22:00');

// mount hours list

hoursList.appendChild(sunday);
hoursList.appendChild(tuesday);
hoursList.appendChild(wednesday);
hoursList.appendChild(thursday);
hoursList.appendChild(friday);
hoursList.appendChild(saturday);

// mount hours section
hoursSection.appendChild(hoursSectionContainer);
hoursSection.appendChild(hoursList);

// mount Home Page
homePage.appendChild(reserveSection);
homePage.appendChild(hoursSection);

export default homePage;
