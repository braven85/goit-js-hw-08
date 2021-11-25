let throttle = require('lodash.throttle');

const emailField = document.querySelector('input[name="email"]');
const messageField = document.querySelector('textarea[name="message"]');
const submitButton = document.querySelector('button[type="submit"]');

emailField.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem('email', emailField.value);
  }, 500),
);

messageField.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem('message', messageField.value);
  }, 500),
);

if (localStorage.getItem('email') !== '') {
  emailField.value = localStorage.getItem('email');
}

if (localStorage.getItem('message') !== '') {
  messageField.value = localStorage.getItem('message');
}

submitButton.addEventListener('click', event => {
  event.preventDefault();

  const formData = {
    email: emailField.value,
    message: messageField.value,
  };

  if (emailField.value !== '' && messageField.value !== '') {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    console.log(formData);
    localStorage.clear();
    emailField.value = '';
    messageField.value = '';
  } else {
    alert("Pola nie mogą być puste!");
  }
});