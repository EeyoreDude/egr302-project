import React from "react";
import { NavLink } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="login">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Forgot Password</h1>
						This doesnt work yet!
            <NavLink className="nav-link" to="/login">
							Back to login
							<span className="sr-only">(current)</span>
						</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}