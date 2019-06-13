import React from 'react';
import Posts from "./Posts.jsx";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/posts-reducer.js";
import StoreContext from "../../StoreContext.js";

const PostsContainer = () => {
  return <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();

          let addPost = () => {
            store.dispatch(addPostActionCreator());
          }

          let updateNewPostText = (text) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          }

          return <Posts posts={state.postsPage.posts}
                   newPostText={state.postsPage.newPostText}
                   addPost={addPost}
                   updateNewPostText={updateNewPostText}
            />
        }
      }
      </StoreContext.Consumer>
}

export default PostsContainer;