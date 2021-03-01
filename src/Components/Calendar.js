import React, {useState, useReducer, createContext, useCallback} from "react";

import Header from './CalendarHeader';
import DayOfWeek from './DayOfWeek';
import CalendarBody from './CalendarBody';
import DailyEvent from "./DailyEvent";
import {eventScheduler} from '../dux/eventScheduler';
import {getEventsFromLocalStorage} from './Local';
// import axios from 'axios'

export const EventScheduleContext = createContext();

const initialEventSchedule = getEventsFromLocalStorage() || {};

const Calendar = () => {
    const [todaysDate, setTodaysDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [eventsView, setEventsView] = useState(false);
    
    const [eventSchedule, eventScheduleDispatch] = useReducer(eventScheduler, initialEventSchedule);

    const onDateClick = useCallback((day) => {
        setSelectedDate(day);
        setEventsView(true);
    }, []);

    // const getEvents = () => {
    //     axios.get('/api/events', {todaysDate, eventsView})
    //     .then(() => {
    //         setTodaysDate(new Date())
    //         setEventsView(true)

    //     })
    // }

    return (
        <EventScheduleContext.Provider value={{eventSchedule: eventSchedule, eventScheduleDispatch: eventScheduleDispatch}}>
            <div className="calendar">
                <Header currentMonth={selectedDate} setCurrentMonth={setSelectedDate}/>
                <DayOfWeek />
                <CalendarBody  currentMonth={selectedDate} todaysDate={todaysDate} onDateClick={onDateClick}/>
                {eventsView && 
                    <DailyEvent selectedDate={selectedDate} setEventsView={setEventsView} />
                }
                
            </div>
        </EventScheduleContext.Provider>
    );
};

export default Calendar;