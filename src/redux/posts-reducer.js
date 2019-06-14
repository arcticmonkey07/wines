const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'This great wine!', likesCount: 3},
    {id: 2, message: 'Sparkly, tart, fruty!', likesCount: 4}
  ],
  newPostText: 'Напишите отзыв'
}

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_POST:
        let newPost = {
          id: 5,
          message: state.newPostText,
          likesCount: 2,
        };
        return {
          ...state,
          posts: [...state.posts, newPost],
          newPostText: ''
        };
      case UPDATE_NEW_POST_TEXT:
        return {
          ...state,
          newPostText: action.newText
        };
      default:
        return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default postsReducer;

