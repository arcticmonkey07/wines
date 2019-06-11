import React from 'react';
import './App.css';
import WineContainer from "./components/Wine/WineContainer.jsx";
import {Route} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import ChampagneContainer from "./components/Champagne/ChampagneContainer.jsx";

const App = (props) => {
  return (
      <div>
        <Header />
        <Menu />
        <Route path='/wines' render={ () => <WineContainer store={props.store} />} />
        <Route path='/champagne' render={ () => <ChampagneContainer />} />
      </div>
  );
}

export default App;
