import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

class MovieContainer extends React.Component {
  render() {
    return (
      <div id="movies-container">
        <MovieCard />
      </div>
    );
  }
}

export default connect(null, null)(MovieContainer);
