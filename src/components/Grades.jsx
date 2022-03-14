import { Navigation, Footer } from "./pageExports";
import React from "react";

function Grades() {
  return (
    <div className="grades">
      <Navigation />
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Grades</h1>
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

export default Grades;