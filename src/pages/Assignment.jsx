import {toast} from "react-toastify"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { doc, getDoc, query } from "firebase/firestore";
import { db } from "../firebase.config"




function Assignment(){

    const [event, setEvent] = useState({})
    const [isLoading, setLoading] = useState(true)
    const navigate = useNavigate()
    const params = useParams()

    const fetchEvent = async () => {
        // connect to the events collection of the database
        const eventsRef = doc(db, 'events', params.assignmentID)
    
        // make the query to the firebase
        const q = query(eventsRef)
    
        // the firebase returns a 'snapshot' in response to the query
        // save this
        const querySnap = await getDoc(q)
    
        if(querySnap.exists()){
        // Save the data from firebase to an array with the proper fields
        // essentially converting from a snapshot to an array
            setEvent({
                title: querySnap.data().title,
                description: querySnap.data().description,
                course: querySnap.data().course,
                start: querySnap.data().start.toDate(),
                end: querySnap.data().end.toDate(),
                complete: querySnap.data().complete,
                graded: querySnap.data().graded,
                grade: querySnap.data().grade,
                id: querySnap.id
            })

            setLoading(false)
        } else {
            toast.error("Error finding assignment")
            navigate('/activity-stream')
        }
    }

    fetchEvent()

    
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
                            <h1 className="font-weight-light">{event.title}</h1>
                            <p>{event.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Assignment;