import React from "react";
import { connect } from "react-redux";
import { increase, decrease } from "./redux/actions";

class App extends React.Component {
  render() {
    return (
      <>
        <p>Your age: {this.props.age}</p>

        <button onClick={this.props.increase}>Age Up</button>
        <button onClick={this.props.decrease}>Age Down</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
