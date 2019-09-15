const FAVORITE = 'FAVORITE';
const UNFAVORITE = 'UNFAVORITE';
const SET_WINES = 'SET_WINES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_WINES_COUNT = 'SET_TOTAL_WINES_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  wines: [],
  pageSize: 3,
  totalWinesCount: 0,
  currentPage: 1,
  isFetching: true
};

const wineReducer = (state = initialState, action) => {
  switch(action.type) {
    case FAVORITE:
      return {
        ...state,
        wines: state.wines.map( w => {
          if (w.id === action.userId) {
            return {...w, favorited: true}
          }
          return w;
        })
      };

    case UNFAVORITE:
      return {
        ...state,
        wines: state.wines.map( w => {
          if (w.id === action.userId) {
            return {...w, favorited: false}
          }
          return w;
        })
      };
    case SET_WINES:
      return {
          ...state,
        wines: action.wines
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_WINES_COUNT:
      return {
        ...state,
        totalWinesCount: action.count
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
};

export const favorite = (userId) => ({type: FAVORITE, userId});
export const unfavorite = (userId) => ({type: UNFAVORITE, userId});
export const setWines = (wines) => ({type: SET_WINES, wines});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalWinesCount = (totalWinesCount) => ({type: SET_TOTAL_WINES_COUNT, count: totalWinesCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });

export default wineReducer;

