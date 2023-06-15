import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import "./Sidebar.scss"

const Sidebar = () => {

    const { apiDataCountries, apiDataLeagues } = useContext(ApiContext);
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleDropdown = (index) => {
        setOpenIndexes((prevIndexes) => {
            if (prevIndexes.includes(index)) {
                return [];
            } else {
                return [index];
            }
        });
    }


    return (
        <div className="sidebar">
            <div className="sidebar_menu">
                {/* {apiDataCountries.map((dataCountry, index) => (
                    <div key={index} className="sidebar_menu_button">
                        <button
                            className={`dropdown-toggle ${openIndexes.includes(index) ? 'active' : ''}`}
                            onClick={() => toggleDropdown(index)}>
                            <img src={dataCountry.flag} alt={dataCountry.name} />{dataCountry.name}
                        </button>
                        {openIndexes.includes(index) && (
                            <ul className="dropdown-menu">
                                {apiDataLeagues.map((dataLeague, linkIndex) => (
                                    dataLeague.country.name == dataCountry.name ? (
                                        <li key={linkIndex}>
                                            <NavLink to={`/${dataLeague.country.name}/${dataLeague.league.name.replace(/\s/g, '')}/${dataLeague.league.type}/${dataLeague.league.id}`} className="dropdown-item">
                                                {dataLeague.league.name}
                                            </NavLink>
                                        </li>
                                    ) : null
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
 */}

                <ul>
                    {apiDataLeagues
                        .filter(dataLeague => [1, 2, 3, 39, 61, 62, 71, 78, 140].includes(dataLeague.league.id))
                        .sort((a, b) => a.league.id - b.league.id)
                        .map((dataLeague, index) => (
                            <li key={index}>
                                <NavLink
                                    to={`/${dataLeague.country.name}/${dataLeague.league.name.replace(/\s/g, '')}/${dataLeague.league.type}/${dataLeague.league.id}`}
                                    className="sidebar_menu_link"
                                >
                                    {dataLeague.league.name}
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
    );
};

export default Sidebar;



