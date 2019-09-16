import React from 'react';
import './Wine.css';
import {NavLink} from "react-router-dom";

const Wine = (props) => {
  let path = '/winePage/' + props.id;

  return (
    <div className="wine" data-kind="" data-flag="">
      <NavLink to={path}>
        <img className="wine__img" src={ props.image } width="120" height="400" alt="wine" />
      </NavLink>
      <div className="wine__description-wrapper">
        <NavLink to={path}>
          <h2 className='wine__header '>{ props.name }</h2>
        </NavLink>
        <i className="wine__country">{ props.country }</i>
        <i className="wine__grape">{ props.grape }</i>
        <i className="wine__sugar">{ props.sugar }</i>
        <i className="wine__color">{ props.color }</i>
        <b className="wine__price">Цена: { props.price }</b>
        <p className="wine__description">{ props.description }</p>
        { props.favorited
            ? <button onClick={ () => { props.unfavorite(props.id)} }
                      className='wine__unfavorite'>
              <svg className='wine__unfavorite-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.845 9.395c-.535-1.242-1.049-5.551-1.049-5.957 0-1.085.944-.494.058-3.002-.103-.291-.979-.436-1.854-.436-.875 0-1.751.145-1.854.435-.863 2.446.058 1.978.058 3.002 0 .405-.514 4.715-1.049 5.957s-2.155 1.668-2.155 4.294v8.895c0 1.332 1.155 1.417 5 1.417s5-.085 5-1.417v-8.895c0-2.626-1.621-3.051-2.155-4.293zm-3.845 4.689l.005 7.916c-.508.065-1.797.138-2.005-.183v-7.864c0-2.76 1.367-1.888 2.504-5.243-.284 1.752-.504 2.651-.504 5.374z"/></svg>
            </button>
            : <button onClick={ () => { props.favorite(props.id)} }
                      className='wine__favorite'>
              <svg className='wine__favorite-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.845 9.395c-.535-1.242-1.049-5.551-1.049-5.957 0-1.085.944-.494.058-3.002-.103-.291-.979-.436-1.854-.436-.875 0-1.751.145-1.854.435-.863 2.446.058 1.978.058 3.002 0 .405-.514 4.715-1.049 5.957s-2.155 1.668-2.155 4.294v8.895c0 1.332 1.155 1.417 5 1.417s5-.085 5-1.417v-8.895c0-2.626-1.621-3.051-2.155-4.293zm-3.845 4.689l.005 7.916c-.508.065-1.797.138-2.005-.183v-7.864c0-2.76 1.367-1.888 2.504-5.243-.284 1.752-.504 2.651-.504 5.374z"/></svg>
            </button>
        }
      </div>
    </div>
  )
};

export default Wine;