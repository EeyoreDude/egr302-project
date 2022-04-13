import {getAuth} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

import Stream from './components/Stream'

function ActivityStream({events}){

    const auth = getAuth()
    const navigate = useNavigate()

	useEffect(() => {
        if(auth.currentUser === null){
            navigate('/profile')
            toast.error("Please sign in to use the site's features")
        }
	}, [auth.currentUser])

    return (
        <>
            <div className="pageLayout">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-10">
                            <h1 className="font-weight-light">Stream</h1>
                            <Stream eventList = {events}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityStream;
