import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';

const LeagueCard = () => {

    // const { id } = useParams();
    const location = useLocation();
    const { apiDataCountries, apiDataLeagues, apiDataStandings } = useContext(ApiContext);
    const [openIndexes, setOpenIndexes] = useState([]);


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