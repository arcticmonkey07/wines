let rerenderEntireTree = () => {
  console.log('Store change!');
}

let store = {
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
}

export let addPost = () => {
  let newPost = {
    id: 5,
    message: store.newPostText,
    likesCount: 2,
  };

  store.posts.push(newPost);
  store.newPostText = '';
  rerenderEntireTree();
}

export const updateNewPostText = (newText) => {
  store.newPostText = newText;
  rerenderEntireTree();
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default store;