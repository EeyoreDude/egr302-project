import * as React from "react";
import Alert from "react-bootstrap/Alert";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, NavLink } from "react-router-dom";
import {
	loggedIn,
	login,
	logout,
	
	Navigation,
  Footer,
  Home,
  Grades,
  Calendar,
  ActivityStream,
  Assignments,
  Assignment,
	Uauth,
	Login,
	ForgotPassword,
	SignUp,
	Default,
} from "./components/pageExports";

function App() {
	if(loggedIn){
		return (
			  <Router>
				
					<div class="container">
						<div class="row align-items-center my-5">
							<h3 class="font-weight-normal"> loggedIn boolean: {loggedIn} </h3>
						</div>
					</div>
					
					<Navigation />
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/grades" element={<Grades />} />
						<Route path="/calendar" element={<Calendar />} />
						<Route path="/activityStream" element={<ActivityStream />}>
							<Route path="" element={<Assignments />} />
							<Route path=":assignmentSlug" element={<Assignment />} />
						</Route>
					</Routes>
					<Footer />
				</Router>
		);
	}
	else {
		return(
			<Router>
			
				<div class="container">
					<div class="row align-items-center my-5">
						<h3 class="font-weight-normal"> loggedIn boolean: {loggedIn} </h3>
					</div>
				</div>
				
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/forgotPassword" element={<ForgotPassword />} />
					<Route path="/signUp" element={<SignUp />} />
				</Routes>
			</Router>
		);
	}
}


export default App;