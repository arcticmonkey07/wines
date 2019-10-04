import React from 'react';
import './WinePage.css';
import Preloader from "../_Common/Preloader/Preloader";
import PostsContainer from "../Posts/PostsContainer";

const WinePage = (props) => {
  if (!props.winePage) {
    return <Preloader />
  }
  return (
    <div className="wine-page">
      <h2 className='wine-page__header'>{props.winePage.name}</h2>
      <div className="wine-page__container">
        <img className="wine-page__img" src={props.winePage.imageLarge} width="120" height="400" alt="wine" />
        <div className='wine-page__parameters-wrapper'>
          <table>
            <tr>
              <td className='wine-page__parameter'>Вино:</td>
              <td>{props.winePage.color}, {props.winePage.sugar}</td>
            </tr>
            <tr>
              <td className='wine-page__parameter'>Регион:</td>
              <td>{props.winePage.country}, {props.winePage.region}</td>
            </tr>
            <tr>
              <td className='wine-page__parameter'>Производитель:</td>
              <td>{props.winePage.brand}</td>
            </tr>
            <tr>
              <td className='wine-page__parameter'>Крепость</td>
              <td>{props.winePage.alcohol}</td>
            </tr>
            <tr>
              <td className='wine-page__parameter'>Объем:</td>
              <td>{props.winePage.size}</td>
            </tr>
            <tr>
              <td className='wine-page__parameter'>Виноград:</td>
              <td>{props.winePage.grape}</td>
            </tr>
          </table>
        </div>
        <div className='wine-page__price-container'>
          <span className='wine-page__price-text'>Цена</span>
          <p className='wine-page__price'>{props.winePage.price}</p><span className='wine-page__price-rub'>руб.</span>
          <button className='wine-page__button--cart'>В корзину</button>
        </div>
      </div>
      <div className='wine-page__description'>
        <h3>Дегустационные заметки</h3>
        <p>{props.winePage.description02}</p>
        <p>{props.winePage.description03}</p>
      </div>
      <PostsContainer />
    </div>
        /*{ props.favorited
          ? <button onClick={ () => { props.unfavorite(props.id)} }
                    className='wine__unfavorite'>
            <svg className='wine__unfavorite-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.845 9.395c-.535-1.242-1.049-5.551-1.049-5.957 0-1.085.944-.494.058-3.002-.103-.291-.979-.436-1.854-.436-.875 0-1.751.145-1.854.435-.863 2.446.058 1.978.058 3.002 0 .405-.514 4.715-1.049 5.957s-2.155 1.668-2.155 4.294v8.895c0 1.332 1.155 1.417 5 1.417s5-.085 5-1.417v-8.895c0-2.626-1.621-3.051-2.155-4.293zm-3.845 4.689l.005 7.916c-.508.065-1.797.138-2.005-.183v-7.864c0-2.76 1.367-1.888 2.504-5.243-.284 1.752-.504 2.651-.504 5.374z"/></svg>
          </button>
          : <button onClick={ () => { props.favorite(props.id)} }
                    className='wine__favorite'>
            <svg className='wine__favorite-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.845 9.395c-.535-1.242-1.049-5.551-1.049-5.957 0-1.085.944-.494.058-3.002-.103-.291-.979-.436-1.854-.436-.875 0-1.751.145-1.854.435-.863 2.446.058 1.978.058 3.002 0 .405-.514 4.715-1.049 5.957s-2.155 1.668-2.155 4.294v8.895c0 1.332 1.155 1.417 5 1.417s5-.085 5-1.417v-8.895c0-2.626-1.621-3.051-2.155-4.293zm-3.845 4.689l.005 7.916c-.508.065-1.797.138-2.005-.183v-7.864c0-2.76 1.367-1.888 2.504-5.243-.284 1.752-.504 2.651-.504 5.374z"/></svg>
          </button>
        }*/
  )
};

export default WinePage;