import React, { useEffect, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import LeagueCard from '../../components/LeagueCard/LeagueCard';


const Football = () => {

    const { id, type } = useParams();
    const location = useLocation();
    const { apiDataCountries, apiDataLeagues, apiDataStandings, apiDataFixturesRounds, fetchDataStandings, fetchDataFixturesRounds } = useContext(ApiContext);


    useEffect(() => {
        fetchStandings();
        if (type == "Cup") {
            fetchFixturesRounds();
        }
    }, [location]);

    const fetchStandings = async () => {
        await fetchDataStandings(id);
    };

    const fetchFixturesRounds = async () => {
        await fetchDataFixturesRounds(id);
    };

    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1>Composant avec paramètre</h1>
            <p>Paramètre reçu : {id}</p>

            {apiDataStandings.length === 0 ? (
                <p>erreur</p>
            ) : (
                <LeagueCard />
            )}
        </div>
    );
};

export default Football;