import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import "./Sidebar.scss"

const Sidebar = () => {

    const { apiDataLeagues } = useContext(ApiContext);

    return (
        <div className="sidebar">
            <div className="sidebar_menu">
                <div className="sidebar_menu_head">
                    <ul>
                        <li>
                            <p>match</p>
                        </li>
                        <li>
                            <p>live</p>
                        </li>
                    </ul>
                </div>
                <div>
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



