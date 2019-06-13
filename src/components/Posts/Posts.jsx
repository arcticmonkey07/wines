import React from 'react';
import './Posts.css';
import Post from "./Post/Post.jsx";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/posts-reducer.js";

const Posts = (props) => {
  let postsElements = props.store.postsPage.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} /> )

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
      <section>
        <textarea className="posts__textarea" onChange={onPostChange} value={props.store.postsPage.newPostText} />
        <button className="posts__button" onClick={ addPost }>Отправить</button>
        { postsElements }
      </section>
  )
}

export default Posts;