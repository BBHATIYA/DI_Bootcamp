// Using a DOM property, retrieve the h1 and console.log it.
let hTag = document.getElementsByTagName('h1')[0];

// console.log(hTag);

// Using DOM methods, remove the last paragraph in the <article> tag.
let removeParagraph = document.getElementsByTagName('p');

// removeParagraph[3].remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let colorEvent = document.querySelector('h2');

colorEvent.addEventListener("click", colorChange)
// console.log(colorEvent);

function colorChange(){
    colorEvent.style.backgroundColor = "red";
}

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let hideElement = document.querySelector('h3');
// console.log(hideElement);
hideElement.addEventListener("click", hiddenElement);

function hiddenElement(){
    hideElement.style.visibility = "hidden";
}

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let btn = document.querySelector('button');
let fontChange = document.querySelectorAll('p');
// console.log(fontChange);
let converArr = Array.from(fontChange)
btn.addEventListener("click", fontSiz);

function fontSiz(){
for (let i = 0; i < converArr.length; i++) {
    converArr[i].style.fontSize = "20px"; 

}
}


// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
