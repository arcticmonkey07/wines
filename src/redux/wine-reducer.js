const FAVORITE = 'FAVORITE';
const UNFAVORITE = 'UNFAVORITE';
const SET_WINES = 'SET_WINES';

let initialState = {
  wines: []
}

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
      }

    case UNFAVORITE:
      return {
        ...state,
        wines: state.wines.map( w => {
          if (w.id === action.userId) {
            return {...w, favorited: false}
          }
          return w;
        })
      }
    case SET_WINES:
      return {
          ...state,
        wines: [...state.wines, ...action.wines]
      }

    default:
      return state;
  }
}

export const favoriteAC = (userId) => ({type: FAVORITE, userId})
export const unfavoriteAC = (userId) => ({type: UNFAVORITE, userId})
export const setWinesAC = (wines) => ({type: SET_WINES, wines})

export default wineReducer;

