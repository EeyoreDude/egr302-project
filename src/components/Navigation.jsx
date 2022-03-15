import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
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
								<NavLink className="nav-link" to="/assignment">
									Assignment
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/signIn">
									Logout
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
