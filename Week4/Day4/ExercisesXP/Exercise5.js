// Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Analyze the options below. Which constructor will successfully extend the Dog class?
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

const member = new Dog("John");
console.log(member);
