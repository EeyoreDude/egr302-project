import { Navigation, Footer } from "./pageExports";
import React from "react";

function ActivityStream() {
	return (
		<div className="grades">
			<Navigation />
			<div class="container">
				<div class="row align-items-center my-5">
					<div class="col-lg-5">
						<h1 class="font-weight-light">Activity Stream</h1>
						<p>Text paragraph</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default ActivityStream;
