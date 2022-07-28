// 12. DOM exercise

//       1. Part I : Create a button in your HTML page,
//       when the user will click the button, a paragraph
//       will be added on the DOM with the content "New Paragraph".
//       Use arrow functions

//       2. Part II : Add to each new paragraph an event listener of mouse over.
//       When you hover on a paragraph, it should become red

const changeToRed = (event) => {
  // event.target shows the paragraph that is hovered on
  // so now we know exactly which paragrph to change to red
  event.target.style.color = "red";
};

const addP = () => {
  const p = document.createElement("p");
  const text = document.createTextNode("New Paragraph");
  p.appendChild(text);
  p.addEventListener("mouseover", changeToRed);
  document.body.appendChild(p);
};

btn.addEventListener("click", addP);

//OTHER QUESTION - how to find the content of the element clicked

// let btn = document.getElementById("btn");
// btn.addEventListener("click", findContent);

// function findContent (event) {
//       // is the element I clicked on
//       // event.target
//       console.log(event.target.textContent) //im a btn
// }

// 6. Variables created **without** any keyword, are always global,
// even if they are created inside a function ? Yes or No and explain

function x() {
  a = 5;
  for (i = 0; i < 2; i++) {
    console.log("hello");
  }
  console.log("i is", i);
}

console.log("outisde i is", i);

console.log(a);
a = 10;
console.log(a);

function y() {
  if (1 > 0) {
    if (1 > 0) {
      b = 2;
    }
  }
}

y();
console.log(b);

// 9. What does the following code print to the console? Explain the process and concept behind it

function foo() {
  function bar() {
    return "Poppin' bottles";
  }

  return bar(); //return "Poppin' bottles";
}
console.log(foo()); //invoking the function foo
// when you pass the invokation of a function into a console.log
//the console.log will display whatever the function returns

//closures
function foo() {
  let color = "blue";
  function bar() {
    return `Poppin' bottles ${color}`;
  }

  return bar;
}

let firstFunc = foo();
console.log(firstFunc); //reference of the bar function
console.log(firstFunc()); //display the result of the bar function
// `Poppin' bottles blue`

// 24. Use async await, and fetch a fact on cats and display it
// `https://catfact.ninja/fact`
//     1. Create 2 functions : on to fetch data
//     from API, the other one to display it on the page using the DOM
//     2. Make sure to use try and catch

// let btn = document.getElementById("btn");

// async function findFact () {
//       try {
//             const catFact = await fetch("https://catfact.ninja/fact");
//             if(catFact.status != 200){
//                   throw new Error ("fact problem")
//             } else {
//                   const dataFact = await catFact.json();
//                   //the method .json() returns a promise
//                   // await consumes the promise :
//                   //* waiting forthe promise to come back settled
//                   //* retrieves the result of the promise
//                   displayData(dataFact)

//             }
//       } catch (err){
//             //display error message
//       }
// }

// function displayData (catSentence) {
//       const {fact} = catSentence
//       const p = document.createElement("p");
//       const text = document.createTextNode(fact);
//       p.appendChild(text);
//       document.body.appendChild(p)
// }

// btn.addEventListener("click", findFact);

async function findFact() {
  try {
    const catFact = await fetch("https://catfact.ninja/fact");
    if (catFact.status != 200) {
      throw new Error("fact problem");
    } else {
      const dataFact = await catFact.json();
      return dataFact;
    }
  } catch (err) {
    //display error message
  }
}

async function displayData() {
  const catSentence = await findFact();
  //here I want to call the findFact function
  const p = document.createElement("p");
  const text = document.createTextNode(catSentence["fact"]);
  p.appendChild(text);
  document.body.appendChild(p);
}

let btn = document.getElementById("btn");
btn.addEventListener("click", displayData);

// let golf = {
//      type: "sport",
//      clubs: {
//        high_end: "taylor made",
//        low_end: "rusty basement clubs"
//      }
// }

//obj destructuring
// const {clubs:{high_end:qualityGolf}} = golf
// console.log(qualityGolf)
