import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import "./Competitions.scss";

const Competitions = () => {
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
        <div className='competitions'>
            <div className='competitions_list'>
                {apiDataCountries.map((dataCountry, index) => (
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
            </div>
        </div>
    );
};

export default Competitions;