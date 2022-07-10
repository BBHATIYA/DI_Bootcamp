// Exercise 1 : guess what will be console logged, and explain why

let text = "Hello";

function checkText() {
  console.log("In the function", text);
  text += " World";
  console.log("Still in the function", text);
}

console.log("before the function", text);

checkText();

console.log("after the function", text);

// Exercise 2 : guess what will be console logged, and explain why

let friend = "Harry";

function checkfriend() {
  let friend = "Alice";
  console.log("In the function", friend);
  friend += " Smith";
  console.log("Still in the function", friend);
}

console.log("before the function", friend);

checkfriend();

console.log("after the function", friend);
