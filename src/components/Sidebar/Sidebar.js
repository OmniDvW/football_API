import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>hello sidebar</h1>
            <ul>
                <NavLink to="/football" className="footballPage">
                    <li>footlist</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Sidebar;