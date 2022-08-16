import React from "react";
import { connect } from "react-redux";
import { search } from "../redux/actions";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stringToLookFor: "*",
    };
  }

  handleChange = (event) => {
    this.props.term(event.target.value);
    // this.setState({stringToLookFor: event.target.value})
  };

  render() {
    return (
      <>
        <h1>ROBOFRIENDS</h1>
        <input
          onChange={this.handleChange}
          type={"text"}
          placeholder="Search for robots"
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentRobots: state.robots,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    term: (strToSearch) => dispatch(search(strToSearch)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);
