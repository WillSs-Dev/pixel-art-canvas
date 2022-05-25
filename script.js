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
  '#7C0A02',
  '#2E5894',
  '#660000',
  '#008000',
  '#800080',
];

function randomizeColors() {
  const colorSelectors = document.querySelectorAll('.color');
  colorSelectors[0].style.backgroundColor = 'black'
  for (let key = 1; key < colorSelectors.length; key += 1) {
    const keys = colorSelectors[key];
    keys.style.backgroundColor =
      everyColor[Math.floor(Math.random() * everyColor.length)];
  }
}

const changeColor = document.createElement('a');
changeColor.style.cssText = 'background-color: black';

function selectPixel() {
  const selected = this;  
  if (selected.classList == 'pixel') {
    selected.classList.add('selected');
    selected.style.backgroundColor = changeColor.style.backgroundColor
  }else if(selected.classList == 'pixel selected'){
    selected.style.backgroundColor = changeColor.style.backgroundColor
  }
}

function addPixelListeners() {
  const pixels = document.querySelectorAll('.pixel');
  for (let key = 0; key < pixels.length; key += 1) {
    pixels[key].id = key + 1;
    pixels[key].addEventListener('click', selectPixel);
  }
}

window.onload = randomizeColors;
addPixelListeners();

function selectColor() {
  changeColor.classList.add('selected');
  changeColor.style.backgroundColor = this.style.backgroundColor;
  console.log(changeColor);
}

const selectors = document.querySelectorAll('.color');
for (let key = 0; key < selectors.length; key += 1) {
  selectors[key].addEventListener('click', selectColor);
}
