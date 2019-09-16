import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios/index";

const Header = (props) => {

  let findWine = (e) => {
    e.preventDefault();
    axios.get(props.findWinePage.newText)
      .then(response => {
        props.setWines(response.data);
      });
  };

  let onTextChange = (e) => {
    let text = e.target.value;
    props.updateText(`http://localhost:3000/wines?q=${text}`);
  };

  return (
      <header className='header-top'>
        <div className='header-top__container'>
          <NavLink to='/'>
            <img className='header-top__logo' src={logo} alt="logo" width='301' height='81' />
          </NavLink>
          <form className='header-top__form' action="">
            <input onChange={onTextChange} className='header-top__input' type="search" placeholder='Поиск по каталогу' maxLength='100' />
            <button onClick={findWine} className='header-top__submit' type='submit'>Найти</button>
          </form>
          <p className='header-top__login' >
            <svg className='header-top__login-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z"/></svg>
            Личный кабинет
          </p>
          <p className='header-top__favorites'>
            <svg className='header-top__favorites-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>
          </p>
          <p className='header-top__basket'>
            <svg className='header-top__basket-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/></svg>
            Корзина</p>
        </div>
      </header>
  )
};

export default Header;