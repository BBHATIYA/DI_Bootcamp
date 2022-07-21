//ASYNC AWAIT

function first() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("great"), 2000)
  );
}

function second() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("good"), 3000)
  );
}

async function check() {
  try {
    const firstVar = await first();
    console.log(firstVar); //"great"
    console.log("hello"); //wait 2 seconds
    const secondVar = await second(); //wait 2 seconds
    console.log(secondVar); //"good"
    console.log("bye"); //wait 3 sec
  } catch (error) {
    console.log(error);
  }
}

check();

// PROMISE.ALL

async function checkAlso() {
  try {
    // const results = await Promise.all([first(), second()])
    // // console.log(results) //['great', 'good']
    // const [firstResult, secondResult] = results
    // console.log("firstResult", firstResult, "secondResult",secondResult)

    const [firstResult, secondResult] = await Promise.all([first(), second()]);
    console.log("firstResult", firstResult, "secondResult", secondResult);
  } catch (error) {
    console.log(error);
  }
}

checkAlso();

//DailyChallenge

const btn = document.getElementById("btn");
btn.addEventListener("click", fetchSunrise);

async function fetchSunrise() {
  const latitudeParis = 48.864716;
  const longitudeParis = 2.349014;
  const latitudeNY = 40.73061;
  const longitudeNY = -73.935242;

  try {
    const urlParis = `https://api.sunrise-sunset.org/json?lat=${latitudeParis}&lng=${longitudeParis}&date=today`;
    const urlNY = `https://api.sunrise-sunset.org/json?lat=${latitudeNY}&lng=${longitudeNY}&date=today`;
    const [resultsParis, resultNY] = await Promise.all([
      fetch(urlParis),
      fetch(urlNY),
    ]);

    if (resultsParis.status !== 200 && resultNY.status !== 200) {
      throw new Error("Error in status");
    } else {
      const allresults = await Promise.all([
        resultsParis.json(),
        resultNY.json(),
      ]);
      displayData(allresults);
    }
  } catch (error) {
    console.log(error.message);
  }
}

function displayData(results) {
  results.forEach((elem, i) => {
    const {
      results: { sunrise },
    } = elem;
    const p = document.createElement("p");
    const text = document.createTextNode(
      `The sunrise in the #${++i} city is ${sunrise}`
    );
    p.appendChild(text);
    document.body.appendChild(p);
  });
}

// fetch(`https://api.sunrise-sunset.org/json?lat=${latitudeParis}&lng=${longitudeParis}&date=today`)

// resultsParis.json()

// promise: state fulfilled
// result {"results":{"sunrise":"5:13:34 AM","sunset":"7:34:40 PM","solar_noon":"12:24:07 PM","day_length":"14:21:06","civil_twilight_begin":"4:45:37 AM","civil_twilight_end":"8:02:38 PM","nautical_twilight_begin":"4:09:28 AM","nautical_twilight_end":"8:38:46 PM","astronomical_twilight_begin":"3:29:57 AM","astronomical_twilight_end":"9:18:17 PM"},"status":"OK"}

// Promise.all
// promise: state fulfilled
// result
// [objparis, objny]
