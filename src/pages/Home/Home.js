import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
// import { ApiContext } from '../../context/apiContext';




const Home = () => {


    return (
        <div className='home'>
            <Navbar />
            <div className="home_container">
                <div className="home_container_content">
                    <Sidebar />
                    <div className="info_card">
                        <h1>hello home</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;