import React, { createContext, useState } from 'react';
import { getCountries, getLeagues, getSeasons, getStandings, getFixturesRounds } from "../services/api";
import dataCountries from "../jsons/dataCountries.json";
import dataLeagues from "../jsons/dataLeagues.json";
import dataSeasons from "../jsons/dataSeasons.json";
import dataStandings from "../jsons/dataStandings.json";
import dataFixturesRounds from "../jsons/dataFixturesRounds.json";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [apiDataCountries, setApiDataCountries] = useState([]);
    const [apiDataLeagues, setApiDataLeagues] = useState([]);
    const [apiDataSeasons, setApiDataSeasons] = useState([]);
    const [apiDataStandings, setApiDataStandings] = useState([]);
    const [apiDataFixturesRounds, setApiDataFixturesRounds] = useState([]);


    const fetchDataCountries = () => {
        getCountries()
            .then(res => {
                setApiDataCountries(res.response)
            })
            .catch(err => {
                setApiDataCountries(dataCountries)
                console.error(err);
            });
    };

    const fetchDataLeagues = () => {
        getLeagues()
            .then(res => {
                setApiDataLeagues(res.response)
            })
            .catch(err => {
                setApiDataLeagues(dataLeagues)
                console.error(err);
            });
    };

    const fetchDataSeasons = () => {
        getSeasons()
            .then(res => {
                setApiDataSeasons(res.response)
            })
            .catch(err => {
                setApiDataSeasons(dataSeasons)
                console.error(err);
            });
    };

    const fetchDataStandings = (id) => {
        getStandings(id)
            .then(res => {
                setApiDataStandings(res.response)
                console.log(res)
            })
            .catch(err => {
                const result = dataStandings.filter(data => data.league.id == id);
                setApiDataStandings(result);
                console.error(err);
            });
    };

    const fetchDataFixturesRounds = (id) => {
        getFixturesRounds(id)
            .then(res => {
                setApiDataFixturesRounds(res.response)
                console.log(res)
            })
            .catch(err => {
                setApiDataFixturesRounds(dataFixturesRounds);
                console.error(err);
            });
    };
    return (
        <ApiContext.Provider value={{ apiDataCountries, apiDataLeagues, apiDataSeasons, apiDataStandings, apiDataFixturesRounds, fetchDataCountries, fetchDataLeagues, fetchDataSeasons, fetchDataStandings, fetchDataFixturesRounds }}>
            {children}
        </ApiContext.Provider>
    );
};

export { ApiContext, ApiProvider };