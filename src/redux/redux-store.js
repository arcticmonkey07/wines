import {combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer.js";
import wineReducer from "./wine-reducer.js";
import headerReducer from "./header-reducer";

let reducers = combineReducers({
  postsPage: postsReducer,
  winePage: wineReducer,
  findWinePage: headerReducer
});

let store = createStore(reducers);

export default store;