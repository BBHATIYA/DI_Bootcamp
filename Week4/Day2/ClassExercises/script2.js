// Exercise # Nested functions
// 1. Create a function named `starWars` that takes no parameter.
// 2. The function should declare a variable `characters` equal to an empty array
// 3. In the `startWars` function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"
// and push it to the `characters` array.
// 4. In the `startWars` function, create a function named `displayCharacter` should display in the body the fullname of the characters,
// 5. Call the `createCharacter` function a few times inside the starWars function
// and call the `displayCharacter` function once
// Second Part
// 6. Change the `starWars` function, to take one parameter, the name of the
// spaceship the characters are in
// 7. The `displayCharacter` function should now display in the body the fullname and spaceship
// of the characters
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens?

function starWars(spaceship) {
  const characters = [];

  function createCharacter(firstname, lastname = "Smith") {
    let charname = `${firstname} ${lastname}`;
    characters.push(charname);
    // console.log(characters)
  }

  function displayCharacter() {
    characters.forEach((element) => {
      let div = document.createElement("div");
      let text = document.createTextNode(
        `${element} is in the spaceship ${spaceship}`
      );
      div.appendChild(text);
      document.body.appendChild(div);
    });
  }

  createCharacter("Bhavesh", "Bhatiya");
  createCharacter("Bhavesh");
  createCharacter("John", "Patel");
  //   console.log(characters);
  displayCharacter();
}

starWars("The Red Star");
