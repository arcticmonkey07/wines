import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store.js';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
  <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </HashRouter>, document.getElementById('root'));



serviceWorker.unregister();
