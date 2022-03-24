import React from "react";
import {getAuth} from "firebase/auth"
import {useEffect, useState} from "react"

export default function Home() {

	const [user,setUser] = useState({})
	
	const auth = getAuth()

	useEffect(() => {
		setUser(auth.currentUser)
	}, [])

	return (
        <>
            <div className="home">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-5">
                            <h1 className="font-weight-light">Home</h1>
                            <p>Welcome, {user ? user.displayName : 'please sign in or register to use most features'}!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
	);
}