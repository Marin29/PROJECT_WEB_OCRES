// App.js 

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendrier = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <h1 >Calendrier des tournois</h1>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <p >
                <span>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
        </div>
    );
}

export default Calendrier;