import React from 'react';
import './WineContainer.css';
import Wine from "./Wine.jsx";
import * as axios from "axios";

const Wines = (props) => {
  if (props.wines.length === 0) {

    axios.get('http://localhost:3000/wines')
         .then(response => {
           props.setWines(response.data)
         });

  }

  let winesElements = props.wines.map( w => <Wine favorite={props.favorite} unfavorite={props.unfavorite} id={w.id} favorited={w.favorited} image={w.image} name={w.name} country={w.country} grape={w.grape} sugar={w.sugar} color={w.color} price={w.price} description={w.description} key={w.id} />);

  return (
      <div className='container'>
        { winesElements }
      </div>
  )
}

export default Wines;