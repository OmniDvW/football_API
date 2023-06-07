import React, { useEffect, useContext, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { ApiContext } from '../../context/apiContext';




const Home = () => {
    const { apiDataLeagues, fetchDataLeagues } = useContext(ApiContext);
    const { apiDataCountries, fetchDataCountries } = useContext(ApiContext);
    // const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        // !isMounted &&
        fetchDataCountries();
        fetchDataLeagues();
        console.log(apiDataCountries)
        console.log(apiDataLeagues)
    }, []);


    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1>home</h1>
            {/* <p>{apiData}</p> */}
        </div>
    );
};

export default Home;