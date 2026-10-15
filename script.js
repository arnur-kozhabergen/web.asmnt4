const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  result.textContent = 'Thank you. This practice form does not send a message.';
  result.hidden = false;
});

form.addEventListener('input', function () {
  result.hidden = true;
});
