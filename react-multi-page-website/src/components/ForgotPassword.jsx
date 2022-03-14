import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="login">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Forgot Password</h1>
              <br/>
              <h3>Admin Login</h3>
              <p>
                Username: Admin <br/>
                Password: 123
              </p>
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