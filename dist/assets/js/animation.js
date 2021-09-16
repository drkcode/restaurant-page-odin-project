const InputAnimation = (input, label) => {
  input.addEventListener('focus', () => {
    label.classList.add('label__reset');
  });
  input.addEventListener('focusout', () => {
    if (input.value <= 0) {
      label.classList.remove('label__reset');
    }
  });
  input.addEventListener('input', e => {
    if (input.value.length > 0) {
      label.classList.add('label__reset');
    } else {
      label.classList.remove('label__reset');
    }
  });
};

const toggleSelected = e => {
  const links = document.querySelectorAll('.nav__link');
  for (const link of links) {
    if (link.getAttribute('id') !== e.target.id) {
      link.classList.remove('selected');
    } else {
      link.classList.add('selected');
    }
  }
};

export { toggleSelected, InputAnimation };
