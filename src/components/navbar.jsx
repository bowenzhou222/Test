import React from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => (
    <div className="sticky-navbar">
        <a href="https://www.cammy.com/au/">
            <img src={logo} className="cammy-logo" />
            Cammy
          </a>
        <div className="navbar-help-links">
            <a href="https://www.cammy.com/au/how-it-works/">
                How it works
            </a>
            <a href="https://www.cammy.com/au/cameras/">
                Cameras
            </a>
            <a href="https://www.cammy.com/au/apps/">
                Apps
            </a>
            <a href="https://au.checkout.cammy.com/">
                Cart
            </a>
            <a href="tel:1300652430">
                1 300 652 430
            </a>
        </div>
    </div>
);

export default Navbar;