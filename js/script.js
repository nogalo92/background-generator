var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random = document.querySelector("button");
color1.value = '#ff0000';
color2.value = '#ffff00';

setColor();
chromeButtonPositionFix();

color1.addEventListener('input', setColor);
color2.addEventListener('input', setColor);

random.addEventListener('click',setRandomColor);


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function setRandomColor(){
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setColor();
}

function setColor(){
  body.style.background = "linear-gradient(to right, "
  +color1.value
  + ", "
  +color2.value
  + ")";

  css.textContent = body.style.background + ';'
};

function chromeButtonPositionFix() {
if (navigator.appVersion.indexOf("Chrome/") != -1) {
color1.style.marginLeft = '10px'// modify button
  }
}
