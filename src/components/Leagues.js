import React, { useEffect, useState } from 'react';
import api from "../api";

const Leagues = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        api.getLeagues().then(res => {
            const hello = res
            console.log(hello.data.response[0])
        })
    }, []);

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Leagues;