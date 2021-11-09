import React from "react";
import "./Header.css"
import logo from "../img/logo.png";
import cart from "../img/Cart.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
          <img className="img-logo" src={logo} alt="logo" />
        <div className="text-logo">
          <div>REACT PIZZA</div>
          <div>самая вкусная пицца во вселенной</div>
        </div>
      </div>
      <div className="cart-section">
      <div className="cart-sum">
          <div>100$</div>
          
      </div>
      <div className="cart-between"></div>
      <div className="cart-count">
          <img src={cart} alt="cart"/>
          <div>3</div>
      </div>
      </div>
    </header>
        );
};
export default Header;
