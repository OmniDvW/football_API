import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import "./Sidebar.scss"
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Sidebar = ({ isOpen }) => {

    const { apiDataLeagues } = useContext(ApiContext);
    // const [searchValue, setSearchValue] = useState('');

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-menu">
                <div className="sidebar-menu-header">
                    <NavLink to="/" className="sidebar-menu-logo">
                        <h1><SportsSoccerIcon />MNIFOOT</h1>
                    </NavLink>
                    <div className='sidebar-menu-search'>
                        <div className='search-bar'>
                            <button>
                                <SearchIcon className="search-icon" />
                            </button>
                            <input
                                type="text"
                                placeholder="Search..."
                            // value={searchValue}
                            // onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </div>

                    </div>
                </div>
                <div className='sidebar-menu-contain'>
                    <div className="sidebar-menu-top">
                        <ul>
                            <li>
                                <NavLink to="/" className="">
                                    Matches
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="">
                                    Lives
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/competitions" className="">
                                    Competitions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/competitions" className="">
                                    Teams
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/competitions" className="">
                                    Players
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='sidebar-menu-bottom'>
                        <p className='sidebar-top-competitions'>Top competitions  <KeyboardArrowDownIcon /></p>
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
                            <li className='button-competitions'>
                                <NavLink to="/competitions" className="">
                                    More competitions
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>



                <div className='sidebar-menu-footer'>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;



