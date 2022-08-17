import React from "react";
import { connect } from "react-redux";
import { getRobots } from "../redux/actions";
import "../App.css";

class Robots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  render() {
    return (
      <>
        {" "}
        <button onClick={this.props.handleGetRobots}>Get Robots</button>
        <div className="perent-div">
          {this.props.robots.map((robot, i) => (
            <div key={robot.id} className="robo-div">
              <img src={`https://robohash.org/${robot.id}?10x10`} />
              <h2>{robot.name}</h2>
              <h4>{robot.email}</h4>
            </div>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    robots: state.robots,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetRobots: () => dispatch(getRobots()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Robots);
