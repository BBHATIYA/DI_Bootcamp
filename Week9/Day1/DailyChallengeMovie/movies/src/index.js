import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

import { reducer } from "./redux/reducer";

// action => middleware => reducer
export const mylogger = (store) => (next) => (action) => {
  // console.log("store=>", store);
  // store.dispatch({
  //   type: "MOVIE_DETAIL",
  //   payload: {
  //     title: "Spider-Man: Homecoming",
  //     releaseDate: "05-07-2017",
  //     rating: 7.4,
  //   },
  // });
  console.log("prev state=>", store.getState());
  console.log("action=>", action);
  next(action);
  console.log("next state=>", store.getState());
};

const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
