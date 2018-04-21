import React from 'react';
import logo from '../assets/images/logo.png';
import CustomerFeedback from './customer_feedback/customer_feedback_container';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavbarOpen: false,
        };

        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        const { isNavbarOpen } = this.state;
        this.setState({ isNavbarOpen: !isNavbarOpen });
    }

    render() {
        const { isNavbarOpen } = this.state;

        return (
            <div className="sticky-navbar">
                <a href="https://www.cammy.com/au/">
                    <img src={logo} className="cammy-logo" />
                    Cammy
                </a>
                <div className={`navbar-help-links ${!isNavbarOpen ? 'display-none' : ''}`}>
                    <a href="https://www.cammy.com/au/how-it-works/" onClick={this.toggleNavbar}>
                        How it works
                    </a>
                    <a href="https://www.cammy.com/au/cameras/" onClick={this.toggleNavbar}>
                        Cameras
                    </a>
                    <a href="https://www.cammy.com/au/apps/" onClick={this.toggleNavbar}>
                        Apps
                    </a>
                    <a href="https://au.checkout.cammy.com/" onClick={this.toggleNavbar}>
                        Cart
                    </a>
                    <a href="tel:1300652430" onClick={this.toggleNavbar}>
                        1 300 652 430
                    </a>
                </div>

                <div className="navbar-toggle-button" onClick={this.toggleNavbar}>
                    MENU
                </div>
            </div>
        );
    }
}

export default Navbar;