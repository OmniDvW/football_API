import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';


const Football = () => {

    const { id } = useParams();
    const location = useLocation();
    const { apiDataCountries, apiDataLeagues, apiDataStandings, fetchDataStandings } = useContext(ApiContext);

    useEffect(() => {
        fetchDataStandings(id);
        console.log(apiDataStandings)
    }, [location]);

    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1>Composant avec paramètre</h1>
            <p>Paramètre reçu : {id}</p>
            <p>league: {apiDataStandings[0].league.name}</p>

        </div>
    );
};

export default Football;