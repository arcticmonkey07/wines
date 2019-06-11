let store = {
  _state: {
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.newPostText,
        likesCount: 2,
      };
      this._state.posts.push(newPost);
      this._state.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;
window.store = store;