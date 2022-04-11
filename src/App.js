import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
	ActivityStream,
	CalendarPage,
	Grades,
	Home,
	Navbar,

	Assignment,
	GradedAssignment,
	CourseGrades,

	ForgotPassword,
	SignIn,
	SignUp,
	Profile,
} from "./pages/pageExports.js";
import PrivateRoute from "./pages/components/PrivateRoute";
import DemoEvents from './pages/components/DemoEvents';
import FirebaseEvents from './pages/components/FirebaseEvents';
import { useState } from "react";




function App() {

	// check the hardcoded values in the console
	console.log("Local:")
	console.log(DemoEvents)

// assign the return from FirebaseEvents (the array)
// to a variable that can be passed into CalendarPage
const getEvents = FirebaseEvents()
	// check the values pulled from Firebase in the console
	console.log("Firebase:")
	console.log(getEvents)
	
// Send events to the calendar
const [calendarEvents, setEvents] = useState(DemoEvents)  // <--- change this to 'getEvents' to theoretically switch to the firebase
const addEvent = (newEvent) => {
	setEvents([newEvent, ...calendarEvents])
}

	return (
		<>
			<Router>
				<Navbar />
				<div className="centralContainer">
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/firebase-events-test" element={<FirebaseEvents />} /> */}
					<Route path="/calendar" element={<CalendarPage events = {calendarEvents} handleAdd = {addEvent} />} />
					<Route path="/grades" element={<Grades />} />
					<Route path="/activity-stream" element={<ActivityStream events = {calendarEvents} />} />
					
					<Route path="/assignment" element={<Assignment />} />
					<Route path="/graded-assignment" element={<GradedAssignment />} />
					<Route path="/course-grades" element={<CourseGrades />} />

					<Route path="/profile" element={<PrivateRoute />}>
						<Route path="/profile" element={<Profile />} />
					</Route>
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
				</Routes>
				</div>
			</Router>

			<ToastContainer
				position="bottom-center"
				autoClose={1500}
				theme="dark"
				hideProgressBar={true}
			/>
		</>
	);
}

export default App;
