// Exercise 2: Display Student Info
// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'

function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  return `your name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" }));
