const nav = document.querySelector('nav');
const main = document.querySelector('main');
const menu = document.querySelector('menu')

nav.addEventListener('click', function(e){
  const btn = e.target.closest('button');
  if(!btn) return;
  nav.classList.toggle('nav-rotate');
  main.classList.toggle('rotate');
  menu.classList.toggle('menu-container')
  menu.style.visibility = 'visible'
})
