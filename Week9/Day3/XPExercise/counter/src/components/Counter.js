import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions";

class Counter extends React.Component {
  incrementOfOdd = () => {
    if (this.props.counter % 2 === 1) {
      this.props.handelIncrement();
    }
  };

  incrementAsync = () => {
    setTimeout(() => this.props.handelIncrement(), 1000);
  };

  render() {
    return (
      <>
        <span>
          Clicked:{this.props.counter} times
          <button onClick={this.props.handelIncrement}>+</button>
          <button onClick={this.props.handelDecrement}>-</button>
          <button onClick={this.incrementOfOdd}>Increment if odd</button>
          <button onClick={this.incrementAsync}>Increment async</button>
        </span>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handelIncrement: () => dispatch(increment()),
    handelDecrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
