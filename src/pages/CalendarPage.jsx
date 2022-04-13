import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import Button from "./shared/Button";

/**
 * takes in a list of "events" to display events on calendar
 * the events are currently coming from a file being imported into App.js and passed into this function as a param
 * if you want to see or modify those "events", for now you can find them in src/components/DemoEvents.jsx
 */

function CalendarPage({ events, handleAdd }) {
	//calendar stuff
	const localizer = momentLocalizer(moment);

	//new event data state holders
	const [title, setTitle] = useState("");
	const [date, updateDate] = useState();

	//new event data handlers
	const handleTitle = (e) => {
		setTitle(e.target.value);
	};

	const handleDate = (e) => {
		const temp = new Date(e.target.value);
		updateDate(new Date(temp.setDate(temp.getDate() + 1)));

		//const newDateString = e.target.value

		//const year = +newDateString.substring(0,4)
		//const day = +newDateString.substring(5,7)
		//const month = +newDateString.substring(8)

		//updateDate(new Date(year, month, day))
	};

	const addEventHandler = (e) => {
		e.preventDefault();
		const newEvent = {
			title: title,
			start: date,
			end: date,
		};
		handleAdd(newEvent);

		setTitle("");
		//updateDate()
	};

	//event form stuff
	const [addingDate, setAddingDate] = useState(false);

	const showAddEventForm = () => {
		setAddingDate((prev) => {
			return !prev;
		});
	};

	const addDateForm = (
		<form onSubmit={addEventHandler}>
			<br></br>
			Event Name:
			<br></br>
			<input
				onChange={handleTitle}
				value={title}
				placeholder="Add Event Name"
				type="text"
			/>
			<br></br>
			<br></br>
			Event Date:
			<br></br>
			<input type="date" onChange={handleDate} />
			<br></br>
			<br></br>
			<Button isDisabled={title === "" || date === null} type="submit">
				{" "}
				Add Event{" "}
			</Button>
		</form>
	);

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
						<div className="">
							<div className="eventFormCard">
								<button onClick={showAddEventForm}>Create New Event</button>
								{addingDate && addDateForm}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CalendarPage;
