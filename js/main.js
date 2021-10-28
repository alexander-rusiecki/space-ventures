const hamburger = document.querySelector('.hamburger-button');
const nav = document.querySelector('#my-nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
});
