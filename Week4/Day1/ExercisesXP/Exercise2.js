// Exercise 2 Ternary Operator

// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

const winBattle = () => true;

const experiencePoints = () => (winBattle() === true ? 10 : 1);

let result = experiencePoints();
console.log(result);
