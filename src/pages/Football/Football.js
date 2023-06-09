import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import LeagueCard from '../../components/LeagueCard/LeagueCard';


const Football = () => {

    const { id } = useParams();
    const location = useLocation();
    const { apiDataCountries, apiDataLeagues, apiDataStandings, fetchDataStandings } = useContext(ApiContext);


    useEffect(() => {
        const fetchData = async () => {
            await fetchDataStandings(id);
            console.log(apiDataStandings);
        };
        fetchData();


    }, [location]);

    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1>Composant avec paramètre</h1>
            <p>Paramètre reçu : {id}</p>

            {apiDataStandings.length === 0 ? (
                <p>Le tableau est vide.</p>
            ) : (
                <LeagueCard />
            )}


        </div>
    );
};

export default Football;