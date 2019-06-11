import React from 'react';
import './App.css';
import WineContainer from "./components/Wine/WineContainer.jsx";
import {Route} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import ChampagneContainer from "./components/Champagne/ChampagneContainer.jsx";
import Posts from "./components/Posts/Posts.jsx";

const App = (props) => {
  return (
      <div>
        <Header />
        <Menu />
        <Route path='/wines' render={ () => <WineContainer wines={props.state.wines} />} />
        <Route path='/champagne' render={ () => <ChampagneContainer />} />
        <Route path='/posts' render={ () => <Posts store={props.state} dispatch={props.dispatch} />} />
      </div>
  );
}

export default App;
