import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
  render(){
    return (
        <header>
          <ul id="menu">
          <li><NavLink exact activeClassName='active' to="/">Home</NavLink></li>
            <li><NavLink exact activeClassName='active' to="/pizza">Pizza</NavLink></li>
              <li><NavLink exact activeClassName='active' to="/drinks">Drinks</NavLink></li>
                <li><NavLink exact activeClassName='active' to="/checkout">Checkout</NavLink></li>
          </ul>
        </header>
    );
  }
}
export default Header
