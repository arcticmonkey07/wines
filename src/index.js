import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {addPost, subscribe, updateNewPostText} from './redux/store.js';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = () => {
  ReactDOM.render(
      <BrowserRouter>
        <App store={store} addPost={addPost} updateNewPostText={updateNewPostText} />
      </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree();

subscribe(rerenderEntireTree);



serviceWorker.unregister();
