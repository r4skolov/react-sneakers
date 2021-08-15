import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';

function Header(props) {
  const { cartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
    return(
        <header className="header d-flex justify-between">
        <Link to="/">
            <div className="headerLeft d-flex align-center">
                  <img src="/img/logo.png" alt="logo" width={40} height={40}/>
                  <div className="headerInfo">
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                  </div>
            </div>
        </Link>
        <ul className="headerRight d-flex align-center">
          <li className="d-flex mr-30" onClick={props.onClickCart}> 
          <svg className="mr-10" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            <span>{totalPrice} руб.</span>
          </li>
          <li className="mr-30 d-flex">
            <Link to="/favorites">
              <img width={20} height={20} src="/img/favoritebtn.svg" alt="Избранные" />
            </Link>
          </li>
          <li className="d-flex">
            <Link to="/orders">
               <img width={20} height={20} src="/img/union.svg" alt="Заказы" />
            </Link> 
          </li>
        </ul>
      </header>
    );
}

export default Header;