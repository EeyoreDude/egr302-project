import React from "react"
import {getAuth} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import CourseDisplay from "./components/CourseDisplay";

export default function Home({events}) {

    const upcoming = events.filter((item) => item.start.getDate() >  new Date().getDate() &&
                                                item.start.getMonth() >=  new Date().getMonth() &&
                                                item.start.getFullYear() ===  new Date().getFullYear())

	const [user,setUser] = useState({})
	
	const auth = getAuth()
    const navigate = useNavigate()

	useEffect(() => {
        if(auth.currentUser === null){
            navigate('/profile')
            toast.error("Please sign in.")
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
                            <h1 className="font-weight-light">{user ? user.displayName : 'please sign in or register to use most features'}'s Courses</h1>
                            <CourseDisplay/>
                            <div>
                                <h1 className="font-weight-light">Upcoming</h1>
                                <br></br>
                                {upcoming.map((item)=>(
                                <p className="streamText">- {item.title}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
	);
}