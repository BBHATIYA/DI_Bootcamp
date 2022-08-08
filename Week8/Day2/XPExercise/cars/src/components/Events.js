import React from "react";

class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: true,
    };
  }

  btn = () => {
    this.setState({ isToggleOn: false });
  };

  clickMe = () => {
    alert("I was clicked!");
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      alert(`The Enter kye was pressed, your input is ${event.target.value}`);
    }
  };

  render() {
    let clicked = "ON";
    if (this.state.isToggleOn === false) {
      clicked = "OFF";
    }

    return (
      <>
        <button onClick={this.clickMe}>Click Me</button>
        <input type="text" onKeyPress={this.handleKeyPress}></input>
        <button onClick={this.btn}>{clicked}</button>
      </>
    );
  }
}

export default Events;
