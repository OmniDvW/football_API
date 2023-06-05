import React, { useEffect } from 'react';
import axios from 'axios';

const Countries = () => {

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://footapi7.p.rapidapi.com/api/tournament/categories',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
            }
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, []);

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Countries;