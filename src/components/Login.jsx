import React from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm.js";

export default function Login() {
  return (
    <div className="login">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Login</h1>
            <LoginForm />
						<NavLink className="nav-link" to="/signUp">
							Sign Up
						</NavLink>
						<NavLink className="nav-link" to="/forgotPassword">
							Forgot Password?
						</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}