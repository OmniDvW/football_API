import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <header>
                <NavLink to="/" className="home-logo">
                    <h1 className="logo">OMNIFOOT</h1>
                </NavLink>
                <nav>

                    {/* <ul>
                        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li><h1 className="logo">OmniScore</h1></li>
                        </NavLink>
                        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>A propos</li>
                        </NavLink>
                    </ul> */}
                </nav>
            </header>
        </div>
    );
};

export default Navbar;