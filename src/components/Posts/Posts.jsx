import React from 'react';
import './Posts.css';
import Post from "./Post/Post.jsx";

const Posts = (props) => {
  let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} /> )

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
      <section>
        <textarea className="posts__textarea" onChange={onPostChange} value={props.newPostText} />
        <button className="posts__button" onClick={ addPost }>Отправить</button>
        { postsElements }
      </section>
  )
}

export default Posts;