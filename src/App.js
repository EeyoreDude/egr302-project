import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
	ActivityStream,
	CalendarPage,
	AddEvent,
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
import DemoEvents from "./pages/components/DemoEvents";
import FirebaseEvents from "./pages/components/FirebaseEvents";
import { useEffect, useRef, useState } from "react";
import { db } from "./firebase.config";

function App() {
	// Send events to the calendar
	const isMounted = useRef(true)

	// useEffect(() => {
    //     if (isMounted) {
            
    //     }
    //     return () => {
    //         isMounted.current = false
    //     }
    // }, [isMounted])

	const [events, setEvents] = useState(FirebaseEvents)

	const addEvent = (newEvent) => {
		// setEvents([newEvent, ...events]);
	};

	return (
		<>
			<Router>
				<Navbar />
				<div className="centralContainer">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/calendar"
							element={
								<CalendarPage events={events} handleAdd={addEvent} />
							}
						/>
						<Route path="/calendar/add-event" element={<AddEvent />} />
						<Route path="/grades" element={<Grades />} />
						<Route
							path="/activity-stream"
							element={<ActivityStream events={events} />}
						/>

						<Route
							path="/course/:courseCode/:assignmentID"
							element={<Assignment />}
						/>

						<Route path="/grades/:semester/:courseCode" element={<CourseGrades />} />
						
						<Route
							path="/grades/:semester/:courseCode/:assignmentID"
							element={<GradedAssignment />}
						/>

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
