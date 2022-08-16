import "./App.css";
import Robots from "./components/Robots";
import Title from "./components/Title";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Title />
          </div>
          <div id="main-section">
            <Robots />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
