import React, { useContext } from 'react';
import { ApiContext } from '../../context/apiContext';

const LeagueCard = () => {

    const { apiDataStandings } = useContext(ApiContext);

    const lol = () => {
        console.log(apiDataStandings[0].league.standings[0])
    }
    return (
        <div>
            {apiDataStandings.length === 0 ? (
                <p>Le tableau est videe.</p>

            ) : (
                <div>
                    <p onClick={lol}>league: {apiDataStandings[0].league.name}</p>
                    {apiDataStandings[0].league.standings[0].map((data, index) => (
                        <div key={index}>
                            <p>points {data.points}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LeagueCard;