// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// let usernames = ["john!", "becky!", "susy!", "tyson!"]

const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

const newArray = [];
const getNames = gameInfo.forEach((element) => {
  newArray.push(element.username + "!");
});

console.log(newArray);

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5. Use the ternary operator
// The new array should look like this :

// let winners = ["becky", "susy"]

const winners = [];
const getNames2 = gameInfo.forEach((element) => {
  element.score > 5 ? winners.push(element.username) : " ";
});
console.log(winners);
// 3. Find and display the total score of the users. (Hint: The total score is 71)

const totalScore = gameInfo.reduce(
  (element, index) => element + index.score,
  0
);
console.log(totalScore);

// let totalscore = 0;
// gameInfo.forEach((element) => {
//   totalscore += element.score;
// });

// console.log(totalscore);
