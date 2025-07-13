const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('header nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

const form = document.getElementById('contactForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! We will get back to you shortly.');
  form.reset();
});
