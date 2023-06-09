import React, { createContext, useState } from 'react';
// import { getCountries, getLeagues, getSeasons, getStandings, getFixturesRounds, getFixtures, getFixturesCup } from "../services/api";
import { getStandings, getFixturesRounds, getFixtures, getFixturesCup } from "../services/api";
import dataCountries from "../jsons/dataCountries.json";
import dataLeagues from "../jsons/dataLeagues.json";
import dataSeasons from "../jsons/dataSeasons.json";
// import dataStandings from "../jsons/dataStandings.json";
// import dataFixturesRounds from "../jsons/dataFixturesRounds.json";
// import dataFixtures from "../jsons/dataFixtures.json";
// import dataFixturesCup from "../jsons/dataFixturesCup.json";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [apiDataCountries, setApiDataCountries] = useState([]);
    const [apiDataLeagues, setApiDataLeagues] = useState([]);
    const [apiDataSeasons, setApiDataSeasons] = useState([]);
    const [apiDataStandings, setApiDataStandings] = useState([]);
    const [apiDataFixturesRounds, setApiDataFixturesRounds] = useState([]);
    const [apiDataFixtures, setApiDataFixtures] = useState([]);
    const [apiDataFixturesCup, setApiDataFixturesCup] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const resetSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const resetDate = (date) => {
        setSelectedDate(date);
    };

    const fetchDataCountries = () => {
        // getCountries()
        //     .then(res => {
        //         setApiDataCountries(res.response)
        //     })
        //     .catch(err => {
        //         setApiDataCountries(dataCountries)
        //         console.error(err);
        //     });

        setApiDataCountries(dataCountries)
    };

    const fetchDataLeagues = () => {
        // getLeagues()
        //     .then(res => {
        //         setApiDataLeagues(res.response)
        //     })
        //     .catch(err => {
        //         setApiDataLeagues(dataLeagues)
        //         console.error(err);
        //     });

        setApiDataLeagues(dataLeagues)
    };

    const fetchDataSeasons = () => {
        // getSeasons()
        //     .then(res => {
        //         setApiDataSeasons(res.response)
        //     })
        //     .catch(err => {
        //         setApiDataSeasons(dataSeasons)
        //         console.error(err);
        //     });
        setApiDataSeasons(dataSeasons)
    };

    const fetchDataFixtures = (date) => {
        getFixtures(date)
            .then(res => {
                setApiDataFixtures(res.response)
            })
            .catch(err => {
                if (err.response && err.response.status === 429) {
                    window.location.href = "/error-429";
                } else {

                    console.error(err);
                }
                // setApiDataFixtures(dataFixtures);
                // console.error(err);
            });
    };

    const fetchDataStandings = (id) => {
        getStandings(id)
            .then(res => {
                setApiDataStandings(res.response)
            })
            .catch(err => {
                if (err.response && err.response.status === 429) {
                    window.location.href = "/error-429";
                } else {

                    console.error(err);
                }
                // const result = dataStandings.filter(data => data.league.id == id);
                // setApiDataStandings(result);
                // console.error(err);
            });
    };

    const fetchDataFixturesRounds = (id) => {
        getFixturesRounds(id)
            .then(res => {
                setApiDataFixturesRounds(res.response)
            })
            .catch(err => {
                if (err.response && err.response.status === 429) {
                    window.location.href = "/error-429";
                } else {

                    console.error(err);
                }
                // setApiDataFixturesRounds(dataFixturesRounds);
                // console.error(err);
            });
    };



    const fetchDataFixturesCup = (league, season) => {
        getFixturesCup(league, season)
            .then(res => {
                setApiDataFixturesCup(res.response)
            })
            .catch(err => {
                if (err.response && err.response.status === 429) {
                    window.location.href = "/error-429";
                } else {

                    console.error(err);
                }
                // setApiDataFixturesCup(dataFixturesCup);
                // console.error(err);
            });
    };


    return (
        <ApiContext.Provider value={{
            apiDataCountries, apiDataLeagues, apiDataSeasons, apiDataStandings, apiDataFixturesRounds, apiDataFixtures, apiDataFixturesCup, selectedDate, isSidebarOpen,
            fetchDataCountries, fetchDataLeagues, fetchDataSeasons, fetchDataStandings, fetchDataFixturesRounds, fetchDataFixtures, fetchDataFixturesCup, resetDate, resetSidebar
        }}>
            {children}
        </ApiContext.Provider>
    );
};

export { ApiContext, ApiProvider };