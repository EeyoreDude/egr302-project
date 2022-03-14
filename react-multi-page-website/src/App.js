import * as React from "react";
import Alert from "react-bootstrap/Alert";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, NavLink } from "react-router-dom";
import {	
	Navigation,
	Footer,
	Home,
	Grades,
	Calendar,
	ActivityStream,
	Assignment,
	Uauth,
	Login,
	ForgotPassword,
	SignUp,
	Default,
} from "./components/pageExports";

function App() {
		return (
			  <Router>					
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/login" element={<Login />} />
						<Route path="/forgotPassword" element={<ForgotPassword />} />
						<Route path="/signUp" element={<SignUp />} />
						<Route path="/home" element={<Home />} />
						<Route path="/grades" element={<Grades />} />
						<Route path="/calendar" element={<Calendar />} />
						<Route path="/activityStream" element={<ActivityStream />} />
						<Route path="/assignment" element={<Assignment />} />
					</Routes>
				</Router>
		);
}


export default App;