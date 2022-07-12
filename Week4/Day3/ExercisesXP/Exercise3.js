//  Exercise 3 : Star Wars
// Instructions
// Using this array

let epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

// Use the reduce() method to combine all of these into a single string.

const newString = epic.reduce((acc, word) => acc + word, "");
// console.log(newString);
