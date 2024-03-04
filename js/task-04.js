
const number = document.getElementById('value');
console.log(number);

const decrease = document.querySelector('button[data-action="decrement"]');
console.log(decrease);

const increase = document.querySelector('button[data-action="increment"]')
console.log(increase)

let counterValue = 0; 


function onclick(newValue) {
    counterValue = newValue;
    number.textContent = counterValue;
}

decrease.addEventListener('click', function() {
  onclick(counterValue - 1);
});

increase.addEventListener('click', function() {
  onclick(counterValue + 1);
});

// decrease.addEventListener('click', onclick);

// function onclick(evt) {
//     // console.log(evt.currentTarget);
//     const number = document.querySelector("#value");
//     // console.log(number);
//     const counterValue = parseInt(number.textContent) - 1;
//     console.log(counterValue)
//     number.textContent = counterValue;
// }


// increase.addEventListener('click', onclic);

// function onclic(evt) {
//     console.log(evt.currentTarget);
//     const num = document.querySelector("#value");
//     // console.log(number);
//     const counterValue = parseInt(num.textContent) + 1;
//     console.log(counterValue)
//     num.textContent = counterValue;
// }
