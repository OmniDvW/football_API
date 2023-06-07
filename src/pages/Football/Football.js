import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';


const Football = () => {


    useEffect(() => {
        console.log("hello football")
    }, []);


    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1>football</h1>
        </div>
    );
};

export default Football;