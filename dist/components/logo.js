const logoDiv = document.createElement('div');
logoDiv.classList.add('logo-box');

const imgLogo = document.createElement('img');

const imgUrl = '../../dist/assets/img/white-logo.png';

imgLogo.setAttribute('src', imgUrl);
imgLogo.setAttribute('alt', 'logo la saveur');
imgLogo.classList.add('logo');

logoDiv.appendChild(imgLogo);

export default logoDiv;
