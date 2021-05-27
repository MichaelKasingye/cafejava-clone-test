import React, {useState} from 'react'
import {BrowserRouter as Router, NavLink, Link} from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
    const [showLinks, setshowLinks] = useState(false);
    const [dropDown, showDropDown] = useState(false);
    return (
        
        <div>
            
            <header className="main-header">
            <Link to="/" className="main-logo">
                <img src="https://cafejavas.co.ug/root-assets/images/logo.png" alt="Logo"/>

            </Link>
            


              <div className="all-menu">
                
              <nav
                className="nav-menu"
                id="NavMenu"
                className={showLinks ? "nav-menu nav-active" : "nav-menu"}
              >
                <ul className="menu-item ">
                  <li>
                    <Link exact to="/">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/mainmenu" activeClassName="active">
                      MENU
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/" activeClassName="active">
                      FEATURED PRODUCTS
                    </Link>
                  </li>
                  <li>
                    <Link exact to="/" activeClassName="active">
                      DEALS
                    </Link>
                  </li>
                  <li>
                  </li>
                </ul>
                </nav>

                <div className="menu-info">
                <div className="cart">
                <NavLink exact to="/cart" activeClassName="active ">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-total-no" id="cart_items">
                        3
                        </span>
                      </NavLink>
                </div>
                
                <div className="user-info-wrap dropdown-wrap"
                  className={dropDown ? "dropdown-wrap" : "user-info-wrap dropdown-wrap"}
                  onClick={() => showDropDown(!dropDown)}
                >
                    <Link to={dropDown}>
                     <i className="fas fa-user"></i>

                    </Link>
                  
                  <ul className="dropdown-Menu" 
                   className={dropDown ? "dropdown-Menu-on" : "dropdown-Menu"}>
                    <li>
                      <Link to="/trackOrders" className="dropdown-link">Track Order</Link>
                    </li>
                    <li>
                      <Link to="/giftcards/1" className="dropdown-link">E-Gift Card</Link>
                    </li>
                    <li>
                      <Link to="/giftcards/1" className="dropdown-link">About Us</Link>
                    </li>
                    <li>
                      <Link to="/gallery" className="dropdown-link">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/giftcards/1" className="dropdown-link">Give Feedback</Link>
                    </li>
                    <li>
                      <Link to="/login" className="dropdown-link">Login</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="humberger">
              <div
                className="burger-menu"
                className={showLinks ? "burger-menu menu-on" : "burger-menu"}
                onClick={() => setshowLinks(!showLinks)}
                role="menu"
              >
                <div className="burger"></div>
              </div>
              </div>
              </div>
            </header>
        </div>
    )
}
