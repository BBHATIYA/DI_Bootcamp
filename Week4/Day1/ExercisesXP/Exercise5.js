// Exercise 5 : Colors #2

// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];

color.forEach((element,index) => {
    let dis = (index == 0 ? ordinal[index+1]: index == 1 ? ordinal[index+1]: index == 2 ? ordinal[index+1]: ordinal[0])
    console.log(`${index+1}${dis} ${element}`)
});