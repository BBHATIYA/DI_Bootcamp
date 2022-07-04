// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
const arrPlanets = ["Earth", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
let divEarth = document.createElement('div');
divEarth.setAttribute("class", "planet"); //(15, 4, 125, 'blue'));
// divEarth.setAttribute("class", "earth");
const divMercury = document.createElement('div')
divMercury.setAttribute("class", "planet"); //(5, 6, 65, 'gray')); 
const divVenus = document.createElement('div')
divVenus.setAttribute("class", "planet"); //(10, 5, 90, 'orange'));
const divMars = document.createElement('div')
divMars.setAttribute("class", "planet"); //(20, 3.5, 175, 'red'));
const divJupiter = document.createElement('div');
divJupiter.setAttribute("class", "planet"); //(25, 3, 225, 'orange'));
const divSaturn = document.createElement('div')
divSaturn.setAttribute("class", "planet"); //(20, 2.25, 275, 'yellow'))
const divUranus = document.createElement('div')
divUranus.setAttribute("class", "planet"); //(15, 2, 325, 'blue'));
const divNaptune = document.createElement('div')
divNaptune.setAttribute("class", "planet"); //(25, 1.5, 375, 'purple'))


// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
divEarth.setAttribute("class", "planet earth");
divMercury.setAttribute("class", "planet mercury");
divVenus.setAttribute("class", "planet venus");
divMars.setAttribute("class", "planet mars");
divJupiter.setAttribute("class", "planet jupiter");
divSaturn.setAttribute("class", "planet saturn");
divUranus.setAttribute("class", "planet uranus");
divNaptune.setAttribute("class", "planet naptune");


// Finally append each div to the <section> in the HTML (presented below).
let earthAppend = document.getElementsByClassName('listPlanets')[0];
earthAppend.appendChild(divEarth); 

let mercuryAppend = document.getElementsByClassName('listPlanets')[0];
mercuryAppend.appendChild(divMercury); 

let venusAppend = document.getElementsByClassName('listPlanets')[0];
venusAppend.appendChild(divVenus); 

let marsAppend = document.getElementsByClassName('listPlanets')[0];
marsAppend.appendChild(divMars); 

let jupiterAppend = document.getElementsByClassName('listPlanets')[0];
jupiterAppend.appendChild(divJupiter); 

let saturnAppend = document.getElementsByClassName('listPlanets')[0];
saturnAppend.appendChild(divSaturn); 

let uranusAppend = document.getElementsByClassName('listPlanets')[0];
uranusAppend.appendChild(divUranus); 

let naptuneAppend = document.getElementsByClassName('listPlanets')[0];
naptuneAppend.appendChild(divNaptune); 






// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?


console.log(divEarth);
console.log(divMercury); 
console.log(divVenus);

let earthColor = document.getElementsByClassName('earth')[0];
earthColor.style.backgroundColor = "blue";

let mercuryColor = document.getElementsByClassName('mercury')[0];
mercuryColor.style.backgroundColor = "gray";

let venusColor = document.getElementsByClassName('venus')[0];
venusColor.style.backgroundColor = "orange";

let marsColor = document.getElementsByClassName('mars')[0];
marsColor.style.backgroundColor = "red";

let jupiterColor = document.getElementsByClassName('jupiter')[0];
jupiterColor.style.backgroundColor = "orange";

let saturnColor = document.getElementsByClassName('saturn')[0];
saturnColor.style.backgroundColor = "yellow";

let uranusColor = document.getElementsByClassName('uranus')[0];
uranusColor.style.backgroundColor = "blue";

let naptuneColor = document.getElementsByClassName('naptune')[0];
naptuneColor.style.backgroundColor = "purple";




/* ----------------- solution with loop 


let solarSystem = [
  {name:'Mercury', moons: 0, color:'orange', radius:2439},
  {name:'Venus', moons: 0, color:'grey', radius:6051},
  {name:'Earth', moons:1, color:'blue', radius:6378},
  {name:'Mars', moons: 2, color:'red', radius:3396},
  {name:'Jupiter', moons: 79, color:'brown', radius:71492},
  {name:'Saturn', moons: 82, color:'yellow', radius:60268},
  {name:'Uranus', moons: 27, color:'ligthblue', radius:25559},
  {name:'Neptune', moons: 14, color:'darkblue', radius:24764}
]

let root = document.getElementsByClassName('listPlanets')[0];

for (let i = 0; i < solarSystem.length; i++) {
  let planet = document.createElement('div');
  planet.innerText = solarSystem[i].name;
  planet.classList.add('planet');
  planet.style.backgroundColor = solarSystem[i].color;
  let x = 1;
  while(x <= solarSystem[i].moons){
    let moon = document.createElement('div');
    moon.style.left = (x*10)+'px';
    moon.classList.add('moon');
    planet.appendChild(moon);
    x++;
  }
  root.appendChild(planet)
}


----------------- */
