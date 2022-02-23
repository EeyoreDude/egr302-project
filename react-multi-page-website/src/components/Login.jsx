import React from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Login</h1>
            <NavLink className="nav-link" to="/home">
							Login
							<span className="sr-only">(current)</span>
						</NavLink>
						<NavLink className="nav-link" to="/signUp">
							Sign Up
							<span className="sr-only">(current)</span>
						</NavLink>
						<NavLink className="nav-link" to="/forgotPassword">
							Forgot Password?
							<span className="sr-only">(current)</span>
						</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}