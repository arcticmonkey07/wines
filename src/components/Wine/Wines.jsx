import React from 'react';
import './WineContainer.css';
import Wine from "./Wine.jsx";
import * as axios from "axios";

class Wines extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/wines')
        .then(response => {
          this.props.setWines(response.data)
        });
  }

  render() {
    return <div className='container'>
      {
        this.props.wines.map(w => <Wine favorite={this.props.favorite} unfavorite={this.props.unfavorite} id={w.id} favorited={w.favorited} image={w.image} name={w.name} country={w.country} grape={w.grape} sugar={w.sugar} color={w.color} price={w.price} description={w.description} key={w.id}/>)
      }
    </div>
  }
}


export default Wines;