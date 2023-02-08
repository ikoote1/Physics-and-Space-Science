const ham = document.querySelector('.menu-ba');
const x = document.querySelector('.menu-2');
const navMenu = document.querySelector('.menu-line');

ham.addEventListener('click', function() {
  navMenu.classList.toggle('active');
});
x.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.menu-br').forEach((n) => n.addEventListener('click', () => {
  navMenu.classList.toggle('active');
}));


