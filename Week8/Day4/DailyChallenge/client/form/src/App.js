import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      input: "",
      txt2: "",
    };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  async componentDidMount() {
    let data = await fetch("http://localhost:5000/api/hello");
    this.setState({ data: await data.json() });
  }

  handleClick = async (e) => {
    this.setState({ txt2: this.state.input });
    const { input } = this.state;
    e.preventDefault();
    const send = await fetch("http://localhost:3001/api/world", {
      method: "POST",
      header: { "Content-type": "application/json" },
      body: { input },
    });
    const parsed = send.json();
    console.log(parsed);
  };

  render() {
    return (
      <div className="App-header">
        <h1>{this.state.data.message}</h1>
        <br></br>
        <h1>Send to Express server:</h1>

        <input
          onChange={this.handleChange}
          type="text"
          name="msg"
          placeholder="Send something"
        ></input>
        <button onClick={this.handleClick}>SEND TO EXPRESS</button>
        <br></br>
        <h2>
          I received your POST request. This is what you sent me: <br></br>
          <br></br>
          {this.state.txt2}
        </h2>
      </div>
    );
  }
}

export default App;
