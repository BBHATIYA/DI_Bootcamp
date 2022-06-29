// Exercise 1
// 1. Create a structured html file linked to a js file

// 2. Write a JS function that takes a parameter: myAge

// 3. Console.log the age of my mum and my dad (my mum is twice my age, and my dad is 1.2 the age of my mum)

// 4. Call the function

function myFunction(myAge=20){
    let mumAge = myAge*2;
    let dadAge = mumAge *1.2;
    console.log(`my mum is twice ${mumAge} my age, and my dad is 1.2 ${dadAge} the age of my mum`);
}

myFunction();

function secondFunction(myAge=20){
    let myMumAge = myAge*2;
    return myMumAge;
}

secondFunction();
// console.log(myMumAge);


// Exercise 2
// 1. Create a structured html file linked to a js file

// 2. Write a JS function that takes a parameter: myAge

// 3. Return the age of my mum (my mum is twice my age)

// 4. Call the function

// 5. Console.log the age of my mum

function myMomAge(myAge =20 ) {
    let myMumAge = myAge *2;
    return myMumAge;
}

let finalAge = myMomAge();
console.log(`my mum age is ${finalAge}`);