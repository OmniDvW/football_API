import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import moment from 'moment';
import "./Navbar.scss";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ handleToggleSidebar }) => {

    const { fetchDataFixtures, resetDate } = useContext(ApiContext);
    const date = moment().format('YYYY-MM-DD');
    const handleHomeClick = () => {
        fetchDataFixtures(date);
        resetDate(new Date())
    };

    return (
        <div className="navbar">
            <header>
                <div className="menu-burger">
                    <button className="hamburger" onClick={handleToggleSidebar}>
                        <MenuIcon />
                    </button>

                </div>
                <NavLink to="/" className="home-logo" onClick={handleHomeClick}>
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