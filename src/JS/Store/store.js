// createStore
import { createStore } from "redux";
import rootReducer from "../Reducers/index";
// import { todoApp } from "../Reducers/Todo";
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
