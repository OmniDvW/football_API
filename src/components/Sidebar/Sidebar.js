import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import "./Sidebar.scss"

const Sidebar = ({ isOpen }) => {

    const { apiDataLeagues } = useContext(ApiContext);

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-menu">
                <div className="sidebar-menu-header">
                    <NavLink to="/" className="sidebar-menu-logo">
                        <h1>OMNIFOOT</h1>
                    </NavLink>
                    {/* <div>
                        <p>search</p>
                    </div> */}
                </div>

                <div className="sidebar-menu-top">
                    <ul>
                        <li>
                            <p>match</p>
                        </li>
                        <li>
                            <p>live</p>
                        </li>
                    </ul>
                </div>

                <div className='sidebar-menu-bottom'>
                    <p>Top competitions</p>
                    <ul>
                        {apiDataLeagues
                            .filter(dataLeague => [1, 2, 3, 39, 61, 62, 78, 135, 140].includes(dataLeague.league.id))
                            .sort((a, b) => a.league.id - b.league.id)
                            .map((dataLeague, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={`/${dataLeague.country.name}/${dataLeague.league.name.replace(/\s/g, '')}/${dataLeague.league.type}/${dataLeague.league.id}`}
                                        className="sidebar-menu-link"
                                    >
                                        <img src={dataLeague.country.flag ? dataLeague.country.flag : "/worldmap.png"} alt="" /><span>{dataLeague.league.name}</span>
                                    </NavLink>
                                </li>
                            ))}
                        <li>
                            <NavLink to="/competitions" className="">
                                More competitions
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className='sidebar-menu-footer'>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;



