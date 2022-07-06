// Retrieve the form and console.log it.
let frm = document.querySelector('form');
// console.log(frm);
// Retrieve the inputs by their id and console.log them.
let firstName = document.getElementById('fname')
// console.log(firstName);

let lastName = document.getElementById('lname')
// console.log(lastName);

let btn = document.getElementById('submit')
// console.log(btn);

// Retrieve the inputs by their name attribute and console.log them.

let firstInputs = document.querySelector('[name~=fname]');
let lastInputs = document.querySelector('[name~=lname]');
console.log(firstInputs);
// console.log(lastInputs);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// // let ulId = document.getElementsByClassName('usersAnswer')[0];
//     console.log(ulId);

let myForm = document.forms[0];

myForm.addEventListener("submit", userInputs);

function userInputs(ev){
    ev.preventDefault();
    if(firstInputs.value.length > 0 || lastInputs.value.length > 0){
    let firstValue = myForm.elements.fname.value;
    let firstText = document.createTextNode(firstValue);
    let lastValue = myForm.elements.lname.value;
    let lastText = document.createTextNode(lastValue)
    let ulId = document.getElementsByClassName('usersAnswer')[0];
    
    let firstNameLi = document.createElement('li');
    firstNameLi.appendChild(firstText);

    let lastli = document.createElement('li');
    lastli.appendChild(lastText);
    
    ulId.appendChild(firstNameLi);
    ulId.appendChild(lastli);
    }
    firstInputs.value = "";
    lastInputs.value = "";
}