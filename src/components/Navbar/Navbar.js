import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ handleToggleSidebar }) => {

    return (
        <div className="navbar">
            <header>
                <div className="menu-burger">
                    <button className="hamburger" onClick={handleToggleSidebar}>
                        <MenuIcon />
                    </button>

                </div>
                <NavLink to="/" className="home-logo">
                    <h1 className="logo">OMNIFOOT</h1>
                </NavLink>
                <div className="menu-close">

                </div>
                {/* <nav>

                    <ul>
                        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li><h1 className="logo">OmniScore</h1></li>
                        </NavLink>
                        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>A propos</li>
                        </NavLink>
                    </ul>
                </nav> */}
            </header>
        </div>
    );
};

export default Navbar;