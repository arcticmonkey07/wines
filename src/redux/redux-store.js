import {combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer.js";
import wineReducer from "./wine-reducer.js";
import headerReducer from "./header-reducer";
import winePageReducer from "./winePage-reducer";

let reducers = combineReducers({
  postsPage: postsReducer,
  winePage: wineReducer,
  wineProfilePage: winePageReducer,
  findWinePage: headerReducer
});

let store = createStore(reducers);

window.store = store;

export default store;