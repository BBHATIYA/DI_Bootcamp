const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },

  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },

  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },

  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },

  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },

  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },

  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },

  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },

  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },

  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];
let section = document.getElementById("main-container");

function displayRobot() {
  robots.forEach(function (robot) {
    let div = document.createElement("div");
    div.setAttribute("id", robot["id"]);
    div.classList.add("roboclass");
    let paragraph1 = document.createElement("p");
    let ptext1 = document.createTextNode(robot.name);
    paragraph1.classList.add("name");
    paragraph1.appendChild(ptext1);
    let paragraph2 = document.createElement("p");
    let ptext2 = document.createTextNode(robot.email);
    paragraph2.classList.add("email");
    paragraph2.appendChild(ptext2);
    let image = document.createElement("img");
    image.setAttribute("src", robot.image);
    div.appendChild(image);
    div.appendChild(paragraph1);
    div.appendChild(paragraph2);
    section.appendChild(div);
    // console.log(section);
  });
}

displayRobot();

let searchPlace = document.getElementById("search");
searchPlace.addEventListener("input", manageSearchBar);

function manageSearchBar() {
  // console.log(searchPlace.value);
  let input = searchPlace.value;

  let allRobots = Array.from(document.getElementsByClassName("roboclass"));

  console.log(allRobots);

  allRobots.forEach(function myfunc(elem, i) {
    let name = robots[i].name.toLowerCase();
    console.log(name);

    if (input.length > 0) {
      elem.setAttribute("style", "display: none");
      if (name.includes(input)) {
        elem.setAttribute("style", "display: ");
      }
    } else {
      elem.setAttribute("style", "display: ");
    }
  });
}

manageSearchBar();
