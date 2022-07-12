// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is a copy of the groceries object. (Tip : make the shopping variable equal to the groceries variable)
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?

// Invoke the cloneGroceries function.

let client = "John";

let groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = groceries.fruits.forEach((params) => {
  console.log(params);
});

const cloneGroceries = () => {
  let user = client;
  client = "Betty";
  console.log(client);

  console.log(user);
  let shopping = groceries;
  console.log(shopping);
  let newPrice = (groceries.totalPrice = "35$");
  console.log(newPrice);
  let playedNewValue = (groceries.other.payed = "false");
  console.log(playedNewValue);
};
cloneGroceries();
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// No...stack won't allow to change. change will create new address

// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ? Yes...----because shopping is = groceries with same address and ..it's Pass By Reference

// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ? Yes..same reason as above and we made shopping = groceries with same address - which is Pass By Reference
