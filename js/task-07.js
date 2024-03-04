const range = document.querySelector('#font-size-control')
console.log(range)

const text = document.querySelector('#text')
console.log(text)

let rangeMin = range.getAttribute('min');
console.log(rangeMin)

let rangeMax = range.getAttribute('max');
console.log(rangeMax)


range.oninput = function () {
    console.log(text.style.fontSize = range.value + 'px')
}

