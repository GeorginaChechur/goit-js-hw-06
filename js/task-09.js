function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorValue = document.querySelector(".color")
console.log(colorValue)
const changeButton = document.querySelector(".change-color");
const body = document.querySelector("body")

changeButton.addEventListener('click', function () {
  colorValue.textContent = getRandomHexColor();
  body.style.background = getRandomHexColor();
}); 

