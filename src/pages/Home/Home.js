import React, { useEffect, useContext, useState } from 'react';
import { ApiContext } from '../../context/apiContext';
import "./Home.scss";




const Home = () => {
    const { apiDataFixtures, apiDataLeagues } = useContext(ApiContext);
    const [matchesByLeague, setMatchesByLeague] = useState({});

    useEffect(() => {
        const matchesByLeague = {};
        apiDataFixtures.forEach(match => {
            const leagueId = match.league.id;
            if (matchesByLeague[leagueId]) {
                matchesByLeague[leagueId].push(match);
            } else {
                matchesByLeague[leagueId] = [match];
            }
        });
        setMatchesByLeague(matchesByLeague);
    }, [apiDataFixtures]);

    return (
        <div className='home'>
            <div className='home-header'>
                <p>header</p>
            </div>
            <div className="home-container">
                <div className='home-container-content'>
                    {Object.keys(matchesByLeague).map(leagueId => {
                        const league = apiDataLeagues.find(league => league.league.id === parseInt(leagueId));

                        if (league) {
                            return (
                                <div key={leagueId} className='card-match'>
                                    <div className='card-match-title'>
                                        <h2>
                                            <img src={league.country.flag ? league.country.flag : "/worldmap.png"} alt={`${league.country.name} flag`} />
                                            <span>{league.country.name}</span>
                                            <span>-</span>
                                            <span>{league.league.name}</span>
                                        </h2>
                                    </div>
                                    <div className="card-match-container">
                                        {matchesByLeague[leagueId].map(match => (
                                            <div key={match.fixture.id} className='match'>
                                                {match.fixture.id} vs {match.fixture.id}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;


