import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;