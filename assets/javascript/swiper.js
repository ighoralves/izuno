/* eslint-disable */ 
import Swiper from 'swiper';
  
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

export {swiper}; 