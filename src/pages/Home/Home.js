import React, { useEffect, useContext, useState } from 'react';
import { ApiContext } from '../../context/apiContext';
import moment from 'moment';
import CustomCalendar from '../../components/CustomCalendar/CustomCalendar';
import "./Home.scss";


const Home = () => {
    const { apiDataFixtures, apiDataLeagues, fetchDataFixtures } = useContext(ApiContext);
    const [matchesByLeague, setMatchesByLeague] = useState({});
    const date = moment().format('YYYY-MM-DD');

    useEffect(() => {
        fetchDataFixtures(date);
    }, []);

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
                <div>
                    <CustomCalendar />
                </div>
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
                                            <img src={league.country.flag ? league.country.flag : "/football_API/worldmap.png"} alt={`${league.country.name} flag`} />
                                            <span>{league.country.name}</span>
                                            <span>-</span>
                                            <span>{league.league.name}</span>
                                        </h2>
                                    </div>
                                    <div className="card-match-container">
                                        {matchesByLeague[leagueId].map(match => (
                                            <div key={match.fixture.id} className='match'>
                                                <div className='match-teams'>
                                                    <div className='match-teams-home'>
                                                        <div className='match-teams-logo'>
                                                            <img src={match.teams.home.logo} alt={match.teams.home.name} />
                                                        </div>
                                                        <p>{match.teams.home.name}</p>
                                                    </div>
                                                    <div className='match-teams-away'>
                                                        <div className='match-teams-logo'>
                                                            <img src={match.teams.away.logo} alt={match.teams.away.name} />
                                                        </div>
                                                        <p>{match.teams.away.name}</p>
                                                    </div>
                                                </div>
                                                <div className='match-info'>

                                                    {moment(match.fixture.date).isBefore(moment()) ?
                                                        <div className='match-info'>
                                                            <div className='match-info-score'>
                                                                <p>{match.goals.home}</p>
                                                                <p>{match.goals.away}</p>
                                                            </div>
                                                            <div className='match-info-time'>
                                                                <p>Finished</p>
                                                            </div>
                                                        </div> :
                                                        moment(match.fixture.date).isSameOrBefore(moment().add(1, 'hour').add(45, 'minutes')) ?
                                                            <div className='match-info'>
                                                                <div className='match-info-score'>
                                                                    <p>{match.goals.home}</p>
                                                                    <p>{match.goals.away}</p>
                                                                </div>
                                                                <div className='match-info-time'>
                                                                    <p className='info-live'>Live</p>
                                                                </div>
                                                            </div> :
                                                            <div className='match-info'>
                                                                <div className='match-info-score'>
                                                                </div>
                                                                <div className='match-info-time'>
                                                                    <p>{moment(match.fixture.date).format('HH:mm')}</p>
                                                                </div>
                                                            </div>}

                                                </div>
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


