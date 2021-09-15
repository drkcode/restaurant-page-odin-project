const footer = document.createElement('footer');
footer.classList.add('footer');
//
const footerContainer = document.createElement('div');

const gitHubLink = document.createElement('a');
gitHubLink.setAttribute('href', '#');
gitHubLink.textContent = 'Darlisson L. Silva';
const gitHubIcon = document.createElement('i');
gitHubIcon.classList.add('fab', 'fa-github');
gitHubLink.appendChild(gitHubIcon);

const autorName = document.createElement('p');
autorName.appendChild(gitHubLink);

const copyright = document.createElement('p');
copyright.textContent = `© Copyright 2021`;

footerContainer.appendChild(copyright);
footerContainer.appendChild(autorName);
footer.appendChild(footerContainer);

export default footer;
