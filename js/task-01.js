const categories = document.querySelectorAll('.item')

console.log(`Number of categories: ${categories.length}`);

categories.forEach(element => { 
    // const categoryName = element.querySelector('h2').textContent;
    const categoryItemsCount = element.querySelectorAll('ul li').length;
    
    console.log(`Category: ${element.childNodes[1].textContent}`)
    console.log(`Element: ${categoryItemsCount}`)
});






