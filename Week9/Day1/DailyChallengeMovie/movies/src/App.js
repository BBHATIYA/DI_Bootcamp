import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import "./App.css";
import { connect } from "react-redux";
import { getUsers } from "./redux/actions";
import { search } from "./redux/actions";

function App(props) {
  // const getUsers = () => {
  //   // fetch("https://jsonplaceholder.typicode.com/users")
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     props.show(data);
  //   //     // props.dispatch({ type: "GET_USERS", payload:data });
  //   //   })
  //   //   .catch((e) => {
  //   //     console.log(e);
  //   //   });
  // };

  return (
    <div>
      <button onClick={() => props.dispatch(getUsers())}>Get Users</button>
      <div>
        Search:
        <input
          type="text"
          onChange={(e) => props.dispatch(search(e.target.value))}
        />
      </div>
      {props.users.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
      {/* <MovieList />
      <MovieDetails /> */}
    </div>
  );
}

const mapToStateToProps = (state) => {
  return {
    users: state.filter,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     show: () => dispatch(getUsers()),
//   };
// };

export default connect(mapToStateToProps)(App);
