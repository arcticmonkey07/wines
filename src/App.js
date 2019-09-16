import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Menu from "./components/Menu/Menu.jsx";
import WineContainer from "./components/Wine/WinesContainer.jsx";
import ChampagneContainer from "./components/Champagne/ChampagneContainer.jsx";
import PostsContainer from "./components/Posts/PostsContainer.jsx";
import HeaderContainer from "./components/Header/HeaderContainer";
import WinePageContainer from "./components/WinePage/WinePageContainer";

const App = () => {
  return (
      <div>
        <HeaderContainer />
        <Menu />
        <Route path='/wines' render={ () => <WineContainer />} />
        <Route path='/winePage' render={ () => <WinePageContainer />} />
        <Route path='/champagne' render={ () => <ChampagneContainer />} />
        <Route path='/posts' render={ () => <PostsContainer />} />
      </div>
  );
};

export default App;
