const form = document.querySelector('form');
const result = document.getElementById('result');
const fields = form.querySelectorAll('input, textarea, select');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
let submitted = false;

function validateField(field) {
  field.setCustomValidity('');

  if (field === confirmPassword && field.value !== password.value) {
    field.setCustomValidity('Passwords must match.');
  }

  if (['name', 'firstName', 'lastName'].includes(field.name) && field.value.trim().length < 2) {
    field.setCustomValidity('Enter at least two characters.');
  }

  const valid = field.checkValidity();
  field.classList.toggle('is-valid', valid);
  field.classList.toggle('is-invalid', !valid);
  field.setAttribute('aria-invalid', String(!valid));
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  result.hidden = true;

  if (form.noValidate) {
    submitted = true;
    fields.forEach(validateField);

    if (!form.checkValidity()) {
      form.querySelector('input:invalid, textarea:invalid, select:invalid').focus();
      return;
    }
  }

  result.textContent = form.id === 'registration'
    ? 'Registration validated. This practice form does not create an account.'
    : 'Thank you. This practice form does not send a message.';
  result.hidden = false;
});

form.addEventListener('input', function () {
  result.hidden = true;

  if (form.noValidate && submitted) {
    fields.forEach(validateField);
  }
});

form.addEventListener('reset', function () {
  submitted = false;
  result.hidden = true;

  fields.forEach(function (field) {
    field.setCustomValidity('');
    field.classList.remove('is-valid', 'is-invalid');
    field.removeAttribute('aria-invalid');
  });
});
