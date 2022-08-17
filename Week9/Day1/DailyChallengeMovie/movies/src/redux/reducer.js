import { MOVIE_DETAIL, GET_USERS, SEARCH_USER } from "./actions";

const initState = {
  movies: [
    { title: "Spider-Man: Homecoming", releaseDate: "05-07-2017", rating: 7.4 },
    { title: "Aquaman", releaseDate: "12-07-2018", rating: 7 },
    { title: "Black Panther", releaseDate: "02-13-2018", rating: 7.4 },
    { title: "Avengers: Infinity War", releaseDate: "04-25-2018", rating: 8.3 },
    {
      title: "Guardians of the Galaxy",
      releaseDate: "07-30-2014",
      rating: 7.9,
    },
  ],
  movie: {},
  users: [],
  filter: [],
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case MOVIE_DETAIL:
      return { ...state, movie: action.payload };
    case GET_USERS:
      return { ...state, users: action.payload, filter: action.payload };
    case SEARCH_USER:
      const filter = state.users.filter((item) => {
        return item.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      return { ...state, filter: filter };

    default:
      return { ...state };
  }
};

// export const reducer2 = (state = initState, action = {}) => {
//   switch (action.type) {
//     case USERS:
//       return { ...state, users: action.state };

//     default:
//       return { ...state };
//   }
// };
