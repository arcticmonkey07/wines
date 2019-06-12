const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

let store = {
  _state: {
    dialogs: {
      dialogPosts: [],
      newDialogText: 'Напишите'
    },
    posts: [
      {id: 1, message: 'This great wine!', likesCount: 3},
      {id: 2, message: 'Sparkly, tart, fruty!', likesCount: 4}
    ],
    newPostText: 'Напишите отзыв',
    wines: [
      {
        id: 1,
        image: 'http://quack-straw.surge.sh/img/Nine_Stones_Shiraz.jpg',
        name: 'Nine Stones',
        country: 'Australia',
        grape: 'Shiraz',
        sugar: 'dry',
        color: 'Red',
        price: 800,
        description: 'Mclaren Valley. Чуть перечный, достаточно сочный, вишневый, насыщенный.'
      },
      {
        id: 2,
        image: 'http://quack-straw.surge.sh/img/riesling_hagn.png',
        name: 'Riesling Hagn',
        country: 'Austria',
        grape: 'Riesling',
        sugar: 'dry',
        color: 'White',
        price: 713,
        description: 'Изящный, полный, насыщенный рислинг.'
      },
      {
        id: 3,
        image: 'http://quack-straw.surge.sh/img/Jinda-Lee_shiraz.jpg',
        name: 'Jinda-Lee',
        country: 'Australia',
        grape: 'Shiraz',
        sugar: 'dry',
        color: 'Red',
        price: 600,
        description: 'Простое, легкое.'
      },
    ]
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('Store change!');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.newPostText,
        likesCount: 2,
      };
      this._state.posts.push(newPost);
      this._state.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === ADD_DIALOG) {
      let newPost = {
        id: 5,
        message: this._state.dialogs.newDialogText,
      };
      this._state.dialogs.dialogPosts.push(newPost);
      this._state.dialogs.newDialogText = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_DIALOG_TEXT) {
      this._state.dialogs.newDialogText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addDialogActionCreator = () => ({type: ADD_DIALOG})
export const updateNewDialogTextActionCreator = (text) => ({type: UPDATE_NEW_DIALOG_TEXT, newText: text})

export default store;
window.store = store;