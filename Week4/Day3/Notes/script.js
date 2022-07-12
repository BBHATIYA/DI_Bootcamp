// // -----------------------
// // FILTER
// // -----------------------

// const numbers = [2,3,4,5,6];

// // create a new array, if only even numbers
// // result [2,4,6]

// WITHOUT FILTER
function addNumbers() {
  const newEvenArray = [];
  for (let num of numbers) {
    if (num % 2 === 0) {
      newEvenArray.push(num);
    } else {
      continue;
    }
  }

  console.log(newEvenArray);
}

addNumbers();

// WITH FILTER
function addNumbersSecond() {
  const newArray = numbers.filter((elem, i, array) => elem % 2 === 0);
  console.log(newArray);
}

addNumbersSecond();

//Steps
// create an empty array
// 1st loop
// condition is true so the element is pushed to the array
// newArray = [2]
// 2nd loop
// condition is false so the element is skipped
// 3rd loop
// condition is true so the element is pushed to the array
// newArray = [2,4]

// // EXERCISES IN CLASS

const students = [
  { name: "Rich", score: 33 },
  { name: "Peter", score: 55 },
  { name: "John", score: 75 },
];

// create a new array,
// with only the students that have a score bigger than 50 and the number of letters
//in his name bigger than 4

const goodStudents = students.filter(
  (elem) => elem["score"] > 50 && elem["name"].length > 4
);
console.log(goodStudents);

// // Other example

const strings = ["hello", "great", "hey"];

const stringWithH = strings.filter((word) => word.charAt(0) === "h");
console.log(stringWithH);

// // // //--------------------
// // // //MAP
// // // //-------------------

// // map method returns a new array
// // whatever the callback function returns will be pushed to the newPriceArray

// // map does not mutate the original array -
// // it creates an array and pushes inside this array
// // whatever value is returned
// // from the callback function of the map method

// // foreach - mutate the initial array

const restaurant = [20, 15.2, 10];

const TAXES = 1.17;

// WITHOUT THE MAP METHOD
function addTaxes() {
  const newPrices = [];

  for (let price of restaurant) {
    let newP = price * TAXES;
    newPrices.push(newP);
  }
  console.log(newPrices);
}

addTaxes();

// Syntax MAP METHOD

// the map method
// 1. creates a new array that is empty by default
// 2. loops through the array
// 3. pushed whatever is returned, to the new array
// const newArr = array.map(function (element, index, array) {
// 	//whatever is returned here, is pushed to the newarray
// })

// restaurant.map(function(element, index, array){
// 	console.log(`The element ${element} is at the ${index} in the array ${array}`)
// })

// WITH THE MAP METHOD
function addTaxesSecond() {
  const newPrices = restaurant.map((price) => price * TAXES);
  console.log(newPrices);
}

addTaxesSecond();

//Steps
//create a new empty array called newPrices
//1st loop
//loop through the restaurant array, and we push to the newPrices array
// price*TAXES - 20*1.17
//2nd loop
//loop through the restaurant array, and we push to the newPrices array
// price*TAXES - 15.2*1.17

// // Exercise in class

const students = [
  { name: "Rich", score: 33 },
  { name: "Peter", score: 55 },
];

// // Use map to create a new array containing only the score of the students
// // result => [33,55]

// create a new array that is assigned to the scores variable
// and this array contains only the score of each student
// const scores = [33,55]
const scores = students.map((student) => student["score"]);
console.log(scores);

// let studentScores = students.map((elem) => elem.score)

// console.log(studentScores) //[33,55]

// studentScores.forEach((elem, ind) =>
// 	document.body.textContent += `The ${ind+1} student got a grade of ${elem}`)

// // -------------
// // EXERCISES
// // -------------

// // // // -----------------------
// // // // REDUCE
// // // // -----------------------

// WITHOUT REDUCE
const numbers = [10, 20, 35, 40];

function getSum() {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  console.log(sum);
  return sum;
}

//WITH REDUCE WITHOUT Initial Value

let sumOne = numbers.reduce((accumulator, currentValue, index, arr) => {
  console.log(`In the ${index} loop`);
  console.log("accumulator = ", accumulator);
  console.log("currentValue = ", currentValue);
  return accumulator + currentValue;
});

console.log(sumOne);

// in one line
// let sumOne =  numbers.reduce((accumulator,currentValue) => accumulator+currentValue)

// // // 1st loop
// accumulator = 10
// currentValue = 20
// return accumulator+currentValue
// return 10+20 -> 30

// // // // 2nd loop
// accumulator = 30
// currentValue = 35
// return accumulator+currentValue
// return 30+35 -> 65

// // // // 3rd loop
// accumulator = 65
// currentValue = 40
// return accumulator+currentValue
// return 65+40 -> 105

// console.log(sumOne)

// WITH REDUCE AND INITIAL VALUE

let sumTwo = numbers.reduce((accumulator, currentValue, index, arr) => {
  return accumulator + currentValue;
}, 1000);

// // reduce(callfunc, initialvalue)

console.log(sumTwo);

// // 1st loop
// accumulator=1000
// currentValue = 10
// return accumulator+currentValue
// return 1000+10 -> 1010

// // 2nd loop
// accumulator=1010
// currentValue = 20
// return accumulator+currentValue
// return 1010+20 -> 1030

// 3rd loop

// // WITH STRINGS

const people = ["John", "Lea", "Tom"];
// // secret society is JLT

const secretSty = people.reduce((acc, name) => {
  let society = acc + name.charAt(0);
  return society;
}, "");

console.log(secretSty);

// same in one line
const secretSty = people.reduce((acc, name) => acc + name.charAt(0), "");

console.log(secretSty);

// //1st loop
// accumulator = "";
// name = "John"
// return J

// // 2nd loop
// accumulator = J
// name = "Lea"
// return JL

// // 3rd loop
// accumulator = JL
// name = "Tom"
// return JLT

// // ------------------
// // DESTRUCTURING
// // --------------------

// // Usually, if the array is longer than the list at the left,
// // the “extra” items are omitted.

const colors = ["blue", "yellow", "black", "red"];

// const favColor = colors[0];
// const secondFav = colors[1];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor, secondColor);
console.log(colors); //array unchanged

// ignore value
const [, secondFavColor] = colors;
console.log(secondFavColor);

// // // ------------------------
// // // REST with arrays
// // // -----------------------

// // // ---------------------------
// // // REST OPERATOR
// // // The rest operator is used to put the rest of some specific user-supplied values into a JavaScript array.
// // // USE IT BEFORE A VARIABLE
// // // ----------------------------

// packs values into an array

// // The value of others is the array of the remaining array elements
const colorsTwo = ["blue", "yellow", "black", "red"];
let [first, second, ...others] = colorsTwo;
console.log("first = ", first, "second = ", second, "others = ", others);

// // // ---------------------------
// // // SPREAD OPERATOR
// // // The spread operator (...) helps you expand iterables into individual elements.
// // // USE IT BEFORE AN ARRAY
// // // ----------------------------

let letters = ["a", "b", "c"];
let numbers = [1, 2, 3];
let newArray = [...letters, ...numbers];
console.log(newArray);
//["a","b","c",1,2,3]

// ...[array] -> spread operator - unpack the values

// // ------------------
// // COPY
// // ------------------

// // //Copying
// // //Copying by reference
let names = ["John", "Tom"];
let friends = names; //both have the same adress
friends.push("Lea"); //i change friends, it will also change names
// because they point to the same reference
console.log("friends : ", friends, "names ", names);

// Coppying by Value with the spread operator
let newFriends = [...names];
console.log("newFriends : ", newFriends); //["John", "Tom"]
newFriends.push("Lea"); //["John", "Tom", "Lea"]
console.log("newFriends : ", newFriends, "names ", names);
// ["John", "Tom", "Lea"]  ["John", "Tom"]

// // // Copying
// // // Shallow copy
let newNames = ["John", "Tom", ["blue", "red"]];
let newNamesArr = [...newNames];
console.log("newNamesArr : ", newNamesArr); //["John", "Tom", ["blue", "red"]]
newNamesArr[2].push("yellow"); //["John", "Tom", ["blue", "red", "yellow"]]
// the nested arrays have the same reference reference in the heap
//so if we chage one, it changes the other
console.log("newNames : ", newNames, "newNamesArr ", newNamesArr);
// 							["John", "Tom", ["blue", "red", "yellow"]]  ["John", "Tom", ["blue", "red", "yellow"]]

// // // ------------------
// // //Rest parameter in FUNCTIONS
// // // --------------------

function checkNames(...classmatesNames) {
  console.log(classmatesNames); //array containing the names of the students
}

checkNames("John", "Josh", "Lea", "Tom", "Jane");

// // // ------------------
// // //SPREAD OPERATOR in FUNCTIONS
// // // --------------------

function checkNames(a, b, c) {
  console.log(a, b, c);
}

checkNames(...["John", "Josh", "Lea"]);
