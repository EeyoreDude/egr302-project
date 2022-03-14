import React from "react";
import { Navigation, Footer } from "./pageExports";

function Calendar() {
	return (
		<div className="calendar">
			<Navigation />
			<div class="container">
				<div class="row align-items-center my-5">
					<div class="col-lg-5">
						<h1 class="font-weight-light">Calendar</h1>
						<p>Text paragraph</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Calendar;
