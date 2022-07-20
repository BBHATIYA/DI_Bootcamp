// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()

// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242

let form = document.getElementById("form");
form.addEventListener("input", retrieveInput);

function retrieveInput() {
  const fcitylat = document.getElementById("fcitylat").value;
  const fcitylong = document.getElementById("fcitylong").value;
  const scitylat = document.getElementById("scitylat").value;
  const scitylong = document.getElementById("scitylong").value;
  //   console.log(scitylong);
}

async function getFirstCity(fcitylat, fcitylong) {
  let firstCityResult = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${fcitylat}&lng=${fcitylong}`
  );
  // let objName1 = await firstCityResult.json();
  // console.log(objName1);

  if (firstCityResult.status !== 200) {
    throw new Error("Not good location-");
  } else {
    let objName1 = await firstCityResult.json();
    return objName1["results"]["sunrise"];
  }
}
console.log(getFirstCity(40.73061, -73.935242));

// async function getCitySecond() {

//     let secondCityResult = await fetch(
//     `https://api.sunrise-sunset.org/json?lat=${scitylat}&lng=${scitylong}`
//     );
//     // let objName2 = await secondCityResult.json();
//     //  console.log(objName1);

//     if (secondCityResult.status !== 200) {
//       throw new Error("Not good location-");
//     } else {
//       let objName2 = await secondCityResult.json();
//       return objName2;
//     }

// }

async function displaySunrise() {
  try {
    let city1 = await getFirstCity();
    if (fcitylat.length == 0 || fcitylong.length == 0) {
      throw new Error("location is not good");
    } else {
    }
  } catch {}
}
