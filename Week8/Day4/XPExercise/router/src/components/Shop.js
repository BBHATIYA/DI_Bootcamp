import React from "react";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      throw Error("Something wrong rendering this component");
    }
    return <h1>Shop page</h1>;
  }
}

export default Shop;
