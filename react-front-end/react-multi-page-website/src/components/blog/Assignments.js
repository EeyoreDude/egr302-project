import React from "react";
import { Link } from "react-router-dom";

function Assignments() {
  return (
    <div className="home">
      <div class="container">
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://bgcdc.org/wordpress/wp-content/uploads/2020/08/900x400.png"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">This is a post title</h1>
              <p>
                Text Paragraph
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Assignments;