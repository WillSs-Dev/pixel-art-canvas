const everyColor = [
  '#0048BA',
  '#B0BF1A',
  '#7CB9E8',
  '#C0E8D5',
  '#B284BE',
  '#FFBF00',
  '#D3212D',
  '#841B2D',
  '#FF9966',
  '#FDEE00',
  '#FF7F50',
  '#F0F8FF',
  '#FFFACD',
  '#FF69B4',
  '#B22222',
  '#7C0A02',
  '#2E5894',
  '#660000',
  '#008000',
  '#800080',
];
const colorSelectors = document.querySelectorAll('.color');
colorSelectors[0].style.backgroundColor = 'black';
colorSelectors[0].classList.add('selected');
const pixels = document.querySelectorAll('.pixel');
const changeColor = document.createElement('a');
changeColor.style.cssText = 'background-color: black';
const button = document.querySelector('#clear-board');
const selectors = document.querySelectorAll('.color');
const shuffle = document.querySelector('#shuffle');
const input = document.querySelector('#input');
const canvas = document.querySelector('#pixel-board');

function randomizeColors() {
  for (let key = 1; key < colorSelectors.length; key += 1) {
    const keys = colorSelectors[key];
    keys.style.backgroundColor = everyColor[Math.floor(Math.random() * everyColor.length)];
  }
}

function selectPixel() {
  const selectedPixel = this;
  selectedPixel.style.backgroundColor = changeColor.style.backgroundColor;
}

function changeCanvas(enter) {
  if (enter.key === 'Enter') {
    if (Number(input.value) > 8 || Number(input.value) < 4) {
      alert('Valor inválido');
    } else {
      for (let key = canvas.childElementCount; key > 0; key -= 1) {
        canvas.removeChild(canvas.lastElementChild);
      }
      canvas.style.maxWidth = `${input.value * 2 + 5}rem`;
      for (let i = 1; i <= Number(input.value * input.value); i += 1) {
        const newPixel = document.createElement('div');
        newPixel.classList.add('pixel');
        newPixel.addEventListener('click', selectPixel);
        canvas.appendChild(newPixel);
      }
    }
  }
}

function addPixelListeners() {
  for (let key = 0; key < pixels.length; key += 1) {
    pixels[key].addEventListener('click', selectPixel);
  }
}

function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function shuffler() {
  randomizeColors();
}

window.onload = randomizeColors;
addPixelListeners();
button.addEventListener('click', clearBoard);
shuffle.addEventListener('click', shuffler);
input.addEventListener('keypress', changeCanvas);

function selectColor() {
  for (let key = 0; key < colorSelectors.length; key += 1) {
    colorSelectors[key].classList.remove('selected');
  }
  changeColor.style.backgroundColor = this.style.backgroundColor;
  this.classList.add('selected');
}

for (let key = 0; key < selectors.length; key += 1) {
  selectors[key].addEventListener('click', selectColor);
}
