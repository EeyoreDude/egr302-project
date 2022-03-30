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
                <input className="input-text-100" type="text"/>
                <br></br><br></br>
                Event Date:
                <br></br>
                <input className="input-text-100" type= "date"/>
                <br></br><br></br>
                <input className="m-0 btn-1 btnDark" type= "submit" value = "Add Event"/>
            </form>
        )

    return (
        <>
            <div className="pageLayout">
                <div className="calendarPageContainer">
                    <div className="row justify-content-evenly my-5">
                        <div className="w-80 h-calendar">
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
                        <div className="">
                            <div className='eventFormCard'>
                                <button className="m-0 btn-1 btnDark" onClick={showAddEventForm}>Create New Event</button>
                                {addingDate && addDateForm}
                            </div> 
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default CalendarPage;