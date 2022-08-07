import logo from "./logo.svg";
import "./App.css";
import "tachyons";
// import Hello from "./Hello";
import users from "./users.json";

function App() {
  const name = "john";
  const last = "due";
  console.log(users);
  // const users = [
  //   { email: "john@gmail.com", username: "Johny" },
  //   { email: "mark@gmail.com", username: "matko" },
  //   { email: "john@gmail.com", username: "john" },
  //   { email: "tylor@gmail.com", username: "smith" },
  // ];
  return (
    <div className="App">
      <header className="App-header">
        {/* {users.map((item) => {
          return (
            <h4>
              Hello {item.email} {item.username}
            </h4>
          );
        })} */}
        {/* {users.map((item, i) => {
          return <Hello user={item} key={i} />;
        })} */}

        {/* {{users.map(item, i)=>{
          return <User user={item.username} key={i}/>
        }}} */}
      </header>
    </div>
  );
}

export default App;
