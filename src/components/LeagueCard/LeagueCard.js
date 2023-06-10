import React, { useEffect, useState, useContext } from 'react';
import { ApiContext } from '../../context/apiContext';

const LeagueCard = () => {

    const { apiDataCountries, apiDataLeagues, apiDataStandings } = useContext(ApiContext);


    return (
        <div>
            <p>league Card</p>
            {apiDataStandings.length === 0 ? (
                <p>Le tableau est videe.</p>
            ) : (
                <p>league: {apiDataStandings[0].league.name}</p>

            )}

        </div>
    );
};

export default LeagueCard;