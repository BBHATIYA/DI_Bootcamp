// // The nested (inner) function is private to its containing (outer) function.

function outer() {
  // private
  function inner() {}

  inner();
}

outer();
// inner() //not defined because it was created in the local scope

// //---
// // Inner function has access to the outer function scope
// //---

// // // the outer func : checkName() is going to be ran once
// // //the inner func, addExclamation() is going to run 3 times
function checkName() {
  let name = "John";

  function addExclamation() {
    name += "!";
    console.log("in the addExclamation func", name);
  }

  addExclamation(); // in the addExclamation func John!
  addExclamation(); // in the addExclamation func John!!
  addExclamation(); // in the addExclamation func John!!!
}

checkName();
// addExclamation(); //not possible

// function card (){

//     function createCard (){

//     }

//     function addColor (){

//     }

//     function appendPage(){

//     }

//     createCard()
//     addColor()
//     appendPage()

// }

// card()


//-----------------------------
// ANONYMOUS FUNCTION
// ----------------------------

// // function () {
// // 	console.log("hello")
// // }

// // () => console.log("hello")


// // (function (name) {
// //     alert("Hello " + name);
// // })("Sarah");

// // (function(){
// //     alert("hello")
// // })()


// //------------------------
// //Example with the DOM
// //-------------------------

// (function (name) {
// 	let div = document.getElementById("container");
// 	let text = document.createTextNode(name);
// 	div.appendChild(text);
// })("John")


// Exercises

// 1. Add in your html file a div with an id of container
// 2. Create a self invoking function that takes one parameter the name of the user
// 3. When invoked, the function adds the name of the user in a sentence in the div

(function (username) {
    let div = document.getElementById("container");
    let text = document.createTextNode(`Hello ${username}`);
    div.appendChild(text)
})("John")

//with arrow function
(username => {
    let div = document.getElementById("container");
    let text = document.createTextNode(`Hello ${username}`);
    div.appendChild(text)
})("John")


//-----------------------------
// NESTED FUNCTION
// ----------------------------

// // //---
// // //Syntax
// // //---

// The nested (inner) function is private to its containing (outer) function.

// function outer() {

//     // private
//     function inner(){
    
//     }

//     inner()
// }

// outer()
// // inner() //not defined because it was created in the local scope


// // //---
// // // Inner function has access to the outer function scope
// // //---


// // // // the outer func : checkName() is going to be ran once
// // // //the inner func, addExclamation() is going to run 3 times
// function checkName() {
//     let name = "John";

//     function addExclamation() {
//         name += "!";
//         console.log("in the addExclamation func", 
//         	name);
//     };

//     addExclamation(); // in the addExclamation func John!
//     addExclamation(); // in the addExclamation func John!!
//     addExclamation(); // in the addExclamation func John!!!
// }

// checkName(); 
// // addExclamation(); //not possible




// // function card (){

// //     function createCard (){

// //     }

// //     function addColor (){

// //     }

// //     function appendPage(){

// //     }

// //     createCard()
// //     addColor()
// //     appendPage()

// // }

// // card()


// // addExclamation();

// // // ---
// // // nested functions help break down large functions
// // // ---


// // //-------------------------
// // //Exercise
// // //------------------------


// Exercise # Nested functions
// 1. Create a function named `starWars` that takes no parameter.
// 2. The function should declare a variable `characters` equal to an empty array
// 3. In the `startWars` function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"
// and push it to the `characters` array.
// 4. In the `startWars` function, create a function named `displayCharacter` 
// should display in the body the fullname of the characters,
// 5. Call the `createCharacter` function a few times inside the starWars function
// and call the `displayCharacter` function once
// Second Part
// 6. Change the `starWars` function, to take one parameter, the name of the
// spaceship the characters are in
// 7. The `displayCharacter` function should now display 
// in the body the fullname and spaceship
// of the characters
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens?

// characters = ["han solo", "shubaka smith"]
function starWars (spaceship) {
    const characters = [];

    function createCharacter (firstname, lastname="Smith"){
        let fullname = `${firstname} ${lastname}`;
        characters.push(fullname)
    }

    function displayCharacters(){
        characters.forEach((person) => {
            let div = document.createElement("div");
            let text = document.createTextNode(`${person} in in the spaceship ${spaceship}`);
            div.appendChild(text);
            document.body.appendChild(div);
        })
    }

    createCharacter("Han", "Solo");
    createCharacter("Shubaka");
    displayCharacters()
}

starWars("The Red Star")
starWars("The Blue Star")

// let list = ["a", "b", "c"]
// list.forEach(function (letter){
//     console.log(letter)
// })


// --------------
// REVIEW ON FUNCTIONS
// ---------------

//function declaration
nameFunction(args)

function nameFunction (params) {
	//statement
}

nameFunction(args)


//function expression
const nameOfFunctionExpression = function (params) {
	//statement
}

nameOfFunctionExpression(args)

// --------------
// ARROW FUNCTIONS
// ---------------

//arrow function
const nameOfFunctionExpression = (params) => {
	//statement
}

// if it's one line arrow function
const nameOfFunctionExpression = (params) => //statement

const calculus = (a,b) => a+b
calculus(2,6)

//arrow function with no parameter
const sayHello = () => alert("hello");

//arrow function with 1 parameter
const sayHelloUser = (username) => alert("hello"+username)
const sayHelloUser = username => alert("hello"+username)

// syntax arrow function
// A quick and clear way to create a function
// automatically returns a result
const calculus = (a,b) => a+b
calculus(2,6)
// the function has 2 inputs, a and b 
// and returns the output a + b
// Used a lot as callback function : function that is an argument of another function

btn.addEventListener("click", () => alert("hello"))


// --------------
// REVIEW ON FOR EACH
// ---------------

const colors = ["blue", "red", "yellow"];

colors.forEach((color) => console.log(color))
// For each color in the colors array
// we execute an anonymous arrow function
// that console.log the color

// the forEach method, takes a function as an argument
// this function can take 3 parameters: the element, the index and the whole array

colors.forEach((color, i) => console.log(`the ${i+1} color is ${color}`))
colors.forEach((color, i, arr) => console.log(`the ${i+1} color is ${color} in the ${arr}`))

// the 1 color is blue in the blue,red,yellow
// the 2 color is red in the blue,red,yellow
// the 3 color is yellow in the blue,red,yellow

// --------------
// REVIEW ON TERNARY OPERATOR
// ---------------

// ternary operator : create an if/else block quicker and clearer
function checkAge (ageUser) {
	if(ageUser>18){
		alert("you can drive")
	} else {
		alert("you cannot drive")
	}
}

checkAge(21)

function checkAge (ageUser) {
	ageUser>18 ? alert("you can drive") : alert("you cannot drive")
}

checkAge(21)

// --------------
// Ternary operator with arrow
// ---------------

const checkAge = (ageUser) => ageUser>18 ? alert("you can drive") : alert("you cannot drive")
checkAge(21)