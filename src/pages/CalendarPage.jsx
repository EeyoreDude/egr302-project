import React from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'


const localizer = momentLocalizer(moment)

function CalendarPage(){
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
                            />
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </>
    )
}

export default CalendarPage;