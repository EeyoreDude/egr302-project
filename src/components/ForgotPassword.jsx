import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
	return (
		<>
			<div className="container">
				<h1 className="">
					<p className="font-weight-bold">Forgot Password</p>
				</h1>
				<p>
					This doesn't work yet...
				</p>
				<Link to="/signIn" className="h6 mt-2 font-weight-light">
					Back to Sign In
				</Link>
			</div>
		</>
	);
}
