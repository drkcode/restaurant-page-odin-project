import logoDiv from './logo';
import nav from './nav';

const header = document.createElement('header');
header.classList.add('header');

header.appendChild(logoDiv);
header.appendChild(nav);

export default header;
