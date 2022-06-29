// Exercise 1 : Information
// Instructions
// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.
function infoAboutMe(){
    let myName = "Bhavesh";
    let myAge = 36;
    let myHobby = "Reading";
    // console.log("my name is Bhavesh, age is 36 and hobby is Reading.")
    console.log(`my name is ${myName}, age is ${myAge} and hobby is ${myHobby}.`);
}

infoAboutMe();

// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


// Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.

// function calculateTip(){
//     let billAmount = prompt("John, what is the bill amount?");
//     billAmount=Number(billAmount);
//     if(billAmount < 50){
//          tipAmount1 = billAmount/5;     
//     } else if (billAmount >= 50 && billAmount <= 200){
//         tipAmount1 = billAmount *15/100;
//     } else if(billAmount > 200){
//         tipAmount1 = billAmount/10;
//     }
//         console.log(tipAmount1, billAmount + tipAmount1);
// }

// let finalBill = calculateTip();


// Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.




function isDivisible() {
    let sum = 0;
    for ( let i=0; i<501; i++){
        if(i % 23 == 0){
            sum += i;
            console.log(i);
            
        }
    }
    console.log(sum);
}

// isDivisible();




// Exercise 4

// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.


// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  
    let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"];

function myBill(){
    let bill = 0;
    for (let i of shoppingList){
        if ( i in stock && stock[i] !== 0){
            bill += prices[i];
            stock[i] -= 1;
        }
    }
    console.log(bill);

}
// let result = myBill();
// console.log(stock.banana);

// Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.


function hotelCost() {
    let userNights = 0;
    
    do {
            userNights = prompt("How many night would you like to stay?")
            userNights = Number(userNights);
    } while (isNaN(userNights) ||userNights == 0);
    totalNightCost = userNights*140;
    // console.log(totalNightCost);
    return totalNightCost
}
// let final =hotelCost();
// console.log(final)

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

function planeRideCost(){
    let destination = "";
    let price = 0;
    do {
        destination = prompt("where do you want to fly?").toLowerCase()

    } while (!isNaN(destination) || destination =="");

    if(destination === "london"){
        price = 183;
    } else if( destination === "paris"){
        price = 220;
    } else{
         price = 300;
    }
    console.log(price);
}
// planeRideCost();

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost(){
      let numberOfDays = 0;
    
    do {
            numberOfDays = prompt("How many night would you like to stay?")
            numberOfDays = Number(numberOfDays);
    } while (isNaN(numberOfDays) ||numberOfDays == 0);
    numberOfDays = numberOfDays*40;
    if(numberOfDays > 10){
        let discount = numberOfDays*5/100;
        numberOfDays -= discount; 
    }
    console.log(numberOfDays);
}
// rentalCarCost();

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()
function totalVacationCost(){
console.log(hotelCost(), planeRideCost(), rentalCarCost());
}

// totalVacationCost();

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.


