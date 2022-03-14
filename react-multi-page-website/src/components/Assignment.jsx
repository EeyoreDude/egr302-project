import React from "react";
import { Navigation, Footer } from "./pageExports";

export default function Assignment() {
  
  return (
    <div className="home">
      <Navigation />
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
            <h1 class="font-weight-light">Assignment</h1>
            <p>
              Text paragraph
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}