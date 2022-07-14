const btnMobile = document.getElementById('Btn-mobile'); 

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('Nav');
  nav.classList.toggle('active'); 
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
  
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});