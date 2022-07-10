// -----------------------
// --- Function declaration & invocation
// -----------------------

// creating, declaring
function sayHello ()  {
	console.log("Hello")
}

// call, invoke
sayHello()


// -----------------------
// --- Function Parameters & Arguments
// -----------------------

function sayHello ()  {
	console.log("Hello John")
}

function sayHelloTwo ()  {
	console.log("Hello David")
}

sayHello()
sayHelloTwo()

// syntax explanation
function sayHelloUser (parameter)  {
	console.log("Hello " + parameter);
}

sayHelloUser(argument)


function sayHelloUser (username)  {
	console.log("Hello " + username);
}

sayHelloUser("John")
sayHelloUser("David")

function sayHelloUserColor (username, favcolor)  {
	console.log(`Hello ${username} your favorite color is ${favcolor}`);
}


sayHelloUserColor("John", "blue")

// pass whatever data type
function sayHelloUserColors (username, favcolors)  {
	console.log(`Hello ${username}`);
	console.log(`your favorite color are ${favcolors[0]} and ${favcolors[1]}`);
	// for(let color of favcolors){
	// 	console.log(color)
	// }

	for (let i = 0; i<favcolors.length; i++){
		console.log(favcolors[i])
	}
}


sayHelloUserColors("John", ["blue", "red"])

user is not defined
function sayHelloUserTwo (username)  {
	console.log("Hello " + user);
}

sayHelloUserTwo("John")


// -----------------------
// --- Function default parameter
// -----------------------

function sayHelloUserThree (username, lastname="Smith")  {
	console.log(`Your name is ${username} ${lastname}`);
}

// sayHelloUserThree("John") // John Smith
sayHelloUserThree("John", "ABC") //John ABC


// // -----------------------
// // --- Scopes
// // -----------------------

// // --- 1st example
// global variable
let username = "John"; //1. creating variable

// Local scope - function scope
// 2. creating the function
function checkName (){
	console.log("In the function",username); // in the function John
}

// 3. outside the function John
console.log("outside the function", username); 

// 4. Invoking the function
checkName()

// Global variables are accessible inside the local scope
// Global variables are accessible inside the global scope
// Good : the global variable can be accessed from everywhere 
// Problem, the value of the variable can be modified by every program in my code


// //  --- 2nd example

let userName = "John"; //1.

// 2. Function created
function checkuserName (){
	userName = "Sara"; //4.1 Modifying the global variable userName to Sara
	console.log("In the function",userName); //4.2 In the function Sara
}

// 3. before the function John
console.log("before the function", userName); 

// 4. Inkove the function
checkuserName() 

//5. after the function Sara
console.log("after the function", userName); 

// I can modify a global variable in the local scope
// and it will modify this variable globally


// // -----------------------
// // FUNCTION SCOPE
// // -----------------------

// // --- 3rd example

// // When variables are DECLARED in a function scope
// // they are undefined in the global scope
// // let, const or var => the same thing


// 1. Create the function
function checkUser (){
	// 2.1 We create 3 local variable
	let age = 12;
	var ownerName = "Sara";
	const pet = "dog";
	console.log("In the function",ownerName, age, pet);
	//2.2 In the function Sara, 12, dog
}

// 2. Invoke the function
checkUser();

// 3.
console.log(" age : ", age); //age undefined
console.log(" pet : ", pet); //pet undefined
console.log(" ownerName : ", ownerName); //ownerName undefined

// When I declare a variable inside a function
// it becomes a local variable, 
// local variable cannot accessed outside of the function
// local variable cannot accessed in the global scope


// let, const and var 
// are function scoped - if I created a local variable using let or const
// it won't accessible in the global scope


// let age = 12;
// age = 30;

// const PI = 3.14;
// PI = 5 //impossible


// // -----------------------
// // BLOCK SCOPE
// // -----------------------

// // --- 4th example

// 1. Enter the if
if (1>0){
	// 2. declaring the variable user
	const user = "male";
	let age = 30;
}

// 3. 
console.log("the user is :", user, age) 

// when I declared local variable
// in a block scope
// using let or const, 
// this variable will be undefined outside
// let and const are block scope


// 1. enter the if
if (1>0){
	//declaring a variable color
	var color = "blue";
}

// the color is blue
console.log("the color is :", color)

// when I declared local variable
// in a block scope
// using var, 
// this variable will be defined outside
// var is not block scope









for (var i = 0; i<3; i++){
	console.log("inside the loop", i);
}

console.log("outside the loop", i);



// // let and const are block scope variable
// // If I declared a variable using let or const in a BLOCK SCOPE
// // it won't be accessible outside

// // var ISNT block scope variable
// // If I declared a variable using var in a BLOCK SCOPE
// // it WILL BE accessible outside



// // lexical scope : block scope in function scope

1. Creating the function
function checkName (){
	//2.1 create username which is a local variable
	let username = "Sara";
	//2.2. I enter the if, because the condition is true
	if (1>0){
		//2.3 Create age which is a local variable
		let age = 23;
		//2.4 In the IF username is Sara
		console.log("In the IF username is :", username)
		// 2.5 In the IF, age 23
		console.log("In the IF, age : ", age);
	}
	//2.6 In the function, age undefined
	console.log("In the function, age : ",age);
}

// 2. invoke the function
checkName(); 

//3. age : undefined
console.log("age : ", age) 
//4. username : undefined
console.log("username : ", username)

// // -- function scope - same variable name

1. declare a global variable
let computer = "HP";

// 2. Create the function
function checkComputer (){
	//4.1 declare a local variable named computer
	let computer = "Apple";
	//4.2 display the local In the function",Apple
	console.log("In the function",computer);
	// 4.3 modifying the local variable to Lenovo
	computer = "Lenovo";
	// 4.4 display the local v",Lenovo
	console.log("Still in the function",computer);
}

// 3. "before the function", HP
console.log("before the function", computer);

// 4. Invoke the function
checkComputer();

// 5. after the function", HP
console.log("after the function", computer);


// // WE CANNOT DECLARE 2 VARIABLES WITH THE SAME NAME IN THE SAME SCOPE
// // --> ERROR


// // WE CAN DECLARE 2 VARIABLES WITH THE SAME NAME IN TWO DIFFERENT SCOPES
// // --> OK


// //---If a same-named variable is declared inside the function 
// // then it shadows the outer one. 
// //---if a global variable has the same name as a local variable
// //---The outer variable is only used if there’s no local one.


// // -----------------------
// // Exercises
// // -----------------------










// // // --------------------
// // // --- Functions Declaration
// // // --------------------
 
// //1. Invoke
// squareOne(2)

// // 2. Create
// // HOISTED TO THE TOP OF THE SCOPE
// function squareOne (x){
// 	console.log("square")
// 	return x * x;
// }

// // 3. Invoke it again
// squareOne(2)


// // // // --------------------
// // // // --- Functions expression
// // // // --------------------

// // // // anonymous function 
// // // // assigned to a variable

// // squareTwo(2);//not possible

// // // // NOT HOISTED
// const squareTwo = function (x) {
// 	console.log("square")
// 	return x * x;
// }

// squareTwo(2);

// // // -- Use with callbacks
// // // function expression - anonymous 
// btn.addEventListener("click", 
// 	function () {
// 		alert("hello")
// 	}
// )


// // // --------------------
// // // --- Anonymous arrow function
// // // --------------------

// //anonymous
// // function (a) {
// // 	return a + 100;
// // }

// // // // The same as
// // (a) => {
// //   return a + 100;
// // }

// // // in 1 line, the arrow function returns the value
// // (a) => a + 100;

// // a => a + 100;

// // // // --------------------
// // // // --- ES6 arrow functions
// // // // ---------

// // //function declation 
// squareOne(2);

// // function declaration
// function squareOne (x){
// 	return x * x;
// }

// //function expression
// const squareOne = function (x) {
// 	return x * x;
// }

// //arrow function
// const squareOne = (x) => x*x
// let result = squareOne(2);
// console.log(result)

// // with different number of parameters
// const squareA = (x) => x*x;
// const squareB = x => x*x;
// // more than 1 parameter
// const squareC = (x,y) => x*y;
// // no parameters
// const squareD = () => "hello";

// btn.addEventListener("click", 
// 	function () {
// 		alert("hello")
// 	}
// )

// //same as
// btn.addEventListener("click", () => alert("hello"))

// //If the function has more than 1 line, we need square brackets and return
// const squareOne = (x) => {
// 	x = x + 2
// 	return x*x
// }





/*----------------- TERNARY OPERATOR --------------------*/

// function getTemp (temp) {
// 	if (temp > 20) {
// 		return "Summer";
// 	} else {
// 		return "Winter";
// 	}
// }

// getTemp(24)

// // expression ? if the expression is true : if the expression is not true
// function getTempTwo (temp) {
// 	let season = temp > 20 ? "Summer" : "Winter";
// 	return season;
// }

// getTempTwo(24)

// const getTempThree = (temp) => temp > 20 ? "Summer" : "Winter";
// getTempThree(24)


/*-------------------Array mathods -------------------------*/

// //---------------------------------
// // Array methods and arrow function
// //---------------------------------

// with for loop
// let classmates = ["Josh", "Lily", "Sophie", "Mark"]; 

// for (let i =0; i< classmates.length; i++){
// 	console.log(classmates[i])
// }

// for (let student of classmates){
// 	console.log(student)
// }

// for (let i =0; i< classmates.length; i++){
// 	showStudent(classmates[i])
// }

// function showStudent (student) {
// 	console.log(student)
// }


// for each

let classmates = ["Josh", "Lily", "Sophie", "Mark"]; 

// //with callback anonymous function
//with function expression
classmates.forEach(
	function (element, index) {
		console.log(`${element} is at the index ${index}`)
	}
)

//1st loop
// Josh is at the index 0

// //2nd loop
// Lily is at the index 2

//anonymous arrow function
classmates.forEach((element, index) => console.log(`${element} is at the index ${index}`))

//with a named function
const checkStudent = (element, index) => console.log(`${element} is at the index ${index}`)
classmates.forEach(checkStudent);

// EXERCISE

// Use for each and arrow function, 
// to add a "&" after Sophie and a "!" after all the other names
// the result is ['Josh!', 'Lily!', 'Sophie&', 'Mark!']
// Use tenary operator

classmates.forEach((element, index) => {
	if(element === "Sophie"){
		classmates[index] += "&"
	}else{
		classmates[index] += "!"
	}
})

console.log(classmates)

//ternary operator
classmates.forEach((element, index) => element === "Sophie" ? classmates[index] += "&" : classmates[index] += "!")
// console.log(classmates)

//same with the array parameter
classmates.forEach((element, index, array) => element === "Sophie" ? array[index] += "&" : array[index] += "!")
// console.log(classmates)

// change the "red" to "lightred"
// let colors = ["blue", "red"];
// colors[1] = "lightred"

// syntax
// arrayname.forEach(function)

// // ------------------
// // SOME & EVERY
// // ------------------

// arrayName.some((element,index,array) => {
// 	console.log("num = ", num);
// 	console.log("ind = ", ind);
// 	console.log("array = ", array);
// })

// at least one item is bigger than 5
let myArr = [12,2,4,6];

// let result = myArr.some((element) => {return element>5})
//same
let result = myArr.some((element) => element>5)
console.log(result)

// let result = myArr.some((element) => {
// 	console.log("element is ", element)
// 	return element>5
// })
// console.log(result)

// all the items is bigger than 5
let resultSecond = myArr.every((element) => {
	console.log("element is ", element)
	return element>5
})
console.log(resultSecond)



/*-------------------function return-----------------*/

//------------------
// return
//------------------

// first possibility

function makeChocolate () {
		let type = "dark";
		return type;
}

//return : means I give to the function a result

function calculatePrice (){
	let chocolateType = makeChocolate(); 
	//chocolateType = "dark"
	let price;
	if (chocolateType === "dark"){
		price = 2;
	} else {
		price = 4;
	}
	console.log(price)
}

function favChocolate () {
	let favchoco = makeChocolate(); 
	//favchoco = "dark"
	if (favchoco === "dark"){
		console.log("Yeah")
	} else {
		console.log("Nope")
	}
}


calculatePrice()
favChocolate()


// Second possibility

// 1. create the function
function makeChocolate () {
	// 2.1 Create a local variable
	let type = "dark";
	//2.2 Invoking the calculatePrice function
	calculatePrice(type);	
}

// 2. invoke it
makeChocolate()

function calculatePrice (chocotype){
	let price;
	if (chocotype === "dark"){
		price = 2;
	} else {
		price = 4;
	}
	console.log(price)
}







// a console.log is not a return

function say(message) {
	let sentence = `<I say ${message}>`;
  console.log("The sentence is : ", sentence);
}

say("Hello");



function say(message) {
    let sentence = `<I say ${message}>`;
    return sentence;
    console.log("hello") //impossible
}

let userSentence = say("Hello"); 
// userSentence = "<I say Hello>"


document.body.textContent = "The userSentence is : ", userSentence;

// //------------------
// // multiple return statements in the function 
// //------------------

function compare(a, b, operator) {
    if (operator === "+") {
        return a+b;
    } else if (operator === "-") {
        return a-b;
    } else {
    		return "ERROR";
    }
    console.log("Hello"); //will never be executed
}

let value = compare(1,2,"+");
//value = 3
console.log(value)

let valueSecond = compare(1,2,"x");
//valueSecond= "ERROR"
console.log(valueSecond)









// example

// 1. Create function
function checkAge(ageStudent) {
  if (ageStudent >= 18) {
    return true;
  } else {
    return false;
  }
}

// 2. Create a global variable
let age = 17;

// if 
if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}

// // --------------------
// // Returning multiple values from a function
// // -----------------

// //OBJECT

function detailsUser(){
	let username = "John";
	let age = 12;
	return {
		userN : username,
		ageN : age,
	}
}

let details = detailsUser();
console.log("details: ", details)
let usernameFromFunction = details["userN"];
let ageFromFunction = details["ageN"];

// Object

function detailsUser(){
	//local variables
	let username = "John";
	let age = 12;
	return {
		username ,
		age	
	}
}

let detailsMore = detailsUser();
console.log(detailsMore)
document.body.textContent = `${detailsMore["username"]} is ${detailsMore["age"]} years old`


// // ARRAY

function detailsProduct(){
	let product = "jeans";
	let price = 10;
	return [product, price];
}

let myProduct = detailsProduct();
// console.log(myProduct)
document.body.textContent = `${myProduct[0]} is ${myProduct[1]} years old`
