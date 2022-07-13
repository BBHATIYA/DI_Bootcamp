//---------------------
// Destructuring
// -----------------------

// let product = {
//   name: 'Tshirt',
//   color: 'blue',
//   price: 10,
// }

// let name = product.name;
// let price = product.price;

// let name = product["name"];
// let price = product["price"];

// instead we use object destructuring
// -- destructuring

// name of the variable need to be equal to the name
// of the keys inside the object
let { name, price } = product;
console.log("name is : ", name, "price is :", price);
// Tshirt           //10

console.log(product); //the object is unchanged

// // --- rename the variables created while destructuring
// // let {keyName : variableName} = obj
// create clearer variable name
let { name: productName, price: productPrice } = product;
console.log(
  "productName is : ",
  productName,
  "productPrice is :",
  productPrice
);

// let product = {
//   name: 'Tshirt',
//   color: 'blue',
//   price: 10,
//   size : "M",
// }

// // -- default value with destructuring

// let {name : productName, price : productPrice, size="L"} = product;

// console.log("productName is : ", productName,
//   "productPrice is :", productPrice, "size is :", size)

// // // ---------------
// // // WITH FUNCTIONS
// // // -----------------

function displayUser(userObj) {
  let fn = userObj["firstName"];
  let color = userObj["favoriteColor"];
  console.log(`The person name is ${fn}, his fav is ${color}`);
}

displayUser({ firstName: "Alex", favoriteColor: "purple" });

// destructuring in the parameters of a function
function displayUser({ firstName: username, favoriteColor: color }) {
  console.log(`The person name is ${username}, his fav is ${color}`);
}

displayUser({ firstName: "Alex", favoriteColor: "purple" });

// destructuring in the function
function displayUser(userObj) {
  let { firstName, favoriteColor } = userObj;
  console.log(`The person name is ${firstName}, his fav is ${favoriteColor}`);
}

displayUser({ firstName: "Alex", favoriteColor: "purple" });

// //---------------------
// // Destructuring
// // -----------------------

let product = {
  name: "Tshirt",
  color: "blue",
  price: 10,
};

// // let name = product.name;
// // let price = product.price;

// // let name = product["name"];
// // let price = product["price"];

// // instead we use object destructuring
// // -- destructuring

// // name of the variable need to be equal to the name
// // of the keys inside the object
let { name, price } = product;
console.log("name is : ", name, "price is :", price);
//                         // Tshirt           //10

// console.log(product); //the object is unchanged

// // // --- RENAME the variables created while destructuring
// SYNTAX : let {keyName : variableName} = obj
// goal: create clearer variable name

let { name: productName, price: productPrice } = product;
console.log(
  "productName is : ",
  productName,
  "productPrice is :",
  productPrice
);

// -- DEFAULT value with destructuring

// let product = {
//   name: 'Tshirt',
//   color: 'blue',
//   price: 10,
//   size : "M",
// }

let { name: productN, price: productP, size = "L" } = product;
console.log(
  "productN is : ",
  productN,
  "productP is :",
  productP,
  "size is :",
  size
);

// // ---------------
// // WITH FUNCTIONS
// // -----------------

function displayUser(userObj) {
  let fn = userObj["firstName"];
  let color = userObj["favoriteColor"];
  console.log(`The person name is ${fn}, his fav is ${color}`);
}

displayUser({ firstName: "Alex", favoriteColor: "purple" });

// destructuring in the parameters of a function
function displayUserOne({ firstName: username, favoriteColor: color }) {
  console.log(`The person name is ${username}, his fav is ${color}`);
}

displayUserOne({ firstName: "Alex", favoriteColor: "purple" });

// destructuring in the function
function displayUserTwo(userObj) {
  let { firstName, favoriteColor } = userObj;
  console.log(`The person name is ${firstName}, his fav is ${favoriteColor}`);
}

displayUserTwo({ firstName: "Alex", favoriteColor: "purple" });

// //----------------
// //NESTED DESTRUCTURING
// //----------------

let otherProduct = {
  name: "Tshirt",
  color: "blue",
  price: 10,
  availibility: {
    store: ["Tel Aviv", "Herzelia"],
    totalNumProduct: 100,
  },
};

// let {totalNumProduct} = otherProduct //not working

// SYNTAX let {nameKey : {nameSubKey}} = object

// //nested destructuring
let {
  availibility: { totalNumProduct },
} = otherProduct;
console.log(totalNumProduct);

let {
  availibility: { store },
} = otherProduct;
console.log(store); //["Tel Aviv", "Herzelia"]

// // nested destructuring and array destructuring
let {
  availibility: {
    store: [firstCity, secondCity],
  },
} = otherProduct;
console.log(firstCity, secondCity);
//tel aviv  herzelia

// // ------------
// // Rest operator
// // ------------

const hero = {
  heroName: "Batman",
  realName: "Bruce Wayne",
  adress: "Tel Aviv",
};

const { heroName, ...details } = hero;
console.log("details", details);
// {realName: 'Bruce Wayne', adress: 'Tel Aviv'}

const { realName, ...otherDetails } = hero;
console.log("realName", realName); //"realName" Bruce Wayne
console.log("otherDetails", otherDetails);
//"otherDetails" {heroName: 'Batman', adress: 'Tel Aviv', age: 34}

// // -----------------
// // SPREAD OPERATOR
// // ----------------

let computer = {
  type: "Apple",
  size: 20,
};

let myComputer = computer; //same adress
//point to the same reference in the heap
console.log("myComputer : ", myComputer, ", \ncomputer", computer);
// {
//   type: 'Apple',
//   size: 20
// };

// {
//   type: 'Apple',
//   size: 20
// };

myComputer["price"] = 4000;
console.log("myComputer : ", myComputer, ", \ncomputer", computer);
// {
//   type: 'Apple',
//   size: 20,
//   price : 4000
// };

// {
//   type: 'Apple',
//   size: 20,
//   price : 4000
// };

//CLONING THE VALUES
let johnComputer = { ...computer }; // they point to different adress
console.log("johnComputer : ", johnComputer, ", \ncomputer", computer);
// {
//   type: 'Apple',
//   size: 20
// };

// {
//   type: 'Apple',
//   size: 20
// };

johnComputer["price"] = 2000;
console.log("johnComputer : ", johnComputer, ", \ncomputer", computer);
console.log(
  "johnComputer price = ",
  johnComputer["price"],
  "computer price",
  computer["price"]
); //unchanged
// {
//   type: 'Apple',
//   size: 20,
//   price : 2000
// };

// {
//   type: 'Apple',
//   size: 20,
// };

// // EXERCISES

let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// destructuring
// I create 2 variable that have the value of the key fom the obj
// the key and the variable needs to have the same name
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// ---
// // ## Exercise2
// // 1. Modify the code below, and destructure the object in the parameter
// // (ie. you should have 3 parameters : name, house and goodstudents)

function getDetails({ name, house, goodstudent }) {
  console.log(name, house, goodstudent);
}

getDetails({ name: "Harry Potter", house: "Gryfindor", goodstudent: false });

// // same
function getDetailsOne(objHarry) {
  let { name: nameStudent, house, goodstudent } = objHarry;
  console.log(nameStudent, house, goodstudent);
}

getDetailsOne({ name: "Harry Potter", house: "Gryfindor", goodstudent: false });

//------------------
// Objects
// ------------------

//We could do something like this
//BUT REPETITIVE

// let characterHermione = {
//   name: 'Hermione Granger',
//   house: 'Gryfindor',
//   goodstudent : true,
//   point: 20,
//   power : 30,
//   greeting : function() {
//   	return `Hello everyone, my name is ${this.name}`
//   }
// }

// let characterHarry = {
//   name: 'HarryPotter',
//   house: 'Gryfindor',
//   goodstudent : true,
//   point: 40,
//   power : 100,
//   greeting : function() {
//     return `Hello everyone, my name is ${this.name}`
//   }
// }

// -----------------
// Constructor functions
// -----------------

function Student(bootcampName) {
  this.school = "DevelopersInstitute";
  this.bootcamp = bootcampName;
}

// tomStudent is an object
let tomStudent = new Student("Js");
// {
//   school : "DevelopersInstitute",
//   bootcamp : "Js"
// }

let leaStudent = new Student("Python");
// {
//   school : "DevelopersInstitute",
//   bootcamp : "Python"
// }
console.log(tomStudent.bootcamp); //JS
console.log(leaStudent.bootcamp); //Python

// I can modify the values of the keys
tomStudent.bootcamp = "C++";
// {
//   school : "DevelopersInstitute",
//   bootcamp : "C++"
// }

console.log(tomStudent.bootcamp); //C++

function Character(wizardname, wizardhouse, wizardPoint) {
  this.name = wizardname;
  this.house = wizardhouse;
  this.point = wizardPoint;
  this.greeting = function () {
    return `Hello everyone, my name is ${this.name}`;
  };
}

// instances of the class Character
let harryCharacter = new Character("Harry", "Grinfindor", 1000);
console.log(harryCharacter.house); //"Grinfindor"
console.log(harryCharacter.greeting());

// // ----- more examples

function Character(wizardname, wizardhouse, wizardPoint, wizardEnemy) {
  //attribute
  this.name = wizardname;
  this.house = wizardhouse;
  this.point = wizardPoint;
  this.enemy = wizardEnemy;

  this.fight = function () {
    console.log("this.enemy", this.enemy);
    console.log(`${this.name} is fighting ${this.enemy.name}`);
    this.enemy.point -= 10;
    console.log(`The enemy ${this.enemy.name} point is ${this.enemy.point}`);
  };
}

let voldemortChar = new Character("Voldemort", "Bla", 20000);
// pass voldemortChar to harryChar
let harryChar = new Character("Harry", "Grinfindor", 1000, voldemortChar);

// console.log(harryChar.enemy)
harryChar.fight();

// // let hermioneCharacter = new Character("Hermione", "Grinfindor", 34)
// // console.log(hermioneCharacter)
// // console.log(hermioneCharacter.house)

// // let harryPotterCharacter = new Character("Harry", "Grinfindor", 100, hermioneCharacter)
// // console.log(harryPotterCharacter)
// // console.log(harryPotterCharacter.house)

// // harryPotterCharacter.fight()
// // console.log(hermioneCharacter.point)

// /-------------------
// OOJS
// -------------------

//class syntax
// PARENT CLASS
class Character {
  constructor(wizardname, wizardhouse, wizardPoint) {
    this.name = wizardname;
    this.house = wizardhouse;
    this.points = wizardPoint;
  }

  fight() {
    console.log(`${this.name} is fighting`);
    this.points -= 10;
  }

  powerDrink(colorDrink) {
    if (colorDrink === "blue") {
      this.points += 1000;
    } else {
      this.points += 2000;
    }
  }
}

let harryChar = new Character("Harry", "Grinfindor", 1000);
console.log(harryChar.house);
harryChar.fight();
harryChar.powerDrink("yellow");

//-------------------
// Subclasses - Inheritance
// -------------------

// Child class
class MagicCharacter extends Character {
  constructor(wizardname, wizardhouse, wizardPoint, magic) {
    super(wizardname, wizardhouse, wizardPoint);
    this.magicPower = magic;
    this.listSpells = [];
  }

  //override the fight() method from the parent class
  fight() {
    console.log(`${this.name} is magic and is fighting`);
    this.points -= 100;
  }

  // new method of the class
  createSpell(newSpell) {
    console.log("I'm creating a new spell");
    this.listSpells.push(newSpell);
    console.log("The list spells contains", this.listSpells);
  }
}

let hagridChar = new MagicCharacter("Hagrid", "ABC", 10000, "read mind");
console.log(hagridChar);
hagridChar.createSpell("turning into stone");

let basicChar = new Character("Tom", "AAA", 10);
console.log(basicChar.listSpells);

let hagridCharacter = new MagicCharacter("Hagrid", "All", 20, "read mind");
console.log(hagridCharacter.house);
hagridCharacter.fight();
hagridCharacter.createSpell("turn into stone");

// SYNTAX
class First {
  constructor() {
    //create attribute
    this.username = "John";
  }
}

class Second extends First {
  constructor() {
    //create attribute
    super();
    this.age = 12;
  }
}

let newObj = new Second();
// {username:"John"}
console.log(newObj.username);
console.log(newObj.age);
