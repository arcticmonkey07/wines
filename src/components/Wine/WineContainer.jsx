import React from 'react';
import './WineContainer.css';
import Wine from "./Wine.jsx";

const WineContainer = (props) => {

  let winesElements = props.store.wines.map( w => <Wine id={w.id} image={w.image} name={w.name} country={w.country} grape={w.grape} sugar={w.sugar} color={w.color} price={w.price} description={w.description} key={w.id} />);

  return (
      <div className='container'>
        { winesElements }
      </div>
  )
}

export default WineContainer;