import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import SN from "./Images/SNStorelogo.png";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import India from "./Images/India.png";
import ScrollUpButton from "./ScrollUpButton";



function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {        
              if (user) {
              auth.signOut();
    }
  }



  return (

    <nav className="navbar fixed-top navbar-expand-lg navbar_all">
        
      <Link className="navbar-brand" to="/">
        <img src={SN} alt="" className="image_logo"/>
        </Link>
        <div className="mobile_scroll">
        <ScrollUpButton />
        </div>
        
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar_toggler menu-bar">
          <MenuRoundedIcon />
        </span>
      </button>

      <div className="collapse navbar-collapse collapse_menuitems" id="navbarSupportedContent">

          <form className="form-inline my-2 my-lg-0">
                <span id="search">
                  <input className="form-control mr-sm-2 search_bar" type="search" placeholder="Search" aria-label="Search" />
                </span>
                
              </form>
              <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-search search_icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
      </svg>
              <img src= {India} width="40" height="25"alt=""/>

              <ul className="navbar-nav ml-auto">

                <li className="nav-item active">
                <Link className="nav-link" id="nav_datahead" to={!user && '/login'}>
                  <div onClick={handleAuthenticaton} className="desktopheader__option">
                    <span className="desktopheader__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                  <span className="desktopheader__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                  
                  </div>
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" id="nav_datahead" to='/orders'>
                <div className="desktopheader__option">
                  <span className="desktopheader__optionLineOne">Returns</span>
                  <span className="desktopheader__optionLineTwo">& Orders</span>
                </div>
                        
          </Link> 
                </li>

          <li className="nav-item">
        <Link className="nav-link" id="nav_datahead" to='/youtube'>               
                  <span className="desktopheader__optionLineOne">YouTube</span>
                  <span className="desktopheader__optionLineTwo" >Videos</span> 
        </Link> 
          </li>
        <li className="nav-item">
        <Link className="nav-link" id="nav_datahead" to='/checkout'>
        <div className="desktopheader__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="desktopheader__optionLineTwo desktopheader__basketCount">
                      {basket?.length}
                    </span>
                    
                    
                  </div>
                </Link>
                <div className="scroll_bigscreen">
                <ScrollUpButton />
                </div>
                
                </li>
              </ul>  
                
        </div>
    </nav>
      );
    }

export default Header;