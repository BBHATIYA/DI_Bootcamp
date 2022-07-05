// //retrieve the form
// let formBook =  document.forms[0];
// // title is the id of the input
// let inputTitle = formBook.elements.title;
// // find the value of the title
// let inputTitleValue = inputTitle.value;

// end results

let books = [];

// // when we work with form we need to SUBMIT the form

// 1.retrieve the form
let formBookFirst = document.forms[0];

// 2. Add event listener to the FORM
formBookFirst.addEventListener("submit", addBook);

function addBook (ev) {
	ev.preventDefault(); //prevent the form from submitting
	let objBook = {
		title : formBookFirst.elements.title.value,
		author : formBookFirst.elements.author.value
	}
	books.push(objBook);
	console.log(books)
}


//retrieve the button
let btndisplay = document.getElementById('display');
btndisplay.addEventListener("click", displayBooks);

function displayBooks () {
	let div = document.getElementById("container");
	let ul = document.createElement("ul");
	for (let i = 0; i<books.length; i++){
		let eachbook = books[i];
		let li = document.createElement("li");
		let text = document.createTextNode(`${eachbook["title"]} : ${eachbook["author"]}`)
		li.appendChild(text);
		ul.appendChild(li)
	}
	div.appendChild(ul)
}


// check every letter of an input

let formBook = document.forms[0];
let inputtitle = formBook.elements.title
inputtitle.addEventListener("input", checkLetter);

function checkLetter(){
	console.log(inputtitle.value)
}