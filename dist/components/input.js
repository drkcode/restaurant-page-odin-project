import { InputAnimation } from '../assets/js/animation';

const createInput = (type, inputId, classList, labelName) => {
  const inputBox = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const icon = document.createElement('i');
  const span = document.createElement('span');

  //set input
  input.setAttribute('type', type);
  input.setAttribute('id', inputId);

  //set Icon
  for (const className of classList) {
    icon.classList.add(className);
  }

  //set label
  label.setAttribute('for', inputId);
  label.setAttribute('id', `contact__label__${type}`);
  span.textContent = labelName;

  // Mount
  label.appendChild(icon);
  label.appendChild(span);
  inputBox.appendChild(label);
  inputBox.appendChild(input);

  // set class input box
  inputBox.classList.add('input__box');

  // animation
  InputAnimation(input, label);

  return inputBox;
};

export { createInput };
