import React from "react";
import Garage from "./Garage";

class Car extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      color: "Red",
    };
  }

  render() {
    return (
      <header>
        This car is {this.state.color} {this.props.carModel}
        <Garage size="small" />
      </header>
    );
  }
}

export default Car;
