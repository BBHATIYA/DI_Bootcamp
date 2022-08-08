// import logo from "./logo.svg";
// import "./App.css";
// import users from "./users.json";
// import User from "./components/User";
// import "tachyons";

import React from "react";
// import myusers from "./users.json";
import User from "./components/User";
import "tachyons";
import Search from "./components/search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchText: "",
    };
  }

  getUser = () => {
    // this.setState({ users: myusers });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ users: data });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount() {
    console.log("componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ users: data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevState, this.state);
  }

  handelChange = (event) => {
    // console.log(event.target.value);
    this.setState({ searchText: event.target.value });
  };

  render() {
    console.log(this.state.users);

    const filterUsers = this.state.users.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchText.toLowerCase());
    });

    return (
      <div>
        {/* <button onClick={this.getUser}>Show Users</button> */}
        {/* <input
          type="text"
          placeholder="Search..."
          onChange={this.handelChange}
        ></input> */}

        <Search myHandeler ={this.handelChange}/>

        <div>
          {filterUsers.map((item) => {
            return <User data={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}

// function App() {
//   console.log(users);
//   return (
//     <div className="tc ">
//       {users.map((item) => {
//         return <User data={item} />;
//       })}
//     </div>
//   );
// }

export default App;
