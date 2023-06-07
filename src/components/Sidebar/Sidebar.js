import React, { useEffect, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import "./Sidebar.scss"

const Sidebar = () => {
    const { apiDataCountries } = useContext(ApiContext);
    return (
        <div className="sidebar">
            <ul>
                {apiDataCountries.map((data, index) => (
                    <li key={index}><a href='#'><img src={data.flag} alt={data.name} />{data.name}</a></li>
                ))}
                {/* <NavLink to="/football" className="footballPage">
                    <li>footlist</li>
                </NavLink> */}
            </ul>
        </div>
    );
};

export default Sidebar;