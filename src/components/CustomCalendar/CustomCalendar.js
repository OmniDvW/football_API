import React, { useState, useContext } from 'react';
import { ApiContext } from '../../context/apiContext';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import "./CustomCalendar.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CustomCalendar = () => {
    const { fetchDataFixtures } = useContext(ApiContext);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handlePrevDay = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() - 1);
        setSelectedDate(newDate);
        fetchDataFixtures(selectedDate);
    };

    const handleNextDay = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() + 1);
        setSelectedDate(newDate);
        fetchDataFixtures(selectedDate);
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