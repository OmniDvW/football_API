import React, { createContext, useState } from 'react';
import { getLeagues } from "../services/api";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [apiData, setApiData] = useState(null);


    const fetchData = () => {
        getLeagues()
            .then(res => {
                setApiData(res.response)
            })
            .catch(err => {
                console.error(err);
                setApiData("merde erreur")
            });
    };
    return (
        <ApiContext.Provider value={{ apiData, fetchData }}>
            {children}
        </ApiContext.Provider>
    );
};

export { ApiContext, ApiProvider };