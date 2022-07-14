// //-------------------------------------------
// //CURRYING
// //--------------------------------------------

// function sumFunc(a, b, c) {
//     return a + b + c;
// }

// console.log("sum normal function :", sumFunc(1,2,3))

// // outer function - 1 parameter : a
// function sumCurry(a) {
// 	return function (b) {
// 		return function (c) {
// 			return a + b + c
// 		}
// 	}
// }

// let sum = sumCurry(1)
// // sum = the 1st inner function
// let sumTwo = sumCurry(1)(2)
// // sumtwo = 2nd inner function
// let sumThree = sumCurry(1)(2)(5)
// //sumThree = 8

// // //using arrow function

const sumArrow = (a) => (b) => (c) => a + b + c;

// // -------------------

// // Example1 :
// // Taxes

function getPriceWithTaxes(tax, price) {
  return (price * tax).toFixed(2);
}

const restaurantPriceInUS = getPriceWithTaxes(1.2, 40);
//1.2*40
const computerPriceInUS = getPriceWithTaxes(1.2, 2000);

// Instead we use currying
function getPriceWithTaxes(tax) {
  return function (price) {
    return (price * tax).toFixed(2);
  };
}

let taxesUS = getPriceWithTaxes(1.2);
// taxesUs is reference of the inner function
let priceRestaurant = taxesUS(40);
let computerRestaurant = taxesUS(2000);

const getPriceWithTaxes = (tax) => (price) => (price * tax).toFixed(2);

//other example
function tableMultiplication(table) {
  return function (number) {
    return table * number;
  };
}

let tableof5 = tableMultiplication(5);
// tableof5 : reference to the inner function

let multiplyBy1 = tableof5(1);
// the same as
let multiplyBy1 = tableMultiplication(5)(1);
let multiplyBy2 = tableof5(2);
let multiplyBy3 = tableof5(3);
let multiplyBy4 = tableof5(4);
