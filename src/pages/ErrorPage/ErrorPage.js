import React from 'react';
import "./ErrorPage.scss";

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <div className='error-429'>
                <h1>OMNIFOOT Is So Sorry</h1>
                <h2>429 ERROR PAGE</h2>
                <p>Too many requests for today</p>
                <p>Api-Football-Beta is free but limited</p>
                {/* to 100 requests per day  */}
                <p>Come back tomorrow, Thanks</p>
            </div>
        </div>
    );
};

export default ErrorPage;