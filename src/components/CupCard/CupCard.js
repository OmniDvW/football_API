import React, { useEffect, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import "./CupCard.scss";

const CupCard = () => {

    const { id } = useParams();
    const location = useLocation();
    const { fetchDataFixturesCup } = useContext(ApiContext);

    useEffect(() => {
        fetchDataFixturesCup(id, 2022);
    }, [location, fetchDataFixturesCup, id]);

    return (
        <div className='cup-card'>
            <p>not available at the moment</p>

        </div>
    );
};

export default CupCard;