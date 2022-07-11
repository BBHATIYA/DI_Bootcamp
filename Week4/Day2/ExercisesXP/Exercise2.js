// Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
function convertToGrams(kg) {
  return kg * 1000;
}

// console.log(convertToGrams(2));

// Then, use function expression and invoke it.
const killoToGram = function (kg) {
  return kg * 1000;
};

// console.log(killoToGram(2));

// Write in a one line comment, the difference between function declaration and function expression.
// declaration function will run once and will be removed from the memory
// expression will say in the memory forever

// Finally, use a one line arrow function and invoke it.

const killoToGram2 = (kg) => kg * 1000;

console.log(killoToGram(2));
