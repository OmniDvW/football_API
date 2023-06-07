import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import "./Sidebar.scss"

const Sidebar = () => {
    const { apiData, fetchData } = useContext(ApiContext);
    return (
        <div className="sidebar">
            <h1>hello sidebar</h1>
            <p>{apiData}</p>
            <ul>
                <NavLink to="/football" className="footballPage">
                    <li>footlist</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Sidebar;