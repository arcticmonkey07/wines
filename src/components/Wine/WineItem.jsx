import React from 'react';
import './Wine.css';

const WineItem = (props) => {
  return (
      <div className="wine" data-kind="" data-flag="">
          <img className="wine__img" src={ props.image } width="120" height="400" alt="wine" />
        <div className="wine__description-wrapper">
          <h2 className='wine__header '>{ props.name }</h2>
          <i className="wine__country">{ props.country }</i>
          <i className="wine__grape">{ props.grape }</i>
          <i className="wine__sugar">{ props.sugar }</i>
          <i className="wine__color">{ props.color }</i>
          <b className="wine__price">Цена: { props.price }</b>
          <p className="wine__description">{ props.description }</p>
        </div>
      </div>
  )
}

export default WineItem;