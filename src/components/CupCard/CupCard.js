import React, { useEffect, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';

const CupCard = () => {

    const { id } = useParams();
    const location = useLocation();
    const { fetchDataFixturesCup } = useContext(ApiContext);

    useEffect(() => {
        fetchDataFixturesCup(id, 2022);
    }, [location, fetchDataFixturesCup, id]);

    return (
        <div>
            {/* <p>Cup Card</p> */}

        </div>
    );
};

export default CupCard;