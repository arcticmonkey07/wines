const UPDATE_TEXT = 'UPDATE_TEXT';

let initialState = {
  newText: ''
};

const headerReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        newText: action.text
      };
    default:
      return state;
  }
};

export const updateTextActionCreator = (text) => ({type: UPDATE_TEXT, text});

export default headerReducer;

