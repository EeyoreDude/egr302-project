import React from "react";
import { NavLink } from "react-router-dom";

export default function Default() {
  return (
    <div className="default">
      <div class="container">
        <div class="row align-items-center my-5">
				<div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://bgcdc.org/wordpress/wp-content/uploads/2020/08/900x400.png"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Placeholder base page</h1>
            <NavLink className="nav-link" to="/uauth/login">
							Login
							<span className="sr-only">(current)</span>
						</NavLink>
						<NavLink className="nav-link" to="/uauth/forgotPassword">
							ForgotPassword
							<span className="sr-only">(current)</span>
						</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}