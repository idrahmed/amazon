import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase'

// Top header component including amazon logo, searchbar, sign in, orders, your prime and cart

function Header() {
  
  const [{basket, user}] = useStateValue()

  const handleAuth = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput h" />
        <SearchIcon className="header_searchIcon h" />
      </div>

      <div className="header_nav">
        <Link to={!user && '/login'}>
        <div onClick={handleAuth}
        className="header_option">
          <span className="header_optionLineOne">Hello {user ? user.email : 'Guest'}</span>
          <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link> 
        
        <Link to="/orders">
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
