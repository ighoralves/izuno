/* eslint-disable */ 
const btnMobile = document.getElementById('Btn-mobile'); 

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('Nav');
  nav.classList.toggle('active'); 
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);