// Exercise 2: Analyze
// Instructions

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling"); // 1
  let result = await resolveAfter2Seconds(); //2
  console.log(result);
}

asyncCall();
