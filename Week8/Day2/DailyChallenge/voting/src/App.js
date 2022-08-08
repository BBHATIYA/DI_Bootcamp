// import "./App.css";
import React from "react";
import "tachyons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }
  handleAdd = (event) => {
    let arr = [...this.state.languages];
    arr[event].votes++;
    this.setState({ languages: arr });
  };

  render() {
    const { languages } = this.state;

    return (
      <div className="tc">
        {languages.map((item, i) => {
          return (
            <div key={i} className="ba bg-light-green pa4 ma4 w-third ">
              {item.votes} {item.name}
              <button onClick={() => this.handleAdd(i)}> Click Here</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
