'use strict';

const INPUT_BUTTON_TYPES = ['button', 'submit', 'reset'];

// eslint-disable-next-line no-unused-vars
function onSubmit(event) {
  event.preventDefault();

  const { target: form } = event;

  const formValue = [...form.elements]
    .filter(({ type }) => !INPUT_BUTTON_TYPES.includes(type))
    .reduce((acc, { value, name }) => ({
      ...acc, [name]: value,
    }), {});

  window.alert(
    `Form name: ${form.name}\nForm value: ${JSON.stringify(formValue, null, 4)}`
  );
}

// code that change 'yes' on 'no' in group 'Additional info'

const options = ['yes', 'no'];
let current = 0;

function prev() {
  if (current > 0) {
    current--;
  }
  setFieldValue(options[current]);
}

function next() {
  if (current < options.length - 1) {
    current++;
  }
  setFieldValue(options[current]);
}

function setFieldValue(text) {
  document.body.querySelector('.field').value = options[current];
}

setFieldValue(options[current]);

const bottonUp = document.body.querySelector('.up');
const bottonDown = document.body.querySelector('.down');

bottonUp.addEventListener('click', () => {
  prev();
});

bottonDown.addEventListener('click', () => {
  next();
});
