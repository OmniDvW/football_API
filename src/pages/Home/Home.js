import React, { useEffect, useContext, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { ApiContext } from '../../context/apiContext';




const Home = () => {
    const { apiData, fetchData } = useContext(ApiContext);
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        !isMounted &&
            fetchData();
    }, [isMounted]);


    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1>home</h1>
            <p>{apiData}</p>
        </div>
    );
};

export default Home;