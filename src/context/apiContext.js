import React, { createContext, useState } from 'react';
import { getCountries, getLeagues, getStandings } from "../services/api";
import dataCountries from "../jsons/dataCountries.json";
import dataLeagues from "../jsons/dataLeagues.json";
import dataStandings from "../jsons/dataStandings.json";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [apiDataCountries, setApiDataCountries] = useState([]);
    const [apiDataLeagues, setApiDataLeagues] = useState([]);
    const [apiDataStandings, setApiDataStandings] = useState([]);


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

    const fetchDataStandings = (id) => {
        getStandings()
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
    return (
        <ApiContext.Provider value={{ apiDataCountries, apiDataLeagues, apiDataStandings, fetchDataCountries, fetchDataLeagues, fetchDataStandings }}>
            {children}
        </ApiContext.Provider>
    );
};

export { ApiContext, ApiProvider };