import React from "react";
import {getAuth} from "firebase/auth"
import {useEffect, useState} from "react"
import { Navigation, Footer } from "./pageExports";
import { getAllByTestId } from "@testing-library/react";

export default function Home() {

	const [user,setUser] = useState({})
	
	const auth = getAuth()

	useEffect(() => {
		setUser(auth.currentUser)
	}, [])

	return (
		<div className="home">
			<Navigation />
			<div class="container">
				<div class="row align-items-center my-5">
					<div class="col-lg-5">
						<h1 class="font-weight-light">Home</h1>
						<p>Welcome, {user ? user.displayName : '[NONE]'}!</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
