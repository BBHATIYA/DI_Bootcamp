// Exercise 1 : Divisible By Three
// Instructions
let numbers = [123, 8409, 100053, 333333333, 7]
// Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log true or false.

for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 3 == 0){
        console.log(true);
    } else if(numbers[i] % 3 != 0){
        console.log(false);
    }
}


// 2 : Attendance

// Given the object above where the key is the student’s name and the value is the country they are from.

// Prompt the student for their name.

// If the name is in the object, console.log the name of the student and the country they come from.
// For example: "Hi! I'm [name], and I'm from [country]."
// Hint: You don’t need to use a for loop, just look up the statement if ... in

// If the name is not in the object, console.log: "Hi! I'm a guest."

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

// let key = ["randy", "karla", "wendy", "norman", "sam"];

let studentAnswer = prompt("What is your name?");
let correct = (studentAnswer in guestList)
if(studentAnswer === correct){
    console.log(`$Hi! I am ${studentAnswer}, and I'm form ${guestList.karla(studentAnswer)}.`)
}



 

