import React from "react";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    console.log(1);
  }

  componentDidMount() {
    console.log(3);
  }

  render() {
    console.log(2);
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div>
    );
  }
}

export default Cards;

