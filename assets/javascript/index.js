const btnMobile = document.getElementById('Btn-mobile'); 

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('Nav');
  nav.classList.toggle('active'); 
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


const balls = document.querySelector ('.Balls');
const quants = document.queryselectorAll ('.Slide .Image');
const first = 0;
const imagem = document.getElementById ('first');

for(let i=0; i < quant.length; i++) {
  const div = document.createElement('div');
  div.id = 1;
  balls.appendChild(div);
}
document.getElementById ('0').classList.add('ImgAtual');

const pos = document.querySelectorAll('.Balls div');

for(let i=0; i < pos.length; i++) {
  pos[i].addEventListener('click', () =>{
    first = pos[i].id
    Slides();
  })
}

function Slides() {
  if(first >= quant.length) {
    first = 0;
  } else if(first < 0){
    first = quant.length - 1;
  }
  document.querySelectorAll('ImgAtual').classList.remove('ImgAtual');
  imagem.style.marginLeft = -250*first + 'px';
  document.getElementById9(first).classList.add('ImgAtual')
}
Slides();
