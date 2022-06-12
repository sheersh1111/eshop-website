import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import "./header.css"
import React from 'react';
import { Link } from 'react-router-dom';
import {useStateValue} from "./stateProvider"
// import {useState, useContext} from 'react';

// import CartContext from "./cart-context"


// const logButtonHandler = (event) => {
//   console.log("logo clicked")
//   return <Route path="/" />
// }
 // const cartCtx = useContext(CartContext);
  // console.log("This is header");
function Header(){
  const[ {basket},dispatch]= useStateValue();
  return (
   
    <div className="header">
       <Link to="/" style={{textDecoration:"none"}}>
      <div className="header_logo" >
        <StorefrontIcon className="header_logoImage" fontSize="large" />
        <h2 className='header_logoTitle'>eSHOP</h2>
      </div>
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />

      </div>
      <div className="header_nav">
       <Link to="/Login" style={{textDecoration:"none"}}> <div className="nav_item">
          <span className="nav_itemLineOne">
            HELLO GUEST
          </span>
          <span className="nav_itemLineTwo">
            Sign In
          </span>
        </div></Link>
        <div className="nav_item">
          <span className="nav_itemLineOne">
            YOUR
          </span>
          <span className="nav_itemLineTwo">
            SHOP
          </span>
        </div>
        <Link to="/Checkout" style={{textDecoration:"none"}}>
        <div class="nav_itemBasket">
          <ShoppingBasketIcon fontSize="" />
          <span class="nav_basketCount">
            {basket.length}
          </span>
        </div>
        </Link>
      </div>

    </div>
    

  )
}

export default Header;