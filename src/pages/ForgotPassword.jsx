import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
	return (
		<>
			<div className="sign-in">
				<div className="container">
					<div className="row align-items-center my-5">
						<div className="col-lg-5">
							<h1 className="font-weight-light">Forgot Password</h1>
							<p>
								This doesn't work yet...
							</p>
							<Link to="/sign-in" className="h6 mt-2 font-weight-light">
								Back to Sign In
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
