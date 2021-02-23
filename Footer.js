import { render } from '@testing-library/react'
import React from 'react'
import "./Footer.css";
import SN from "./Images/SNStorelogo.png";
import Youtubelogo from "./Images/Youtubelogo.png";
import Facebooklogo from "./Images/Facebooklogo.png";
import Pineterestlogo from "./Images/Pineterestlogo.png";
import { Link } from "react-router-dom";
import { ClickAwayListener } from '@material-ui/core';


function Footer() {
   
    const scrollToTop = () => {

    }

    return (

<div className="container-fluid mt-2" id="complete_footer">
  <div className="row row-cols-4 complete_row">
    <div className="col" id="footer-image"><img className="ml-5 mt-5" src={SN} width="100" alt=""/></div>
    <div className="col list_one"><ul className="items mt-3">
            <li><strong>Get to Know Us</strong></li>
            <li>About Us </li>
            <li>Careers </li>
            <li>Press Releases</li>
            <li>SN Stores</li>
            <li>Gift a Smile</li> 
 </ul>         </div>
    <div className="col list_two"><ul className="second-items mt-3">
            <li><strong>Let Us Help You</strong></li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Help</li>
  </ul></div>
    <div className="col social-icons d-flex mt-5">
        
    <p>
    <a target="_blank" href="https://www.youtube.com/channel/UC7HUAlkMwfif648ySsi08Cw"><img className="yticon" src={Youtubelogo} width="25px" alt=""/>
    </a> 
    </p>
    <p>
    <a target="_blank" href="https://www.youtube.com/channel/UC2W-js9gItkpR6UKKuxGYXg"><img className="fbicon" src={Facebooklogo} width="25px" alt=""/>
    </a>  
    </p>
    <p>
    <a target="_blank" href="https://www.youtube.com/channel/UCY1rcGwz1zx4nW0-Y5I93EA"><img className="pticon" src={Pineterestlogo} width="25px" alt=""/>
    </a>
    </p>
  </div>
</div>

<div className="disclaimer">
           <p>
           Copyright © 2020. All Rights Reserved <br/>
           <small>Website Developed By Sainath K</small>
           </p>
         </div>
         
</div>   
);
}


export default Footer;
