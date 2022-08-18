export const fetchMovie = (imdbId) => (dispatch) => {
  console.log(imdbId);

  fetch(`https://www.omdbapi.com/?apikey=c7cea917&i=${imdbId}`, {
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: "FETCH_MOVIE", payload: data });
    })
    .catch((err) => console.log(err));
};

export const searchMovie = (nameOfMovie) => {
  return {
    type: "SEARCH_MOVIE",
    payload: nameOfMovie,
  };
};

export const fetchMovies = (text) => (dispatch) => {
  fetch(`https://www.omdbapi.com/?apikey=c7cea917&s=${text}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: "FETCH_MOVIES", payload: data.Search });
    })
    .catch((err) => console.log(err));
};

export const loading = () => {
  return {
    type: "LOADING",
  };
};
