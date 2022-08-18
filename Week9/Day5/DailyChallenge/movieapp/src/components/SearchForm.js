import React from "react";
import { connect } from "react-redux";
import { searchMovie, fetchMovies } from "../redux/actions";

class SearchForm extends React.Component {
  render() {
    return (
      <div className="searching-form">
        <h1> Search for a movie, TV series....</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handelOnSubmit(this.props.text);
          }}
        >
          <input
            id="search-input"
            type={"text"}
            onChange={this.props.handelOnChange}
            placeholder={"Search movies and TV series..."}
          />
          <input id="submit-input" type={"submit"} value="Search" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handelOnChange: (e) => dispatch(searchMovie(e.target.value)),
    handelOnSubmit: (text) => dispatch(fetchMovies(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
