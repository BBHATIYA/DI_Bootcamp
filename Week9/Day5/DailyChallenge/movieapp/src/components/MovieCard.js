import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovie } from "../redux/actions";

class MovieCard extends React.Component {
  render() {
    return (
      <>
        {this.props.movies.map((movie, i) => (
          <div key={i} className="card">
            <img className="poster" src={movie.Poster} alt="" />
            <h4>
              {movie.Title} - {movie.Year}
            </h4>

            <Link
              className="navbar-brand text-white text-lg brand-text"
              to={`/movie/${movie.imdbID}`}
            >
              <button
                id="more-details-button"
                onClick={() => this.props.getMovieDetails(movie.imdbID)}
              >
                Movie Details
              </button>
            </Link>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetails: (imdbId) => dispatch(fetchMovie(imdbId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
