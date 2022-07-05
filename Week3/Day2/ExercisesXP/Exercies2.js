// Retrieve the form and console.log it.
let frm = document.querySelector('form');
console.log(frm);
// Retrieve the inputs by their id and console.log them.
let firstName = document.getElementById('fname')
console.log(firstName);

let lastName = document.getElementById('lname')
console.log(lastName);

let btn = document.getElementById('submit')
console.log(btn);

// Retrieve the inputs by their name attribute and console.log them.

let fattrInputs=document.getElementById("fname").attributes["name"].value;
let lattrInputs=document.getElementById("lname").attributes["name"].value;
// console.log(fattrInputs);
// console.log(lattrInputs);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

let button = document.getElementById('submit');
