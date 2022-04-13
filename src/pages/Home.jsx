import React from "react";
import {getAuth} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

export default function Home() {

	const [user,setUser] = useState({})
	
	const auth = getAuth()
    const navigate = useNavigate()

	useEffect(() => {
        if(auth.currentUser === null){
            navigate('/profile')
            toast.error("Please sign in to use the site's features")
        } else {
    		setUser(auth.currentUser)
        }
	}, [auth.currentUser])

	return (
        <>
            <div className="pageLayout">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-10">
                            <h1 className="font-weight-light">Home</h1>
                            <p>Welcome, {user ? user.displayName : 'please sign in or register to use most features'}!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
	);
}