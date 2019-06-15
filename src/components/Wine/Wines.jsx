import React from 'react';
import './WineContainer.css';
import Wine from "./Wine.jsx";

const Wines = (props) => {
  if (props.wines.length === 0) {
    props.setWines(
        [
          {
            id: 1,
            favorited: false,
            image: 'http://quack-straw.surge.sh/img/Nine_Stones_Shiraz.jpg',
            name: 'Nine Stones',
            country: 'Australia',
            grape: 'Shiraz',
            sugar: 'dry',
            color: 'Red',
            price: 800,
            description: 'Mclaren Valley. Чуть перечный, достаточно сочный, вишневый, насыщенный.'
          },
          {
            id: 2,
            favorited: false,
            image: 'http://quack-straw.surge.sh/img/riesling_hagn.png',
            name: 'Riesling Hagn',
            country: 'Austria',
            grape: 'Riesling',
            sugar: 'dry',
            color: 'White',
            price: 713,
            description: 'Изящный, полный, насыщенный рислинг.'
          },
          {
            id: 3,
            favorited: false,
            image: 'http://quack-straw.surge.sh/img/Jinda-Lee_shiraz.jpg',
            name: 'Jinda-Lee',
            country: 'Australia',
            grape: 'Shiraz',
            sugar: 'dry',
            color: 'Red',
            price: 600,
            description: 'Простое, легкое.'
          },
        ]
    )
  }

  let winesElements = props.wines.map( w => <Wine favorite={props.favorite} unfavorite={props.unfavorite} id={w.id} favorited={w.favorited} image={w.image} name={w.name} country={w.country} grape={w.grape} sugar={w.sugar} color={w.color} price={w.price} description={w.description} key={w.id} />);

  return (
      <div className='container'>
        { winesElements }
      </div>
  )
}

export default Wines;