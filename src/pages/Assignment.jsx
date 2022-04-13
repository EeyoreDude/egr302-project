import {toast} from "react-toastify"
import { useParams, useNavigate } from "react-router-dom"
import QueryAssignmentID from "./components/QueryAssignmentID";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config"


function Assignment(){

    const navigate = useNavigate()
    const params = useParams()

    //TODO: Get assignment id from params and query database for it's data
    // useEffect( () => {
    //     if(assignment === undefined){
    //         toast.error("Could not find the assignment")
    //         navigate('/activity-stream')
    //     }
    // }, [assignment])

    return (
        <>
            <div className="pageLayout">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-10">
                            <h1 className="font-weight-light">Title</h1>
                            <p>...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Assignment;