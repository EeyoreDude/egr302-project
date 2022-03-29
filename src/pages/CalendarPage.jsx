import React from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'









function CalendarPage({events}){

    const localizer = momentLocalizer(moment)
    const [addingDate, setAddingDate] = useState(false)

    //for when we can modify events maybe
    //const [events, setEvents] = useState()

    const showAddEventForm = () => {
        setAddingDate((prev)=> {
            return !prev
        })
    }

    const addDateForm = (
        <form>
            <br></br>
            Event Name: 
            <br></br>
            <input type="text"/>
            <br></br><br></br>
            Event Date:
            <br></br>
            <input type= "date"/>
            <br></br><br></br>
            <input type= "submit" value = "Add Event"/>
        </form>)

    return (
        <>
            <div className="pageLayout">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-10">
                            <h1 className="font-weight-light">Calendar</h1>
                            <div className="calendarContainer">
                            <Calendar
                            localizer={localizer}
                            defaultView = "month"
                            views = {['month','week']}
                            events = {events}
                            />
                            </div>
                        </div>     
                    </div>
                </div>
                <div className='eventFormCard'>
                    
                        <button onClick={showAddEventForm}>Create New Event</button>
                    
                    {addingDate && addDateForm}
                </div>
                
            </div>
        </>
    )
}

export default CalendarPage;