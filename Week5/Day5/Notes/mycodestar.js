const btn = document.getElementById("btn");
btn.addEventListener("click", fetchPeople);

let loader = document.getElementById("loader");
loader.style.display = "none";

async function fetchPeople() {
  loader.style.display = "";

  let randomNumber = Math.floor(Math.random() * 84);
  // console.log(randomNumber);
  const fetchData = await fetch(
    `https://www.swapi.tech/api/people/${randomNumber}`
  );

  if (fetchData.status !== 200) {
    throw new Error("Oh No! That person is not available.");
  } else {
    const result = await fetchData.json();
    fetchHome(result);
    displayData(result);
    loader.style.display = "none";
  }
}
// fetchPeople();

async function fetchHome(gethome) {
  let homeurl = gethome.result.properties.homeworld;
  console.log(homeurl);
  const homewd = await fetch(homeurl);

  if (homewd.status !== 200) {
    throw new Error("home not found");
  } else {
    const homeresult = await homewd.json();
    // console.log(homeresult.result.properties.name);
  }
}

async function displayData(finalresult) {
  let name = finalresult.result.properties.name;
  let height = finalresult.result.properties.height;
  let gender = finalresult.result.properties.gender;
  let bithyear = finalresult.result.properties.birth_year;
  let home = finalresult.result.properties.name;

  console.log(name);
  console.log(height);
  console.log(gender);
  console.log(bithyear);
  console.log(home);
}
