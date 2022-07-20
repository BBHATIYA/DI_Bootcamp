// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));

async function changeToAsync() {
  try {
    let result = await fetch("https://www.swapi.tech/api/starships/9/");
    let objName = await result.json();
    console.log(objName);
  } catch (error) {
    console.log(error);
  }
}

changeToAsync();
