// Exercise # Currying
// Create a curried function, that returns the volume of an object
// the volume is calculated like this length * weight * height
// 1. Call the function twice, for products of length 10cm. Weight and Height can differ
// 2. Call the function twice, for products of length 10cm and weight 2 grams,  height can differ

function calculateVolume(length) {
  return function (weight) {
    return function (height) {
      return length * weight * height;
    };
  };
}

let productOfLenghtTen = calculateVolume(10);
let firstProduct = productOfLenghtTen(5)(10);
let secondProduct = productOfLenghtTen(10)(200);

const lenghtAndWaight = calculateVolume(10)(2);
const thirdProduct = lenghtAndWaight(100);
