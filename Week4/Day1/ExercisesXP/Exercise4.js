// Exercise 4 : Colors

// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

const displayColors = (element, index) =>
  console.log(`${index + 1}# choice is ${element}`);
colors.forEach(displayColors);

const checkViolet = (element, index) =>
  colors.includes("Violet") === true
    ? console.log("yeah")
    : console.log("No....");
colors.forEach(checkViolet);

// colors.forEach((element,i) => {
//     console.log(`#${i+1} choice is ${element}`)
//   });

// colors.forEach((element , index) => element === "Violet" ? console.log("Yeah") : console.log("no...."));
