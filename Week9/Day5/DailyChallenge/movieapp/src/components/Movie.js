import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Movie extends React.Component {
  render() {
    return (
      <div id="movie-search">
        <section id="movie-container">
          <>
            <div id="movie-poster-div">
              <img id="movie-poster-img" src={this.props.movie.Poster} alt="" />
            </div>
            <div id="movie-details">
              <h2>{this.props.movie.Title}</h2>
              <b>Genre: </b>
              {this.props.movie.Genre}
              <br />
              <b>Released: </b>
              {this.props.movie.Released}
              <br />
              <b>Rated: </b>
              {this.props.movie.Rated}
              <br />
              <b>imdbRating: </b>
              {this.props.movie.imdbRating}
              <br />
              <b>Director: </b>
              {this.props.movie.Director}
              <br />
              <b>Writer: </b>
              {this.props.movie.Writer}
              <br />
              <b>Actors: </b>
              {this.props.movie.Actors}
              <br />
            </div>
          </>
        </section>
        <div id="about-section">
          <h3>About</h3>
          <p>{this.props.movie.Plot}</p>

          <button
            id="more-details-button"
            onClick={() => {
              window.location.href = `https://imdb.com/title/${this.props.movie.imdbID}/`;
            }}
          >
            View on IMDB
          </button>
          <Link to={`/`}>
            <button id="more-details-button">Go Back To Search</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
