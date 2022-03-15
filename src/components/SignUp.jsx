import React from "react";
import SignUpForm from "./shared/SignUpForm";
import { NavLink } from "react-router-dom";

export default function SignUp() {
	return (
		<div className="login">
			<div class="container">
				<h1 class="font-weight-light">Sign Up</h1>
				<br/>
				{/* <SignUpForm /> */}
				<h6 class="font-weight-light">
					<br/>
					<NavLink to="/login">Back to Login</NavLink>
				</h6>
			</div>
		</div>
	);
}
