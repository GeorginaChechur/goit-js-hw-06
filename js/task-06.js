const input = document.querySelector("#validation-input");
console.log(input)

const styleInput = document.querySelector("style")
console.log(styleInput)

const length = input.getAttribute('data-length');
console.log(length)

input.onblur = function () {
    if (input.value.length != parseInt(length)) {
        input.classList.remove('valid');
        input.classList.add('invalid');

    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
}


