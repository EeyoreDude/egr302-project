import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import { Navigation, Footer } from "./pageExports";

function Assignment() {
	return (
		<div className="home">
			<Navigation />
			<div class="container">
				<div class="row align-items-center my-5">
					<div class="col-lg-5">
						<h1 class="font-weight-light">Assignment</h1>
						<p>Text paragraph</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Assignment;
