let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// Using the map() method, push into a new array the firstname of the user and a welcome message.
// You should get an array that looks like this :

const firstNameUsers = users.map((person) => `Hello ${person["firstName"]}`);
// console.log(firstNameUsers)

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
const justFullStack = users.filter(
  (person) => person["role"] === "Full Stack Resident"
);
console.log(justFullStack);

// chaining
const nameFullStack = users
  .filter((person) => person["role"].includes("Full Stack Resident"))
  .map((person) => person["firstName"]);

// chaining:
// first I filter the users array to create a new array container only the Full Stack Resident
// and on this new array, I map to create another array with only their names
// this new array is assigned to the variable nameFullStack

console.log(nameFullStack);

// Exercise3

let epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

// Use the reduce() method to combine all of these into a single string.

const sentence = epic.reduce((acc, currentValue) => `${acc} ${currentValue}`);
console.log(sentence);

//no initial value
//1st loop
// acc = "a";
// currentValue = 'long'
// return `${acc} ${currentValue}` - 'a long'

// //2nd loop
// acc = 'a long'
// currentValue = 'time'
// return `${acc} ${currentValue}` - 'a long time'

// cloning values array
let colors = ["blue", "red"];
let favColors = [...colors, "yellow"];
// console.log(favColors) //["blue", "red", "yellow"]

// let favColors = colors
// favColors.push("yellow")
// console.log(favColors) //["blue", "red", "yellow"]

let colorOne = ["blue", "red"];
let colorTwo = ["yellow", "white"];
let allcolors = [...colorOne, "black", ...colorTwo];
//["blue", "red", "black", "yellow", "white"]

// let favColors = ["yellow", ...colors];
// console.log(favColors) //["yellow", "blue", "red"]

const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

const getCarHonda = function (carInventory) {
  // we find the first object in the carInventory that is a Honda
  const firstHonda = carInventory.find((car) => car["car_make"] === "Honda");
  console.log(firstHonda); //{id: 3, car_make: 'Honda', car_model: 'Accord', car_year: 1983}

  const sentence = `This is a ${firstHonda["car_make"]} 
    ${firstHonda["car_model"]} from ${firstHonda["car_year"]}`;
  return sentence;
};

console.log(getCarHonda(inventory));

// { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },

// USING OBJECT DESTRUCTURING
const getCarHondaOther = function (carInventory) {
  const firstHonda = carInventory.find((car) => car["car_make"] === "Honda");
  console.log(firstHonda);

  const { car_make, car_model, car_year } = firstHonda;

  const sentence = `This is a ${car_make} ${car_model} from ${car_year}`;

  return sentence;
};

console.log(getCarHondaOther(inventory));

// array destructuring
let colorsFav = ["blue", "red"];
let [first, second] = colorsFav;

console.log(first); //"blue"
console.log(second); //"red"
