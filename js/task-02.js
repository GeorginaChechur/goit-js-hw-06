const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients')
console.log(ul)


ingredients.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item
  li.classList.add('item')
  // console.log(li)
  ul.appendChild(li)
});


