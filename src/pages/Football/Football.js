import React, { useEffect, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import LeagueCard from '../../components/LeagueCard/LeagueCard';
import CupCard from '../../components/CupCard/CupCard';
import "./Football.scss";


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
        <div className='footballInfo'>
            <h1>Composant avec paramètre</h1>
            <p>Paramètre reçu : {id}</p>

            {type === "Cup" ? (
                <CupCard />
            ) : (
                <LeagueCard />
            )}
        </div>
    );
};

export default Football;