// Exercise:
// # Object destructuring
// ## Exercise1
// ### Part I
// What does the following code return/print?
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets);
// console.log(yearNeptuneDiscovered);

// // ## Exercise2
// // 1. Modify the code below, and destructure the object in the parameter
// // (ie. you should have 3 parameters : name, house and goodstudents)
// function getDetails({ name, house, goodstudent }) {
//   console.log(name, house, goodstudent);
// }

// getDetails({ name: "Harry Potter", house: "Gryfindor", goodstudent: false });

// # Object destructuring
// ## Exercise1
// ### Part II
// What does the following code return/print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// ## Exercise2
// 1. Modify the code below, and destructure the object in the parameter
// (ie. you should have 4 parameters : name, house, friendName and age)

function getMoreDetails({ name, house, friend: { friendName, age } }) {
  console.log(name, house, friendName, age);
}

getMoreDetails({
  name: "Hermione Granger",
  house: "Gryfindor",
  friend: {
    friendName: "Harry Potter",
    age: 20,
  },
});

// ## Exercise3
// 1. Modify the code below, and destructure the object in the parameter
// (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)
const elonPerson = {
  first: "Elon",
  last: "Musk",
  housesLocation: ["new york", "paris"],
  twitter: "@elonmusk",
  company: "Space X",
  houses: {
    amount: 2,
    value: "5Million",
  },
};

function getElonMuskDetails(objElon) {
  const {
    first: firstname,
    last: lastname,
    housesLocation: [locationOne, locationTwo],
    houses: { value: valueHouses },
  } = objElon;

  console.log(firstname, lastname);
  console.log(locationOne, locationTwo, valueHouses);
}

getElonMuskDetails(elonPerson);
