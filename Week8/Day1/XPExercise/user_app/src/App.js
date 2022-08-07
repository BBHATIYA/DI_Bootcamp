import "./App.css";
import UserFavoriteColors from "./UserFavoriteColors";
import Exercise4 from "./Exercise4";

function App() {
  const myElement = <h1>I do not use JSX</h1>;
  const sum = 5 + 5;
  const user = {
    first_name: "Bob",
    last_name: "Dylan",
    fav_animals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <div>
      <div>{myElement}</div>
      <div>React is {sum} times better with JSX</div>
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <UserFavoriteColors animal={user.fav_animals} />
      <Exercise4 />
    </div>
  );
}

export default App;
