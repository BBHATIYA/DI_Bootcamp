// Add a “light blue” background color and some padding to the <div>.
let color = document.getElementsByTagName('body');

console.log(color[0].children[0].style.backgroundColor = "red");
console.log(color[0].children[0].style.padding = "15px");


// Do not display the <li> that contains the text node “John”.
// let hideJohn = document.getElementsByTagName("ul");
let hideJohn = document.getElementsByTagName('li');

console.log(hideJohn[0].style.display = "none");

// Add a border to the <li> that contains the text node “Pete”.
let border = document.getElementsByTagName("li")

console.log(border[1].style.border = "2px solid black");
// Change the font size of the whole body.

let fontChange = document.getElementsByTagName('body')

console.log(fontChange[0].style.fontSize = "30PX");

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
