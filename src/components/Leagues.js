import React, { useEffect, useState } from 'react';
import { getCountries, getLeagues } from "../api";

const Leagues = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        getCountries()
            .then(res => {
                const hello = res
                console.log(hello.response)
            })
            .catch(err => {
                console.error(err);
                throw err;
            });

        getLeagues()
            .then(res => {
                const hello = res
                console.log(hello.response)
            })
            .catch(err => {
                console.error(err);
                throw err;
            });
    }, []);

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Leagues;