export const MOVIE_DETAIL = "MOVIE_DETAIL";
export const GET_USERS = "GET_USERS";
export const SEARCH_USER = "SEARCH_USER";

export const detail = (movie) => {
  return {
    type: MOVIE_DETAIL,
    payload: movie,
  };
};

export const search = (ttx) => {
  return {
    type: SEARCH_USER,
    payload: ttx,
  };
};

//redux -JS
//js -sync
export const getUsers = () => (dispatch, store) => {
  console.log("store=>", store().users);
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      // props.show(data);
      dispatch({ type: GET_USERS, payload: data });
    })
    .catch((e) => {
      console.log(e);
    });

  // return {
  //   type: GET_USERS,
  //   payload: arr,
  // };
};
