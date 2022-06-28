// Exercise 1 : List Of People

let people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
    people.shift()
    // console.log(people);

// Write code to replace “James” to “Jason”.
    people.splice(2,1,"Jason");
    // console.log(people);
// Write code to add your name to the end of the people array.
    people.push("Bhavesh")
    // console.log(people);

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
    console.log(people.indexOf("Mary"));

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

    people.slice(1);
    console.log(people);

// Write code that gives the index of “Foo”. Why does it return -1 ?
    console.log(people.indexOf("Foo"));// -1 because is not exist in array.

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

let last = people[people.length-1];
// console.log(last);


// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let i=0; i<people.length; i++){
    console.log(people[i]);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.
for (let i=0; i<people.length; i++){
    console.log(people[i]);
    if(people[i]==="Jason"){
        break;
    }
    
}


// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
let colors = ["red", "black", "blue", "green", "yellow"];
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for(let i=0; i<colors.length; i++){
    console.log(`My #${[i]} choice is ${colors[i]}`)
}
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus


// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?


// do {
//   var i = prompt("Guess the number")
  
// }
// while (i < 10);

// Exercise 4 : Building Management
// Copy and paste the above object to your Javascript file.

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

// Console.log the number of floors in the building.
console.log(building["numberOfFloors"])
// Console.log how many apartments are on the floors 1 and 3.
console.log(`on the 1st floor there are ${building["numberOfAptByFloor"]["firstFloor"]} apartments and on the 3rd floor there are ${building["numberOfAptByFloor"]["thirdFloor"]} apartments`)
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`the name of the second tenant ${building['nameOfTenants'][1]} and the number of rooms he has ${building["numberOfRoomsAndRent"].dan[0]} `)
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let saraDavidRent = building["numberOfRoomsAndRent"]["sarah"][1] + building["numberOfRoomsAndRent"]
["david"][1];
let danRent = building["numberOfRoomsAndRent"]["dan"][1];
// console.log(danRent)
// console.log(saraDavidRent)
if(saraDavidRent> danRent){
    console.log(building['numberOfRoomsAndRent']['dan'][1]=1200);
}

console.log(building["numberOfRoomsAndRent"]["dan"][1]);// here is increase Dan's rent.


// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

let family = {
    familyMembers : 6,
    kidsInFamily : 3,
    fName:"Bhatiya"
}

for (let key in family){
    // console.log(key); //display key of the object.
    console.log(family[key]); // display values of the object. 
}




