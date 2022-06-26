// Exercise 1
// Instructions
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

const favoriteFood = "Apple";
let favoriteMeal = "Lunch";

console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);


// Exercise 2 

// Part I
// Using this array : let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length;

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`;

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

let finalSentence = `I watched 3 series : ${myWatchedSeriesSentence}`;


// Part II

// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.

myWatchedSeries.splice(2, 1, "friends");

// Add, at the end of the array, the name of another series you watched.

myWatchedSeries.push("squid game")

// Add, at the beginning of the array, the name of your favorite series.

myWatchedSeries.unshift("hunter");

// Delete the series “black mirror”.

myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries);

// Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1][3]);

// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);


// Exercise 3 : The Temperature Converter

let celsiusTemperature = 5;

let convertTofahrenheit = celsiusTemperature/5*9+32;

console.log(convertTofahrenheit);



// Exercise 4 : Guess The Answers #1

// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.


// Using the code below:

    let c;
    let a = 34;
    let b = 21;

    // What will be the outcome of a + b in the first expression ?
    console.log(a+b) //first expression
    // Prediction:55
    // Actual:55

    // What will be the outcome of a + b in the second expression ?
    a = 2;

    console.log(a+b) //second expression
    // Prediction:23
    // Actual:23

    // What is the value of c?
    // c value is undefined

    // Analyse the code below, what will be the outcome?
    console.log(3 + 4 + '5'); //75


