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
