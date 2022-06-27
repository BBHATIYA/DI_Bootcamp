// // Exercise 1
// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

// let age = prompt('What is your age?');

// if (age > 18){
// alert("Powering On. Enjoy the ride!");
// } else if (age == 18){
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// } else{
//     alert("Sorry, you are too young to drive this car. Powering off");
// }




// Exercise 2

// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' ); // expected output
//     break;
//   case 5:
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }



// Exercise 3


// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it

// let a = 2 + 2;

// switch (a) {
//   case 4:
//     alert('Right!'); // expected output
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }
 


// Class Exercise

// let userCart = {
// 	username : "John",
// 	password: 1234,
// 	isUserSignedIn : true,
// 	cart : {
// 		apple : 2,
// 		banana : 1,
// 		pear : 5,
// 	},
// 	prices : {
// 		apple : 0.5,
// 		banana : 0.8,
// 		pear : 0.2
// 	}
// };

// // 1. Add the lastname Smith to the object
// userCart["lastname"] = "Smith";

// // 2. Change the price of the pear, so it will contain the Taxes. (17%)
// userCart['prices']["pear"] = userCart['prices']["pear"]*1.17;

// // userCart['prices']["pear"] *= 1.17; same as above
// // 3. Ask the user for the fruit he wants between Apple, Banana and Pear.
// // Make sure that your code accept all type of strings,
// // for example "Banana" or "banana" or "BaNaNA"
// let userFruit =prompt("Which fruit do you want?").toLowerCase();

// // 4. Console.log the price for the specific fruit the user wants

// console.log(userCart["prices"][userFruit]);


// Exercise 2

let userCartLog = {
	username : "Johnny",
	password: 12345,
	isUserSignedIn : true,
};
// PART I
// 1. If the user is SignedIn - show him his name and password
// 2. If not - alert the user "you need to sign in"

// PART II
// 2nd exercise
// 1. If the user is Johnny AND his password is 12345 - alert him "You are signed in"
// 2. If the user is Johnny OR his password is 1234 - alert him "One credential is false"
// 3. Else,alert the user "you need to sign in

if(userCartLog.isUserSignedIn){
    console.log(`your username ${userCartLog.username} and password is${userCartLog.password}`);
} else{
    console.log("You need to sign in");
};

if(userCartLog.username === "Johnny" && userCartLog.password === 12345){
    console.log("You are signed in")
} else if(userCartLog.username === "Johnny" || userCartLog.password == 1234){
    console.log("One credential is false")
} else {
    console.log("You need sign in")
}




