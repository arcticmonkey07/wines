import Posts from "./Posts.jsx";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/posts-reducer.js";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    postsPage: state.postsPage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;