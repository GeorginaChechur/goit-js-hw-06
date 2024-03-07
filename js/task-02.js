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

const fragment = document.createDocumentFragment();

ingredients.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item
  li.classList.add('item')
  // console.log(li)
  fragment.appendChild(li);

}); 

ul.appendChild(fragment);


