# Review on Javascript
​
#### Basics
​
1. How to access the second element of the array `let arr = [3, 7, 10]`
​arr[1];

2. For the code below, what does `arrNums.splice(2, 0)` return?
​
    ```javascript
    let arrNums = [1, 2, 3, 4, 5];
    ```
    // return the same array because it is saying at position 2 add 0 element;
​
3. What is the result of the following code :
​
    ```javascript
    const oneTwoThree = [1, 2, 3]
    const sevenEightNine = [7, 8, 9]
    
    const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
    console.log(all) //[4, 5, 6,1, 2, 3,7, 8, 9]
    ```
​
4. What does the following code print to the console?
​
   ```javascript
   let golf = {
     type: "sport",
     clubs: {
       high_end: "taylor made",
       low_end: "rusty basement clubs"
     }
   }  
   golf.clubs.high_end = "callaway";
   console.log(golf.clubs.high_end); // callaway
   ```
   
5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.
​
    ```javascript
    const x = function(a, b){
       return a*b;
    }
    ```
    // Yes, called funciton expressions and we can invoke only after the function.
​
6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain
​
    ```javascript
    function x() {
    	a = 5;
    }
    ```
​   // No, they are function scope
    // or Yes, if there were global variable with name a we can reassign value in function 
#### Functions
​
7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?
​
    ```javascript
    function sayHello() {
       return "Hello, ";
    }
    function greeting(helloMessage, name) {
      console.log(helloMessage() + name);
    }
    greeting(sayHello, "JavaScript!");
    ```

    // Yes we can, it returns the value of function that we can use.

8. Transform this function into an arrow function
​
      ```javascript
      function sum(num1, num2){
          return num1 + num2
      }
      
      sum(40,2)
      sum(42,0)
      console.log("the answer to everything is", sum(42,0))
      ```
    // arrow function
    const sum = (num1, num2) =>  num1 + num2;

    sum(40, 2);
    sum(42, 0);
    console.log("the answer to everything is", sum(42, 0));
​
9. What does the following code print to the console? Explain the process and concept behind it
​
     ```javascript
     function foo () {
       function bar() {
         return "Poppin' bottles";
       }
       return bar();
     }
     console.log(foo()); // first it will call foo() function which has inner function that invoke and returns value which will be colsole at the end 
     ```
​
#### DOM
​
10. Which of the following events will you add in the `addEventListener()`method? 
      ☐ click // this one
      ☐ onclick
​
11. Does the `addEventListener()` method allow you to add many events to the same element?
​
    ```javascript
    x.addEventListener("mouseover", func1);
    x.addEventListener("click", func2);
    x.addEventListener("mouseout", func3);`
    ```
    // Yes, you can 
​
12. DOM exercise
​
      1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions

     const changeToRed = (event) =>{
        event.target.style.color = "red"
     }

​    let btn = document.getElementById('button')
    btn.addEventListener("click", () =>{
        let p =document.createElement('p');
        let ptext = document.createTextNode("New Paragraph");
        p.appendChild(ptext)
        p.addEventListener("mouseover", changeToRed)
        document.body.appendChild(p);
    } );

      2. Part II : Add to each new paragraph a event listener of mouse over. When you hoover on a paragraph, it should become red
    // I would like to review how to add style after we click on button and it's on page then only mouseover will work, i tried it gives me undefine 

//     let btn = document.getElementById('button')

//      const changeToRed = (event) =>{
//         event.target.style.color = "red"
//      }

//      const addP = () =>{
//      let p = document.createElement("p");
//      let ptext = document.createTextNode("New Paragraph");
//      p.appendChild(ptext);
//      p.addEventListener("mouseover", changeToRed);
//      document.body.appendChild(p);
//      } 

// btn.addEventListener("click", addP)



#### Array Methods
​
14. What is the value of `passed` in the following code?
​
     ```javascript
     let marks = [67, 60, 89, 90, 67, 42];
     
     let passed = marks.every(function(m) {
        return m >= 50;
     });
     ```
​   // FALSE 
15. What does the following code log?
​
   ```javascript
   let nums = [10, 50, 88];
   
   let bignums = nums.filter(function(n) {
      return n > 10;
   });
   
   console.log(bignums); // [50, 88]
   ```
​
16. Use a javascript array method to square the value of every element in the array. 
​
   ```javascript
   const input = [ 1, 2, 3, 4, 5 ];
      input.forEach((elm) => elm**2); //corrected

//    console.log(input) // [ 1, 4, 9, 16, 25]
   ```
​
16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 
​
     ```javascript
    const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
    const posNum = secondInput.filter((elm) => elm > 0);
    // console.log(posNum);

    const total = posNum.reduce((acc, a) => acc + a, 0);
    console.log(total) //42
     ```
​
17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.
​
     ```javascript
     const input = 'George Raymond Richard Martin';
      let initials = input.forEach(elm, () => elm[0]).join();
     console.log(initials)//'GRRM'
     ```
​
#### Object and Classes
​
18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example
        //objects are passed by reference 
​
19. What will be printed in the console
​
    ```javascript
    function Item(name, price) {
       this.name = name;
       this.price = price;
       this.displayInfo = function() {
       console.log(this.name + " is for $ " + this.price)
       }
    } 
​
    const cake = new Item("Chocolate Cake", 10);
    cake.displayInfo();
    ```
    //Chocolate Cake is for $ 10
​
20. Refactor this code using Classes
​   
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.displayInfo = function() {
            console.log(this.name + " is for $ " + this.price)
        }
    }
}
const cake = new Item("Chocolate Cake", 10);
cake.displayInfo(); // "Chocolate cake is for $ 10"
#### Promises
​
21. What will be the output and why ? What will be the state of the promise ?
​
    ```javascript
    Promise.resolve('Success!')
      .then(data => {
        return data.toUpperCase()
      })
      .then(data => {
        console.log(data)
      })
    ```
​   //SUCCESS". The state of the promise is resolved

22. What log will be made by the following code, after 2 seconds?
​
    ```javascript
    const p = new Promise(function(resolve, reject) {
       setTimeout(function() {
          resolve("OK");
       }, 2000);
    });
    
    p.then().then(function(data) {
       console.log(data);
    });
    ```
    // promise will be resolved and will log "OK"
23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process
​
    ```javascript
    async function f() {
      let result = 'first!';
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
      });
    
      result = await promise;
    
      console.log(result);
    }
    
    f();
    ```
    // after 1 second will pring done!

24. Use async await, and fetch a fact on cats and display it `https://catfact.ninja/fact`
    1. Create 2 functions : on to fetch data from API, the other one to display it on the page using the DOM
    2. Make sure to use try and catch

async function getdata() {
  try {
    let cat = await fetch(`https://catfact.ninja/fact`);
    let object = await cat.json();
    let result = object.fact;
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function addToPage() {
  let paragraph = document.createElement("p");
  let ptext = await getdata();
  let text = document.createTextNode(ptext);
  paragraph.appendChild(text);
  document.body.appendChild(paragraph);
}
addToPage();