const fs = require("fs");

fs.readFile("./RightLeft.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  countSteps(data);
});

function countSteps(data) {
  let arr = data.split("");
  let count = 0;
  let stepsLeft = 0;
  let stepsRight = 0;

  let finalPosition;
  arr.forEach((element) => {
    if (element === "<") {
      stepsLeft++;

      if (stepsRight - stepsLeft === -1 && count === 0) {
        let totalSteps = stepsLeft + stepsRight;

        console.log(`Reached to position -1 after ${totalSteps} steps`);
        count++;
      }
    } else if (element === ">") {
      stepsRight++;

      if (stepsRight - stepsLeft === -1 && count === 0) {
        let totalSteps = stepsLeft + stepsRight;

        console.log(`Reached to position -1 after ${totalSteps} steps`);
        count++;
      }
    }
  });

  if (stepsLeft > stepsRight) {
    console.log(
      `final position is ${stepsLeft - stepsRight} steps to the left`
    );
  } else {
    console.log(
      `final position is ${stepsRight - stepsLeft} steps to the right`
    );
  }
}
