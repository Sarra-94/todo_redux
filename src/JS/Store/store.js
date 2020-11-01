// createStore
import { createStore } from "redux";
// import rootReducer from "../Reducers/index";
import Counter from "../Reducers/Todo";
export const store = createStore(
  Counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
