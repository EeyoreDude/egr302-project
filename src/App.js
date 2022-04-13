import { toast, ToastContainer } from "react-toastify";
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
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";


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

	const [events, setEvents] = useState([])

	useEffect( () => {
		const FirebaseEvents = []

		const fetchEvents = async () => {
			try {
				// connect to the events collection of the database
				const eventsRef = collection(db, 'events')
				// make the query to the firebase
				const q = query(eventsRef)

				// the firebase returns a 'snapshot' in response to the query
				// save this
				const unsubscribe = onSnapshot(q, (querySnapshot) => {
					const temp = []
					querySnapshot.forEach((doc) => {
						temp.push({
							title: doc.data().title,
							description: doc.data().description,
							course: doc.data().course,
							start: doc.data().start.toDate(),
							end: doc.data().end.toDate(),
							complete: doc.data().complete,
							graded: doc.data().graded,
							grade: doc.data().grade,
							id: doc.id
						})
					})
					setEvents(temp)
				})

				// Save the data from firebase to an array with the proper fields
				// essentially converting from a snapshot to an array
				
			}
			catch (error) {
				toast.error('Could not fetch events')
			}
		}

		fetchEvents()
	}, [])

	const addEvent = (newEvent) => {
		// setEvents([newEvent, ...events]);
	};

	return (
		<>
			<Router>
				<Navbar />
				<div className="centralContainer">
					<Routes>
            <Route path="/" element={<Home events = {calendarEvents}/>} />
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
