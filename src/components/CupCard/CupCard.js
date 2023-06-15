import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';

const CupCard = () => {

    const { id } = useParams();
    const location = useLocation();
    const { apiDataCountries, apiDataLeagues, apiDataStandings, fetchDataFixturesCup } = useContext(ApiContext);

    useEffect(() => {
        fetchDataFixturesCup(id, "2022");
    }, [location]);

    return (
        <div>
            <p>Cup Card</p>

        </div>
    );
};

export default CupCard;