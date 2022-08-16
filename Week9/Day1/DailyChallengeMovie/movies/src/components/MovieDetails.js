import { connect } from "react-redux";

const MovieDetails = (props) => {
  return (
    <div style={{ display: "inline-block" }}>
      <h1>MovieDetails</h1>
      <h4>{props.movie.title}</h4>
      <h4>{props.movie.releaseDate}</h4>
      <h4>{props.movie.rating}</h4>
    </div>
  );
};

const mapToStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};

export default connect(mapToStateToProps)(MovieDetails);
