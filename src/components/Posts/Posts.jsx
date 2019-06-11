import React from 'react';
import './Posts.css';
import Post from "./Post/Post.jsx";

const Posts = (props) => {
  let postsElements = props.store.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} /> )

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  }

  let onPostChange = () => {
    let newText = newPostElement.current.value;
    let action = { type: 'UPDATE-NEW-POST-TEXT', newText };
    props.dispatch(action);
  }

  return (
      <section>
        <textarea className="posts__textarea" ref={ newPostElement } onChange={onPostChange} value={props.store.newPostText} />
        <button className="posts__button" onClick={ addPost }>Отправить</button>
        { postsElements }
      </section>
  )
}

export default Posts;