import React from 'react';
import './Posts.css';
import Post from "./Post/Post.jsx";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/store.js";

const Posts = (props) => {
  let postsElements = props.store.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} /> )

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
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