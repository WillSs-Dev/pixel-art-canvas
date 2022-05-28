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
const changeColor = document.createElement('a');
changeColor.style.cssText = 'background-color: black';
const clearButton = document.querySelector('#clear-board');
const selectors = document.querySelectorAll('.color');
const shuffle = document.querySelector('#shuffle');
const input = document.querySelector('#board-size');
const canvas = document.querySelector('#pixel-board');
const pixels = canvas.children;
const chgCanvasBtn = document.querySelector('#generate-board');

function randomizeColors() {
  for (let key = 1; key < colorSelectors.length; key += 1) {
    const keys = colorSelectors[key];
    keys.style.backgroundColor = everyColor[Math.floor(Math.random() * everyColor.length)];
  }
}

// Drawing functions

function selectPixel() {
  const selectedPixel = this;
  selectedPixel.style.backgroundColor = changeColor.style.backgroundColor;
}

function addPixelListeners() {
  for (let key = 0; key < pixels.length; key += 1) {
    pixels[key].addEventListener('click', selectPixel);
  }
}

function createCanvas() {
  for (let i = 0; i < (input.value * input.value); i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    canvas.appendChild(pixel);
    addPixelListeners();
  }
  if (canvas.childElementCount !== (input.value * input.value)) {
    canvas.removeChild(canvas.firstChild);
  }
}

function changeCanvas() {
  if (input.value < 5 || input.value > 50 || input.value === 0) {
    alert('Board inválido!');
  } else {
    canvas.style.setProperty('--pixelNum', input.value);
    for (let i = canvas.childElementCount; i > 0; i -= 1) {
      canvas.removeChild(canvas.firstChild);
    }
    createCanvas();
  }
  input.value = '';
}

function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function shuffler() {
  randomizeColors();
}

// Event listeners and importat functions callers

window.onload = randomizeColors;
addPixelListeners();
createCanvas();
clearButton.addEventListener('click', clearBoard);
shuffle.addEventListener('click', shuffler);
chgCanvasBtn.addEventListener('click', changeCanvas);

// Selects a new color from the pallete

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
