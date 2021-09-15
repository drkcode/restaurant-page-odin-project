document.addEventListener('DOMContentLoaded', () => {
  const labelName = document.querySelector('#contact__label__name');

  const inputName = document.querySelector('#name-input');

  inputName.addEventListener('focus', () => {
    labelName.classList.add('label__reset');
  });
  inputName.addEventListener('focusout', () => {
    if (inputName.value <= 0) {
      labelName.classList.remove('label__reset');
    }
  });
  inputName.addEventListener('input', e => {
    if (inputName.value.length > 0) {
      labelName.classList.add('label__reset');
    } else {
      labelName.classList.remove('label__reset');
    }
  });

  // input email
  const labelEmail = document.querySelector('#contact__label__email');

  const inputEmail = document.querySelector('#email-input');

  inputEmail.addEventListener('focus', () => {
    labelEmail.classList.add('label__reset');
  });
  inputEmail.addEventListener('focusout', () => {
    if (inputEmail.value <= 0) {
      labelEmail.classList.remove('label__reset');
    }
  });
  inputEmail.addEventListener('input', e => {
    if (inputEmail.value.length > 0) {
      labelEmail.classList.add('label__reset');
    } else {
      labelEmail.classList.remove('label__reset');
    }
  });
});

const select = e => {
  const links = document.querySelectorAll('.nav__link');
  for (const link of links) {
    if (link.getAttribute('id') !== e.target.id) {
      link.classList.remove('selected');
    } else {
      link.classList.add('selected');
    }
  }
};

export { select };
