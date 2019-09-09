import React from 'react';
import './Wines.css';
import Wine from "./Wine.jsx";

const Wines = (props) => {

  let pagesCount = Math.ceil(props.totalWinesCount.length / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div className='wines__pagination'>
      {pages.map(p => {
        return <span
          className={props.currentPage === p && 'wines__selectedPage'}
          onClick={() => { props.onPageChanged(p); }}
        >{p}</span>
      })}
    </div>
    <div className='wines__container'>
      {
        props.wines.map(w => <Wine favorite={props.favorite} unfavorite={props.unfavorite} id={w.id} favorited={w.favorited} image={w.image} name={w.name} country={w.country} grape={w.grape} sugar={w.sugar} color={w.color} price={w.price} description={w.description} key={w.id}/>)
      }
    </div>
  </div>
};

export default Wines;