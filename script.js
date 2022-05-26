/*eslint-disable*/
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
const pixels = document.querySelectorAll('.pixel');
const changeColor = document.createElement('a');
changeColor.style.cssText = 'background-color: black';
const button = document.querySelector('#clear-board');
const selectors = document.querySelectorAll('.color');

function randomizeColors() {
  colorSelectors[0].style.backgroundColor = 'black';
  colorSelectors[0].classList.add('selected');
  for (let key = 1; key < colorSelectors.length; key += 1) {
    const keys = colorSelectors[key];
    keys.style.backgroundColor =
      everyColor[Math.floor(Math.random() * everyColor.length)];
  }
}

function selectPixel() {
  const selectedPixel = this;
  selectedPixel.style.backgroundColor = changeColor.style.backgroundColor;
}

function addPixelListeners() {
  for (let key = 0; key < pixels.length; key += 1) {
    pixels[key].id = key + 1;
    pixels[key].addEventListener('click', selectPixel);
  }
}

function clearBoard() {
  for (const i in pixels) {
    pixels[i].style.backgroundColor = 'white'
  }
}

window.onload = randomizeColors();
addPixelListeners();
button.addEventListener('click', clearBoard);

function selectColor() {
  for (const key of colorSelectors) {
    key.classList.remove('selected');
  }
  changeColor.style.backgroundColor = this.style.backgroundColor;
  this.classList.add('selected');
  console.log(changeColor);
}

for (let key = 0; key < selectors.length; key += 1) {
  selectors[key].addEventListener('click', selectColor);
}
