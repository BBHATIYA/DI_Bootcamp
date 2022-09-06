import MIXCOUPLE from "./Assets/Projects/mixcouple.png";
import NEWSFEED from "./Assets/Projects/newsfeed.png";
import SNAKELADDER from "./Assets/Projects/SnakeLadder.png";

export const PROJECTS = [
  {
    image: SNAKELADDER,
    name: "Snake & Ladder Game",
    technologyUsed: "HTML, CSS, Javascript, DOM",
    description:
      "This project I have build during bootcamp in my first Hackathon. Utilized HTML, CSS, Javascript, DOM to build Snake and Ladder game  where I used loops to create a divs and if/else conditions to manage ups and downs of all snake and ladders on the board.",
    url: "https://github.com/BBHATIYA/HACKATHON-1",
  },
  {
    image: NEWSFEED,
    name: "newsfeed.com",
    technologyUsed:
      "HTML, CSS, Flex, JavaScript, Node.js, API, Database, PostgreSQL",
    description:
      "This project I have build during bootcamp in my second Hackathon. Where I build register and login page when user register data getting save in the database, at the time of login it's check if user already exist and also if email or password is wrong. After user logged in get directed to news feed page where user can search news with country name.",
    url: "https://github.com/BBHATIYA/Hackathon-2",
  },
  {
    image: MIXCOUPLE,
    name: "Mix-Couple App",
    technologyUsed:
      "React, Node.js, API, Database, Material Ui(for css), JWT, PostgreSQL ",
    description:
      "This is my final project in bootcamp Mix-Couple App. This app is intended for mixed couples (1 Israeli and 1 foreign non Jewish partner) in order to share useful tips and information. Users can find all branch details and in post section they can share post and another's can answers by comment . ",
    url: "https://github.com/BBHATIYA/Final-Project",
  },
];

// export const SKILLS = [
//   { name: "ReactJs", initialRating: 4 },
//   { name: "React-Native", initialRating: 3 },
//   { name: "JavaScript", initialRating: 4 },
//   { name: "Redux", initialRating: 4 },
//   { name: "Nodejs", initialRating: 3 },
//   { name: "Html", initialRating: 4 },
//   { name: "CSS", initialRating: 4 },
//   { name: "ReactStrap | Material UI", initialRating: 4 },
//   { name: "Git | GitHub", initialRating: 4 },
// ];


export const SKILLS = [
  { name: "ReactJs" },
  { name: "React-Native"},
  { name: "JavaScript"},
  { name: "Redux" },
  { name: "Nodejs"},
  { name: "Html" },
  { name: "CSS" },
  { name: "ReactStrap | Material UI"},
  { name: "Git | GitHub"},
];

export const TOOLS = [
  "Visual Studio Code",
  "Git",
  "Chrome DevTools",
  "Npm (Node Package Manager)",
  "Heroku",
  "Postman",
];
