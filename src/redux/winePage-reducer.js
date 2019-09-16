const SET_WINE_PAGE = 'SET_WINE_PAGE';

let initialState = {
  winePage: []
};

const winePageReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_WINE_PAGE:
      return {
        ...state,
        winePage: action.winePage
      };
    default:
      return state;
  }
};


export const setWinePage = (winePage) => ({type: SET_WINE_PAGE, winePage});

export default winePageReducer;