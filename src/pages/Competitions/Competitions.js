import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import "./Competitions.scss";

const Competitions = () => {
    const { apiDataCountries, apiDataLeagues } = useContext(ApiContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [leaguesResults, setLeaguesResults] = useState(apiDataLeagues);
    const [countriesResults, setCountriesResults] = useState(apiDataCountries);


    useEffect(() => {
        const filteredLeagues = apiDataLeagues.filter((league) =>
            league.league.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            league.country.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const filteredCountries = apiDataCountries.filter((country) =>
            filteredLeagues.some((league) => league.country.name === country.name)
        );

        setLeaguesResults(filteredLeagues);
        setCountriesResults(filteredCountries);
    }, [searchTerm, apiDataCountries, apiDataLeagues]);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
    };

    return (
        <div className='competitions'>
            <div className='competitions-search'>
                <input
                    type='text'
                    placeholder='Rechercher par pays ou ligue...'
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            <div className='competitions-list'>
                {countriesResults.map((data, index) => (
                    <div key={index} className='competitions-country'>
                        <h2>
                            <img src={data.flag} alt={data.name} />
                            <span>{data.name}</span>
                        </h2>
                        <div className='commpetitions-leagues'>
                            <ul >
                                {leaguesResults.map((dataLeague, linkIndex) =>
                                    dataLeague.country.name === data.name ? (
                                        <li key={linkIndex}>
                                            <NavLink
                                                to={`/${dataLeague.country.name}/${dataLeague.league.name.replace(
                                                    /\s/g,
                                                    ''
                                                )}/${dataLeague.league.type}/${dataLeague.league.id}`}
                                                className='dropdown-item'
                                            >
                                                {dataLeague.league.name}
                                            </NavLink>
                                        </li>
                                    ) : null
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Competitions;