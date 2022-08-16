import { createStore } from "redux";
import { reducer } from "../reducers/index";

// we invoke and import the function to create the store.
export const store = createStore(reducer);
