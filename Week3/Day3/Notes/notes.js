let titleOne = document.body.children[1].firstElementChild;
let titleTwo = titleOne.nextElementSibling;

let titleOneOther = document.getElementsByTagName("div")[0].getElementsByTagName("h1")[0];

let allTitle = document.getElementById("container").getElementsByTagName("h1");

//pass some CSS
let allTitleOther = document.querySelectorAll("#container h1");

// pass some CSS
let divAndH2 = document.querySelectorAll("#nav,#container");
// NodeList(2) [h2#nav, div#container]


// Add a paragraph to the div
// 1. Access the div - use the id
// 2. Create an element - create a p
// 3. Create a text node
// 4. Append the text to the paragraph
// 5. Append the paragraph to the div

let username = "John";

let containerDiv = document.getElementById("container");
let newpara = document.createElement("p");
let text = document.createTextNode(`Hello ${username}`);
newpara.appendChild(text);
containerDiv.appendChild(newpara)


// If the element is already in the DOM -> to access it and change it : textContent
// If the element is NOT already in the DOM -> to create it : createTextNode(data: DOMString)

// btn.addEventListener("click", function () {
// 	alert("you clicked")
// })

//1. retrieve the button
let btn = document.getElementById("btn");
let btntwo = document.getElementById("btntwo");

function clickBtnBlue(){
	document.body.style.backgroundColor = 'blue'
}

function clickBtnRed(){
	document.body.style.backgroundColor = 'red'
}

// passing the reference of the function
btn.addEventListener("click", clickBtnBlue)
btntwo.addEventListener("click", clickBtnRed)



let firstBtn = document.getElementById("btn");
let secondBtn = document.getElementById("btntwo");

function clickBtn(ev){
	// the ev object is passed idrectly when a callback function is calle after an event is fired
	// console.log(ev)

	//find what was clicked
	console.log(ev.target)
	// retrieve the name
	// getAttribute
	let value = ev.target.getAttribute("name");
	console.log(value)
	document.body.style.backgroundColor = value
}

// passing the reference of the function
firstBtn.addEventListener("click", clickBtn);
secondBtn.addEventListener("click", clickBtn);