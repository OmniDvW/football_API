import React, { useState, useContext } from 'react';
import { ApiContext } from '../../context/apiContext';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import "./CustomCalendar.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CustomCalendar = () => {
    const { fetchDataFixtures, selectedDate, resetDate } = useContext(ApiContext);


    const handlePrevDay = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() - 1);
        resetDate(newDate);
        fetchDataFixtures(moment(selectedDate).format('YYYY-MM-DD'));
    };

    const handleNextDay = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() + 1);
        resetDate(newDate);
        fetchDataFixtures(moment(selectedDate).format('YYYY-MM-DD'));
    };


    return (
        <div>
            <div className="calendar">
                <button onClick={handlePrevDay}><ArrowBackIosIcon /></button>
                <div className="selected-date">{moment(selectedDate).format('dddd Do MMMM')}</div>
                <button onClick={handleNextDay}><ArrowForwardIosIcon /></button>
            </div>
        </div>
    );
};

export default CustomCalendar;