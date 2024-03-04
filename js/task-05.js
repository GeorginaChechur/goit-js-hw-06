const inputText = document.querySelector('#name-input');
console.log(inputText)

const text = document.querySelector('h1 span')
console.log(text)


// inputText.oninput = function() {
//     text.innerHTML = inputText.value;
//     console.log(inputText)
// };

inputText.oninput = function () {
    if (inputText.value !== '') {
        text.innerHTML = inputText.value;
    } else {
        text.textContent = 'Anonymous';
    }
};