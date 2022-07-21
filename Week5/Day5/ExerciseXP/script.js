const funct = async function () {
  let spin = document.getElementById("spinner");
  spin.style.display = "block";
  try {
    let userRnd = Math.floor(Math.random() * 83 + 1);
    const response = await fetch(`https://swapi.dev/api/people/${userRnd}`);
    const plandata = await fetch(`https://swapi.dev/api/planets/${userRnd}`);
    const prodata = await response.json();
    const pladata = await plandata.json();
    spin.style.display = "none";
    displayAll(prodata, pladata);
  } catch {
    document.getElementById("name").innerHTML =
      "oh No! That person isnt available.";
  }
};

function displayAll(prodata, pladata) {
  // console.log(prodata , pladata);
  document.getElementById("name").innerHTML = ` ${prodata.name}`;
  document.getElementById("height").innerHTML = `Height:- ${prodata.height}`;
  document.getElementById("gender").innerHTML = `Gender:- ${prodata.gender}`;
  document.getElementById(
    "birth-year"
  ).innerHTML = `Birth-Year:- ${prodata.birth_year}`;
  document.getElementById("hworld").innerHTML = `Home-World:- ${pladata.name}`;
}
let but = document.getElementById("but");
but.addEventListener("click", funct);
