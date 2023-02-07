const ham = document.querySelector('.menu-ba');
const x = document.querySelector('.menu-2');
const navMenu = document.querySelector('.menu-line');

ham.addEventListener('click', () => {
  // navMenu.classList.toggle('active');
  if (navMenu.style.display === 'none') {
    navMenu.style.display = 'block'
  }
});
x.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.menu-br').forEach((n) => n.addEventListener('click', () => {
  navMenu.classList.toggle('active');
}));
let m=7;
let y=5;
console.log(m+y);

