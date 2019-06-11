import React from 'react';
import './Menu.css';
import {NavLink} from "react-router-dom";

const Menu = () => {
  return (
      <div className='menu'>
        <nav className='menu__nav'>
          <ul className='menu__list'>
            <li className='menu__item'>
              <NavLink to='/wines' className='menu__link' activeClassName='active'>Вино</NavLink>
            </li>
            <li className='menu__item'>
              <NavLink to='/champagne' className='menu__link' activeClassName='active'>Шампанское</NavLink>
            </li>
            <li className='menu__item'>
              <NavLink className='menu__link'>Виски</NavLink>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Menu;