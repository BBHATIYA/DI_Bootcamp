//  Exercise 1

let addressNumber = 12;
let addressStreet = "Tel Aviv";
let country = "Israel";

let globalAddress =`I live in ${addressStreet} ${addressNumber}, in ${country}`;
console.log(globalAddress);

// Exercise 2 Birth Year 

const myBirthYear = 1985;
let futureYear = 2025;
let ageInFuture = futureYear - myBirthYear;
let finalYear = `I will be ${ageInFuture} in ${futureYear}`;

console.log(finalYear);

// Exercise 3

let pets = ["cat", "dog", "fish", "rabbit", "cow"];
console.log(pets[1]);
pets.splice(3, 1, "horse");
console.log(pets);
