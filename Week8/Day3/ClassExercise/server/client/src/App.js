import "./App.css";
import Products from "./components/Products";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      textareavalue: "",
      isChecked: false,
      select: "",
    };
  }

  handelSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.username + " " + this.state.password);
    // console.log(this.state.textareavalue);
    // console.log(this.state.isChecked);
    console.log(this.state.select);
  };

  handelChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  handelCheck = (e) => {
    // console.log(e.target.checked);
    this.setState({ isChecked: e.target.checked });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Products /> */}
          <form onSubmit={this.handelSubmit}>
            <input
              type="text"
              name="username"
              onChange={this.handelChange}
            ></input>
            <br></br>
            <input
              type="text"
              name="password"
              onChange={this.handelChange}
            ></input>
            <br></br>
            <textarea name="textareavalue" onChange={this.handelChange}>
              Bla Bla Bla
            </textarea>
            <br></br>
            <input
              type="checkbox"
              name="isChecked"
              onChange={this.handelCheck}
            ></input>
            <select onChange={this.handelChange} name="select">
              <option value="1200">iPhone</option>
              <option value="850">iPad</option>
              <option value="950">iPhone</option>
            </select>
            <input type="submit" value="Submit"></input>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
