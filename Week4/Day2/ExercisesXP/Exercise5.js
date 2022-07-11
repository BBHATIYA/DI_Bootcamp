// Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice(sizeofbeverage) {
  let ingredients = [];

  function addIngredients(ingredients1, ingredients2, ingredients3) {
    let div = document.createElement("div");
    let text = document.createTextNode(
      `The client wants a ${sizeofbeverage} juice, containing ${ingredients1}, ${ingredients2}, ${ingredients3}.`
    );
    div.appendChild(text);
    document.body.appendChild(div);
    let resultOfAdd = `${ingredients1} ${ingredients2} ${ingredients3}`;
    ingredients.push(resultOfAdd);
    console.log(ingredients);
  }

  function displayJuice() {
    // let newstring1 = ingredients.slice(1);
    // console.log(newstring1);
    let changeToString = ingredients.toString("");
    console.log(changeToString);

    let addingQuots = `"${changeToString}"`;
    console.log(addingQuots);

    let substrings = addingQuots.split(" ");
    console.log(substrings);

    substrings.forEach((element, index) => {
      let div2 = document.createElement("div");
      let text2 = document.createTextNode(
        `The client wants a ${sizeofbeverage} juice, containing ${element}, ${element}, ${element}`
      );
      div2.appendChild(text2);
      document.body.appendChild(div2);
    });
  }

  addIngredients("Grapes", "Apple", "vodka");
  displayJuice();
}

makeJuice("small");
