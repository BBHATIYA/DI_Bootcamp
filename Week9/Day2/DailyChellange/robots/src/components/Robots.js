import React from "react";
import { connect } from "react-redux";
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
        {this.props.robots.map((robot, i) => (
          <div key={robot.id} className="card-style">
            <img src={`https://robohash.org/${robot.id}?10x10`} />
            <h4>{robot.name}</h4>
            <h6>{robot.email}</h6>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    robots: state.robots,
  };
};

export default connect(mapStateToProps, null)(Robots);
