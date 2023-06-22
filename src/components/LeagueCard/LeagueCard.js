import React, { useContext } from 'react';
import { ApiContext } from '../../context/apiContext';
import "./LeagueCard.scss";

const LeagueCard = () => {
    const { apiDataStandings } = useContext(ApiContext);

    return (
        <div className='league-card'>
            {apiDataStandings.length === 0 ? (
                <p>Le tableau est videe.</p>

            ) : (
                <div className='league-card-wrapper'>
                    <div className='league-card-header'>
                        <img src={apiDataStandings[0].league.logo} alt={apiDataStandings[0].league.name} />
                        <h1>{apiDataStandings[0].league.name}</h1>
                        <p>2022/2023</p>
                    </div>
                    <div className='league-card-nav'>
                        {/* <p>Standing</p> */}
                    </div>
                    <div className='league-card-contain'>
                        <div className='league-card-ranking'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th className='standings-rank'>#</th>
                                        <th className='standings-team'>Team</th>
                                        <th className='standings'>Pts</th>
                                        <th className='standings'>J</th>
                                        <th className='standings'>W</th>
                                        <th className='standings'>D</th>
                                        <th className='standings'>L</th>
                                        <th className='standings'>GF</th>
                                        <th className='standings'>GA</th>
                                        <th className='standings'>DIF</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {apiDataStandings[0].league.standings[0].map((data, index) => (
                                        <tr key={index} className='league-card-list'>
                                            <td className='td-rank'>{data.rank}</td>
                                            <td className='td-team'>
                                                <img src={data.team.logo} alt={data.team.name} />
                                                <span>{data.team.name}</span>
                                            </td>
                                            <td>{data.points}</td>
                                            <td>{data.all.played}</td>
                                            <td>{data.all.win}</td>
                                            <td>{data.all.draw}</td>
                                            <td>{data.all.lose}</td>
                                            <td>{data.all.goals.for}</td>
                                            <td>{data.all.goals.against}</td>
                                            <td>{data.all.goals.for - data.all.goals.against}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeagueCard;