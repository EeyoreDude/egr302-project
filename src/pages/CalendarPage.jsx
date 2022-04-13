import React from "react";
import { Link } from "react-router-dom"
import { Calendar, momentLocalizer } from "react-big-calendar";
import {getAuth} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import moment from "moment";
import { ReactComponent as PlusIcon } from '../assets/svg/plusIcon.svg'
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddEvent from "./AddEvent";
import Button from "./shared/Button";


/**
 * takes in a list of "events" to display events on calendar
 * the events are currently coming from a file being imported into App.js and passed into this function as a param
 * if you want to see or modify those "events", for now you can find them in src/components/DemoEvents.jsx
 */

function CalendarPage({ events, handleAdd }) {

	const auth = getAuth()
    const navigate = useNavigate()

	useEffect(() => {
        if(auth.currentUser === null){
            navigate('/profile')
            toast.error("Please sign in.")
        }
	}, [auth.currentUser])

	//calendar stuff
	const localizer = momentLocalizer(moment);


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
									defaultView="month"
									views={["month", "week"]}
									events={events}
								/>
							</div>
						</div>
						<Link to="add-event">
							<button type="submit" disabled={false} className="btn-1 btnDark btnSquare p-3">
								<PlusIcon fill="#aaaaaa" width='24px' height='24px'/>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default CalendarPage;
