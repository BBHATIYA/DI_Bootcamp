// 1. Use the firstElementChild / firstChild property to access an element.
// 2. Use the lastElementChild / lastChild  property to access an element.
// 3. Use the nextElementSibling / nextSibling  property to access an element.
// 4. Use the previousElementSibling / previousSibling  property to access an element.
// 5. Use the parentNode property to access an element.
// 6. Use the childNodes property to access a group of child elements.

let divs = document.getElementById('page');

let p = document.createElement('p');

divs.appendChild(p);

console.log(divs);