import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: [{ task: "Buy milk" }, { task: "Book Dr appointment" }],
    };
  }

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.setState({
        taskList: [...this.state.taskList, { task: e.target.value }],
      });
      e.target.value = "";
    }
  };

  handleClick = (i) => {
    // e.target.remove();
    this.state.taskList.splice(i, 1);
    this.setState({ taskList: [...this.state.taskList] });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo's</h1>
          <br></br>

          {this.state.taskList.length > 0
            ? this.state.taskList.map((item, i) => {
                return (
                  <li
                    className="liList"
                    onClick={() => this.handleClick(i)}
                    key={i}
                  >
                    {item.task}
                  </li>
                );
              })
            : "nothing to do"}

          <br></br>
          <input onKeyDown={this.handleKeyDown} type="text"></input>
        </header>
      </div>
    );
  }
}

export default App;
