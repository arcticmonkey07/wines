import {combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer.js";

let reducers = combineReducers({
  postsPage: postsReducer
});

let store = createStore(reducers);

export default store;