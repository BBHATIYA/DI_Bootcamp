// Evaluate these (ie True or False)
// [2] === [2] // false
// {} === {} // false

// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); // 4 because object2 is = object1 same reference and before we console we changed value to 4.
console.log(object3.number); // 4 because object3 is = object2 same reference and before we console we changed value to 4.
console.log(object4.number); // 5 it has it's own key and value

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

class Animal {
  constructor(name, type, color) {
    this.animalName = name;
    this.animalType = type;
    this.animalColor = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color, secondcolor) {
    super(name, type, color);
    this.white = secondcolor;
  }
  sound(sound) {
    return `${sound} I am a ${this.animalType} named ${this.animalName} and I'm  and ${this.animalColor} and ${this.white} `;
  }
}

let farmerCow = new Mamal("Lily", "Cow", "brown", "white");

console.log(farmerCow.sound("Mouuu"));
