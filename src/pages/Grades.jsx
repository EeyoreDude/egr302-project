import {Link } from "react-router-dom"
import {getAuth} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

import CourseGrades from "./components/CourseGrades"

function Grades(){

    const auth = getAuth()
    
    const navigate = useNavigate()

	useEffect(() => {
        if(auth.currentUser === null){
            navigate('/profile')
            toast.error("Please sign in.")
        }
	}, [auth.currentUser])

    return (
        <> 
            <div className="pageLayout">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-10">
                            <h1 className="font-weight-light">Grades</h1>
                            <p>
                                {/* <CourseGrades /> */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grades;