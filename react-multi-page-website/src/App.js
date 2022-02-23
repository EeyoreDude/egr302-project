import * as React from "react";
import Alert from "react-bootstrap/Alert";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, NavLink } from "react-router-dom";
import {
	Auth,
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
} from "./components/pageExports.js";

var loggedIn = false;

function login(){
	loggedIn = true;
}

function logout(){
	loggedIn = false;
}

function App() {
	
	if(loggedIn){
		return (
				 <Router>
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

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            Whiteboard
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/grades">
                  Grades
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/calendar">
                  Calendar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/activityStream">
                  Activity Stream
                </NavLink>
              </li>
							<li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <button onClick={logout()}> Logout</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;