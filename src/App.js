import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import WineContainer from "./components/Wine/WineContainer.jsx";
import ChampagneContainer from "./components/Champagne/ChampagneContainer.jsx";
import PostsContainer from "./components/Posts/PostsContainer.jsx";

const App = (props) => {
  return (
      <div>
        <Header />
        <Menu />
        <Route path='/wines' render={ () => <WineContainer />} />
        <Route path='/champagne' render={ () => <ChampagneContainer />} />
        <Route path='/posts' render={ () => <PostsContainer />} />
      </div>
  );
}

export default App;
