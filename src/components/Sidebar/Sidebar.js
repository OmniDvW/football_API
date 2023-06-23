import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import moment from 'moment';
import "./Sidebar.scss"
// import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Sidebar = ({ isOpen }) => {

    const { apiDataLeagues, fetchDataFixtures, resetDate, resetSidebar } = useContext(ApiContext);
    const date = moment().format('YYYY-MM-DD');

    const handleHomeClick = () => {
        fetchDataFixtures(date);
        resetDate(new Date());
        resetSidebar();
    };

    const handleSidebarClick = () => {
        resetSidebar();
    }

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-menu">
                <div className="sidebar-menu-header">
                    <NavLink to="/" className="sidebar-menu-logo" onClick={handleHomeClick}>
                        <h1>OMNIFOOT</h1>
                    </NavLink>
                    <div className='sidebar-menu-search'>
                        <div className='search-bar'>
                            <NavLink to="/competitions" className="search-bar-link" onClick={handleSidebarClick}>
                                <SearchIcon className="search-icon" />
                                <span>Search...</span>
                            </NavLink>
                            {/* <input
                                type="text"
                                placeholder="Search..."

                            /> */}
                        </div>

                    </div>
                </div>
                <div className='sidebar-menu-contain'>
                    <div className="sidebar-menu-top">
                        <ul>
                            <li>
                                <NavLink to="/" className="" onClick={handleHomeClick}>
                                    Matches
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="" onClick={handleHomeClick}>
                                    Lives
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/competitions" className="" onClick={handleSidebarClick}>
                                    Competitions
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/competitions" className="" onClick={handleSidebarClick}>
                                    Teams
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/competitions" className="" onClick={handleSidebarClick}>
                                    Players
                                </NavLink>
                            </li> */}
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
                                            onClick={handleSidebarClick}
                                        >
                                            <img src={dataLeague.country.flag ? dataLeague.country.flag : "/football_API/worldmap.png"} alt="" /><span>{dataLeague.league.name}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            <li className='button-competitions'>
                                <NavLink to="/competitions" className="" onClick={handleSidebarClick}>
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



