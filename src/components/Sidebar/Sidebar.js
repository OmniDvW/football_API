import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import "./Sidebar.scss"

const Sidebar = ({ isOpen }) => {

    const { apiDataLeagues } = useContext(ApiContext);

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar_menu">
                <div>
                    <NavLink to="/" className="home-logo">
                        <h1 className="logo">OMNIFOOT</h1>
                    </NavLink>
                </div>
                <div>
                    <p>search</p>
                </div>
                <div className="sidebar_menu_top">
                    <ul>
                        <li>
                            <p>match</p>
                        </li>
                        <li>
                            <p>live</p>
                        </li>
                    </ul>
                </div>
                <div className='sidebar_menu_bottom'>
                    <p>Top competitions</p>
                    <ul>
                        {apiDataLeagues
                            .filter(dataLeague => [1, 2, 3, 39, 61, 62, 78, 135, 140].includes(dataLeague.league.id))
                            .sort((a, b) => a.league.id - b.league.id)
                            .map((dataLeague, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={`/${dataLeague.country.name}/${dataLeague.league.name.replace(/\s/g, '')}/${dataLeague.league.type}/${dataLeague.league.id}`}
                                        className="sidebar_menu_link"
                                    >
                                        <img src={dataLeague.country.flag} alt="" /><span>{dataLeague.league.name}</span>
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

            </div>
        </div>
    );
};

export default Sidebar;



