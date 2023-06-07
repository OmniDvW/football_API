import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { getCountries, getLeagues } from "../../services/api";




const Home = () => {
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
                console.log("oulalala")
                console.error(err);
            });
    };
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1>home</h1>
        </div>
    );
};

export default Home;