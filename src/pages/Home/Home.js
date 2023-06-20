import React, { useEffect, useContext, useState } from 'react';
import { ApiContext } from '../../context/apiContext';
import "./Home.scss";




const Home = () => {
    const { apiDataFixtures } = useContext(ApiContext);
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

            </div>
            <div className="home-container">
                <div className='home-container-content'>
                    {Object.keys(matchesByLeague).map(leagueId => (
                        <div key={leagueId} className='card-match'>
                            {matchesByLeague[leagueId].map(match => (
                                <div key={match.fixture.id} className='match'>
                                    {match.fixture.id} vs {match.fixture.id}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;