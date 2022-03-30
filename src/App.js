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

	ForgotPassword,
	SignIn,
	SignUp,
	Profile,
} from "./pages/pageExports.js";
import PrivateRoute from "./pages/components/PrivateRoute";
import DemoEvents from './pages/components/DemoEvents';
import { useState } from "react";




function App() {

const [calendarEvents, setEvents] = useState(DemoEvents)
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
					<Route path="/calendar" element={<CalendarPage events = {calendarEvents} handleAdd = {addEvent} />} />
					<Route path="/grades" element={<Grades />} />
					<Route path="/activity-stream" element={<ActivityStream />} />
					
					<Route path="/assignment" element={<Assignment />} />
					<Route path="/graded-assignment" element={<GradedAssignment />} />

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
