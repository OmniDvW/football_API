import React, { useEffect, useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { ApiContext } from '../../context/apiContext';




const Home = () => {
    const { apiDataCountries, apiDataLeagues, fetchDataCountries, fetchDataLeagues } = useContext(ApiContext);


    useEffect(() => {
        fetchDataCountries();
        fetchDataLeagues();
    }, []);


    return (
        <div className='home'>
            <Navbar />
            <div className="home_container">
                <div className="home_container_content">
                    <Sidebar />
                    <div className="info_card">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;