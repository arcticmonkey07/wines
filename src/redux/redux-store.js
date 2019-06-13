import {combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer.js";
import wineReducer from "./wine-reducer.js";

let reducers = combineReducers({
  postsPage: postsReducer,
  winePage: wineReducer
});

let store = createStore(reducers);

export default store;