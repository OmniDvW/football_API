import React, { useEffect, useState } from 'react';
import { getCountries, getLeagues } from "../api";

const Leagues = () => {
    const [data, setData] = useState('');


    useEffect(() => {
        getLeaguesFromAPI();
    }, []);

    const getLeaguesFromAPI = () => {
        getLeagues()
            .then(res => {
                setData(res.response)
                console.log(data)
            })
            .catch(err => {
                console.error(err);
                throw err;
            });
    };

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Leagues;