import React, { createContext, useState } from 'react';
import { getCountries, getLeagues, getStandings } from "../services/api";

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
                setApiDataCountries([
                    {
                        name: "france",
                        code: "FR"
                    },
                    {
                        name: "angleterre",
                        code: "EN"
                    }
                ])
                console.error(err);
            });
    };

    const fetchDataLeagues = () => {
        getLeagues()
            .then(res => {
                setApiDataLeagues(res.response)
            })
            .catch(err => {
                setApiDataLeagues([
                    {
                        name: "ligue 1",
                        country:
                        {
                            name: "france",
                            code: "FR"
                        }

                    },
                    {
                        name: "ligue 2",
                        country: [
                            {
                                name: "france",
                                code: "FR"
                            }

                        ]
                    },
                    {
                        name: "premier league",
                        country: [
                            {
                                name: "angleterre",
                                code: "EN"
                            }

                        ]
                    }
                ])
                console.error(err);
            });
    };

    const fetchDataStandings = () => {
        getStandings()
            .then(res => {
                setApiDataStandings(res.response)
                console.log(res)
            })
            .catch(err => {
                setApiDataStandings([
                    {
                        id: 51,
                        name: "ligue 1 stand"
                    },
                    {
                        id: 36,
                        name: "premier league stand"
                    }
                ])
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