// import logo from "./logo.svg";
import "./App.css";
import users from "./users.json";
import User from "./components/User";
import "tachyons";

function App() {
  console.log(users);
  return (
    <div className="tc ">
      {users.map((item) => {
        return <User data={item} />;
      })}
    </div>
  );
}

export default App;
