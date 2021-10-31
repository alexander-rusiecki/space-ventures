const hamburgerButton = document.querySelector('.hamburger-button');
const nav = document.querySelector('#my-nav');
hamburgerButton.addEventListener('click', () =>
  nav.classList.toggle('menu-open')
);
