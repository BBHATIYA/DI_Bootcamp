export const search = (stringToSearchFor) => {
  //   console.log(stringToSearchFor);

  return {
    type: "SEARCH",
    payload: stringToSearchFor,
  };
};

export const getRobots = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      dispatch({ type: "GET-ROBOTS", payload: data });
    })
    .catch((err) => console.log(err));
};
