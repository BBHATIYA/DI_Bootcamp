import React from "react";
import { connect } from "react-redux";
import Child from "./components/Child";
import One from "./components/One";
import Two from "./components/Two";
import "./App.css";
import { handelChangeAction, handelClickAction } from "./redux/action";
// import { handelClickAction } from "./redux/action";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      property1: "one 1",
      property2: "tow 2",
    };
  }

  handelChange = (e) => {
    console.log(e.target.value);
    this.setState({ property1: e.target.value });
  };

  handelClick = () => {
    this.setState({ property2: this.state.property1 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <p>This property one: {this.state.property1}</p>
            <input type="text" onChange={this.props.ab}></input>
          </div>

          <div>
            <p>This property two: {this.state.property2}</p>
            <button type="button" onClick={() => this.props.cd(this.props.a)}>
              Change prop_two to prop_one
            </button>
          </div>

          <div>this form store:{this.props.a}</div>
          <div>this form store:{this.props.b}</div>
          <Child />
          <One />
          <Two />
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    a: state.prop_one,
    b: state.prop_two,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ab: (e) => dispatch(handelChangeAction(e.target.value)),
    cd: () => dispatch(handelClickAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
