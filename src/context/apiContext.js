import React, { createContext, useState } from 'react';
import { getCountries, getLeagues } from "../services/api";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [apiDataCountries, setApiDataCountries] = useState([]);
    const [apiDataLeagues, setApiDataLeagues] = useState([]);


    const fetchDataCountries = () => {
        getCountries()
            .then(res => {
                setApiDataCountries(res.response)
            })
            .catch(err => {
                console.error(err);
            });
    };

    const fetchDataLeagues = () => {
        getLeagues()
            .then(res => {
                setApiDataLeagues(res.response)
            })
            .catch(err => {
                console.error(err);
            });
    };
    return (
        <ApiContext.Provider value={{ apiDataCountries, apiDataLeagues, fetchDataCountries, fetchDataLeagues }}>
            {children}
        </ApiContext.Provider>
    );
};

export { ApiContext, ApiProvider };